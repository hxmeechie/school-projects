import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Layout, Code, Palette, Layers, Grid, Wind } from "lucide-react";
import TechnologyItem from "@/components/technology-item";

const TechnologiesList = () => {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Layout className="h-6 w-6" />
            Technologie Front-end
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4 grid gap-6">
          <TechnologyItem
            name="HTML5"
            description="Najnowsza wersja języka znaczników do tworzenia stron WWW."
            features={["Semantyczne tagi", "Multimedia", "Formularze"]}
          />
          <TechnologyItem
            name="CSS3"
            description="Język stylów do projektowania wyglądu stron."
            features={["Flexbox i Grid", "Animacje", "Zmienne"]}
          />
          <TechnologyItem
            name="JavaScript (ES6+)"
            description="Język programowania do tworzenia interaktywnych stron."
            features={["Async/await", "Moduły", "Destrukturyzacja"]}
            badge="Najpopularniejszy"
          />
          <TechnologyItem
            name="TypeScript"
            description="JavaScript z typowaniem statycznym."
            features={["Typy", "Interfejsy", "Dekoratory"]}
            badge="Typowany JS"
          />
          <TechnologyItem
            name="React"
            description="Biblioteka do budowania interfejsów użytkownika."
            features={["Komponenty", "JSX", "Hooki"]}
            badge="Popularne"
          />
          <TechnologyItem
            name="Vue.js"
            description="Prosty framework do tworzenia interfejsów."
            features={["Reaktywność", "Komponenty", "Dyrektywy"]}
          />
          <TechnologyItem
            name="Angular"
            description="Kompleksowy framework do aplikacji webowych."
            features={["Dependency Injection", "RxJS", "TypeScript"]}
          />
          <TechnologyItem
            name="Svelte"
            description="Wydajny framework kompilujący do czystego JS."
            features={["Kompilacja", "Reaktywność", "Mniej kodu"]}
          />
        </CardContent>
      </Card>

      <Card className="overflow-hidden">
        <CardHeader className="bg-primary text-primary-foreground">
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Code className="h-6 w-6" />
            Narzędzia i Frameworki CSS
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-4 grid gap-6">
          <TechnologyItem
            name="Sass"
            description="Rozszerzenie CSS o dodatkowe funkcje."
            features={["Zmienne", "Zagnieżdżanie", "Mixiny"]}
            icon={<Palette className="h-6 w-6" />}
          />
          <TechnologyItem
            name="Less"
            description="Preprocesor CSS z dodatkowymi możliwościami."
            features={["Zmienne", "Funkcje", "Operacje"]}
            icon={<Layers className="h-6 w-6" />}
          />
          <TechnologyItem
            name="Bootstrap"
            description="Framework do szybkiego tworzenia responsywnych stron."
            features={["Komponenty", "Grid", "Responsywność"]}
            icon={<Grid className="h-6 w-6" />}
          />
          <TechnologyItem
            name="Tailwind CSS"
            description="Framework oparty na klasach użytkowych."
            features={["Utility-first", "Customizacja", "Optymalizacja"]}
            icon={<Wind className="h-6 w-6" />}
          />
        </CardContent>
      </Card>
    </div>
  )
}

export default TechnologiesList;