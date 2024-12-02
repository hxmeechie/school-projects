import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  icon: LucideIcon;
  label: string;
  to: string;
}

export const NavItem = ({ icon: Icon, label, to }: NavItemProps) => {
  const { pathname } = useLocation();
  const isActive = pathname === to;

  return (
    <Button
      variant={isActive ? "secondary" : "ghost"}
      className={cn("w-full justify-start gap-2", isActive && "bg-secondary text-secondary-foreground")}
      asChild>
      <Link to={to}>
        <Icon className="h-4 w-4" />
        {label}
      </Link>
    </Button>
  );
};
