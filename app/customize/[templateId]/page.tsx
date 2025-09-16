import React from "react";
import CustomizePage from "./_components/Whatever";
import { getCurrentUser } from "@/lib/auth";

async function page() {
  const user = await getCurrentUser();
  return (
    <div>
      <CustomizePage user={user} />
    </div>
  );
}

export default page;
