import { Button, Container } from "react-bootstrap";
import ListCard from "../../components/ListCard";
import MovieCard from "../../components/MovieCard";
import SearchForm from "../../components/SearchForm";

function Home () {

const movies = [
    { title:'LaLaLand', abstract:'Lalaland' },
    { title:'Whiplash', abstract:'Whiplashhhh' }
];

    return (
        <>
            <h1>Home works</h1>
            <SearchForm/>
            <Container>
                <Button className="mx-3">Lo más nuevo</Button>
                <Button className="mx-3">Lo más visto</Button>
                <Button className="mx-3">Mejor calificadas</Button>
            </Container>
            <ListCard>

                {
                    movies.map((movie, index) => {
                        return (
                            <MovieCard
                                key={index}
                                title={movie.title}
                                abstract={movie.abstract} 
                            />
                        )
                    })
                }
                
                
            </ListCard>
        </>
    )
}

export { Home };