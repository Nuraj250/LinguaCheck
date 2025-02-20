type CardProps = {
    title: string;
    content: string;
  };
  
  const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
      <div className="bg-white shadow-md p-4 rounded-lg">
        <h3 className="text-lg font-bold">{title}</h3>
        <p>{content}</p>
      </div>
    );
  };
  
  export default Card;
  