// scene 1
const $sceneOne = document.querySelector('.scene-1')
const $baby = $sceneOne.querySelector('.baby')
const $cube = $sceneOne.querySelector('.cube')
const $cubeBaby = $sceneOne.querySelector('.cube-baby')
const $teddybear = $sceneOne.querySelector('.teddybear')
const $teddybearBaby = $sceneOne.querySelector('.teddybear-baby')
const $teddybearBlock = $sceneOne.querySelector('.teddybear-block')
const $cubeBlock = $sceneOne.querySelector('.cube-block')
let invisible = false

// START SCENE 1
$baby.addEventListener('mouseenter', () =>
{
    console.log('ouin')
    $audio.play()
})

$teddybearBlock.addEventListener('mouseenter', () =>
{
    $teddybear.style.opacity = '0'
    $baby.style.opacity = '0'
    invisible = true
    setTimeout(function(){ $teddybearBaby.style.opacity = '1' }, 300)
})

$teddybearBlock.addEventListener('mouseleave', () =>
{
    $teddybearBaby.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $teddybear.style.opacity = '1'
        $baby.style.opacity = '1'
    }, 300)
})

$cubeBlock.addEventListener('mouseenter', () =>
{
    $cube.style.opacity = '0'
    $baby.style.opacity = '0'
    invisible = true
    setTimeout(function(){ $cubeBaby.style.opacity = '1' }, 300)
})

$cubeBlock.addEventListener('mouseleave', () =>
{
    $cubeBaby.style.opacity = '0'
    invisible = false
    setTimeout(function(){
        $cube.style.opacity = '1'
        $baby.style.opacity = '1' 
    }, 300)
})