import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TechnologyItemProps {
  name: string;
  description: string;
  features: string[];
  additionalInfo: string;
  badge?: string;
  icon?: React.ReactNode;
}

const TechnologyItem = ({
  name,
  description,
  features,
  additionalInfo,
  badge,
  icon,
}: TechnologyItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="space-y-2 p-3 sm:p-4 bg-secondary/10 rounded-lg transition-all hover:bg-secondary/20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {icon && <div className="text-primary">{icon}</div>}
          <h3 className="text-lg sm:text-xl font-semibold">{name}</h3>
        </div>
        {badge && <Badge>{badge}</Badge>}
      </div>
      <p className="text-muted-foreground">{description}</p>
      <Button
        variant="outline"
        size="sm"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Ukryj szczegóły" : "Pokaż szczegóły"}
      </Button>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mt-2 space-y-2">
              <h4 className="font-semibold">Kluczowe cechy:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {features.map((feature, index) => (
                  <li key={index} className="text-xs sm:text-sm">
                    {feature}
                  </li>
                ))}
              </ul>
              <h4 className="font-semibold mt-4">Dodatkowe informacje:</h4>
              <p className="text-sm">{additionalInfo}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TechnologyItem;
