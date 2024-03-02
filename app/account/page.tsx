import Link from "next/link";
import {userType} from "@/Typescript";
import { GetData } from "../lib/GetData";

async function GetDataNow() {
  //const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getData`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
   const res = await GetData();
   console.log("res", res.data)
  // const response = await res.json()
  const response =  res.data
  // if (!res.ok) {
    if (!res) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return JSON.stringify(response);
}

export default async function Account({user}:any) {
  const data = await GetDataNow();
  
  return (
    <main>
      <Link href={"/summary"}>{data}</Link>
      <br></br>
      {JSON.stringify(user)}
    </main>
  );
}
