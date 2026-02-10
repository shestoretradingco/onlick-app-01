import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import splashLogo from "@/assets/oneclick-splash.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<"flash" | "reveal" | "fadeOut">("flash");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 400);
    const t2 = setTimeout(() => setPhase("fadeOut"), 3000);
    const t3 = setTimeout(() => navigate("/home"), 3700);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [navigate]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${phase === "fadeOut" ? "opacity-0" : "opacity-100"}`}
      onClick={() => navigate("/home")}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate("/home")}
    >
      {/* Flash overlay */}
      <div
        className={`fixed inset-0 bg-white z-50 pointer-events-none transition-opacity duration-500 ${phase === "flash" ? "opacity-100" : "opacity-0"}`}
      />

      {/* Radial burst */}
      <div
        className={`absolute w-[600px] h-[600px] rounded-full transition-all duration-1000 ease-out ${
          phase !== "flash"
            ? "scale-100 opacity-0"
            : "scale-0 opacity-60"
        }`}
        style={{
          background: "radial-gradient(circle, hsl(187 100% 42% / 0.4), hsl(340 82% 52% / 0.2), transparent 70%)",
        }}
      />

      {/* Logo */}
      <img
        src={splashLogo}
        alt="e-life one-click"
        className={`relative z-10 w-[85vw] max-w-lg md:max-w-xl lg:max-w-2xl h-auto transition-all duration-700 ease-out ${
          phase !== "flash"
            ? "opacity-100 scale-100 blur-0"
            : "opacity-0 scale-110 blur-sm"
        }`}
      />

      <p
        className={`relative z-10 mt-6 text-sm text-muted-foreground transition-opacity duration-500 delay-500 ${
          phase === "reveal" ? "opacity-100 animate-pulse" : "opacity-0"
        }`}
      >
        Tap anywhere to continue
      </p>
    </div>
  );
};

export default Index;
