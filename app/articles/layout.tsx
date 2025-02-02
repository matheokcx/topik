import NavBar from "@/components/NavBar";

export default function articlesLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    return (
        <>
            <NavBar></NavBar>
            {children}
        </>
    );
}