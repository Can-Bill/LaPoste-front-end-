import Image from 'next/image';

const cards = [
    {
        title: "Envoyer un colis",
        desc: "Expédiez vos colis rapidement et en toute sécurité.",
        img: "/images/section_one_echange.png",
        lien: "je découvre",
    },
    {
        title: "Suivre un envoi",
        desc: "Suivez votre courrier ou colis en temps réel.",
        img: "/images/section_one_ordinateur.webp",
        lien: "je découvre",
    },
    {
        title: "Ouvrir un compte",
        desc: "Découvrez nos offres bancaires adaptées à vos besoins.",
        img: "/images/section_one_promotion.png",
        lien: "je découvre",
    },
];

export default function Section_one() {
    return (
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
            {cards.map((card, i) => (
                <div key={i} 
                className={`flex rounded-lg shadow p-4 items-center ${i === cards.length - 1 ? 'bg-[#ffc905]' : 'bg-[#f1f1f1]'}`}>
                    {/* Texte à gauche */}
                    <div className="size-58 flex-1">
                        <h3 className="font-bold text-lg mb-2 mt-10">{card.title}</h3>
                        <p className="text-gray-600 text-sm mt-8">{card.desc}</p>
                        <a href="#"
                            className="inline-flex items-center mt-4 text-black-700 underline underline-offset-5 font-medium hover:text-black-900 transition">
                            {card.lien}
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

                    {/* Image à droite */}
                    <div className="ml-4">
                        <Image src={card.img} alt={card.title} width={200} height={500} />
                    </div>
                </div>
            ))}
        </section>
    );
}