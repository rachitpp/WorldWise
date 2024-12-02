import {  useNavigate, useParams } from "react-router-dom";

function IndividualCity() {
    const navigate = useNavigate();
    const {id}= useParams();
    console.log(id);
    return (
        <div>
            City Name {id}
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    )
}

export default IndividualCity;
  