


    const fetchMovies = async(genres, providers) => {
        const url = `https://fetch-movie-server.herokuapp.com/search/${genres}/${providers}`
        try {
            const response = await fetch(url)
            const json = await response.json();
            return json.results;
            
        } catch (error) {
            console.log(error)
        }}

        export default fetchMovies;