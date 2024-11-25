import { Code, Layout } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import TechnologiesList from "@/components/technologies-list";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-6 relative overflow-hidden">
      <div className="absolute top-10 left-10 opacity-10 transform -rotate-12">
        <Layout className="w-40 h-40 text-primary" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10 transform rotate-12">
        <Code className="w-40 h-40 text-primary" />
      </div>
      <div className="container mx-auto py-12 max-w-4xl relative z-10">
        <h1 className="text-5xl font-bold mb-12 text-center text-primary">Nowoczesne Technologie Front-end</h1>
        <ScrollArea className="h-[calc(100vh-200px)] rounded-md border p-4 bg-background/80 backdrop-blur-sm">
          <TechnologiesList />
        </ScrollArea>
      </div>
    </div>
  );
};

export default App;
