import Cardhomepade from "../component/Cardhomepade"
import Carousel from "../component/Carousel"
import Container from "react-bootstrap/esm/Container"
import '../style/Homepage.css'

export default function Homepage(){
    return(
        
        <>
        <Carousel/>
        <Container>
        <div className="Card-grid">
            <Cardhomepade/>
            <Cardhomepade/>
            <Cardhomepade/>
            <Cardhomepade/>
        </div>
        </Container>
        </>
    )
}