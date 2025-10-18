import Image from "next/image";

const cards = [
  {
    img: "/images/section_eight_1.jpeg",
    date: "12 SEPTEMBRE 2025",
    title: "L'application mobile pour une expérience unique",
    desc: "Courte description pour la première carte.Courte description pour la première carte.Courte description pour la première carte.Courte description pour la première carte.",
    link: "#",
  },
  {
    img: "/images/section_eight_2.jpeg",
    date: "05 OCTOBRE 2025",
    title: "Envoyer votre courrier avec un simple stylo",
    desc: "Courte description pour la deuxième carte.Courte description pour la deuxième carte.Courte description pour la deuxième carte.Courte description pour la deuxième carte.",
    link: "#",
  },
];

export default function Section_eight() {
  return (
    <section className="my-12">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        {/* Colonne 1 : titre / description / bouton (sans bordure ni ombre) */}
        <div className="w-full md:w-1/4 bg-white p-6 flex flex-col mr-25">
          <h3 className="text-[2.1rem] leading-[3.6rem] mt-8 mb-8 font-montserrat font-bold text-blue-800">
            En ce moment a la poste
          </h3>
          <p className="text-gray-600 mb-10">
            Description courte sous le titre. Texte explicatif pour introduire les cartes
            ci-dessous et donner du contexte à l'utilisateur.
          </p>
          <button className="mt-auto w-full bg-blue-800 text-white py-3 rounded-lg font-bold hover:bg-blue-900 transition">
              Découvrez toute l'actualité
          </button>
        </div>

        {/* Colonne 2 et 3 : */}
        {cards.map((c, i) => (
          <article
            key={i}
            className="w-full md:w-[28%] relative bg-white overflow-hidden shadow-md rounded-t-3xl rounded-br-3xl rounded-bl-none md:h-[36rem] hover:shadow-2xl cursor-pointer border-transparent hover:border-gray-100"
          >
            <div className="w-full h-56 md:h-72 relative overflow-hidden rounded-t-3xl">
              <Image src={c.img} alt={c.title} fill className="object-cover" />
            </div>

            <div className="w-full -mt-10 h-90 bg-[#ffc905] p-6 rounded-none">
              <div className="text-xl pt-8 text-gray-600 font-semibold font-montserrat">{c.date}</div>
              <h4 className="mt-2 text-xl font-bold text-blue-900 hover:text-blue-600">{c.title}</h4>
              <p className="mt-2 text-base text-gray-900">{c.desc}</p>
              <a href={c.link} className="inline-flex mt-5 mb-10 ml-5 text-blue-800 text-sm font-bold">
                En savoir plus
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="w-7 h-5 ml-3"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}