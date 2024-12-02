interface CardProps {
  title: string;
  content: string;
}

const Card = ({ title, content }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-semibold text-green-800 mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
