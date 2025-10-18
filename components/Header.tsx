import Image from 'next/image';
import SearchBar from '@/components/SearchBar';

export default function Header() {
    return (
        <header className="bg-white text-blue-800 shadow min-h-[80px] flex items-center">
            <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
                {/* Logo + Barre de recherche */}
                <div className="flex flex-row items-center space-x-8 w-full md:w-auto mb-3 md:mb-0">
                    {/* Logo image */}
                    <Image
                        src="/images/header_logo_name.png"
                        alt="Logo La Poste"
                        width={200}
                        height={50}
                        className="mr-4 object-contain"
                        priority
                    />
                    <div className="max-w-md w-full">
                        <SearchBar />
                    </div>
                </div>
                {/* Navigation rapide */}
                <nav className="flex space-x-4 text-sm">
                    <a href="#" className="hover:underline">Particuliers</a>
                    <a href="#" className="hover:underline">Professionnels</a>
                    <a href="#" className="hover:underline">Courrier</a>
                    <a href="#" className="hover:underline">Colis</a>
                    <a href="#" className="hover:underline">Banque</a>
                </nav>
                {/* Espace client / Connexion */}
                <div className="mt-3 md:mt-0">
                    <button className="bg-white text-blue-800 px-4 py-1 rounded font-medium hover:bg-gray-100">
                        Se connecter
                    </button>
                </div>
            </div>
        </header>
    );
}