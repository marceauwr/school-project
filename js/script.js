/**
 * Set Cursor parallax
 */

const cursorParallax = new CursorParallax()

/**
 * Sound mute/play
 */

const $equalizer = document.querySelector('.equalizer')
const $audio = document.querySelector('audio')
music = true;
console.log($audio)
console.log(music)

$equalizer.addEventListener('mousedown', () => 
{
    if(music)
    {
        $audio.pause()
        music = false
    }
    else 
    {
        $audio.play()
        music = true
    }
})