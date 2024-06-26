import { Button, Form } from "react-bootstrap";

function SearchForm () {

    const handleForm = (event) => {
        event.preventDefault();
    }

    return (

        <Form className="bg-dark" onSubmit={handleForm} >
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="text-white">¿Busca alguna película?</Form.Label>
                <Form.Control type="email" placeholder="Escriba la película" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Buscar
            </Button>
        </Form>
    )
}

export default SearchForm;