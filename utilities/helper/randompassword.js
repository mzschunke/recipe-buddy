import crypto from "crypto";
import bcrypt from "bcrypt";

export function generateRandomPassword() {
  const randomString = crypto.randomBytes(20).toString("hex");
  const randomPassword = bcrypt.hashSync(randomString, 10);
  return randomPassword;
}
