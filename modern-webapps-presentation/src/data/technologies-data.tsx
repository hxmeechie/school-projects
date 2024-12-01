import {
  Layout,
  Code,
  Palette,
  Layers,
  Grid,
  Wind,
  Server,
  Database,
  Cloud,
  Globe,
} from "lucide-react";
import type { TechnologiesData } from "@/components/technologies-list";

const technologiesData: TechnologiesData = {
  frontend: {
    title: "Technologie Front-end",
    icon: <Layout className="h-6 w-6" />,
    technologies: [
      {
        name: "HTML5",
        description:
          "Najnowsza wersja języka znaczników do tworzenia stron WWW.",
        features: ["Semantyczne tagi", "Multimedia", "Formularze"],
        additionalInfo:
          "HTML5 wprowadził wiele nowych elementów semantycznych, takich jak <nav>, <header>, <footer>, które poprawiają strukturę i dostępność stron. Wspiera również natywne odtwarzanie wideo i audio bez potrzeby wtyczek.",
      },
      {
        name: "CSS3",
        description: "Język stylów do projektowania wyglądu stron.",
        features: ["Flexbox i Grid", "Animacje", "Zmienne"],
        additionalInfo:
          "CSS3 zrewolucjonizował projektowanie stron internetowych, wprowadzając zaawansowane layouty (Flexbox, Grid), animacje i transformacje. Zmienne CSS (custom properties) umożliwiają tworzenie dynamicznych, łatwych w utrzymaniu arkuszy stylów.",
      },
      {
        name: "JavaScript (ES6+)",
        description: "Język programowania do tworzenia interaktywnych stron.",
        features: ["Async/await", "Moduły", "Destrukturyzacja"],
        badge: "Najpopularniejszy",
        additionalInfo:
          "ECMAScript 6 (ES6) i nowsze wersje znacząco ulepszyły JavaScript, wprowadzając funkcje takie jak arrow functions, klasy, oraz ulepszone zarządzanie asynchronicznością. JavaScript jest teraz używany nie tylko w przeglądarkach, ale także w środowiskach serwerowych (Node.js) i aplikacjach mobilnych.",
      },
      {
        name: "TypeScript",
        description: "JavaScript z typowaniem statycznym.",
        features: ["Typy", "Interfejsy", "Dekoratory"],
        badge: "Typowany JS",
        additionalInfo:
          "TypeScript, stworzony przez Microsoft, dodaje opcjonalne statyczne typowanie do JavaScript. Pomaga to w wykrywaniu błędów na etapie kompilacji, poprawia dokumentację kodu i wspiera lepsze narzędzia deweloperskie. TypeScript jest szeroko stosowany w dużych projektach i frameworkach takich jak Angular.",
      },
      {
        name: "React",
        description: "Biblioteka do budowania interfejsów użytkownika.",
        features: ["Komponenty", "JSX", "Hooki"],
        badge: "Popularne",
        additionalInfo:
          "React, stworzony przez Facebook, zrewolucjonizował tworzenie interfejsów użytkownika poprzez wprowadzenie koncepcji komponentów i wirtualnego DOM. React Native pozwala na tworzenie aplikacji mobilnych przy użyciu tej samej technologii. Hooki, wprowadzone w React 16.8, umożliwiają korzystanie ze stanu i innych funkcji React bez pisania klas.",
      },
      {
        name: "Vue.js",
        description: "Prosty framework do tworzenia interfejsów.",
        features: ["Reaktywność", "Komponenty", "Dyrektywy"],
        additionalInfo:
          "Vue.js, stworzony przez Evana You, jest znany z łagodnej krzywej uczenia się i elastyczności. Oferuje reaktywny system danych i komponenty podobne do React, ale z prostszą składnią. Vue 3 wprowadził Composition API, które poprawia możliwości ponownego użycia kodu i organizacji logiki.",
      },
      {
        name: "Angular",
        description: "Kompleksowy framework do aplikacji webowych.",
        features: ["Dependency Injection", "RxJS", "TypeScript"],
        additionalInfo:
          "Angular, rozwijany przez Google, to kompleksowy framework oferujący pełne rozwiązanie do tworzenia aplikacji jednostronicowych (SPA). Wykorzystuje TypeScript i oferuje zaawansowane funkcje, takie jak dwukierunkowe wiązanie danych, wstrzykiwanie zależności i narzędzia do testowania. Angular jest często wybierany do dużych, korporacyjnych projektów.",
      },
      {
        name: "Svelte",
        description: "Wydajny framework kompilujący do czystego JS.",
        features: ["Kompilacja", "Reaktywność", "Mniej kodu"],
        additionalInfo:
          "Svelte to nowoczesny framework, który wyróżnia się tym, że działa głównie w czasie kompilacji, a nie w przeglądarce. To prowadzi do mniejszych rozmiarów bundli i lepszej wydajności. Svelte oferuje prostą składnię i reaktywność bez konieczności używania wirtualnego DOM, co czyni go atrakcyjnym dla deweloperów poszukujących prostoty i wydajności.",
      },
    ],
  },
  css: {
    title: "Narzędzia i Frameworki CSS",
    icon: <Code className="h-6 w-6" />,
    technologies: [
      {
        name: "Sass",
        description: "Rozszerzenie CSS o dodatkowe funkcje.",
        features: ["Zmienne", "Zagnieżdżanie", "Mixiny"],
        icon: <Palette className="h-6 w-6" />,
        additionalInfo:
          "Sass (Syntactically Awesome Style Sheets) to preprocesor CSS, który rozszerza możliwości standardowego CSS. Wprowadza funkcje programistyczne, takie jak zmienne, zagnieżdżanie selektorów, mixiny i dziedziczenie selektorów. Sass pomaga w organizacji dużych arkuszy stylów i zwiększa produktywność poprzez redukcję powtarzalnego kodu CSS.",
      },
      {
        name: "Less",
        description: "Preprocesor CSS z dodatkowymi możliwościami.",
        features: ["Zmienne", "Funkcje", "Operacje"],
        icon: <Layers className="h-6 w-6" />,
        additionalInfo:
          "Less, podobnie jak Sass, jest preprocesorem CSS. Oferuje zmienne, zagnieżdżanie, mixiny i operacje, ale z składnią bliższą do czystego CSS. Less jest często wybierany ze względu na łatwość nauki dla osób znających CSS. Może być kompilowany po stronie klienta lub serwera, co daje elastyczność w implementacji.",
      },
      {
        name: "Bootstrap",
        description: "Framework do szybkiego tworzenia responsywnych stron.",
        features: ["Komponenty", "Grid", "Responsywność"],
        icon: <Grid className="h-6 w-6" />,
        additionalInfo:
          "Bootstrap, stworzony przez Twitter, to popularny framework CSS, który oferuje gotowe komponenty i system siatki do tworzenia responsywnych stron internetowych. Bootstrap 5 wprowadził znaczące zmiany, w tym usunięcie zależności od jQuery i ulepszenia w systemie siatki. Jest szeroko stosowany ze względu na szybkość rozwoju i spójność interfejsu użytkownika.",
      },
      {
        name: "Tailwind CSS",
        description: "Framework oparty na klasach użytkowych.",
        features: ["Utility-first", "Customizacja", "Optymalizacja"],
        icon: <Wind className="h-6 w-6" />,
        additionalInfo:
          "Tailwind CSS to framework utility-first, który pozwala na szybkie budowanie niestandardowych projektów bez opuszczania HTML. Zamiast predefiniowanych komponentów, Tailwind oferuje niskopoziomowe klasy użytkowe, które można łączyć dla tworzenia dowolnych stylów. Tailwind JIT (Just-In-Time) kompilator znacząco poprawia wydajność i zmniejsza rozmiar końcowego CSS.",
      },
    ],
  },
  backend: {
    title: "Technologie Back-end",
    icon: <Server className="h-6 w-6" />,
    technologies: [
      {
        name: "Node.js",
        description: "Środowisko uruchomieniowe JavaScript po stronie serwera.",
        features: ["Asynchroniczność", "NPM", "Szybkość"],
        icon: <Server className="h-6 w-6" />,
        additionalInfo:
          "Node.js umożliwia uruchamianie JavaScript poza przeglądarką, co pozwala na tworzenie wydajnych aplikacji serwerowych. Wykorzystuje model zdarzeń non-blocking I/O, co czyni go idealnym dla aplikacji czasu rzeczywistego i mikrousług. NPM (Node Package Manager) to największy na świecie rejestr oprogramowania open source.",
      },
      {
        name: "Express.js",
        description: "Minimalistyczny framework webowy dla Node.js.",
        features: ["Routing", "Middleware", "Integracje"],
        additionalInfo:
          "Express.js to lekki i elastyczny framework, który ułatwia tworzenie aplikacji webowych i API. Oferuje zestaw funkcji dla aplikacji internetowych, takich jak routing, obsługa żądań i odpowiedzi, oraz integracja z różnymi silnikami szablonów. Express jest często używany jako podstawa dla bardziej złożonych frameworków backendowych.",
      },
      {
        name: "Django",
        description: "Wysokopoziomowy framework Pythona do szybkiego rozwoju.",
        features: ["ORM", "Admin Panel", "Bezpieczeństwo"],
        icon: <Database className="h-6 w-6" />,
        additionalInfo:
          "Django to potężny framework Pythona, który promuje szybki rozwój i czysty, pragmatyczny design. Zawiera wbudowany ORM (Object-Relational Mapping), system autentykacji i automatycznie generowany panel administracyjny. Django kładzie duży nacisk na bezpieczeństwo, pomagając deweloperom unikać typowych błędów związanych z bezpieczeństwem.",
      },
      {
        name: "Ruby on Rails",
        description: "Framework Ruby do tworzenia aplikacji webowych.",
        features: [
          "Convention over Configuration",
          "Active Record",
          "Asset Pipeline",
        ],
        additionalInfo:
          "Ruby on Rails, znany również jako Rails, to framework, który ułatwia tworzenie aplikacji webowych poprzez założenia 'convention over configuration' i DRY (Don't Repeat Yourself). Oferuje wbudowane narzędzia do obsługi baz danych, tworzenia stron i zarządzania zasobami. Rails jest znany z produktywności i elegancji kodu.",
      },
      {
        name: "ASP.NET Core",
        description:
          "Cross-platformowy framework do budowania nowoczesnych aplikacji.",
        features: [
          "Cross-platform",
          "Wysoka wydajność",
          "Dependency Injection",
        ],
        icon: <Cloud className="h-6 w-6" />,
        additionalInfo:
          "ASP.NET Core to darmowy, open-source i cross-platformowy framework do budowania nowoczesnych, opartych na chmurze aplikacji internetowych. Oferuje wysoką wydajność, wbudowane wstrzykiwanie zależności i modułową architekturę. Jest kompatybilny z popularnymi frontendowymi frameworkami i bibliotekami.",
      },
      {
        name: "PHP (Laravel)",
        description:
          "Popularny język skryptowy z potężnym frameworkiem full-stack.",
        features: ["Eloquent ORM", "Blade Templates", "Artisan CLI"],
        icon: <Globe className="h-6 w-6" />,
        badge: "Popularny",
        additionalInfo:
          "PHP to szeroko stosowany język skryptowy do tworzenia dynamicznych stron internetowych. Laravel, najpopularniejszy framework PHP, oferuje elegancką składnię i zestaw narzędzi do tworzenia nowoczesnych aplikacji webowych. Laravel zawiera wbudowany ORM (Eloquent), system szablonów (Blade), narzędzie wiersza poleceń (Artisan) oraz wiele innych funkcji, które przyspieszają proces rozwoju i ułatwiają tworzenie skalowalnych aplikacji.",
      },
    ],
  },
};

export default technologiesData;
