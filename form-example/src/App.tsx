import { useState } from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

const App = () => {
  const [date, setDate] = useState<Date>()

  return (
    <ScrollArea className="h-screen">
      <div className="h-full flex justify-center items-center mx-6">
        <Card>
          <CardHeader>
            <CardTitle>Formularz Przykładowy</CardTitle>
            <CardDescription>Proszę wypełnić poniższy formularz.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Imię</Label>
                  <Input id="name" placeholder="Jan Kowalski" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Adres e-mail</Label>
                  <Input id="email" type="email" placeholder="jan@januszex.pl" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Hasło</Label>
                <Input id="password" type="password" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="country">Kraj</Label>
                <Select>
                  <SelectTrigger id="country">
                    <SelectValue placeholder="Wybierz kraj" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="poland">Polska</SelectItem>
                    <SelectItem value="germany">Niemcy</SelectItem>
                    <SelectItem value="france">Francja</SelectItem>
                    <SelectItem value="italy">Włochy</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Data urodzenia</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground")}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {date ? date.toLocaleDateString() : <span>Wybierz datę</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                  </PopoverContent>
                </Popover>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Płeć</Label>
              <RadioGroup defaultValue="male">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="male" id="male" />
                  <Label htmlFor="male">Mężczyzna</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="female" id="female" />
                  <Label htmlFor="female">Kobieta</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other" id="other" />
                  <Label htmlFor="other">Nie chcę podawać</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="newsletter" />
              <Label htmlFor="newsletter">Chcę otrzymywać newsletter</Label>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">Wyślij</Button>
          </CardFooter>
        </Card>
      </div>
    </ScrollArea>
  );
};

export default App;
