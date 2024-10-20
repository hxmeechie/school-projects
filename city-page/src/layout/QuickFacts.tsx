import { Card, CardContent } from "@/components/ui/card";

const QuickFacts = () => {
  return (
    <Card className="mb-12">
      <CardContent className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Szybkie Fakty</h2>
        <ul className="grid grid-cols-2 gap-4 text-gray-700">
          <li>
            <strong>Założenie:</strong> XIII wiek
          </li>
          <li>
            <strong>Populacja:</strong> Około 22 000 mieszkańców
          </li>
          <li>
            <strong>Powierzchnia:</strong> 98,5 km²
          </li>
          <li>
            <strong>Powiat:</strong> goleniowski
          </li>
          <li>
            <strong>Rzeka:</strong> Ina
          </li>
          <li>
            <strong>Lotnisko:</strong> Port lotniczy Szczecin-Goleniów
          </li>
          <li>
            <strong>Patron miasta:</strong> Św. Katarzyna Aleksandryjska
          </li>
          <li>
            <strong>Dzień miasta:</strong> 25 listopada
          </li>
          <li>
            <strong>Ciekawostka:</strong> Jedno z najstarszych miast Pomorza Zachodniego
          </li>
        </ul>
      </CardContent>
    </Card>
  );
};

export default QuickFacts;
