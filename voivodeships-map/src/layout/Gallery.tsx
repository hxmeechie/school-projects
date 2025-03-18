import churchPicture from "@/assets/church.webp";
import gatePicture from "@/assets/gate.webp";
import cityParkPicture from "@/assets/city-park.webp";
import industrialParkPicture from "@/assets/industrial-park.webp";
import wildernessPicture from "@/assets/wilderness.webp";
import riverPicture from "@/assets/river.webp";

const Gallery = () => {
  const places = [
    {
      name: "Kościół św. Katarzyny", //
      description: "Gotycka perła architektury",
      picture: churchPicture,
    },
    {
      name: "Brama Wolińska", //
      description: "Pozostałość średniowiecznych fortyfikacji",
      picture: gatePicture,
    },
    {
      name: "Park Miejski", //
      description: "Zielone płuca miasta",
      picture: cityParkPicture,
    },
    {
      name: "Goleniowski Park Przemysłowy",
      description: "Centrum innowacji i biznesu",
      picture: industrialParkPicture,
    },
    {
      name: "Puszcza Goleniowska", //
      description: "Raj dla miłośników przyrody",
      picture: wildernessPicture,
    },
    {
      name: "Rzeka Ina", //
      description: "Malowniczy szlak kajakowy",
      picture: riverPicture,
    },
  ];

  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Znane Miejsca</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {places.map((place, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105">
            <img
              src={place.picture} //
              alt={place.name}
              className="w-full h-64  object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
              <div className="p-4 text-white">
                <h3 className="text-xl font-bold">{place.name}</h3>
                <p>{place.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
