import "./Card.css";
import deleteImg from "./delete.svg";

interface ICardProps {
    imageUrl: string;
    name: string;
}

const Card = ({ imageUrl, name }: ICardProps) => {
    return (
        <div className="card">
            <img
                src={deleteImg}
                alt="delete-button"
                width={20}
                height={20}
                className="card__delete-btn"
            />
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
