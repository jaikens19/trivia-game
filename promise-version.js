const getClue = () => {
    return fetch('https://jservice.xyz/api/random-clue') // ensure to return fetch when in a function
        .then((response) => {
           if(response.ok === true){
            return response.json()
           } else {
            throw new Error(response.status) //returns number status e.g. 404
           }
        })
}

export { getClue }
