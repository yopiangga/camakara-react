import { FaCheck, FaRegWindowClose } from "react-icons/fa"
import { useHistory } from "react-router-dom";

export default function ModalConfirmation(props) {
    
    const history = useHistory();

    const handleClose = (event) => {
        document.querySelector('.modal-confirmation').classList.remove('active');
        history.push(event.link);
    }

    return (
        <div className="modal-confirmation">
            <div className="form">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <form className="form-biodata">
                    <div className="row">
                        <div className="col-12">
                            <div className="form-group">
                                {
                                    (props != null) ? 
                                    <div className="circle">
                                        {
                                            (props.status == 1) ? 
                                            <FaCheck />
                                            :
                                            <FaRegWindowClose />
                                        }
                                    </div>
                                    :
                                    <div></div>
                                }
                            </div>    
                        </div>
                    </div>

                    <div className="btn">
                        <button className="btn-submit" name="tutuo" type="button" onClick={()=>handleClose(props)}>TUTUP</button>
                    </div>

                </form>
            </div>
        </div>
    )
}