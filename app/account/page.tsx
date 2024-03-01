import Link from "next/link";
import {userType} from "@/Typescript";

async function GetData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/getData`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  const response = await res.json()
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return JSON.stringify(response);
}

export default async function Account({user}:any) {
  const data = await GetData();
  
  return (
    <main>
      <Link href={"/summary"}>{data}</Link>
      <br></br>
      {JSON.stringify(user)}
    </main>
  );
}
