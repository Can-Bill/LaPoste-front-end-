import Image from "next/image";

const smallCards = [
  {
    img: "/images/section_seven_small_1.jpeg",
    title: "ENVOI DE PEITITS COLIS",
    bigTitle: "Vos petits colis aux meilleurs prix",
    desc: "Le saviez-vous ? Si l’épaisseur de votre envoi (emballage compris) est inférieure à 3 cm, vous pouvez opter pour le tarif le plus avantageux, un affranchissement de courrier, à savoir le tarif lettre. ",
    link: "#",
  },
  {
    img: "/images/section_seven_2.jpeg",
    title: "TIMBRES À IMPRIMER",
    bigTitle: "Etiquettes pour vos timbres",
    desc: " Découvrez nos étiquettes blanches afin d'imprimer et de coller vos timbres plus facilement sur votre courrier. Réglez vos achats en toute sécurité et recevez vos produits par La Poste.",
    link: "#",
  },
  {
    img: "/images/section_seven_small_3.jpeg",
    title: "EMBALLAGES",
    bigTitle: "Achetez vos carton",
    desc: "Sur laposte.fr, vous pouvez également commander des emballages en carton et des boîtes postales. Découvrez un large choix d'emballages pour expédier facilement tous vos colis et optez pour le format le plus adapté à vos envois.",
    link: "#",
  },
  {
    img: "/images/section_seven_small_4.jpeg",
    title: "EXPEDITION DE COLIS",
    bigTitle: "Ne bougez plus de chez vous",
    desc: "Sur laposte.fr, vous pouvez également commander des emballages en carton et des boîtes postales. Découvrez un large choix d'emballages pour expédier facilement tous vos colis et optez pour le format le plus adapté à vos envois.",
    link: "#",
  },
];

export default function Section_seven() {
  return (
    <section className="my-12">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold text-blue-800">Nos articles sélectionnés</h2>

        <button
          type="button"
          className="mt-6 w-65 h-13 bg-blue-800 text-white text-md py-3 font-bold rounded-lg  hover:bg-blue-900 transition"
        >
          Choisir un mode d'envoi
        </button>

      </div>

      {/* Grand cardview */}
      <div className="bg-white rounded-lg shadow-xl overflow-hidden flex flex-col md:flex-row items-stretch md:h-[25rem] hover:shadow-2xl cursor-pointer border-transparent hover:border-transparent">
        {/* Image à gauche */}
        <div className="w-full md:w-1/2 h-64 md:h-full relative">
          <Image
            src="/images/section_seven_large.jpeg"
            alt="Visuel principal"
            fill
            className="object-cover"
          />
        </div>

        {/* Contenu à droite */}
        <div className="w-full md:w-1/2 p-8 flex flex-col ">
          <h3 className="text-xl font-semibold text-gray-900">EXPEDITION DE COLIS</h3>

          {/* grand padding avant le gros titre */}
          <h5 className="text-3xl md:text-4xl font-bold text-gray-800 py-8 hover:text-blue-300">
            Envoyer vos colis à l'international
          </h5>

          <p className="text-gray-600 mb-4">
            Ici la description du grand cardview. Texte explicatif qui complète le titre et le gros
            titre.Vous aurez tous les informations sur la poste et les horaires de courrier.
          </p>

          <a href="#" className="text-gray-600 text-xs font-medium underline">
            En savoir plus
          </a>
        </div>
      </div>

      {/* 4 small cardviews en dessous */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {smallCards.map((c, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow p-4 flex flex-col h-[36rem] overflow-hidden hover:shadow-2xl cursor-pointer border-transparent hover:border-transparent"
          >
            {/* Image en haut */}
            <div className="w-full h-40 relative rounded overflow-hidden">
              <Image src={c.img} alt={c.title} fill className="object-cover" />
            </div>

            {/* Texte en dessous */}
            <h3 className="mt-4 text-lg font-semibold text-blue-800">{c.title}</h3>
            <div className="text-2xl font-bold pt-20 pb-5 text-gray-600 hover:text-blue-300 ">{c.bigTitle}</div>
            <p className="text-gray-600 text-sm">{c.desc}</p>

            <div className="mt-auto pb-4">
              <a href={c.link} className="text-gray-600 text-xs underline font-medium">
                Voir l'article
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}