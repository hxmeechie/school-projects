import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import TechnologyItem from "@/components/technology-item";
import technologiesData from "@/data/technologies-data";

interface Technology {
  name: string;
  description: string;
  features: string[];
  additionalInfo: string;
  badge?: string;
  icon?: React.ReactNode;
}

interface TechnologyCategory {
  title: string;
  icon: React.ReactNode;
  technologies: Technology[];
}

interface TechnologiesListProps {
  type: "frontend" | "css" | "backend";
}

// prettier-ignore
export type TechnologiesData = Record<TechnologiesListProps["type"], TechnologyCategory>;

const TechnologiesList = ({ type }: TechnologiesListProps) => {
  const { title, icon, technologies } = technologiesData[type];

  return (
    <Card className="overflow-hidden rounded-lg">
      <CardHeader className="bg-primary text-primary-foreground">
        <CardTitle className="flex items-center gap-2 text-2xl">
          {icon}
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4 grid gap-4 sm:gap-6">
        {technologies.map((tech, index) => (
          <TechnologyItem key={index} {...tech} />
        ))}
      </CardContent>
    </Card>
  );
};

export default TechnologiesList;
