import { jwtVerify } from "jose";
import { SignJWT } from "jose";

export function getJwtSecretKey() {
  const secret = process.env.NEXT_PUBLIC_JWT_SECRET;

  if (!secret) {
    throw new Error("JWT Secret key is not matched");
  }
  return new TextEncoder().encode(secret);
}

export async function verifyJwtToken(token: string | Uint8Array) {

  try{
  const verified = await jwtVerify(token, getJwtSecretKey());

  return verified.payload;
}catch(error){
  return null;
}
}