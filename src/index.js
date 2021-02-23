import "./styles.scss";

const goblin = document.createElement('img');
goblin.src = 'https://github.com/netology-code/ahj-homeworks/blob/simplification/dom/pic/goblin.png?raw=true';
goblin.alt = 'goblin';
console.log(goblin);

const cells = Array.from(document.getElementsByClassName('board__cell'));

const changeImg = () => {
    const filteredCells = cells.filter(cell => cell.getElementsByTagName('img').length === 0);
    const newGoblinCell = Math.floor(Math.random() * filteredCells.length);
    filteredCells[newGoblinCell].append(goblin);
}

setInterval(changeImg, 2000);

