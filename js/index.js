const rootURL = "http://localhost:3000/";
const testMonster = {"name":"Chronos","age":4005,"description":"god of time","id":1}

function getMonsters() {
    const builtURL = `${rootURL}monsters/?_limit=50&_page=1`;
    return fetch(builtURL)
        .then(r => r.json())
    }

function createMonsterDiv(monsterObj) {
    const div = document.createElement('div'),
        h2 = document.createElement('h2'),
        h3 = document.createElement('h3'),
        p = document.createElement('p');
    h2.textContent = monsterObj.name;
    h3.textContent = monsterObj.age;
    p.textContent = monsterObj.description;
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(p);
    return div;
    }   

    const monsterDiv = createMonsterDiv(testMonster);
    console.log(monsterDiv);