import Image from "next/image";

const cards = [
    {
        img: "/images/section_six_telephone.jpeg",
        title: "Article 1",
    },
    {
        img: "/images/section_six_ordinateur.jpeg",
        title: "Article 2",
    },
    {
        img: "/images/section_six_micro.jpeg",
        title: "Article 3",
    },
    {
        img: "/images/section_six_calendar.jpeg",
        title: "Article 4",
    },
];

export default function Section_six() {
    return (
        <section className="my-12">
            {/* Titre + lien sur la même ligne */}
            <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-blue-800">Nos articles sélectionnés</h2>
                
                <a href="#"
                            className="inline-flex items-center mt-4 text-blue-800 font-bold transition">
                            Voir tous nos articles
                            <svg 
                            xmlns="http://www.w3.org/2000/svg"
                             fill="none" viewBox="0 0 24 24"
                              stroke-width="1.5"
                               stroke="currentColor"
                                className="size-6 ml-2"
                            >
                                <path stroke-linecap="round"
                                 stroke-linejoin="round"
                                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" 
                                  />
                            </svg>

                        </a>
            </div>

            {/* Grille 2x2 de cardviews */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                {cards.map((c, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-lg shadow p-4 flex items-center gap-4 h-28 hover:shadow-2xl cursor-pointer border border-transparent"
                    >
                        {/* Image à gauche */}
                        <div className="w-28 h-20 relative flex-shrink-0 mr-2.5">
                            <Image src={c.img} alt={c.title} fill className="object-cover rounded" />
                        </div>

                        {/* Texte à droite (espacé de 10px grâce à mr-2.5 sur l'image) */}
                        <div className="flex-1">
                            <p className="text-lg font-semibold text-gray-900">{c.title}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}