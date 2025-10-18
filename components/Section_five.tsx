"use client";
import { useState } from "react";
import Image from "next/image";

const images = [
    {
        pile: "/images/section_five_pile.jpeg",
        face: "/images/section_five_face.jpeg",
        title: "Monnaie de Paris",
        desc: "Pièce de collection édition limitée.",
        price: "190",
        cents: "00",
    },
    {
        pile: "/images/section_five_pile.jpeg",
        face: "/images/section_five_face.jpeg",
        title: "Monnaie de Paris",
        desc: "Timbre commémoratif 2025.",
        price: "12",
        cents: "50",
    },
    {
        pile: "/images/section_five_pile.jpeg",
        face: "/images/section_five_face.jpeg",
        title: "Monnaie de Paris",
        desc: "Timbre commémoratif 2025.",
        price: "12",
        cents: "50",
    },
    {
        pile: "/images/section_five_pile.jpeg",
        face: "/images/section_five_face.jpeg",
        title: "Monnaie de Paris",
        desc: "Timbre commémoratif 2025.",
        price: "12",
        cents: "50",
    },
    {
        pile: "/images/section_five_pile.jpeg",
        face: "/images/section_five_face.jpeg",
        title: "Monnaie de Paris",
        desc: "Emballage sécurisé pour vos envois.",
        price: "25",
        cents: "00",
    },
    {
        pile: "/images/section_five_pile.jpeg",
        face: "/images/section_five_face.jpeg",
        title: "Monnaie de Paris",
        desc: "Carte postale illustrée.",
        price: "3",
        cents: "20",
    },
    {
        pile: "/images/section_five_pile.jpeg",
        face: "/images/section_five_face.jpeg",
        title: "Monnaie de Paris",
        desc: "Lettre avec suivi en temps réel.",
        price: "5",
        cents: "00",
    },
    {
        pile: "/images/section_five_pile.jpeg",
        face: "/images/section_five_face.jpeg",
        title: "Monnaie de Paris",
        desc: "Coffret de collection exclusif.",
        price: "250",
        cents: "00",
    },
    {
        pile: "/images/section_five_pile.jpeg",
        face: "/images/section_five_face.jpeg",
        title: "Monnaie de Paris",
        desc: "Coffret de collection exclusif.",
        price: "250",
        cents: "00",
    },
    {
        pile: "/images/section_five_pile.jpeg",
        face: "/images/section_five_face.jpeg",
        title: "Monnaie de Paris",
        desc: "Coffret de collection exclusif.",
        price: "250",
        cents: "00",
    },
    // Ajoute d'autres objets si besoin
];

export default function Section_five() {
    const [start, setStart] = useState(0);
    const [hovered, setHovered] = useState<number | null>(null);
    const [direction, setDirection] = useState<"left" | "right" | null>(null);

    // Affiche 5 images à la fois
    const visibleImages = images.slice(start, start + 5);

    const handlePrev = () => {
        if (start > 0) {
            setDirection("right");
            setTimeout(() => {
                setStart(start - 1);
                setDirection(null);
            }, 300); // Durée de l'animation
        }
    };

    const handleNext = () => {
        if (start < images.length - 5) {
            setDirection("left");
            setTimeout(() => {
                setStart(start + 1);
                setDirection(null);
            }, 300);
        }
    };

    // Classe d'animation selon la direction
    const animationClass =
        direction === "left"
            ? "animate-scroll-left"
            : direction === "right"
                ? "animate-scroll-right"
                : "";

    return (
        <section className="my-16">
            <h2 className="text-4xl font-bold text-blue-800 text-left ml-10 mb-10">Collection Monnaie de Paris</h2>
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={handlePrev}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-2xl font-bold"
                    disabled={start === 0}
                >
                    &lt;
                </button>
                {/* Images avec animation */}
                <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2">
                    {images.map((img, idx) => (
                        <div
                            key={idx}
                            className="flex flex-col items-start bg-white rounded-lg p-4 w-48 duration-200 snap-center"
                        >
                            {/* ...contenu de la card... */}
                            <div
                                className="w-28 h-28 relative cursor-pointer snap-center"
                                onMouseEnter={() => setHovered(start + idx)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <Image
                                    src={hovered === start + idx ? img.face : img.pile}
                                    alt={img.title}
                                    fill
                                    className="object-contain rounded"
                                />
                            </div>
                            <div className="mt-3 mb-1 snap-center">
                                <span className="px-3 py-1 rounded-full border-2 border-[#ffc905] text-[#ffc905] text-xs font-bold">
                                    Nouveau
                                </span>
                            </div>
                            <div className="font-semibold text-xs text-blue-800">{img.title}</div>
                            <div className="text-gray-700 font-bold text-sm  mt-1">{img.desc}</div>
                            <div className="flex items-end justify-start mt-2">
                                <span className="text-2xl font-bold text-black">{img.price}</span>
                                <span className="text-xs font-bold text-black mb-3 ml-1">{"," + img.cents} €</span>
                            </div>
                            <div className="mt-3 w-full flex justify-end">
                                <div className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-800">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="white"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3"
                                        />
                                    </svg>
                                </div>
                            </div>
                            
                        </div>
                    ))}
                </div>
                <button
                    onClick={handleNext}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 text-2xl font-bold"
                    disabled={start >= images.length - 5}
                >
                    &gt;
                </button>
            </div>
        </section>
    );
}