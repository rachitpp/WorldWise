import {  useSearchParams } from "react-router-dom"

function Map() {
    const [searchParams,setSearchParams] = useSearchParams();
    
    if(!searchParams) return <h1>Maps</h1>
    const lat=searchParams.get('lat');
    const lng=searchParams.get('lng');
    return (
        <div>
            {lat}{lng}
           
        </div>

    )
}

export default Map
