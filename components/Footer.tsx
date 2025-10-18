// components/Footer.tsx
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-white">

      <div className="ml-20 mr-20 px-4 py-8">

        {/* Ligne 1 */}
        <div className="py-6">
          <h3 className="text-xl font-bold text-gray-800">Nos Engagements</h3>

          <div className="flex justify-between items-center w-full mt-4 px-4">
            <div className="flex items-center gap-3">
              <div className="w-15 h-15 flex items-center justify-center">
                {/* icone 1 */}
                <img src="/images/footer_icon_1.png" alt="gift" />
              </div>
              <span className="text-sm  text-gray-700">Proche de vous</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-15 h-10  flex items-center justify-center ">
                {/* icone 2 */}
                <img src="/images/footer_icon_2.png" alt="gift" />

              </div>
              <span className="text-sm  text-gray-700">Paiements 100% sécurisé</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-15 h-10 flex items-center justify-center">
                {/* icone 3 */}
                <img width="900" height="900" src="/images/footer_icon_3.png" alt="gift" />

              </div>
              <span className="text-sm text-gray-700">Livraison offerte dès 25 d'achat</span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300" />

        {/* Ligne 2 */}
        <div className="py-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="md:flex-1">
            <h3 className="text-xl font-bold text-gray-800">Applications La Poste</h3>
            <div className="flex gap-4 mt-4">
              <div className="w-35 rounded h-20 overflow-hidden">
                <Image src="/images/googlePlay_logo.jpeg" alt="img1" width={192} height={128} className="object-cover" />
              </div>
              <div className="w-35 h-20  rounded overflow-hidden ">
                <Image src="/images/apple_logo.jpeg" alt="img2" width={192} height={128} className="object-cover" />
              </div>
            </div>
          </div>

          <div className="md:w-48 flex flex-col items-start text-left">
            <h4 className="text-sm font-semibold text-gray-900">Réseaux</h4>
            <div className="flex gap-3 mt-3">
              {/* facebook */}
              <a href="#" aria-label="facebook" className="text-gray-700 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.3v-2.9h2.3V9.1c0-2.3 1.4-3.5 3.4-3.5.99 0 2.03.18 2.03.18v2.24h-1.15c-1.13 0-1.48.7-1.48 1.41v1.7h2.52l-.4 2.9h-2.12v7A10 10 0 0022 12z" /></svg>
              </a>
              {/* linkedin */}
              <a href="#" aria-label="linkedin" className="text-gray-700 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 11-.001 5.001A2.5 2.5 0 014.98 3.5zM3 8.98h4v12H3zM9 8.98h3.8v1.63h.05c.53-1 1.83-2.06 3.78-2.06 4.04 0 4.79 2.66 4.79 6.12v6.31h-4v-5.6c0-1.34-.02-3.06-1.86-3.06-1.86 0-2.15 1.46-2.15 2.96v5.7H9V8.98z" /></svg>
              </a>
              {/* youtube */}
              <a href="#" aria-label="youtube" className="text-gray-700 hover:text-gray-900">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.2s-.2-1.6-.8-2.3c-.8-.9-1.7-.9-2.2-1-3-.2-7.5-.2-7.5-.2s-4.5 0-7.5.2c-.5.1-1.4.1-2.2 1-.6.7-.8 2.3-.8 2.3S1 7.9 1 9.6v2.8c0 1.7.2 3.4.2 3.4s.2 1.6.8 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.3.2 7.3.2s4.5 0 7.5-.2c.5-.1 1.4-.1 2.2-1 .6-.7.8-2.3.8-2.3s.2-1.7.2-3.4V9.6c0-1.7-.2-3.4-.2-3.4zM9.75 14.02V8.98l5.25 2.52-5.25 2.52z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300" />

        {/* Ligne 3 */}
        <div className="py-6">
          <div className="flex justify-between items-center w-full mt-4 px-4">
            <div>
              <h5 className="text-xl font-bold text-gray-800">Nos Services</h5>
              <p className="text-sm text-gray-600 mt-6">Petite description générale sous les titres.</p>

            </div>
            <div>
              <h5 className="text-xl font-bold text-gray-800">Nos Produits</h5>
              <p className="text-sm text-gray-600 mt-6">Petite description générale sous les titres.</p>

            </div>
            <div>
              <h5 className="text-xl font-bold text-gray-800">Nos Tarifs</h5>
              <p className="text-sm text-gray-600 mt-6">Petite description générale sous les titres.</p>

            </div>
            <div>
              <h5 className="text-xl  font-bold text-gray-800">La Poste vous accompagne</h5>
              <p className="text-sm text-gray-600 mt-6">Petite description générale sous les titres.</p>

            </div>
          </div>
        </div>

        <div className="border-t border-gray-300" />

        {/* Ligne 4 */}
        <div className="py-6">
          <div className="flex gap-6">
            <a href="#" className="text-sm  underline underline-offset-5 hover:no-underline text-gray-800">Professionnels</a>
            <a href="#" className="text-sm  underline underline-offset-5 hover:no-underline text-gray-800">Entreprises et Collectivités</a>
            <a href="#" className="text-sm  underline underline-offset-5 hover:no-underline text-gray-800">La Poste Groupe</a>
            <a href="#" className="text-sm  underline underline-offset-5 hover:no-underline text-gray-800">La Poste recrute</a>
          </div>
        </div>

      </div>
      <div className="ml-5 mr-5 px-4 py-8 bg-[#ffc905] text-gray-800">

        <div className="flex flex-row items-center justify-between w-full px-4 py-3">
          {/* Logo */}
          <div className="pl-5">
            <Image
              src="/images/header_logo_name.png"
              alt="Logo La Poste"
              width={230}
              height={50}
              className="object-contain"
              priority
            />
          </div>

          {/* Navigation rapide */}
          <nav className="flex space-x-2 text-xs pr-10">
            <a href="#" className="hover:underline">Plan du site</a>
            <span className="">|</span>
            <a href="#" className="hover:underline">Accessibilité: partiellement conforme</a>
            <span className="">|</span>
            <a href="#" className="hover:underline">Conditions contractuelles</a>
            <span className="">|</span>
            <a href="#" className="hover:underline">Mentions légales</a>
            <span className="">|</span>
            <a href="#" className="hover:underline">Données personnelles et cookies</a>
          </nav>
        </div>


      </div>

    </footer>
  );
}