import Logo from "./logo";
import Navbar from "./navbar";
import MobileMenu from "./mobile-menu";

export default function Header() {
    return (
        <header className="
      sticky top-0 z-50
      border-b
      bg-background/70
      backdrop-blur
    ">
            <div className="max-w-6xl mx-auto flex items-center justify-between p-4">

                <Logo />

                <Navbar />

                <MobileMenu />

            </div>
        </header>
    );
}