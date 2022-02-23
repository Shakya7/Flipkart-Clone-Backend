import { useParams } from "react-router-dom"

export const SingleItemPage=(props)=>{
    const {id}=useParams();
    return(
        <div>
            Hello {id}
        </div>
    )
}