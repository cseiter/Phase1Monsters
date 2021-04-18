const rootURL = "http://localhost:3000/";

function getMonsters() {
    const builtURL = `${rootURL}monsters/?_limit=50&_page=1`;
    fetch(builtURL)
        .then(r => r.json())
        .then (data => console.log(data));
    }

getMonsters();