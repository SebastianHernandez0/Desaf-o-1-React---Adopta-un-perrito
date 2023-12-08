import { Card } from "react-bootstrap"
import Tags from "./Tags"
function MyCard({ img, name, descr,color,texto }) {
    return (
        <div className="cards__card">
            <Card style={{ width: '20rem',height:'47rem', padding:0}}>
                <Card.Img variant="top" src={img} style={{ width: '19rem' }} />
                <Card.Body>
                    <Card.Title style={{textAlign:"center"}}>{name}</Card.Title>
                    <Card.Text>
                        {descr}
                    </Card.Text>
                </Card.Body>
                <Tags color={color} texto={texto}></Tags>
            </Card>
        </div>
    )
}

export default MyCard