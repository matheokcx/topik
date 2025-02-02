"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setError("");
        setSuccess("");

        const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (!res.ok) {
            setError(data.error || "Une erreur est survenue");
        }
        else {
            setSuccess("Compte créé avec succès ! Redirection...");
            setTimeout(() => {
                router.push("/login");
            }, 2000);
        }
    };

    return (
        <main className="w-full h-full flex justify-center items-center">
            <form onSubmit={handleSubmit} className="w-1/4 h-1/2 flex flex-col items-center justify-center gap-10 p-8 rounded-xl shadow-md">
                <h2 className="text-center text-3xl font-bold mb-4">Inscription</h2>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                {success && <p className="text-green-500 text-sm">{success}</p>}
                <input type="email" placeholder="Adresse mail" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full h-12 border-2 border-black/50 px-2 rounded-2xl" required/>
                <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full h-12 border-2 border-black/50 px-2 rounded-2xl" required/>
                <button type="submit" className="w-1/3 h-12 bg-green-500 text-white py-2 rounded-2xl transition-transform hover:-translate-y-2">S'inscrire</button>
                <p className="mt-4 text-sm">
                    Déjà un compte ?{" "}
                    <a href="/login" className="text-blue-400 hover:underline">Connectez-vous ici</a>
                </p>
            </form>
        </main>
    );
}
