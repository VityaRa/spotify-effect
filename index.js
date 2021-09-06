const el = document.querySelector('.container')
el.style.backgroundColor = `rgb(20,20,20) no-repeat`
el.style.transition = `.3s ease-in`

const btnContainer = document.querySelector('.btn__container')
const redBtn = document.querySelector('.red')
redBtn.style.backgroundColor = `#404040`
const blueBtn = document.querySelector('.blue')
blueBtn.style.backgroundColor = `#4f4343`

const submitBtn = document.querySelector('.btn__create')
const colorInput = document.querySelector('.input__color')
const textInput = document.querySelector('.text')


const DEFAULT_COLOR = '#c2c5cc'
colorInput.value = DEFAULT_COLOR

const changeBackground = (color) => {
    el.style.backgroundColor = `${color}`
}

const mouseOver = (color) => {
    changeBackground(color)
}

const mouseLeave = () => {
    changeBackground(`rgba(20,20,20,1)`)
}

window.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains('btn__choose')) {
        const btn = e.target;
        mouseOver(btn.style.backgroundColor)
    } else {
        mouseLeave()
    }
})


// [redBtn, blueBtn].forEach(item => {
//     item.addEventListener('mouseover', () => {
//         mouseOver(item.style.backgroundColor);
//     })
//     item.addEventListener('mouseleave', () => {
//         mouseLeave()
//     })
// })

const getColor = () => {
    return colorInput.value;
}

const getText = () => {
    return textInput.value
}

const createButton = (color, text) => {
    const btn = document.createElement('button')
    btn.style.backgroundColor = color;
    btn.innerHTML = text;
    btn.classList.add('btn__choose')

    return btn
}

const clearInput = () => {
    colorInput.value = DEFAULT_COLOR
    textInput.value = ``
}

const submitClickHandler = () => {
    const color = getColor();
    const text = getText();
    if (!text.trim()) {
        alert('Введите текст кнопки!')
        return
    }
    
    const btn = createButton(color, text)
    btnContainer.appendChild(btn)
    clearInput()

}

submitBtn.addEventListener('click', () => {
    submitClickHandler()
})