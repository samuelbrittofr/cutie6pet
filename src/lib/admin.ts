export const ALLOWED_ADMIN_EMAILS = [
  "dxrkphxnk@gmail.com",
];

export const isAllowedAdminEmail = (email: string | null | undefined) =>
  !!email && ALLOWED_ADMIN_EMAILS.includes(email.toLowerCase());

export const OWNER_LOGIN_PATH = "/owner-login";
