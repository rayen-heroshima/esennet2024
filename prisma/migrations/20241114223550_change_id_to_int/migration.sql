-- CreateTable
CREATE TABLE "registration" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL ,
    "Tele" TEXT NOT NULL,
    "faculte" TEXT NOT NULL,
    "niveau"        TEXT NOT NULL,
    "specialite"    TEXT NOT NULL,
    "recherche"      TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "registration_pkey" PRIMARY KEY ("id")
);
