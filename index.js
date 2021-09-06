const el = document.querySelector('.container')
el.style.backgroundColor = `linear-gradient(0deg, rgba(20,20,20,1) 0%, rgba(20,20,20,1) 100%) no-repeat`
el.style.transition = `.3s ease-in`

const redBtn = document.querySelector('.red')
redBtn.style.backgroundColor = `#404040`
const blueBtn = document.querySelector('.blue')
blueBtn.style.backgroundColor = `#4f4343`

const changeBackground = (color) => {
    el.style.backgroundColor = `${color}`
}

const mouseOver = (color) => {
    changeBackground(color)
}

const mouseLeave = () => {
    changeBackground(`rgba(20,20,20,1)`)
}


[redBtn, blueBtn].forEach(item => {
    item.addEventListener('mouseover', () => {
        mouseOver(item.style.backgroundColor);
    })
    item.addEventListener('mouseleave', () => {
        mouseLeave()
    })
})

