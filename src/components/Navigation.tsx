import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import liskCellLogo from "@/assets/liskcell-logo.png";
import detaLogo from "@/assets/deta-logo.png";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/50 bg-black/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* לוגו */}
          <button
            onClick={() => scrollToSection("hero")}
            className="flex items-center gap-3 group pl-2"
          >
            <img
              src={liskCellLogo}
              alt="LiskCell Logo"
              className="h-10 object-contain group-hover:animate-pulse-glow transition-all duration-300"
            />
          </button>

          {/* ניווט לדסקטופ */}
          <div className="hidden md:flex items-center gap-6">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white font-orbitron transition-colors duration-300"
            >
              ABOUT US
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("support")}
              className="text-gray-300 hover:text-white font-orbitron transition-colors duration-300"
            >
              SUPPORT
            </Button>

            {/* כפתור Ask Deta */}
            <button className="ask-deta-button">
              <img src={detaLogo} alt="Deta Star" className="swimming-star" />
              <span className="ask-deta-text">Ask Deta</span>
            </button>
          </div>

          {/* כפתור תפריט מובייל */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* תפריט מובייל */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex flex-col items-center justify-center animate-fadeIn md:hidden"
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="bg-black/90 border border-gray-700 rounded-xl w-[90%] max-w-sm mx-auto p-8 flex flex-col gap-6 items-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-white font-orbitron w-full text-center text-lg"
            >
              ABOUT US
            </Button>

            <Button
              variant="ghost"
              onClick={() => scrollToSection("support")}
              className="text-gray-300 hover:text-white font-orbitron w-full text-center text-lg"
            >
              SUPPORT
            </Button>

            <button className="ask-deta-button w-full">
              <img src={detaLogo} alt="Deta Star" className="swimming-star" />
              <span className="ask-deta-text">Ask Deta</span>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @property --gradient-angle {
          syntax: "<angle>";
          initial-value: 0deg;
          inherits: false;
        }

        .ask-deta-button {
          position: relative;
          outline: none;
          cursor: pointer;
          border: none;
          border-radius: 50px;
          padding: 0 24px;
          background: linear-gradient(270deg, #6e00ff, #000000, #8000ff);
          background-size: 300% 300%;
          min-width: 140px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          isolation: isolate;
          overflow: hidden;
          transition: transform 0.3s ease;
          box-shadow:
            inset 0px 0px 5px #ffffffa9,
            inset 0px 25px 20px #000,
            0px 3px 6px #000000aa,
            0 0 20px rgba(138, 43, 226, 0.3);
          animation: moveGradient 6s ease infinite;
        }

        .ask-deta-button:hover {
          transform: scale(1.05);
        }

        .ask-deta-button:active {
          transform: scale(0.96);
        }

        .ask-deta-text {
          position: relative;
          z-index: 20;
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5), 1px 1px 1px #000;
          pointer-events: none;
          letter-spacing: 0.02em;
          white-space: nowrap;
          font-family: 'Outfit', sans-serif;
        }

        .swimming-star {
          position: absolute;
          width: 60px;
          height: 60px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
          pointer-events: none;
          opacity: 0;
          mix-blend-mode: screen;
          animation: swim 10s ease-in-out infinite;
        }

        @keyframes swim {
          0% {
            transform: translate(-90%, -85%) rotate(0deg) scale(0.6);
            opacity: 0;
          }
          10% {
            transform: translate(-80%, -70%) rotate(10deg) scale(0.8);
            opacity: 0.4;
          }
          20% {
            transform: translate(-20%, -30%) rotate(45deg) scale(0.7);
            opacity: 0.5;
          }
          30% {
            transform: translate(-50%, -85%) rotate(90deg) scale(0.65);
            opacity: 0.4;
          }
          40% {
            transform: translate(-80%, -15%) rotate(135deg) scale(0.75);
            opacity: 0.5;
          }
          50% {
            transform: translate(-20%, -85%) rotate(180deg) scale(0.7);
            opacity: 0.4;
          }
          60% {
            transform: translate(-50%, -50%) rotate(225deg) scale(0.8);
            opacity: 0.6;
          }
          70% {
            transform: translate(-80%, -85%) rotate(270deg) scale(0.7);
            opacity: 0.5;
          }
          80% {
            transform: translate(-20%, -15%) rotate(315deg) scale(0.65);
            opacity: 0.4;
          }
          90% {
            transform: translate(-50%, -15%) rotate(340deg) scale(0.75);
            opacity: 0.3;
          }
          100% {
            transform: translate(-90%, -85%) rotate(360deg) scale(0.6);
            opacity: 0;
          }
        }

        @keyframes moveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
      `}</style>
    </>
  );
};
