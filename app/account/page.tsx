import DataTopup from "@/components/page/account/DataTopup";
import DataUsage from "@/components/page/account/DataUsage";
import MyAccount from "@/components/page/account/MyAccount";
import React from "react";

const Account = () => {
  return (
    <main>
      <MyAccount />
	  <DataUsage />
	  <DataTopup />
    </main>
  );
};

export default Account;
