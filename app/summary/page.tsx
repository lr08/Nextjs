import React from "react";
import { useUserContext } from "@/Context/AppStore";
import Account from "../account/page";
import Profile from "./Profile";

const Summary = () => {
  // const { user} = useUserContext();

  return (
    <div>
      Welcome!, You have succesfuuly routed to this page
      <br></br>
      <Profile/>
      {/* 
        <Account /> */}
    </div>
  );
};

export default Summary;
