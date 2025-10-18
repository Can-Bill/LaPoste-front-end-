// components/SearchBar.tsx
export default function SearchBar() {
  return (
    <div className="relative w-100 max-w-md">
      <input
        type="text"
        placeholder="N° de suivi,rechercher un produit ou un service"
        className="w-full h-13 px-4 py-2 pr-10 pl-4 text-gray-800 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      {/* Icône de loupe à droite */}
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        🔍
      </div>
    </div>
  );
}