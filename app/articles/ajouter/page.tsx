'use client'

import { useState } from "react";

export default function page() {

    const [titre, setTitre] = useState<string>("");
    const [categorie, setCategorie] = useState<string>("");
    const [texte, setTexte] = useState<string>("");

    return (
        <main className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col gap-10 w-1/2">
                <h1 className="text-3xl font-bold text-center">Ajout d'un article</h1>
                <input type="text" name="titre" placeholder="Titre de l'article" value={titre} onChange={(e: any) => setTitre(e.target.value)} className="w-10/12 h-12 rounded-2xl border-2 border-gray-400 px-4" />
                <select name="categorie" onChange={(e: any) => setCategorie(e.target.value)} className="w-10/12 h-12 rounded-2xl border-2 border-gray-400 px-4">
                    <option>== Choisir une catégorie ==</option>
                    <option value="Nature">Nature</option>
                    <option value="Espace">Espace</option>
                    <option value="Technologie">Technologie</option>
                    <option value="Voyage">Voyage</option>
                    <option value="Musique">Musique</option>
                    <option value="Sport">Sport</option>
                    <option value="Nourriture">Nourriture</option>
                </select>
                <input type="text" name="texte" placeholder="Plus qu'à écrire !" value={texte} onChange={(e: any) => setTexte(e.target.value)} className="w-10/12 h-12 rounded-2xl border-2 border-gray-400 px-4" />
                <button>Envoyer</button>
            </div>
        </main>
    );
}