import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function EventProgram() {
  const data = [
    {
      title: "8:30 : Accueil & Lancement",
      content: (
        <div className="dark:bg-neutral-800 p-5 mb-3">
          
          <div className="grid grid-cols-2 gap-4">
            <video
              controls
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            >
              <source src="/planing/vid.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      ),
    }
    ,
    {
      title: "9:00 : Panel sur les Défis du Business Digital",
      content: (
        <div className="dark:bg-neutral-800 p-5 mb-3">
          <p className="text-white dark:text-neutral-200 text-lg md:text-xl font-medium mb-4 leading-relaxed">
            Découvrez les dernières tendances et innovations dans le domaine du digital. Une présentation sur les défis actuels auxquels sont confrontées les entreprises et des stratégies pour réussir dans ce secteur.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/planing/digi.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "9:45 : Startup’Innov",
      content: (
        <div className="dark:bg-neutral-800 p-5 mb-3">
          <p className="text-white dark:text-neutral-200 text-lg md:text-xl font-medium mb-4 leading-relaxed">
            Inspirez-vous des startups émergentes qui façonnent l&apos;avenir avec des solutions innovantes et des modèles d&apos;affaires disruptifs.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/planing/innov.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "10:30 : Pause Café",
      content: (
        <div className="dark:bg-neutral-800 p-5 mb-3">
          
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/planing/cafe.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "10:45 : Reso’Débats",
      content: (
        <div className="dark:bg-neutral-800 p-5 mb-3">
          <p className="text-white dark:text-neutral-200 text-lg md:text-xl font-medium mb-4 leading-relaxed">
            Participez à des discussions dynamiques sur les enjeux clés de l&apos;industrie et échangez des idées avec des experts et autres participants.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/planing/debat.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "11:45 : Visite des Stands",
      content: (
        <div className="dark:bg-neutral-800 p-5 mb-3">
          <p className="text-white dark:text-neutral-200 text-lg md:text-xl font-medium mb-4 leading-relaxed">
            Explorez les opportunités proposées par nos entreprises partenaires. Découvrez de nouveaux produits et services tout en créant des contacts professionnels.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/planing/NETWORKING2.png"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "13:30 : Atelier Certifié PMI",
      content: (
        <div className="dark:bg-neutral-800 p-5 mb-3">
          <p className="text-white dark:text-neutral-200 text-lg md:text-xl font-medium mb-4 leading-relaxed">
            Développez vos compétences en gestion de projets avec une session certifiée PMI. Acquérez des outils et techniques pour une gestion efficace de vos projets professionnels.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/planing/ATELIERR-PMI-INJAZ.jpg"
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-xl"
            />
          </div>
        </div>
      ),
    },
    {
      title: "15:30 : Clôture",
      content: (
        <div className="dark:bg-neutral-800 p-5 mb-3">
          <p className="text-white dark:text-neutral-200 text-lg md:text-xl font-medium mb-4 leading-relaxed">
          Merci pour votre présence !!
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full bg-gradient-to-br from-[#002b56] via-[#003f7f] to-[#005e9b] py-8 px-4">
      <Timeline data={data} />
    </div>
  );
}
