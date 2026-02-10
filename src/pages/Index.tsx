import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import splashLogo from "@/assets/oneclick-splash.jpg";

const Index = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFadeOut(true), 2500);
    const navTimer = setTimeout(() => navigate("/home"), 3200);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(navTimer);
    };
  }, [navigate]);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center bg-white transition-opacity duration-700 ${fadeOut ? "opacity-0" : "opacity-100"}`}
      onClick={() => navigate("/home")}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate("/home")}
    >
      <img
        src={splashLogo}
        alt="e-life one-click"
        className="w-[85vw] max-w-lg md:max-w-xl lg:max-w-2xl h-auto animate-scale-in"
      />
      <p className="mt-6 text-sm text-muted-foreground animate-pulse">
        Tap anywhere to continue
      </p>
    </div>
  );
};

export default Index;
