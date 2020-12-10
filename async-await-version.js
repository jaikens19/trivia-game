const getClue = async () => {
    const response = await fetch('https://jservice.xyz/api/random-clue')
    if(response.ok === true){
        return await response.json()
    } else {
        throw new Error(response.status)
    }
}

export { getClue }
