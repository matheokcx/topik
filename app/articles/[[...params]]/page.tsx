import Article from "@/components/article";
import Categorie from "@/components/categorie";
import Image from "next/image";

export type article = {
    id: number,
    titre: string,
    texte: string,
    id_categorie: number,
    id_auteur: number,
    visuel: string,
};

export type categorie = {
    id: number,
    nom: string,
};

export type auteur = {
    id: number,
    id_utilisateur: string,
    nom: string,
    age: number,
    photo_profil: string,
};

export default async function page({ params }: { params: Promise<{ num_page: number, categorie: string }> }) {
    return (
        <main className="w-full text-[#212529] flex justify-center gap-16 pt-12">
            <section className="w-2/5 overflow-y-auto">
            </section>
            <aside className="w-1/5 rounded-xl flex flex-col gap-8">
                <div className="w-full bg-white p-8 rounded-xl shadow-md text-center">
                    <h2 className="text-xl font-semibold">Filtrer par catégorie</h2>
                    <div className="w-full flex flex-wrap gap-6 mt-6">
                    </div>
                </div>
                <div className="w-full bg-white p-8 rounded-xl shadow-md text-center">
                    <h2 className="text-xl font-semibold">Auteurs que vous pourriez aimer</h2>
                    <div className="w-full flex flex-col gap-8 mt-6">
                    </div>
                </div>
            </aside>
        </main>
    );
}
