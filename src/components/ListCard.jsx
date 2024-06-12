import { Container } from "react-bootstrap";

function ListCard( {children} ) {

    return (

        <>
            <Container>
                {children}
            </Container>
        </>
    
    )
}

export default ListCard;