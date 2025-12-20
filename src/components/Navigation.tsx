import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import liskCellLogo from "@/assets/liskcell-logo.png";
import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleAskAIClick = () => {
    navigate("/ai");
  };

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
            <button
              onClick={handleAskAIClick}
              className="ask-deta-button text-white font-semibold cursor-pointer"
            >
              Ask Deta
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

            <button
              onClick={handleAskAIClick}
              className="ask-deta-button w-full text-white font-semibold cursor-pointer"
            >
              Ask Deta
            </button>
          </div>
        </div>
      )}

      <style>{`
        .ask-deta-button {
          padding: 10px 18px;
          font-size: 0.95rem;
          border-radius: 10px;
          background: linear-gradient(270deg, #6e00ff, #000000, #8000ff);
          background-size: 300% 300%;
          box-shadow: inset 0px 0px 5px #ffffffa9,
                      inset 0px 25px 20px #000,
                      0px 3px 6px #000000aa;
          text-shadow: 1px 1px 1px #000;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          animation: moveGradient 6s ease infinite;
        }

        .ask-deta-button:hover {
          transform: scale(1.07);
          opacity: 0.95;
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
