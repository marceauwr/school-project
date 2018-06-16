const $scene1 = document.querySelector('.scene-1')
const $scene2 = document.querySelector('.scene-2')

console.log($scene1)
console.log($scene2)

$scene1.addEventListener('mousedown', () => {
    $scene1.style.display = 'none'
    $scene2.style.display = 'block'
})
