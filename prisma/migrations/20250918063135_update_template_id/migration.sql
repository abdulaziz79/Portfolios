/*
  Warnings:

  - The primary key for the `Template` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "public"."Portfolio" DROP CONSTRAINT "Portfolio_templateId_fkey";

-- AlterTable
ALTER TABLE "public"."Portfolio" ALTER COLUMN "templateId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "public"."Template" DROP CONSTRAINT "Template_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Template_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Template_id_seq";

-- AlterTable
ALTER TABLE "public"."User" ALTER COLUMN "templateIds" SET DATA TYPE TEXT[];

-- AddForeignKey
ALTER TABLE "public"."Portfolio" ADD CONSTRAINT "Portfolio_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "public"."Template"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
