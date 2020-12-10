const getClue = (callback) => {
    const xml = new XMLHttpRequest()
    xml.addEventListener('readystatechange', () => {
        if (xml.readyState !== XMLHttpRequest.DONE) return;

        if (xml.status !== 200) {
            callback(xml.status);
        } else {
            const clue = JSON.parse(xml.responseText);
            callback(null, clue);
        }
    })
    xml.open('GET', 'https://jservice.xyz/api/random-clue');
    xml.send();
}

export { getClue }
