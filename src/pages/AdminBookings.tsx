import { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BadgeCheck, CalendarDays, LogOut, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { auth } from "@/lib/firebase";
import {
  cancelBooking,
  completeBooking,
  confirmBooking,
  subscribeToBookings,
  type BookingRecord,
} from "@/lib/bookings";
import { useToast } from "@/hooks/use-toast";
import { isAllowedAdminEmail } from "@/lib/admin";

const statusClasses: Record<string, string> = {
  pending: "bg-amber-100 text-amber-800",
  confirmed: "bg-emerald-100 text-emerald-800",
  completed: "bg-sky-100 text-sky-800",
  cancelled: "bg-rose-100 text-rose-800",
};

const AdminBookings = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (nextUser) => {
      setUser(nextUser);
      setLoadingAuth(false);
    });

    return unsubscribe;
  }, []);

  useEffect(() => {
    if (!user || !isAllowedAdminEmail(user.email)) return;
    return subscribeToBookings(setBookings);
  }, [user]);

  const grouped = useMemo(() => {
    const upcoming = bookings.filter((booking) => booking.status !== "cancelled");
    const cancelled = bookings.filter((booking) => booking.status === "cancelled");
    return { upcoming, cancelled };
  }, [bookings]);
  const canAccessAdmin = isAllowedAdminEmail(user?.email);

  useEffect(() => {
    if (!loadingAuth && user && !canAccessAdmin) {
      signOut(auth);
    }
  }, [canAccessAdmin, loadingAuth, user]);

  const handleAction = async (
    action: "confirm" | "cancel" | "complete",
    booking: BookingRecord,
  ) => {
    try {
      if (action === "confirm") {
        await confirmBooking(booking.id, booking.dateKey, booking.time);
      }

      if (action === "cancel") {
        await cancelBooking(booking.id, booking.dateKey, booking.time);
      }

      if (action === "complete") {
        await completeBooking(booking.id, booking.dateKey, booking.time);
      }

      toast({
        title: "Booking updated",
        description: `${booking.ownerName}'s appointment is now ${action}ed.`,
      });
    } catch (error) {
      toast({
        title: "Update failed",
        description: error instanceof Error ? error.message : "Please try again.",
        variant: "destructive",
      });
    }
  };

  if (loadingAuth) {
    return <div className="min-h-screen bg-background" />;
  }

  if (!user || !canAccessAdmin) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="border-b border-border bg-gradient-hero py-10">
        <div className="container flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground md:text-4xl">Booking Dashboard</h1>
            <p className="mt-2 text-foreground/85">
              Confirm new bookings, cancel invalid ones, and reopen slots instantly.
            </p>
          </div>
          <Button variant="outline" onClick={() => signOut(auth)}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </section>

      <section className="py-10">
        <div className="container space-y-8">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">Pending bookings</p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {bookings.filter((booking) => booking.status === "pending").length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">Confirmed bookings</p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {bookings.filter((booking) => booking.status === "confirmed").length}
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm text-muted-foreground">Openable cancellations</p>
                <p className="mt-2 text-3xl font-bold text-foreground">
                  {bookings.filter((booking) => booking.status === "cancelled").length}
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-bold text-foreground">Active Bookings</h2>
            {grouped.upcoming.length === 0 ? (
              <Card>
                <CardContent className="pt-6 text-sm text-muted-foreground">
                  No active bookings yet.
                </CardContent>
              </Card>
            ) : (
              grouped.upcoming.map((booking) => (
                <motion.div
                  key={booking.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <Card className="border shadow-sm">
                    <CardContent className="pt-6">
                      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center gap-3">
                            <h3 className="text-lg font-semibold text-foreground">
                              {booking.ownerName}
                            </h3>
                            <span
                              className={`rounded-full px-3 py-1 text-xs font-semibold ${statusClasses[booking.status]}`}
                            >
                              {booking.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {booking.packageName} for {booking.petName} ({booking.petBreed})
                          </p>
                          <div className="flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                            <span className="flex items-center gap-1">
                              <CalendarDays className="h-4 w-4 text-primary" />
                              {booking.dateLabel} at {booking.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Phone className="h-4 w-4 text-primary" />
                              {booking.ownerPhone}
                            </span>
                            <span>{booking.branch}</span>
                          </div>
                          {booking.notes && (
                            <p className="text-sm text-muted-foreground">
                              <strong className="text-foreground">Notes:</strong> {booking.notes}
                            </p>
                          )}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {booking.status === "pending" && (
                            <Button onClick={() => handleAction("confirm", booking)}>
                              <BadgeCheck className="mr-2 h-4 w-4" />
                              Confirm
                            </Button>
                          )}
                          {booking.status !== "cancelled" && booking.status !== "completed" && (
                            <Button
                              variant="outline"
                              onClick={() => handleAction("cancel", booking)}
                            >
                              Cancel / Reopen Slot
                            </Button>
                          )}
                          {booking.status === "confirmed" && (
                            <Button
                              variant="outline"
                              onClick={() => handleAction("complete", booking)}
                            >
                              Mark Completed
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            )}
          </div>

          {grouped.cancelled.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-foreground">Cancelled Bookings</h2>
              {grouped.cancelled.map((booking) => (
                <Card key={booking.id}>
                  <CardContent className="pt-6">
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                      <p className="font-medium text-foreground">{booking.ownerName}</p>
                      <p>
                        {booking.packageName} on {booking.dateLabel} at {booking.time}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default AdminBookings;
