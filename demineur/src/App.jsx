import {useState} from 'react'
import createVirtualGrid from "./createVirtualGrid.jsx";
import addBombs from "./addBombs.jsx";
import './App.css'

function App() {
    const [gridSize, setGridSize] = useState(5)
    const [bombs, setBombs] = useState(3)

    const grid = createVirtualGrid(gridSize)

    addBombs(grid, bombs)
    // console.log(addBombs())


    return (
        <div className="App">
        </div>
    )
}

export default App
