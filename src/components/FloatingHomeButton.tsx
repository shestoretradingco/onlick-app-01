import { Home } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

export function FloatingHomeButton() {
  const location = useLocation();

  if (location.pathname === "/") return null;

  return (
    <Button
      asChild
      size="icon"
      className="fixed bottom-6 right-6 z-50 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-shadow"
    >
      <Link to="/">
        <Home className="w-5 h-5" />
      </Link>
    </Button>
  );
}
