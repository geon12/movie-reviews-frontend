import Movie from "./Movie";

function Home({movie}) {
    return (
        <div>
            <h1>Movie Reviews</h1>
            <Movie movie={movie}/>
        </div>
    )
}

export default Home


