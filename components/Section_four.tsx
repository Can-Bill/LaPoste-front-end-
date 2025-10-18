import Image from "next/image";

const cards = [
  { img: "/images/section_four_piece.jpg", title: "Monnaie de Paris" },
  { img: "/images/section_four_boite_aux_lettres.png", title: "Boîtes aux lettres" },
  { img: "/images/section_four_enveloppe", title: "Enveloppes" },
  { img: "/images/section_four_carton.jpeg", title: "Emballages en carton" },
  { img: "/images/section_four_lot.jpeg", title: "Lots de recommandés" },
  { img: "/images/section_four_caddie.jpeg", title: "Nouvelle boutique laposte.fr" },
];

export default function Section_four() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-blue-800 mb-8 text-center">
        Nos services rapides
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-lg flex flex-col items-center p-4 transition-shadow duration-200 hover:shadow-2xl hover:scale-105 cursor-pointer  border-transparent hover:border-gray-300 w-50 h-40"
          >
            <Image
              src={card.img}
              alt={card.title}
              width={80}
              height={80}
              className="mb-2 object-contain"
            />
            <span className="font-semibold text-blue-800 text-sm text-center">{card.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}