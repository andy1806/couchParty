const addMoviesPatch = (movieObject) => {
    return fetch(`/api/movies/${movieObject.id}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(movieObject)
    }).then(response => response.json());
};

module.exports = addMoviesPatch;


