export default function Section_two() {
  return (
    <section className="w-full my-12">
      <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center gap-6">
        {/* Titre */}
        <span className="font-[montserrat] font-bold text-4xl text-blue-800 mb-4 md:mb-0 whitespace-nowrap">
          Suivre un courrier ou un colis :
        </span>
        {/* Barre de recherche */}
        <input
          type="text"
          placeholder="Renseignez votre ou vos numéros de suivi"
          className="w-150 px-6 py-5 rounded-lg border border-black-300 shadow-sm text-gray-800 text-base focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-600"
        />
        {/* Bouton */}
        <button
          className="font-[montserrat] font-bold px-8 py-5 rounded-lg bg-[#ffc905] text-black text-base transition-colors duration-200 hover:bg-[#ff8c05]"
        >
          Suivre votre envoi
        </button>
      </div>
    </section>
  );
}