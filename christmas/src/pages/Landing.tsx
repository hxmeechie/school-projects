import { Calendar, Music, TreesIcon as Tree } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ChristmasCountdown from "@/layout/ChristmasCountdown";
import Hero from "@/layout/Hero";

const LandingPage = () => {
  return (
    <div>
      <Hero />
      <main className="container mx-auto px-4 py-8 flex-grow">
        <div className="grid gap-6 md:grid-cols-2">
          <ChristmasCountdown />
          <Card>
            <CardHeader>
              <CardTitle>Magia Świąt</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Święta Bożego Narodzenia to wyjątkowy czas w roku, pełen ciepła, radości i rodzinnej atmosfery. To
                okres, gdy domy wypełniają się zapachem świerkowych gałązek i świątecznych wypieków, a ulice
                rozświetlają kolorowe iluminacje.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Czas Rodzinny</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Boże Narodzenie to przede wszystkim czas spędzany z bliskimi. To moment, gdy rodziny gromadzą się przy
                wspólnym stole, dzielą się opłatkiem i wspomnieniami. To również okazja do kultywowania tradycji
                przekazywanych z pokolenia na pokolenie.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="mr-2" />
                Kalendarz Adwentowy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Adwent to okres przygotowania do Świąt Bożego Narodzenia. W Polsce popularne są kalendarze adwentowe,
                zwłaszcza wśród dzieci. Każdego dnia od 1 do 24 grudnia otwiera się jedno okienko kalendarza, w którym
                znajduje się mała niespodzianka lub czekoladka. To sposób na odliczanie dni do Świąt i budowanie
                świątecznego nastroju.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Music className="mr-2" />
                Kolędy i Pastorałki
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Polska ma bogatą tradycję kolęd i pastorałek. Są to pieśni bożonarodzeniowe, które śpiewa się w
                kościołach, domach i podczas kolędowania. Niektóre z najpopularniejszych polskich kolęd to "Cicha noc",
                "Lulajże Jezuniu", "Przybieżeli do Betlejem" czy "Bóg się rodzi". Śpiewanie kolęd to ważny element
                budowania świątecznej atmosfery w polskich domach.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Tree className="mr-2" />
                Choinka w Polskiej Tradycji
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Choinka jest nieodłącznym elementem polskich Świąt Bożego Narodzenia. Tradycja ubierania choinki
                przywędrowała do Polski z Niemiec w XIX wieku i szybko się przyjęła. Początkowo drzewka ozdabiano
                jabłkami, orzechami, ciastkami i świeczkami. Dziś używa się głównie szklanych bombek, lampek
                elektrycznych i różnorodnych ozdób.
              </p>
              <p className="mt-2">
                W wielu domach choinkę ubiera się w Wigilię lub kilka dni przed Świętami. Jest ona symbolem życia i
                odrodzenia. Według tradycji, choinkę powinno się rozebrać dopiero po święcie Trzech Króli (6 stycznia).
                Niektórzy jednak pozostawiają ją aż do święta Ofiarowania Pańskiego (2 lutego).
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
