import Image from "next/image";
import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Katja van de Ven",
      role: "creative eigenaar",
      hashtags: "#uitdehandgelopenhobby #trots #theblackstag",
      image: "/images/team-creative-eigenaar.webp",
    },
    {
      name: "Katja van de Ven",
      role: "designer",
      hashtags: "#grafischvormgever #adobe #creativiteit",
      image: "/images/team-designer.webp",
    },
    {
      name: "Katja van de Ven",
      role: "Foto/ videograaf",
      hashtags: "#canon #fotovandedag #50mm",
      image: "/images/team-fotograaf.webp",
    },
    {
      name: "Katja van de Ven",
      role: "media-adviseur",
      hashtags: "#verkoopstrategie #reclamecampagne #actief",
      image: "/images/team-media-adviseur.webp",
    },
    {
      name: "Katja van de Ven",
      role: "Administratie",
      hashtags: "#administratie #administratie #administratie",
      image: "/images/team-administratie.webp",
    },
    {
      name: "Katja van de Ven",
      role: "Projectmanager",
      hashtags: "#planning #signing #projectdoelstellingen",
      image: "/images/team-project-manager.webp",
    },
  ];

  return (
    <section className="container text-white py-20">
      <h3 className="text-4xl text-center font-bold mb-12">Het team</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full p-2">
            <div className="relative w-fit bg-tbsgreen mx-auto group">
              <Image
                src={member.image}
                width={360}
                height={540}
                alt={member.name}
                className="group-hover:opacity-10 transition-opacity duration-500 ease-in-out"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/6">
                <p className="hidden px-12 text-xl group-hover:block">
                  {member.hashtags}
                </p>
              </div>
            </div>
            <div className="text-center py-4">
              <h3 className="text-3xl font-bold text-white">{member.name}</h3>
              <p className="text-xl text-gray-300">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
