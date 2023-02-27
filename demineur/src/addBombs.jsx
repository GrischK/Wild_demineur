const addBombs = (grid, bombs) => {
    const bombsCoords = [];
    const getRandomCoord = (grid) => {
        const col = Math.floor(Math.random() * grid.length);
        const row = Math.floor(Math.random() * grid.length);

        return {col, row}
    }

    while (bombsCoords.length < bombs) {
        const coord = getRandomCoord(grid)
        bombsCoords.push(coord)
    }
    console.log(bombsCoords)

}

export default addBombs