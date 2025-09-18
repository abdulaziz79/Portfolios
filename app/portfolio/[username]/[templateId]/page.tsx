import React from "react";
import PortfolioPage from "./_components/template";
import { useParams } from "next/navigation";

const page = async ({
  params,
}: {
  params: { username: string; templateId: string };
}) => {
  const { username, templateId } = await params;
  //get params from server side
  console.log("username:", username);
  console.log("templateId:", templateId);
  return (
    <div>
      <PortfolioPage username={username} templateId={templateId} />
    </div>
  );
};

export default page;
