"use server";
import { userType } from "@/Typescript";
// import db from "@/app/lib/db.mjs";

// var jwt = require("jsonwebtoken");
// const db = require("../../../db");
import { NextResponse, NextRequest } from "next/server";
// import { cookies } from "next/headers";
import cookies from "js-cookie";
import { SignJWT } from "jose";
import { getJwtSecretKey } from "@/app/lib/auth";

export async function GetLogin(username: string, email: string) {
  //   const formData = await request.formData();
  const user = username;
  const emailed = email;

  const userdata = { user, emailed };


    const token = await new SignJWT({
      userdata,
    })
      .setProtectedHeader({ alg: "HS256" })
      .setIssuedAt()
      .setExpirationTime("3600s")
      .sign(getJwtSecretKey());

    return token;
 
}

export async function GetData() {
  const data: any = {
    name: "lakshay",
    id: 25,
    token: "tokentest",
  };

  // const res = await db.query("SELECT * FROM DockerMyqsl.new_table;")
  // console.log(res)
  return { data };
}
