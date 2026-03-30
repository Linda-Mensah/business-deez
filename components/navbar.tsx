"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X, Droplets } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("");

  // scroll to section with offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // handle navigation click
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      if (pathname === "/products") {
        router.push(`/${href}`);

        setTimeout(() => {
          scrollToSection(href.substring(1));
        }, 100);
      } else {
        scrollToSection(href.substring(1));
      }
    } else {
      router.push(href);
    }

    setIsOpen(false);
  };

  // scroll-based section tracking
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = ["about", "contact"];

    const handleScroll = () => {
      let currentSection = "";

      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (!element) return;

        const rect = element.getBoundingClientRect();

        if (rect.top <= 120 && rect.bottom >= 120) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll(); // run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home", isPage: true },
    { href: "#about", label: "About", isPage: false },
    { href: "/products", label: "Products", isPage: true },
    { href: "#contact", label: "Contact", isPage: false },
  ];

  const isActive = (link: (typeof navLinks)[0]) => {
    if (link.href === "/") {
      return pathname === "/" && activeSection === "";
    }

    if (link.isPage) {
      return pathname === link.href;
    }

    return pathname === "/" && activeSection === link.href.substring(1);
  };

  // scroll shadow
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-neutral-200"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Droplets className="w-6 h-6 text-[#5F9E8D] group-hover:rotate-12 transition-transform" />
            <span className="text-2xl font-semibold text-[#5F9E8D]">
              Deez Biz
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const active = isActive(link);

              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-sm cursor-pointer font-medium transition-colors ${
                    active
                      ? "text-[#4A7F73]"
                      : "text-[#5F9E8D] hover:text-[#6BA598]"
                  }`}
                >
                  {link.label}

                  {active && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4A7F73]"
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              );
            })}

            <Button
              variant="primary"
              size="sm"
              onClick={() =>
                window.open(
                  "https://wa.me/233500175261?text=Hello, I want to place an order",
                  "_blank",
                )
              }
            >
              Order via WhatsApp
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-[#2B2B2B]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden overflow-hidden bg-white border-b border-neutral-200"
            >
              <div className="py-4 space-y-4">
                {navLinks.map((link) => {
                  const active = isActive(link);

                  return (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className={`block w-full text-left py-2 text-sm transition-colors ${
                        active
                          ? "text-[#4A7F73] font-medium"
                          : "text-[#5F9E8D] hover:text-[#6BA598]"
                      }`}
                    >
                      {link.label}
                    </button>
                  );
                })}

                <Button
                  variant="primary"
                  size="sm"
                  className="w-full"
                  onClick={() => {
                    setIsOpen(false);
                    window.open(
                      "https://wa.me/233500175261?text=Hello, I want to place an order",
                      "_blank",
                    );
                  }}
                >
                  Order via WhatsApp
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
