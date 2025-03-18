import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { voivodeships } from "@/data/voivodeships";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import map from "@/assets/voivodeships-map.webp";

const PolandMap = () => {
  const navigate = useNavigate();
  const [activeRegion, setActiveRegion] = useState<string | null>(null);

  const handleRegionClick = (voivodeshipId: string) => {
    navigate(`/voivodeship/${voivodeshipId}`);
  };

  const handleRegionHover = (voivodeshipId: string | null) => {
    setActiveRegion(voivodeshipId);
  };

  // Define clickable areas for each voivodeship
  const clickableAreas = [
    { id: "zachodniopomorskie", shape: "poly", coords: "0,100,160,100,160,280,0,280" },
    { id: "pomorskie", shape: "poly", coords: "160,50,320,50,320,200,160,200" },
    { id: "warminsko-mazurskie", shape: "poly", coords: "320,50,600,50,600,200,320,200" },
    { id: "podlaskie", shape: "poly", coords: "600,50,800,50,800,300,600,300" },
    { id: "lubuskie", shape: "poly", coords: "0,280,160,280,160,450,0,450" },
    { id: "wielkopolskie", shape: "poly", coords: "160,200,320,200,320,450,160,450" },
    { id: "kujawsko-pomorskie", shape: "poly", coords: "320,200,450,200,450,300,320,300" },
    { id: "mazowieckie", shape: "poly", coords: "450,200,600,200,600,450,450,450" },
    { id: "lubelskie", shape: "poly", coords: "600,300,800,300,800,550,600,550" },
    { id: "dolnoslaskie", shape: "poly", coords: "0,450,160,450,160,600,0,600" },
    { id: "lodzkie", shape: "poly", coords: "320,300,450,300,450,500,320,500" },
    { id: "swietokrzyskie", shape: "poly", coords: "450,450,600,450,600,550,450,550" },
    { id: "podkarpackie", shape: "poly", coords: "600,550,800,550,800,700,600,700" },
    { id: "opolskie", shape: "poly", coords: "160,600,250,600,250,700,160,700" },
    { id: "slaskie", shape: "poly", coords: "250,550,400,550,400,700,250,700" },
    { id: "malopolskie", shape: "poly", coords: "400,550,600,550,600,700,400,700" },
  ];

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-none shadow-md">
        <CardContent className="p-0">
          <div className="relative">
            <img src={map} alt="Mapa Polski z województwami" className="w-full h-auto" useMap="#poland-map" />
            <map name="poland-map">
              {clickableAreas.map((area) => (
                <area
                  key={area.id}
                  shape={area.shape}
                  coords={area.coords}
                  alt={voivodeships[area.id].name}
                  onClick={() => handleRegionClick(area.id)}
                  onMouseEnter={() => handleRegionHover(area.id)}
                  onMouseLeave={() => handleRegionHover(null)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </map>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        <TooltipProvider>
          {Object.values(voivodeships).map((voivodeship) => (
            <Tooltip key={voivodeship.id}>
              <TooltipTrigger asChild>
                <Button
                  variant={activeRegion === voivodeship.id ? "default" : "outline"}
                  className="w-full justify-start h-auto py-2 px-3 text-left"
                  onClick={() => handleRegionClick(voivodeship.id)}
                  onMouseEnter={() => handleRegionHover(voivodeship.id)}
                  onMouseLeave={() => handleRegionHover(null)}>
                  {voivodeship.name}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Stolica: {voivodeship.capital}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>
  );
};

export default PolandMap;
