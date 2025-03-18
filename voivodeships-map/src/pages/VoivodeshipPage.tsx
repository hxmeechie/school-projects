import { useParams, Link, Navigate } from "react-router-dom";
import { voivodeships } from "@/data/voivodeships";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, MapPin, Users, SquareIcon as SquareMeter } from "lucide-react";

export default function VoivodeshipPage() {
  const { id } = useParams<{ id: string }>();
  const voivodeship = voivodeships[id!];

  if (!voivodeship) {
    return <Navigate to="/" />;
  }

  return (
    <main className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Button variant="ghost" asChild className="gap-2">
          <Link to="/">
            <ChevronLeft className="h-4 w-4" />
            Powrót do mapy
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Województwo {voivodeship.name}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <MapPin className="h-8 w-8 text-muted-foreground mb-2" />
                      <h3 className="text-sm font-medium text-muted-foreground">Stolica</h3>
                      <p className="font-bold">{voivodeship.capital}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <SquareMeter className="h-8 w-8 text-muted-foreground mb-2" />
                      <h3 className="text-sm font-medium text-muted-foreground">Powierzchnia</h3>
                      <p className="font-bold">{voivodeship.area}</p>
                    </div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <Users className="h-8 w-8 text-muted-foreground mb-2" />
                      <h3 className="text-sm font-medium text-muted-foreground">Ludność</h3>
                      <p className="font-bold">{voivodeship.population}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">O województwie</h2>
                <p className="text-muted-foreground">{voivodeship.description}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold mb-3">Główne atrakcje</h2>
                <ul className="space-y-2">
                  {voivodeship.attractions.map((attraction, index) => (
                    <li key={index} className="flex items-center gap-3 p-3 rounded-lg border">
                      <Badge variant="outline" className="h-6 w-6 rounded-full p-0 flex items-center justify-center">
                        {index + 1}
                      </Badge>
                      <span>{attraction}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Mapa województwa</CardTitle>
              <CardDescription>Lokalizacja w Polsce</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square relative bg-muted rounded-md overflow-hidden">
                <img
                  src={`https://via.placeholder.com/400x400.png?text=${voivodeship.name}`}
                  alt={`Mapa województwa ${voivodeship.name}`}
                  className="object-contain w-full h-full"
                />
              </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start text-sm text-muted-foreground">
              <p>Województwo {voivodeship.name} to jeden z 16 regionów administracyjnych Polski.</p>
              <Separator className="my-2" />
              <p>Aby zobaczyć inne województwa, wróć do mapy głównej.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
