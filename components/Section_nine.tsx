import React from "react";
import Image from "next/image";

export default function Section_nine() {
  const lines = [
    "Canada: Suspension temporaire de l'envoi de courriers et colis",
    "Comment activer mon contrat de Réexpédition souscrit en ligne ?",
    "Comment envoyer un courrier en ligne ?",
    "Ma lettre recommandée bénéficie-t-elle d'un suivi ?",
    "Comment contater le Service Client La Poste ou déposer une réclamation ?",
  ];

  return (
    <section className="w-full my-12">
      <div className="w-full px-4">
        <div className="bg-[#ffc905] p-8 md:min-h-[600px]">
          <h3 className="text-4xl font-sans  font-bold text-blue-800 mb-6">Aide & Contact</h3>

          <div className="flex flex-col md:flex-row gap-6">
            {/* Inputs area: ~70% - here "input-like" boxes with real text */}
            <div className="basis-[70%] space-y-4">
              {lines.map((text, i) => (
                <div
                  key={i}
                  className="w-full h-16 px-4 rounded-lg bg-white flex items-center justify-between text-gray-800"
                >
                  <span className="truncate text-xl">{text}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-6 h-6 text-gray-700 ml-4"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              ))}
            </div>

            {/* Right column: ~30% */}
            <aside className="basis-[30%] flex flex-col items-start text-left ml-15">
              <div className="self-start -mt-20 -ml-4">
                <Image
                  src="/images/help_icon.png"
                  alt="Besoin d'aide"
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>

              <div className="mt-6 font-semibold text-lg text-gray-900">Besoin d'aide ?</div>
              <div className="mt-2 text-xl font-montserrat text-gray-800 w-50">
                Nous vous accompagnons pour trouver des réponses
              </div>

              <button
                type="button"
                className="mt-6 w-65 h-15 bg-white text-gray-900 text-lg py-3 font-bold rounded-md border border-transparent hover:bg-gray-200 transition"
              >
                Lancer la conversation
              </button>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}