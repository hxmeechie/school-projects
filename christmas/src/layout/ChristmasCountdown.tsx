import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ChristmasCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const christmas = new Date(new Date().getFullYear(), 11, 24); // December is 11 (0-indexed)
      const now = new Date();
      const difference = christmas.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Odliczanie do Świąt</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-3xl font-bold">{timeLeft.days}</div>
            <div className="text-sm text-muted-foreground">Dni</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{timeLeft.hours}</div>
            <div className="text-sm text-muted-foreground">Godzin</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{timeLeft.minutes}</div>
            <div className="text-sm text-muted-foreground">Minut</div>
          </div>
          <div>
            <div className="text-3xl font-bold">{timeLeft.seconds}</div>
            <div className="text-sm text-muted-foreground">Sekund</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChristmasCountdown;
