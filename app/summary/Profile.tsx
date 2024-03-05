'use client'
import React, { useEffect, useState } from 'react'
import cookies from "js-cookie";
import { verifyJwtToken } from '../lib/auth';

const Profile = () => {

    const [tokenFromCookie,setTokenFromCookie]=useState<any>();
    const token = cookies.get('token') as string;
    useEffect(()=>{
    
        async function JWt(){
      const verifiedtoken = await verifyJwtToken(token);
      console.log(verifiedtoken)
    setTokenFromCookie(verifiedtoken);
        }
        JWt();
        
    },[token])
  return (
    <div>Profile

        {JSON.stringify(tokenFromCookie)}
    </div>
  )
}

export default Profile