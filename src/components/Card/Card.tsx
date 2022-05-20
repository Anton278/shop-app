import "./Card.css";

interface ICardProps {
    imageUrl: string;
    name: string;
}

const Card = ({ imageUrl, name }: ICardProps) => {
    return (
        <div className="card">
            <img
                src={imageUrl}
                alt={name}
                width={200}
                height={300}
                className="card__img"
            />
            <h5 className="card__name">{name}</h5>
        </div>
    );
};

export default Card;
