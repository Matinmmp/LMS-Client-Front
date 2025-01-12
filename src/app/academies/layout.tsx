

export default async function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            <div className="relative z-20">
                {children}
            </div>
        </div>
    );
}
