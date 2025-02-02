import { trouverAuteur, trouverCategorie } from "@/app/articles/actions";
import { article } from "@/app/articles/[[...params]]/page";

export default async function Article({ e }: { e: article }) {
    const categorieArticle = await trouverCategorie(e.id_categorie);
    const categorie = categorieArticle?.data[0];

    const auteurArticle = await trouverAuteur(e.id_auteur);
    const auteur = auteurArticle?.data[0];

    return (
        <article
            className="w-full h-[400px] text-white rounded-3xl flex flex-col gap-2 justify-end p-6 shadow-md"
            style={{
                backgroundImage: `url(${e.visuel})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <h2 className="text-xl font-bold">{e.titre}</h2>
            <span className="border-2 border-white rounded-xl text-center w-fit px-4">
                <p>{categorie.nom}</p>
            </span>
            <p>{auteur.nom}</p>
        </article>
    );
}