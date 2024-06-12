import { Button, Container } from "react-bootstrap";
import MovieCard from "../../components/MovieCard";
import NavBar from "../../components/NavBar";
import SearchForm from "../../components/SearchForm";

function Home () {
    return (
        <>
            <h1>Home works</h1>
            <NavBar/>
            <SearchForm/>
            <Container>
                <Button className="mx-3">Lo más nuevo</Button>
                <Button className="mx-3">Lo más visto</Button>
                <Button className="mx-3">Mejor calificadas</Button>
            </Container>
            <MovieCard/>
        </>
    )
}

export { Home };