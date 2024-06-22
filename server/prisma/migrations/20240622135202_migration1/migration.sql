-- CreateEnum
CREATE TYPE "Pos" AS ENUM ('Developent', 'Ground_Staff', 'HR', 'Administration', 'Testing', 'Sales');

-- CreateEnum
CREATE TYPE "Grade" AS ENUM ('Senior', 'Junior', 'Trainee', 'Guest', 'Probation');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Admin', 'User');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "departmentId" INTEGER NOT NULL DEFAULT 1,
    "role" "Role" NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Department" (
    "id" SERIAL NOT NULL,
    "post" "Pos" NOT NULL DEFAULT 'Developent',
    "level" "Grade" NOT NULL DEFAULT 'Probation',
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
