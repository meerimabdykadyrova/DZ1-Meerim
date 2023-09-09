const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[a-zA-Z0-9_%+-]+@([a-z]gmail.com)$/;
gmailButton.onclick = () => {
    if (regExp.test(gmailInput.value)){
        gmailResult.innerHTML = "OK"
        gmailResult.style.color = 'green'
    }else {
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}

let counter = 0
function moveBlock() {
    const child = document.querySelector('.child_block')
    child.style.left = `${counter}px`
    counter++
    if (counter <= 450){
        requestAnimationFrame(moveBlock )
    }
}
moveBlock()
console.log(`${counter}px`)