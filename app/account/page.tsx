import Link from "next/link";
import {userType} from "@/Typescript";
import { GetData } from "../lib/GetData";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function GetDataNow() {

    //const users = await prisma.user.findMany();
    const users = await prisma.user.findUnique({
      where: {
        id: 1, // Replace 1 with the id of the user you want to retrieve
      },
      select:{
        name:true,
        token:true
      }
    });
  //const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/getData`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
  //  const res = users;
   
  // const response = await res.json()
  // const response =  res
  // if (!res.ok) {
  
  return JSON.stringify(users);
}

export default async function Account() {
  const data = await GetDataNow();
  
  return (
    <main>
      <Link href={"/summary"} >{data}</Link>
      <br></br>
      {/* {JSON.stringify(user)} */}
    </main>
  );
}
