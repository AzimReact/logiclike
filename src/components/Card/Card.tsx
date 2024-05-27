import '../../styles/card.scss'

type CardProps = {
  name: string;
  image: string;
  bgColor: string;
};

const Card: React.FC<CardProps> = ({ name, bgColor, image }) => {
  return (
    <div className='card-item'>
      <div className='card-image' style={{ backgroundColor: bgColor }}>
        <img src={image} alt={name} />
      </div>
      <div className='card-name'>{name}</div>
    </div>
  );
};

export default Card;