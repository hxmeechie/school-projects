import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CityTabs = () => {
  return (
    <Tabs defaultValue="historia" className="mb-12">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="historia">Historia</TabsTrigger>
        <TabsTrigger value="atrakcje">Atrakcje</TabsTrigger>
        <TabsTrigger value="gospodarka">Gospodarka</TabsTrigger>
      </TabsList>
      <TabsContent value="historia" id="historia">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Historia Goleniowa</h3>
            <p className="text-gray-700">
              Historia Goleniowa sięga <strong>XIII wieku</strong>, kiedy to książę <strong>Barnim I</strong> nadał
              osadzie prawa miejskie. Przez wieki miasto rozwijało się jako{" "}
              <strong>ważny ośrodek handlowy i rzemieślniczy</strong>. Goleniów przetrwał liczne wojny i zniszczenia, w
              tym <strong>wielki pożar w 1722 roku</strong>. Po II wojnie światowej, miasto zostało włączone do Polski i
              rozpoczęło nowy rozdział swojej historii. Dziś Goleniów łączy w sobie{" "}
              <strong>ślady bogatej przeszłości z dynamicznym rozwojem gospodarczym</strong>.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="atrakcje" id="atrakcje">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Atrakcje Goleniowa</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <strong>Kościół św. Katarzyny</strong> - gotycka świątynia z XIV wieku
              </li>
              <li>
                <strong>Brama Wolińska</strong> - pozostałość średniowiecznych murów obronnych
              </li>
              <li>
                <strong>Park Miejski</strong> - zielone płuca miasta z alejkami spacerowymi
              </li>
              <li>
                <strong>Puszcza Goleniowska</strong> - rozległy kompleks leśny idealny do turystyki pieszej i rowerowej
              </li>
              <li>
                <strong>Rzeka Ina</strong> - malowniczy szlak kajakowy
              </li>
              <li>
                <strong>Goleniowski Park Przemysłowy</strong> - nowoczesna strefa ekonomiczna
              </li>
              <li>
                <strong>Muzeum Archeologiczne</strong> - ekspozycja znalezisk z regionu
              </li>
              <li>
                <strong>Rampa Czołgowa</strong> - unikatowy zabytek techniki wojskowej
              </li>
            </ul>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="gospodarka">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold mb-4">Gospodarka Goleniowa</h3>
            <p className="text-gray-700">
              Goleniów słynie z prężnie działającego <strong>Goleniowskiego Parku Przemysłowego</strong>, który
              przyciąga inwestorów z całego świata. Miasto korzysta również z bliskości <strong>Szczecina</strong> i{" "}
              <strong>lotniska w Goleniowie</strong>, co sprzyja rozwojowi <strong>logistyki i transportu</strong>.
              Lokalne władze aktywnie wspierają <strong>przedsiębiorczość i innowacje</strong>. Ważnymi sektorami
              gospodarki są również <strong>przemysł drzewny</strong> i <strong>rolnictwo</strong>, w tym produkcja
              znanego <strong>miodu goleniowskiego</strong>.
            </p>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default CityTabs;
