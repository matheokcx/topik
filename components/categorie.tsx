import { categorie } from "@/app/articles/[[...params]]/page";
import Image from "next/image";
import Link from "next/link";

export default function Categorie({ cat }: { cat: categorie }) {
    return (
        <div className="w-max h-10 px-4 rounded-3xl bg-[#212529] text-white flex justify-between items-center gap-2">
            <Image src={"/categories/" + cat.nom + ".png"} alt="Icon de la catégorie" width="30" height="30" />
            <Link href={"/articles/1/" + cat.nom}>{cat.nom}</Link>
        </div>
    );
}