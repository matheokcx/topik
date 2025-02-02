"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });

        if (res?.error) {
            setError(res.error);
        }
        else {
            router.push("/dashboard");
        }
    };

    return (
        <main className="w-full h-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-1/4 h-1/2 p-8 rounded-2xl shadow-md flex flex-col items-center justify-center gap-10">
                <h2 className="text-3xl font-bold text-center">Connexion</h2>
                <input type="email" placeholder="Adresse mail" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-12 border-2 border-black/50 rounded-2xl px-2 " required/>
                <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full h-12 border-2 border-black/50 rounded-2xl px-2 " required/>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="w-1/3 h-12 bg-blue-500 text-white rounded-xl transition-transform hover:-translate-y-2">Se connecter</button>
                <p className="mt-4 text-sm">
                    Pas encore de compte ?{" "}
                    <a href="/register" className="text-blue-400 hover:underline">Inscrivez-vous ici</a>
                </p>
            </form>
        </main>
    );
}
