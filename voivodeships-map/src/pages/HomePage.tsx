import PolandMap from "@/components/poland-map";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const HomePage = () => {
  return (
    <main className="container mx-auto py-8 px-4">
      <Card className="border-none shadow-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl">Województwa Polski</CardTitle>
          <CardDescription className="max-w-2xl mx-auto">
            Kliknij na wybrane województwo na mapie, aby zobaczyć szczegółowe informacje na jego temat.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="max-w-3xl mx-auto">
            <PolandMap />
          </div>
        </CardContent>
      </Card>
    </main>
  );
};

export default HomePage;
