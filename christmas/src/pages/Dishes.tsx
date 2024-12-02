import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Dishes = () => {
  const dishes = [
    {
      title: "Barszcz z uszkami",
      content:
        "Czerwony barszcz podawany z małymi pierożkami nadziewanymi grzybami to klasyk wigilijnego stołu. Barszcz jest przygotowywany na wywarze z warzyw i zakwaszany zakwasem z buraków. Uszka to małe pierożki nadziewane grzybami, najczęściej suszonymi.",
    },
    {
      title: "Karp",
      content:
        "Smażony karp to tradycyjna polska potrawa wigilijna, często podawana z ziemniakami i surówką. Karp jest zazwyczaj panierowany i smażony na oleju. Niektóre rodziny kultywują tradycję trzymania żywego karpia w wannie przed Wigilią.",
    },
    {
      title: "Pierogi z kapustą i grzybami",
      content:
        "Pierogi nadziewane kapustą i grzybami to jedno z najpopularniejszych dań wigilijnych. Farsz przygotowuje się z kiszonej kapusty i suszonych grzybów, często z dodatkiem cebuli. Pierogi podaje się zazwyczaj okraszone zrumienioną cebulką.",
    },
    {
      title: "Kutia",
      content:
        "Kutia to deser z pszenicy, maku, miodu i bakalii, popularny szczególnie we wschodniej Polsce. Tradycyjnie przygotowuje się ją z gotowanej pszenicy, utartego maku, miodu oraz różnych orzechów i suszonych owoców. Kutia symbolizuje dostatek i płodność.",
    },
    {
      title: "Makowiec",
      content:
        "Makowiec to słodkie ciasto z nadzieniem makowym, często podawane jako deser świąteczny. Ciasto jest zawijane w rulon z masą makową w środku, a następnie pieczone. Często jest pokryte lukrem lub posypane cukrem pudrem.",
    },
    {
      title: "Śledź w oleju",
      content:
        "Śledzie w oleju to popularna przystawka wigilijna. Filety śledziowe marynuje się w oleju z dodatkiem cebuli, czasem jabłka lub innych przypraw. Danie to symbolizuje post, który tradycyjnie obowiązywał w Wigilię.",
    },
    {
      title: "Kompot z suszu",
      content:
        "Kompot z suszonych owoców to tradycyjny napój wigilijny. Przygotowuje się go z mieszanki suszonych śliwek, jabłek, gruszek i innych owoców. Kompot jest zazwyczaj podawany na zimno i stanowi doskonałe uzupełnienie świątecznego menu.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 flex-grow">
      <h1 className="text-3xl font-bold mb-6">Potrawy świąteczne</h1>
      <div className="grid gap-8 md:grid-cols-2 py-6">
        {dishes.map((dish, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{dish.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{dish.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Dishes;
