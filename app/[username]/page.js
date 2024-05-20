import PaymentPage from "@/components/PaymentPage";
import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <PaymentPage username={params.username}/>
    </>
  );
};

export default Username;

export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} | Get Me A Chai`,
  };
}