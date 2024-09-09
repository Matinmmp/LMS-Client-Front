import HomeNavbar from "@/src/components/HomePage/HomeNavbar";

export default function RootLayout({ children, }: { children: React.ReactNode}) {
    return (
        <div>
            <HomeNavbar />
            {children}
        </div>
    );
}
