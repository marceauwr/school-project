// scene 2
const $sceneTwo = document.querySelector('.scene-2')
const $football = $sceneTwo.querySelector('.football')
const $book = $sceneTwo.querySelector('.book')
const $schoolboy = $sceneTwo.querySelector('.school-boy')
const $videogames = $sceneTwo.querySelector('.videogames')
const $footballAnim = $sceneTwo.querySelector('.football-anim')
const $footballBlock = $sceneTwo.querySelector('.football-block')
const $bookAnim = $sceneTwo.querySelector('.book-anim')
const $bookBlock = $sceneTwo.querySelector('.book-block')
const $videogamesAnim = $sceneTwo.querySelector('.videogames-anim')
const $videogamesBlock = $sceneTwo.querySelector('.videogames-block')
const $listeningMusicAnim = $sceneTwo.querySelector('.listening-music-anim')
const $listeningMusicBlock = $sceneTwo.querySelector('.listening-music-block')
const $ballon = $sceneTwo.querySelector('.ballon')

// Add event listener hover
$footballBlock.addEventListener('mouseenter', () =>
{
    $football.style.opacity = '0'
    $schoolboy.style.opacity = '0'
    $ballon.style.opacity = '0'
    invisible = true
    setTimeout(function(){ $footballAnim.style.opacity = '1' }, 300)
})

$footballBlock.addEventListener('mouseleave', () =>
{
    $footballAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $football.style.opacity = '1'
        $schoolboy.style.opacity = '1'
        $ballon.style.opacity = '1'
    }, 300)
})

$bookBlock.addEventListener('mouseenter', () =>
{
    $book.style.opacity = '0'
    $schoolboy.style.opacity = '0'
    invisible = true
    setTimeout(function(){ $bookAnim.style.opacity = '1' }, 300)
})

$bookBlock.addEventListener('mouseleave', () =>
{
    $bookAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $book.style.opacity = '1'
        $schoolboy.style.opacity = '1'
    }, 300)
})

$videogamesBlock.addEventListener('mouseenter', () =>
{
    $videogames.style.opacity = '0'
    $schoolboy.style.opacity = '0'
    invisible = true
    setTimeout(function(){ $videogamesAnim.style.opacity = '1' }, 300)
})

$videogamesBlock.addEventListener('mouseleave', () =>
{
    $videogamesAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $videogames.style.opacity = '1'
        $schoolboy.style.opacity = '1'
    }, 300)
})

$listeningMusicBlock.addEventListener('mouseenter', () =>
{
    $schoolboy.style.opacity = '0'
    invisible = true
    setTimeout(function(){ $listeningMusicAnim.style.opacity = '1' }, 300)
})

$listeningMusicBlock.addEventListener('mouseleave', () =>
{
    $listeningMusicAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $schoolboy.style.opacity = '1'
    }, 300)
})