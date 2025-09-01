const body = document.querySelector('body')
const grid = document.querySelector('.grid')
const sidePanel = document.querySelector('.sidePanel')
let gridSize = 16

function createGrid(gridSize = 16) {
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
}
function addSidePanel() {
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
        gridSize = parseInt(prompt('Enter grid size', 16))
        refreshGridnPanel()
        main()
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
function main() {
    createGrid(gridSize)
    addSidePanel()
}
main()