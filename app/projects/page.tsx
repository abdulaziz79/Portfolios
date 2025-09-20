import React from "react";
import ProjectsPage from "./_components/Projects";
import { getCurrentUser } from "@/lib/auth";
import { db } from "@/lib/db";

async function page() {
  const user = await getCurrentUser();
  const portfolios = await db.portfolio.findMany({
    where: { userId: user?.id },
    include: {
      contactInfo: true,
      experiences: true,
      projects: true,
      skills: true,
      template: true,
    },
  });

  return (
    <div>
      <ProjectsPage projects={portfolios} />
    </div>
  );
}
export default page;
