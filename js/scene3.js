// scene 3
const $sceneThree = document.querySelector('.scene-3')
const $punchingball = $sceneThree.querySelector('.punchingball')
const $studying = $sceneThree.querySelector('.studying')
const $guitar = $sceneThree.querySelector('.guitar')
const $gaming = $sceneThree.querySelector('.gaming')
const $teenager = $sceneThree.querySelector('.teenager')
const $teenagerAnim = $sceneThree.querySelector('.teenager-anim')
const $sofa = $sceneThree.querySelector('.sofa')
const $sofaBlock = $sceneThree.querySelector('.sofa-block')
const $friend1 = $sceneThree.querySelector('.friend-1-anim')
const $friend2 = $sceneThree.querySelector('.friend-2-anim')
const $punchingballBlock = $sceneThree.querySelector('.punchingball-block')
const $punchingballAnim = $sceneThree.querySelector('.punchingball-anim')
const $studyingBlock = $sceneThree.querySelector('.studying-block')
const $studyingAnim = $sceneThree.querySelector('.studying-anim')
const $chair = $sceneThree.querySelector('.chair')
const $chairBlock = $sceneThree.querySelector('.chair-block')
const $chairAnim = $sceneThree.querySelector('.chair-anim')
const $guitarBlock = $sceneThree.querySelector('.guitar-block')
const $guitarAnim = $sceneThree.querySelector('.guitar-anim')

// Add event listener hover
$sofaBlock.addEventListener('mouseenter', () =>
{
    $teenager.style.opacity = '0'
    invisible = true
    setTimeout(function(){
         $friend1.style.opacity = '1'
         $friend2.style.opacity = '1'
         $teenagerAnim.style.opacity = '1'
    }, 300)
})

$sofaBlock.addEventListener('mouseleave', () =>
{
    $friend1.style.opacity = '0'
    $friend2.style.opacity = '0'
    $teenagerAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $teenager.style.opacity = '1'
    }, 300)
})

$punchingballBlock.addEventListener('mouseenter', () =>
{
    $teenager.style.opacity = '0'
    invisible = true
    setTimeout(function(){
        $punchingballAnim.style.opacity = '1'
    }, 300)
})

$punchingballBlock.addEventListener('mouseleave', () =>
{
    $punchingballAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $teenager.style.opacity = '1'
    }, 300)
})

$studyingBlock.addEventListener('mouseenter', () =>
{
    $teenager.style.opacity = '0'
    invisible = true
    $studying.style.opacity = '0'
    setTimeout(function(){
        $studyingAnim.style.opacity = '1'
    }, 300)
})

$studyingBlock.addEventListener('mouseleave', () =>
{
    $studyingAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $teenager.style.opacity = '1'
        $studying.style.opacity = '1'
    }, 300)
})

$chairBlock.addEventListener('mouseenter', () =>
{
    $teenager.style.opacity = '0'
    invisible = true
    $chair.style.opacity = '0'
    setTimeout(function(){
        $chairAnim.style.opacity = '1'
    }, 300)
})

$chairBlock.addEventListener('mouseleave', () =>
{
    $chairAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $teenager.style.opacity = '1'
        $chair.style.opacity = '1'
    }, 300)
})

$guitarBlock.addEventListener('mouseenter', () =>
{
    $teenager.style.opacity = '0'
    invisible = true
    $guitar.style.opacity = '0'
    setTimeout(function(){
        $guitarAnim.style.opacity = '1'
    }, 300)
})

$guitarBlock.addEventListener('mouseleave', () =>
{
    $guitarAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $teenager.style.opacity = '1'
        $guitar.style.opacity = '1'
    }, 300)
})