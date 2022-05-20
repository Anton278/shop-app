import { useDispatch } from "react-redux";
import "./Card.css";
import deleteImg from "./delete.svg";
import edit from "./edit.svg";
import DeleteConfirmationModal from "../DeleteConfirmationModal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface ICardProps {
    imageUrl: string;
    name: string;
    id: number;
}

const Card = ({ imageUrl, name, id }: ICardProps) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
        useState(false);

    return (
        <>
            <div className="card">
                <img
                    src={deleteImg}
                    alt="delete-button"
                    width={20}
                    height={20}
                    className="card__delete-btn"
                    onClick={() =>
                        setShowDeleteConfirmationModal(
                            (prevValue: boolean) => !prevValue
                        )
                    }
                />
                <img
                    src={edit}
                    alt="edit-button"
                    width={20}
                    height={20}
                    className="card__edit-btn"
                    onClick={() => navigate(`/product/${id}`)}
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
            {showDeleteConfirmationModal && (
                <DeleteConfirmationModal
                    id={id}
                    setShowDeleteConfirmationModal={
                        setShowDeleteConfirmationModal
                    }
                />
            )}
        </>
    );
};

export default Card;
