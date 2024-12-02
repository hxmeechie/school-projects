import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Traditions = () => {
  const traditions = [
    {
      title: "Wigilia",
      content:
        "Wigilia to wyjątkowy wieczór, podczas którego rodziny gromadzą się przy stole, dzielą się opłatkiem i spożywają uroczystą kolację. Tradycyjnie, na stole powinno znaleźć się 12 potraw, a pod obrusem umieszcza się sianko, symbolizujące żłóbek Jezusa.",
    },
    {
      title: "Choinka",
      content:
        "Ubieranie choinki to jedna z najpopularniejszych tradycji. Drzewko ozdabia się bombkami, światełkami i innymi dekoracjami. Choinka symbolizuje 'drzewo życia' i nawiązuje do rajskiego drzewa poznania dobra i zła.",
    },
    {
      title: "Kolędy",
      content:
        "Śpiewanie kolęd to piękna tradycja, która jednoczy rodziny i przypomina o znaczeniu Świąt Bożego Narodzenia. Kolędy są śpiewane nie tylko w domach, ale także w kościołach podczas Pasterki - uroczystej mszy o północy.",
    },
    {
      title: "Prezenty",
      content:
        "Wymiana prezentów to symbol miłości i życzliwości. W Polsce prezenty przynosi Święty Mikołaj, Dzieciątko lub Gwiazdor. Tradycja ta nawiązuje do darów, które Trzej Królowie przynieśli małemu Jezusowi.",
    },
    {
      title: "Pierwsza Gwiazdka",
      content:
        "Tradycja mówi, że wieczerzę wigilijną należy rozpocząć wraz z pojawieniem się na niebie pierwszej gwiazdy. Jest to nawiązanie do Gwiazdy Betlejemskiej, która według Biblii prowadziła Trzech Króli do miejsca narodzin Jezusa.",
    },
    {
      title: "Szopka",
      content:
        "Budowanie szopki bożonarodzeniowej to tradycja zapoczątkowana przez św. Franciszka z Asyżu. Szopka przedstawia scenę narodzin Jezusa i jest często centralnym elementem świątecznych dekoracji w domach i kościołach.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 flex-grow">
      <h1 className="text-3xl font-bold mb-6">Tradycje Bożonarodzeniowe</h1>
      <div className="grid gap-8 md:grid-cols-2 py-6">
        {traditions.map((tradition, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{tradition.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{tradition.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Traditions;
