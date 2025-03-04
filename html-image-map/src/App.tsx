import { InfoIcon } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import square from "@/assets/square.webp";

const App = () => {
  return (
    <ScrollArea className="h-dvh">
      <main className="container mx-auto py-10 px-4 max-w-md">
        <h1 className="text-3xl font-bold text-center mb-8">
          Interaktywna Mapa Obrazu
        </h1>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Czym są Mapy Obrazów?</CardTitle>
            <CardDescription>
              Mapy obrazów pozwalają na definiowanie interaktywnych obszarów w
              obrębie jednego obrazu, tworząc klikalne strefy, które mogą
              wywoływać różne akcje.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Alert variant="default" className="mb-4">
              <InfoIcon className="h-4 w-4 mr-2" />
              <AlertDescription>
                Mapy obrazów są przydatne do tworzenia interaktywnych diagramów,
                planów pięter, map lub dowolnych obrazów, w których różne
                regiony powinny wywoływać różne akcje.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Interaktywna Demonstracja</CardTitle>
            <CardDescription>
              Kliknij na dowolne zwierzę, aby zobaczyć szczegółowe informacje na
              jego temat.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="w-full">
              <div className="relative mb-4">
                <AspectRatio ratio={1 / 1} className="bg-muted">
                  <img
                    src={square}
                    className="w-full h-full object-cover"
                    useMap="#quadrants-map"
                  />
                  <map name="quadrants-map">
                    <area
                      shape="rect"
                      coords="0,0,200,200"
                      alt="Kot"
                      href="https://pl.wikipedia.org/wiki/Kot_domowy"
                    />
                    <area
                      shape="rect"
                      coords="200,0,400,200"
                      alt="Pies"
                      href="https://pl.wikipedia.org/wiki/Pies_domowy"
                    />
                    <area
                      shape="rect"
                      coords="0,200,200,400"
                      alt="Skunks"
                      href="https://pl.wikipedia.org/wiki/Skunks_zwyczajny"
                    />
                    <area
                      shape="rect"
                      coords="200,200,400,400"
                      alt="Świnka morska (Kawia domowa)"
                      href="https://pl.wikipedia.org/wiki/Kawia_domowa"
                    />
                  </map>
                </AspectRatio>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </ScrollArea>
  );
};

export default App;
