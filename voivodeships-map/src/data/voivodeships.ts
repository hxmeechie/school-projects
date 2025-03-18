export interface Voivodeship {
    id: string
    name: string
    capital: string
    area: string
    population: string
    description: string
    attractions: string[]
  }
  
  export const voivodeships: Record<string, Voivodeship> = {
    dolnoslaskie: {
      id: "dolnoslaskie",
      name: "dolnośląskie",
      capital: "Wrocław",
      area: "19 947 km²",
      population: "2,9 mln",
      description:
        "Województwo dolnośląskie położone jest w południowo-zachodniej części Polski. Graniczy z Czechami i Niemcami. Stolicą województwa jest Wrocław. Region słynie z uzdrowisk (m.in. Kudowa-Zdrój, Polanica-Zdrój) oraz atrakcji turystycznych jak Karkonosze, Zamek Książ czy Kościół Pokoju w Świdnicy.",
      attractions: [
        "Wrocław - Rynek i Ostrów Tumski",
        "Karkonosze z Śnieżką",
        "Zamek Książ",
        "Kościoły Pokoju w Jaworze i Świdnicy",
        "Twierdza Kłodzka",
      ],
    },
    "kujawsko-pomorskie": {
      id: "kujawsko-pomorskie",
      name: "kujawsko-pomorskie",
      capital: "Bydgoszcz i Toruń",
      area: "17 972 km²",
      population: "2,1 mln",
      description:
        "Województwo kujawsko-pomorskie położone jest w północnej części Polski. Stolicami województwa są Bydgoszcz i Toruń. Region słynie z gotyckiej architektury Torunia, wpisanego na listę UNESCO, oraz z uzdrowisk w Ciechocinku i Inowrocławiu.",
      attractions: [
        "Toruń - Stare Miasto",
        "Bydgoszcz - Wyspa Młyńska",
        "Ciechocinek - tężnie solankowe",
        "Biskupin - osada z epoki żelaza",
        "Chełmno - miasto zakochanych",
      ],
    },
    lubelskie: {
      id: "lubelskie",
      name: "lubelskie",
      capital: "Lublin",
      area: "25 122 km²",
      population: "2,1 mln",
      description:
        "Województwo lubelskie położone jest we wschodniej części Polski. Stolicą województwa jest Lublin. Region charakteryzuje się malowniczym krajobrazem, licznymi zabytkami oraz bogatą kulturą ludową. Ważnymi ośrodkami turystycznymi są Kazimierz Dolny, Zamość i Roztoczański Park Narodowy.",
      attractions: [
        "Lublin - Stare Miasto i Zamek",
        "Zamość - renesansowe miasto idealne",
        "Kazimierz Dolny nad Wisłą",
        "Roztoczański Park Narodowy",
        "Pałac w Kozłówce",
      ],
    },
    lubuskie: {
      id: "lubuskie",
      name: "lubuskie",
      capital: "Gorzów Wielkopolski i Zielona Góra",
      area: "13 988 km²",
      population: "1,0 mln",
      description:
        "Województwo lubuskie położone jest w zachodniej części Polski. Stolicami województwa są Gorzów Wielkopolski i Zielona Góra. Region charakteryzuje się dużą lesistością i licznymi jeziorami. Zielona Góra słynie z tradycji winiarskich.",
      attractions: [
        "Łagów - zamek joannitów",
        "Park Narodowy Ujście Warty",
        "Zielona Góra - Palmiarnia i winnice",
        "Międzyrzecki Rejon Umocniony",
        "Gorzów Wielkopolski - katedra",
      ],
    },
    lodzkie: {
      id: "lodzkie",
      name: "łódzkie",
      capital: "Łódź",
      area: "18 219 km²",
      population: "2,5 mln",
      description:
        "Województwo łódzkie położone jest w centralnej części Polski. Stolicą województwa jest Łódź. Region słynie z przemysłu włókienniczego i filmowego. Łódź jest znana z secesyjnej architektury i postindustrialnych obiektów przekształconych w centra kulturalne i handlowe.",
      attractions: [
        "Łódź - ulica Piotrkowska",
        "Manufaktura w Łodzi",
        "Zamek w Łęczycy",
        "Arboretum w Rogowie",
        "Termy Uniejów",
      ],
    },
    malopolskie: {
      id: "malopolskie",
      name: "małopolskie",
      capital: "Kraków",
      area: "15 183 km²",
      population: "3,4 mln",
      description:
        "Województwo małopolskie położone jest w południowej części Polski. Stolicą województwa jest Kraków. Region słynie z bogatej historii, kultury i pięknych krajobrazów. Znajdują się tu liczne zabytki, w tym wpisane na listę UNESCO Stare Miasto w Krakowie i kopalnia soli w Wieliczce.",
      attractions: [
        "Kraków - Stare Miasto i Wawel",
        "Kopalnia soli w Wieliczce",
        "Zakopane i Tatry",
        "Ojcowski Park Narodowy",
        "Szlak Architektury Drewnianej",
      ],
    },
    mazowieckie: {
      id: "mazowieckie",
      name: "mazowieckie",
      capital: "Warszawa",
      area: "35 558 km²",
      population: "5,4 mln",
      description:
        "Województwo mazowieckie położone jest w centralnej części Polski. Stolicą województwa jest Warszawa, która jest również stolicą kraju. Region jest najbardziej zaludnionym i gospodarczo rozwiniętym województwem w Polsce. Oprócz nowoczesnej Warszawy, region oferuje również historyczne miasta i malownicze krajobrazy.",
      attractions: [
        "Warszawa - Stare Miasto i Łazienki Królewskie",
        "Płock - Wzgórze Tumskie",
        "Żelazowa Wola - dom Fryderyka Chopina",
        "Pułtusk - najdłuższy rynek w Europie",
        "Modlin - twierdza",
      ],
    },
    opolskie: {
      id: "opolskie",
      name: "opolskie",
      capital: "Opole",
      area: "9 412 km²",
      population: "1,0 mln",
      description:
        "Województwo opolskie położone jest w południowo-zachodniej części Polski. Stolicą województwa jest Opole. Jest to najmniejsze województwo w Polsce pod względem powierzchni. Region charakteryzuje się wielokulturowością i bogatymi tradycjami śląskimi.",
      attractions: [
        "Opole - amfiteatr i Stare Miasto",
        "Zamek w Mosznej",
        "Góra Świętej Anny",
        "Nysa - twierdza",
        "Brzeg - zamek Piastów Śląskich",
      ],
    },
    podkarpackie: {
      id: "podkarpackie",
      name: "podkarpackie",
      capital: "Rzeszów",
      area: "17 846 km²",
      population: "2,1 mln",
      description:
        "Województwo podkarpackie położone jest w południowo-wschodniej części Polski. Stolicą województwa jest Rzeszów. Region charakteryzuje się górskim krajobrazem Bieszczad i bogatym dziedzictwem kulturowym, w tym drewnianą architekturą sakralną wpisaną na listę UNESCO.",
      attractions: [
        "Bieszczady",
        "Łańcut - zespół pałacowo-parkowy",
        "Krasiczyn - zamek",
        "Przemyśl - Stare Miasto i twierdza",
        "Sanok - Muzeum Budownictwa Ludowego",
      ],
    },
    podlaskie: {
      id: "podlaskie",
      name: "podlaskie",
      capital: "Białystok",
      area: "20 187 km²",
      population: "1,2 mln",
      description:
        "Województwo podlaskie położone jest w północno-wschodniej części Polski. Stolicą województwa jest Białystok. Region słynie z dziewiczej przyrody, w tym Puszczy Białowieskiej - ostatniego pierwotnego lasu w Europie, oraz wielokulturowego dziedzictwa.",
      attractions: [
        "Białowieski Park Narodowy",
        "Białystok - Pałac Branickich",
        "Tykocin - synagoga i zamek",
        "Supraśl - monaster",
        "Wigierski Park Narodowy",
      ],
    },
    pomorskie: {
      id: "pomorskie",
      name: "pomorskie",
      capital: "Gdańsk",
      area: "18 310 km²",
      population: "2,3 mln",
      description:
        "Województwo pomorskie położone jest w północnej części Polski, nad Morzem Bałtyckim. Stolicą województwa jest Gdańsk. Region słynie z pięknych plaż, Kaszub z ich unikalną kulturą oraz historycznych miast Trójmiasta (Gdańsk, Gdynia, Sopot).",
      attractions: [
        "Gdańsk - Stare Miasto i Westerplatte",
        "Sopot - molo i plaża",
        "Malbork - zamek krzyżacki",
        "Słowiński Park Narodowy - ruchome wydmy",
        "Kaszuby - skanseny i muzea",
      ],
    },
    slaskie: {
      id: "slaskie",
      name: "śląskie",
      capital: "Katowice",
      area: "12 333 km²",
      population: "4,5 mln",
      description:
        "Województwo śląskie położone jest w południowej części Polski. Stolicą województwa są Katowice. Jest to najbardziej zurbanizowany region w Polsce, z bogatą tradycją przemysłową. Oprócz miast przemysłowych, region oferuje również górskie krajobrazy Beskidów.",
      attractions: [
        "Szlak Zabytków Techniki z Kopalnią Guido",
        "Częstochowa - Jasna Góra",
        "Pszczyna - zamek",
        "Beskidy - szlaki turystyczne",
        "Ustroń i Wisła - uzdrowiska",
      ],
    },
    swietokrzyskie: {
      id: "swietokrzyskie",
      name: "świętokrzyskie",
      capital: "Kielce",
      area: "11 711 km²",
      population: "1,2 mln",
      description:
        "Województwo świętokrzyskie położone jest w południowo-centralnej części Polski. Stolicą województwa są Kielce. Region słynie z Gór Świętokrzyskich - jednych z najstarszych gór w Europie, oraz bogatej historii, w tym licznych zamków i pałaców.",
      attractions: [
        "Góry Świętokrzyskie",
        "Święty Krzyż - klasztor",
        "Jaskinia Raj",
        "Zamek Krzyżtopór",
        "Sandomierz - Stare Miasto",
      ],
    },
    "warminsko-mazurskie": {
      id: "warminsko-mazurskie",
      name: "warmińsko-mazurskie",
      capital: "Olsztyn",
      area: "24 173 km²",
      population: "1,4 mln",
      description:
        "Województwo warmińsko-mazurskie położone jest w północno-wschodniej części Polski. Stolicą województwa jest Olsztyn. Region słynie z Krainy Wielkich Jezior Mazurskich, które są popularnym miejscem wypoczynku i uprawiania sportów wodnych.",
      attractions: [
        "Wielkie Jeziora Mazurskie",
        "Mikołajki - port i promenada",
        "Frombork - katedra i muzeum Kopernika",
        "Gierłoż - Wilczy Szaniec",
        "Lidzbark Warmiński - zamek biskupów",
      ],
    },
    wielkopolskie: {
      id: "wielkopolskie",
      name: "wielkopolskie",
      capital: "Poznań",
      area: "29 826 km²",
      population: "3,5 mln",
      description:
        "Województwo wielkopolskie położone jest w zachodniej części Polski. Stolicą województwa jest Poznań. Region uważany jest za kolebkę państwa polskiego, z pierwszą stolicą w Gnieźnie. Charakteryzuje się bogatą historią, kulturą i dobrze rozwiniętym rolnictwem.",
      attractions: [
        "Poznań - Stary Rynek i Ostrów Tumski",
        "Gniezno - katedra",
        "Kórnik - zamek i arboretum",
        "Wielkopolski Park Narodowy",
        "Szlak Piastowski",
      ],
    },
    zachodniopomorskie: {
      id: "zachodniopomorskie",
      name: "zachodniopomorskie",
      capital: "Szczecin",
      area: "22 892 km²",
      population: "1,7 mln",
      description:
        "Województwo zachodniopomorskie położone jest w północno-zachodniej części Polski, nad Morzem Bałtyckim. Stolicą województwa jest Szczecin. Region słynie z pięknych plaż, jezior i lasów. Popularnymi kurortami nadmorskimi są Świnoujście, Międzyzdroje i Kołobrzeg.",
      attractions: [
        "Szczecin - Wały Chrobrego i Zamek Książąt Pomorskich",
        "Świnoujście - plaże i latarnia morska",
        "Kołobrzeg - uzdrowisko",
        "Woliński Park Narodowy",
        "Drawieński Park Narodowy",
      ],
    },
  }
  
  