import Cardhomepade from "../component/Cardhomepade"
import Carousel from "../component/Carousel"
import Container from "react-bootstrap/esm/Container"
import '../style/Homepage.css'
import dataclassrooms from "../Data/fourClass"

export default function Homepage(){

    const dataElement = dataclassrooms.map((data, index) =>{
        return <Cardhomepade key={index} data={data} />;
    })

    return(
        
        <>
        <Carousel/>
        <Container>
        <div className="Card-grid">
            {dataElement}
        </div>
        </Container>
        </>
    )
}