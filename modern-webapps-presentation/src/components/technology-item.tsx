import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface TechnologyItemProps {
  name: string
  description: string
  features: string[]
  badge?: string
  icon?: ReactNode
}

const TechnologyItem = ({ name, description, features, badge, icon }: TechnologyItemProps) => {
  return (
    <div className="space-y-2 p-4 bg-secondary/10 rounded-lg transition-all hover:bg-secondary/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <div className="text-primary">{icon}</div>}
          <h3 className="text-xl font-semibold">{name}</h3>
        </div>
        {badge && <Badge>{badge}</Badge>}
      </div>
      <p className="text-muted-foreground">{description}</p>
      <ul className="list-disc pl-5 space-y-1">
        {features.map((feature, index) => (
          <li key={index} className="text-sm">{feature}</li>
        ))}
      </ul>
    </div>
  )
}

export default TechnologyItem;

