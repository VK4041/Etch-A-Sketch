const body = document.querySelector('body')
const grid = document.querySelector('.grid')
const sidePanel = document.querySelector('.sidePanel')

function createGrid(gridSize = 16) {
    refreshGridnPanel()
    const gridText = document.querySelector('.mainBody .text')
    gridText.textContent = `Grid size ${gridSize} x ${gridSize}`
    for (let i = 0; i < gridSize; i++) {
        let gridRow = document.createElement('div')
        gridRow.classList.add('gridRow')
        for (let j = 0; j < gridSize; j++) {
            let pixelDiv = document.createElement('div')
            pixelDiv.classList.add('pixelDiv')
            gridRow.appendChild(pixelDiv)
            pixelDiv.addEventListener('mouseover', () => {
                pixelDiv.classList.add('black')
            })
        }
        grid.appendChild(gridRow)
    }
    addSidePanel(gridSize)
}
function addSidePanel(gridSize = 16) {
    const sizeBtn = document.createElement('div')
    const eraseBtn = document.createElement('div')
    const pixels = [...document.querySelectorAll('.pixelDiv')]

    sizeBtn.classList.add('panelBtn')
    eraseBtn.classList.add('panelBtn')

    sizeBtn.textContent = `${gridSize}x${gridSize}`
    eraseBtn.textContent = `Erase`
    sidePanel.appendChild(sizeBtn)
    sidePanel.appendChild(eraseBtn)

    sizeBtn.addEventListener('click', () => {
        do {
            gridSize = parseInt(prompt('Enter grid size', 16))
            if (!Number.isInteger(gridSize)) {
                alert('Invalid grid size! Numbers only please')
            }
            else if (gridSize > 100 || gridSize < 1) {
                alert('Grid size out of bounds! Try again.')
            }
        } while (!Number.isInteger(gridSize) || gridSize > 100 || gridSize < 1)
        createGrid(gridSize)
    })
    eraseBtn.addEventListener('click', () => {
        pixels.map(each => each.classList.remove('black'))
    })
}
function refreshGridnPanel() {
    let emptyGrid = [...grid.children].map(row => {
        grid.removeChild(row)
    })
    let emptySidePanel = [...sidePanel.children].map(button => {
        sidePanel.removeChild(button)
    })
}
createGrid()