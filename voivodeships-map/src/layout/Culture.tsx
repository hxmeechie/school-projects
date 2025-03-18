import { Card, CardContent } from "@/components/ui/card";

const Culture = () => {
  return (
    <section className="mb-12" id="kultura">
      <h2 className="text-3xl font-bold mb-6">Kultura i Rozrywka</h2>
      <Card>
        <CardContent className="p-6">
          <p className="text-gray-700 mb-4">
            Goleniów to miasto tętniące życiem kulturalnym, oferujące różnorodne wydarzenia i atrakcje dla mieszkańców i
            turystów.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>
              <strong>Goleniowski Dom Kultury:</strong> Centrum życia kulturalnego miasta, organizujące koncerty,
              wystawy i warsztaty.
            </li>
            <li>
              <strong>Festiwal Teatrów Lalkowych:</strong> Coroczne wydarzenie przyciągające artystów z całej Polski.
            </li>
            <li>
              <strong>Dni Goleniowa:</strong> Święto miasta pełne koncertów, pokazów i atrakcji dla całych rodzin.
            </li>
            <li>
              <strong>Kino Goleniów:</strong> Oferuje najnowsze premiery filmowe.
            </li>
            <li>
              <strong>Muzeum Archeologiczne:</strong> Prezentuje bogatą historię regionu poprzez interesujące eksponaty.
            </li>
          </ul>
        </CardContent>
      </Card>
    </section>
  );
};

export default Culture;
