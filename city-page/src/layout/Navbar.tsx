import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Home, Gamepad2 } from "lucide-react";
import { NavItem } from "@/components/nav-item";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border-b flex h-20 w-full shrink-0 items-center px-4 md:px-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold">
            Strona o Goleniowie
          </Link>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <NavItem icon={Home} label="Strona główna" to="/" />
            <NavItem icon={Gamepad2} label="Rozrywka" to="/entertainment" />
          </div>
          <div className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4 mt-4">
                  <NavItem icon={Home} label="Strona główna" to="/" />
                  <NavItem icon={Gamepad2} label="Rozrywka" to="/entertainment" />
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};
