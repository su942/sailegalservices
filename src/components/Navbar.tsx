import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-trust"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <h2
              className={`text-xl md:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-primary" : "text-primary-foreground"
              }`}
            >
              Sai Legal Services
            </h2>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {["home", "about", "services", "how-it-works", "contact"].map(
              (item) => (
                <li key={item}>
                  <button
                    onClick={() => scrollToSection(item)}
                    className={`text-sm font-medium transition-colors duration-300 hover:text-accent ${
                      isScrolled
                        ? "text-foreground"
                        : "text-primary-foreground/90"
                    }`}
                  >
                    {item.charAt(0).toUpperCase() +
                      item.slice(1).replace("-", " ")}
                  </button>
                </li>
              )
            )}
          </ul>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              variant={isScrolled ? "trust" : "hero"}
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                className={`w-6 h-6 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-card rounded-lg shadow-trust-xl mt-2 p-4 animate-scale-in">
            <ul className="space-y-4">
              {["home", "about", "services", "how-it-works", "contact"].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(item)}
                      className="block w-full text-left text-foreground font-medium py-2 hover:text-accent transition-colors"
                    >
                      {item.charAt(0).toUpperCase() +
                        item.slice(1).replace("-", " ")}
                    </button>
                  </li>
                )
              )}
            </ul>
            <Button
              variant="hero"
              size="lg"
              className="w-full mt-4"
              onClick={() => scrollToSection("contact")}
            >
              <Phone className="w-4 h-4" />
              Contact Us
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
