import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  updateDoc,
  where,
  type DocumentData,
  type QueryDocumentSnapshot,
} from "firebase/firestore";
import { format } from "date-fns";
import { db } from "@/lib/firebase";

export type BookingStatus = "pending" | "confirmed" | "cancelled" | "completed";

export type BookingRecord = {
  id: string;
  packageName: string;
  packagePrice: string;
  petType: "Dog" | "Cat";
  dateKey: string;
  dateLabel: string;
  time: string;
  petName: string;
  petBreed: string;
  ownerName: string;
  ownerPhone: string;
  notes: string;
  branch: string;
  status: BookingStatus;
  createdAt?: unknown;
};

export type NewBookingInput = Omit<BookingRecord, "id" | "status" | "createdAt">;

type SlotRecord = {
  id: string;
  bookingId: string;
  dateKey: string;
  time: string;
  status: Exclude<BookingStatus, "cancelled">;
};

const bookingsCollection = collection(db, "bookings");
const slotsCollection = collection(db, "slots");

const mapBooking = (snapshot: QueryDocumentSnapshot<DocumentData>): BookingRecord => ({
  id: snapshot.id,
  ...(snapshot.data() as Omit<BookingRecord, "id">),
});

const slotId = (dateKey: string, time: string) =>
  `${dateKey}__${time.replace(/\s+/g, "-").replace(/:/g, "")}`;

export const toDateKey = (date: Date) => format(date, "yyyy-MM-dd");
export const toDateLabel = (date: Date) => format(date, "PPP");

export const subscribeToTakenSlots = (
  dateKey: string,
  onChange: (takenTimes: Set<string>) => void,
) => {
  const slotsQuery = query(
    slotsCollection,
    where("dateKey", "==", dateKey),
  );

  return onSnapshot(slotsQuery, (snapshot) => {
    const nextTakenTimes = new Set(
      snapshot.docs
        .map((entry) => entry.data() as SlotRecord)
        .filter((entry) => entry.status === "pending" || entry.status === "confirmed")
        .map((entry) => entry.time),
    );

    onChange(nextTakenTimes);
  });
};

export const createBooking = async (input: NewBookingInput) => {
  const bookingRef = doc(bookingsCollection);
  const bookingSlotRef = doc(slotsCollection, slotId(input.dateKey, input.time));

  await runTransaction(db, async (transaction) => {
    const slotSnapshot = await transaction.get(bookingSlotRef);

    if (slotSnapshot.exists()) {
      const slotData = slotSnapshot.data() as SlotRecord;
      if (slotData.status === "pending" || slotData.status === "confirmed") {
        throw new Error("This slot has already been taken.");
      }
    }

    transaction.set(bookingRef, {
      ...input,
      status: "pending",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    transaction.set(bookingSlotRef, {
      bookingId: bookingRef.id,
      dateKey: input.dateKey,
      time: input.time,
      status: "pending",
      updatedAt: serverTimestamp(),
    });
  });

  return bookingRef.id;
};

export const fetchBookings = async () => {
  const bookingQuery = query(bookingsCollection, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(bookingQuery);
  return snapshot.docs.map(mapBooking);
};

export const subscribeToBookings = (onChange: (bookings: BookingRecord[]) => void) => {
  const bookingQuery = query(bookingsCollection, orderBy("createdAt", "desc"));
  return onSnapshot(bookingQuery, (snapshot) => {
    onChange(snapshot.docs.map(mapBooking));
  });
};

export const confirmBooking = async (bookingId: string, dateKey: string, time: string) => {
  const bookingRef = doc(bookingsCollection, bookingId);
  const bookingSlotRef = doc(slotsCollection, slotId(dateKey, time));

  await updateDoc(bookingRef, {
    status: "confirmed",
    updatedAt: serverTimestamp(),
  });

  await updateDoc(bookingSlotRef, {
    status: "confirmed",
    updatedAt: serverTimestamp(),
  });
};

export const completeBooking = async (bookingId: string, dateKey: string, time: string) => {
  const bookingRef = doc(bookingsCollection, bookingId);
  const bookingSlotRef = doc(slotsCollection, slotId(dateKey, time));

  await updateDoc(bookingRef, {
    status: "completed",
    updatedAt: serverTimestamp(),
  });

  await updateDoc(bookingSlotRef, {
    status: "completed",
    updatedAt: serverTimestamp(),
  });
};

export const cancelBooking = async (bookingId: string, dateKey: string, time: string) => {
  const bookingRef = doc(bookingsCollection, bookingId);
  const bookingSlotRef = doc(slotsCollection, slotId(dateKey, time));

  await updateDoc(bookingRef, {
    status: "cancelled",
    updatedAt: serverTimestamp(),
  });

  await deleteDoc(bookingSlotRef);
};

