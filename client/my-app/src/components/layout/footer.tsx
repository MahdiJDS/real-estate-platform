export default function Footer() {
    return (
        <footer className="border-t mt-20">
            <div className="max-w-6xl mx-auto py-10 text-center text-sm text-muted-foreground">
                © {new Date().getFullYear()} RealNest. All rights reserved.
            </div>
        </footer>
    );
}