const rootURL = "http://localhost:3000/";

function getMonsters() {
    const builtURL = `${rootURL}monsters/?_limit=50&_page=1`;
    return fetch(builtURL)
        .then(r => r.json())
    }

getMonsters().then(console.log);