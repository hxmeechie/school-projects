import heroImage from "@/assets/hero.webp";

const Hero = () => {
  return (
    <div
      className="relative h-96 bg-cover bg-center"
      style={{ backgroundImage: `url("${heroImage}?height=400&width=800")` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Goleniów: Brama do Pomorza Zachodniego</h1>
          <p className="text-xl text-white">Odkryj urok i potencjał naszego miasta</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
