// const resize = () => 
// {
//     $sceneOne.style.width = window.innerWidth
//     $sceneOne.style.height = window.innerHeight
// }

// window.addEventListener('resize', resize)
// resize()

/**
 * Getting DOM elements 
 */
// scene 1
// scene 2
// scene 3

// scene 4
const $sceneFourWorkingPlace = document.querySelector('.scene-4-working-place')
const $working = $sceneFourWorkingPlace.querySelector('.working')
const $speaking = $sceneFourWorkingPlace.querySelector('.speaking')



const $sceneFourStreet = document.querySelector('.scene-4-street')
const $running = $sceneFourStreet.querySelector('.running')
/**
 * Set variable
 */

const choises = {
    social: 0,
    intel: 0,
    family: 0,
    music: 0,
    sport: 0,
    stress: 0,
}
let sceneFourPanel = ''

console.log(choises)

/**
 * Set Cursor parallax
 */

const cursorParallax = new CursorParallax()

/**
 * Set functions
 */

const endSceneOne = () => 
{
    $sceneOne.style.display = 'none'
    console.log('End scene 1')
    startSceneTwo()
}

const startSceneTwo = () => 
{
    $sceneTwo.style.display = 'block'
}
const endSceneTwo = () => 
{
    $sceneTwo.style.display = 'none'
    console.log('End scene 2')
    startSceneThree()
}

const startSceneThree = () => 
{
    $sceneThree.style.display = 'block'
}
const endSceneThree = () => 
{
    $sceneThree.style.display = 'none'
    console.log('End scene 3')
    startSceneFour()
}

const startSceneFour = () => 
{
    if (choises.intel == 0)
    {
        $sceneFourWorkingPlace.style.display = 'block'
        sceneFourPanel = 'workingplace'
        console.log('Working place')
    }
    else if (choises.sport == 2)
    {
        $sceneFourStreet.style.display = 'block'
        sceneFourPanel = 'street'
        console.log('Street')
    }
    else if (choises.intel < choises.social)
    {
        $sceneFourParty.style.display = 'block'
        sceneFourPanel = 'party'
        console.log('Party')
    }
    else
    {
        $sceneFourCollege.style.display = 'block'
        sceneFourPanel = 'college'
        console.log('College')
    }
}
const endSceneFour = () =>
{
    if (sceneFourPanel == 'workingplace')
    {
        $sceneFourWorkingPlace.style.display = 'none'
    }
    else if (sceneFourPanel == 'street')
    {
        $sceneFourStreet.style.display = 'none'
    }
    else if (sceneFourPanel == 'party')
    {
        $sceneFourParty.style.display = 'none'
    }
    else if (sceneFourPanel == 'college')
    {
        $sceneFourCollege.style.display = 'none'
    }
}
// const endSceneFour = () => 
// {
//     $sceneFour.style.display = 'none'
//     // startSceneFive()
// }

// START SCENE 1
// scene1.js
// END SCENE 1

// START SCENE 2
// scene2.js
// END SCENE 2

// START SCENE 3
// scene3.js
// END SCENE 3

// START SCENE 4

$working.addEventListener('mousedown', () =>
{
    choises.stress += 1
    choises.intel += 1
    endSceneFour()
})

$speaking.addEventListener('mousedown', () =>
{
    choises.social += 1
    endSceneFour()
})





// $playing.addEventListener('mousedown', () =>
// {
//     choises.stress -= 1
//     endSceneFour()
// })

// $running.addEventListener('mousedown', () =>
// {
//     choises.sport += 1
//     console.log('Ajouter la fin sport ici')
//     endSceneFour()
// })

// END SCENE 4
// START SCENE 5

// END SCENE 5
// START SCENE 6

// END SCENE 6


