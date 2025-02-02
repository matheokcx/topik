import authConfig from "@/lib/auth";
import { redirect } from "next/navigation";
import {getServerSession} from "next-auth";

export default async function DashboardPage() {
    // @ts-ignore
    const session = await getServerSession(authConfig);

    if (!session) {
        redirect("/login");
    }

    return (
        <main className="w-full h-full flex flex-col justify-center items-center gap-8">
            <h1 className="text-2xl">Bienvenue <strong>{session.user?.email}</strong> !</h1>
            <form action="/api/auth/signout" method="POST" className="w-1/12">
                <button className="w-full h-12 bg-red-400 text-white px-4 py-2 rounded-2xl">Déconnexion</button>
            </form>
        </main>
    );
}
