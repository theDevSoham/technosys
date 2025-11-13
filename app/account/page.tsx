import DataTopup from "@/components/page/account/DataTopup";
import DataUsage from "@/components/page/account/DataUsage";
import MyAccount from "@/components/page/account/MyAccount";
import { Metadata } from "next";
import account_metadata from "@/seo/account";
import React from "react";

export const metadata: Metadata = account_metadata;

const Account = () => {
  return (
    <main className="account_gradient">
      <MyAccount />
      <DataUsage />
      <DataTopup />
    </main>
  );
};

export default Account;
