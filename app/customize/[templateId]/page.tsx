import React from "react";
import CustomizePage from "./_components/Whatever";
import { getCurrentUser } from "@/lib/auth";

const page = async ({ params }: { params: { templateId: string } }) => {
  const { templateId } = await params;
  console.log("templateId:", templateId);
  const user = await getCurrentUser();
  return (
    <div>
      <CustomizePage user={user} templateId={templateId} />
    </div>
  );
};

export default page;
