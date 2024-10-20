import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section className="mb-12" id="edukacja">
      <h2 className="text-3xl font-bold mb-6">Edukacja w Goleniowie</h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-gray-700 mb-4">
            Goleniów oferuje szeroki wachlarz możliwości edukacyjnych dla swoich mieszkańców, od przedszkoli po szkoły
            średnie.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong>Przedszkola:</strong> Miasto posiada kilka publicznych i prywatnych przedszkoli.
            </li>
            <li>
              <strong>Szkoły Podstawowe:</strong> W Goleniowie działa kilka szkół podstawowych, zapewniających edukację
              na wysokim poziomie.
            </li>
            <li>
              <strong>Szkoły Średnie:</strong> Zespół Szkół nr 1 im. Stanisława Staszica oferuje kształcenie w różnych
              profilach.
            </li>
            <li>
              <strong>Edukacja Zawodowa:</strong> Centrum Kształcenia Zawodowego i Ustawicznego zapewnia możliwość
              zdobycia praktycznych umiejętności.
            </li>
            <li>
              <strong>Biblioteka Publiczna:</strong> Wspiera edukację i rozwój czytelnictwa wśród mieszkańców.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default Education;
