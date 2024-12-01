import { Code, Layout } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import TechnologiesList from "@/components/technologies-list";
import { ScrollArea } from "@/components/ui/scroll-area";

const App = () => {
  return (
    <ScrollArea className="h-screen">
      <div className="min-h-screen bg-gradient-to-b from-background to-secondary p-6 relative overflow-hidden">
        <div className="absolute top-10 left-10 opacity-10 transform -rotate-12">
          <Layout className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-primary" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-10 transform rotate-12">
          <Code className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 text-primary" />
        </div>
        <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-12 text-center text-primary">
            Nowoczesne Technologie Webowe
          </h1>
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="css">CSS</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
            </TabsList>
            <TabsContent value="frontend">
              <div className="rounded-md border p-4 bg-background/80 backdrop-blur-sm">
                <TechnologiesList type="frontend" />
              </div>
            </TabsContent>
            <TabsContent value="css">
              <div className="rounded-md border p-4 bg-background/80 backdrop-blur-sm">
                <TechnologiesList type="css" />
              </div>
            </TabsContent>
            <TabsContent value="backend">
              <div className="rounded-md border p-4 bg-background/80 backdrop-blur-sm">
                <TechnologiesList type="backend" />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </ScrollArea>
  );
};

export default App;
