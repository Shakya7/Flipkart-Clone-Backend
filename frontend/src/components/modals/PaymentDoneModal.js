import { useNavigate } from "react-router-dom";

function PaymentDoneModal(props){
    const body=document.querySelector("body");
    const navigation=useNavigate();
    return(
        <div className="modalBackground">
            <div className="modalContainer">
                <div onClick={e=>props.closeModal(false)} style={{position:"absolute", top:20,right:20, fontSize:"1.5rem",cursor:"pointer"}}>X</div>
                Hello
            </div>
        </div>
    )
}
export default PaymentDoneModal;