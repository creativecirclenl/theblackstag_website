import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Katja van de Ven",
      role: "creative eigenaar",
      image: "/images/member1.jpg",
    },
    {
      name: "Katja van de Ven",
      role: "designer",
      image: "/images/member1.jpg",
    },
    {
      name: "Katja van de Ven",
      role: "Foto/ videograaf",
      image: "/images/member1.jpg",
    },
    {
      name: "Katja van de Ven",
      role: "media adviseur",
      image: "/images/member1.jpg",
    },
    {
      name: "Katja van de Ven",
      role: "administratie",
      image: "/images/member1.jpg",
    },
    {
      name: "Luna",
      role: "Bedrijfsvogel",
      image: "/images/member2.jpg",
    },
  ];

  return (
    <section className="container text-white py-20">
      <div className="flex flex-wrap">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2"
          >
            <img src={member.image} alt={member.name} className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2">
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p>Role: {member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
