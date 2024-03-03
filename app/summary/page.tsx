import React from "react";
import { useUserContext } from "@/Context/AppStore";
import Account from "../account/page";

const Summary = () => {
  // const { user} = useUserContext();

  return (
    <div>
      Welcome!, You have succesfuuly routed to this page
      <br></br>
      {/* 
        <Account /> */}
    </div>
  );
};

export default Summary;
