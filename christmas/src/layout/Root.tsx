import { Outlet } from "react-router-dom";
import { Navbar } from "@/layout/Navbar";
import { ScrollArea } from "@/components/ui/scroll-area";
import Snowfall from "react-snowfall";

const RootLayout = () => {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <Snowfall snowflakeCount={350} />
      <ScrollArea className="h-screen">
        <Outlet />
      </ScrollArea>
    </div>
  );
};

export default RootLayout;
