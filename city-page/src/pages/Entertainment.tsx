const EntertainmentPage = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="text-4xl font-bold mb-6">Gra memory</h1>
      <iframe
        src="https://learningapps.org/watch?v=pxicmkqot24"
        className="w-full aspect-video"
        allowFullScreen></iframe>
      <h1 className="text-4xl font-bold mb-6">Gra w odgadnij słowo</h1>
      <iframe
        src="https://learningapps.org/watch?v=preuykdct24"
        className="w-full aspect-video"
        allowFullScreen></iframe>
    </div>
  );
};

export default EntertainmentPage;
