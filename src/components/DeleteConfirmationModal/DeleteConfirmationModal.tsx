import { useDispatch } from "react-redux";
import "./DeleteConfirmationModal.css";
import { DELETE_PRODUCT } from "../../actions";

interface IDeleteConfirmationModalProps {
    id: number;
    setShowDeleteConfirmationModal: any;
}
const DeleteConfirmationModal = (props: IDeleteConfirmationModalProps) => {
    const { id, setShowDeleteConfirmationModal } = props;
    const dispatch = useDispatch();

    return (
        <div className="modal">
            <h3 className="modal__title">
                Are you sure you want to delete the item?
            </h3>
            <div className="modal__footer">
                <button
                    type="button"
                    className="custom-success-btn"
                    onClick={() =>
                        dispatch({ type: DELETE_PRODUCT, payload: id })
                    }
                >
                    Confirm
                </button>
                <button
                    type="button"
                    className="custom-danger-btn"
                    onClick={() =>
                        setShowDeleteConfirmationModal(
                            (prevValue: boolean) => !prevValue
                        )
                    }
                >
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
