import { useNavigate } from "react-router-dom";

export default function DoneSubmission(){
    const navigate = useNavigate();

function navigateBack(){

    navigate("/");
}


return(
    <>
    
    <h2>

Thank you for your submission !


</h2>

<button onClick={(e)=>navigateBack() }>Return to review page</button>

    
    
    
    </>

   

);



}