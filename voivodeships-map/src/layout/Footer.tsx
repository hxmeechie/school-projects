import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Kontakt</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <MapPin className="mr-2" /> Plac Lotników 1, 72-100 Goleniów
            </li>
            <li className="flex items-center">
              <Phone className="mr-2" /> +48 91 469 82 00
            </li>
            <li className="flex items-center">
              <Mail className="mr-2" /> ugim@goleniow.pl
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
