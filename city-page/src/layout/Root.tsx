import { Outlet } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";

const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <ScrollArea className="h-screen">
        <Outlet />
      </ScrollArea>
    </div>
  );
};

export default RootLayout;
