import React from "react";
import { LoginComp } from "../../components";
import { useSession, getSession, signOut } from "next-auth/react";

const index = () => {
  return (
    <div>
      <LoginComp />
    </div>
  );
};

export default index;
