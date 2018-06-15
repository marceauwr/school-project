// scene 1
const $sceneOne = document.querySelector('.scene-1')
const $baby = $sceneOne.querySelector('.baby')
const $cube = $sceneOne.querySelector('.cube')
const $cubeBaby = $sceneOne.querySelector('.cube-baby')
const $teddybear = $sceneOne.querySelector('.teddybear')
const $teddybearBaby = $sceneOne.querySelector('.teddybear-baby')
const $teddybearBlock = $sceneOne.querySelector('.teddybear-block')
const $cubeBlock = $sceneOne.querySelector('.cube-block')

// START SCENE 1

$baby.addEventListener('mouseenter', () =>
{
    console.log('ouin')
})

$teddybearBlock.addEventListener('mouseenter', () =>
{
    $teddybear.style.opacity = '0'
    $baby.style.opacity = '0'
    setTimeout(function(){ $teddybearBaby.style.opacity = '1' }, 300)
})

$teddybearBlock.addEventListener('mouseleave', () =>
{
    $teddybearBaby.style.opacity = '0'
    setTimeout(function(){ 
        $teddybear.style.opacity = '1'
        $baby.style.opacity = '1'
    }, 300)
})

$cubeBlock.addEventListener('mouseenter', () =>
{
    $cube.style.opacity = '0'
    $baby.style.opacity = '0'
    setTimeout(function(){ $cubeBaby.style.opacity = '1' }, 300)
})

$cubeBlock.addEventListener('mouseleave', () =>
{
    $cubeBaby.style.opacity = '0'
    
    setTimeout(function(){
        $cube.style.opacity = '1'
        $baby.style.opacity = '1' 
    }, 300)
})

$cubeBlock.addEventListener('mousedown', () =>
{
    choises.intel += 1
    console.log(choises.intel)
    endSceneOne()
})

$teddybearBlock.addEventListener('mousedown', () =>
{
    choises.social += 1
    console.log(choises.social)
    endSceneOne()
})