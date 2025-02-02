import Image from "next/image"
import Link from "next/link";
import { ReactElement } from "react";

export default function navBar(): ReactElement<any, any> {
    return (
        <nav className="w-full flex justify-between align-center">
            <div className="w-3/5 flex items-center gap-8">
                <Image src="/logo.png" alt="Logo de l'application" width="80" height="80" />
                <Link href="/articles/1/all">Accueil</Link>
                <Link href="/">Tendances</Link>
                <Link href="/contact">Contact</Link>
                <form className="w-3/5 flex items-center gap-4">
                    <input type="text" placeholder="Rechercher.." name="recherche" className="w-10/12 h-12 bg-black/0 px-2 rounded-2xl border-2 border-[#212529]" />
                    <button type="submit" className="w-1/12 h-12 bg-[#212529] rounded-2xl flex justify-center items-center">
                        <Image src="/rechercher.png" alt="Bouton de recherche (icon de loupe)" width="30" height="30" />
                    </button>
                </form>
            </div>
            <div className="w-1/5 flex items-center gap-8">
                <button className="bg-[#A2D2FF] flex items-center gap-2 px-4 h-12 rounded-xl">
                    <Image src="/article_icon.png" alt="Icon d'articles" width="40" height="40" />
                    <Link href="/articles/ajouter">Ecrire un article</Link>
                </button>
                <Link href="/profil">
                    <Image src="/photos_profils/pp1.webp" alt="Photo de profil" width="70" height="70" className="rounded-full" />
                </Link>
            </div>
        </nav>
    );
}