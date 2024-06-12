import { Button, Card } from "react-bootstrap";

function MovieCard ({ title, abstract }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title> { title } </Card.Title>
                <Card.Text> { abstract } </Card.Text>
                <Button variant="primary">Saber más</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieCard;