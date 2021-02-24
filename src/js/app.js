const goblin = document.createElement('img');
goblin.src = 'https://github.com/netology-code/ahj-homeworks/raw/simplification/dom/pic/goblin.png';
goblin.alt = 'goblin';

const cells = Array.from(document.getElementsByClassName('board__cell'));

const changeImg = () => {
    const filteredCells = cells.filter(cell => cell.getElementsByTagName('img').length === 0);
    const newGoblinCell = Math.floor(Math.random() * filteredCells.length);
    filteredCells[newGoblinCell].append(goblin);
}

setInterval(changeImg, 2000);