import Image from "next/image";

const items = [
  { img: "/images/section_three_impression_timbre.png", label: "Imprimer un timbre" },
  { img: "/images/section_three_timbre.png", label: "Acheter un timbre" },
  { img: "/images/section_three_colis.png", label: "Envoyer un colis" },
  { img: "/images/section_three_moniteur.png", label: "Envoyer un recommandé en ligne" },
  { img: "/images/section_three_localisation.png", label: "Localiser la Poste" },
  { img: "/images/section_three_douanier.png", label: "Payer vos formalités douanières" }, // Ajout de la 6ème case
];

export default function Section_three() {
  return (
    <section className="w-full my-12">
      {/* Partie grise avec séparateurs */}
      <div className="bg-gray-100 rounded-t-lg px-4 py-8 flex justify-between items-stretch relative overflow-hidden">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center flex-1 relative py-15">
            <Image src={item.img} alt={item.label} width={48} height={48} />
            <span className="mt-2 text-sm font-semibold text-blue-800">{item.label}</span>
            {/* 5 traits pointillés entre les 6 cases */}
            {i < items.length - 1 && (
              <div
                className="absolute right-0 top-0 bottom-0 w-px border-r-2 border-dotted border-gray-400"
                style={{ zIndex: 1 }}
              />
            )}
          </div>
        ))}
      </div>
      {/* CardView blanc en dessous */}
      <div className="bg-white rounded-b-lg shadow p-8 mt-0 relative">
        {/* Bordure jaune en haut */}
        <div className="absolute left-0 top-0 w-full h-3 rounded-t-lg bg-[#ffc905]" style={{ borderTopLeftRadius: '0.5rem', borderTopRightRadius: '0.5rem' }} />

        {/* Titre */}
        <h4 className="text-4xl font-bold text-blue-800 text-left mt-8 mb-10 relative z-10">
          Vous souhaitez effectuer un envoi ?
        </h4>

        {/* Sélecteurs et bouton */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-8 relative z-10">
          {/* Select 1 */}
          <div className="flex flex-col flex-1">
            <label className="mb-2 font-semibold text-gray-700">Type</label>
            <select className="border border-gray-300 rounded-lg px-4 py-5 w-full ">
              <option>Timbre</option>
              <option>Timbre à imprimer</option>
              <option>Colissimo en ligne</option>
              <option>Lettre en ligne</option>
            </select>
          </div>
          {/* Select 2 */}
          <div className="flex flex-col flex-1">
            <label className="mb-2 font-semibold text-gray-700">Affranchissement</label>
            <select className="border border-gray-300 rounded-lg px-4 py-5 w-full ">
              <option>Lettre verte(J+3)</option>
              <option>Lettre Services Plus(J+2)</option>
              <option>Lettre Internationale</option>
            </select>
          </div>
          {/* Select 3 */}
          <div className="flex flex-col flex-1">
            <label className="mb-2 font-semibold text-gray-700">Conditionnement</label>
            <select className="border border-gray-300 rounded-lg px-4 py-5 w-full">
              <option>Unité</option>
              <option>Carnet de 10 timbres</option>
              <option>Carnet de 12 timbres</option>
            </select>
          </div>
          {/* Bouton */}
          <button className="flex-1 bg-[#ffc905] text-black text-base font-bold rounded-lg px-4 py-5 transition-colors duration-200 hover:bg-[#ff8c05] mt-8 md:mt-6 w-full">
            Envoyer à partir de 1,39€
          </button>
        </div>
      </div>
    </section>
  );
}