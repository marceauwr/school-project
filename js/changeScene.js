const $scene1 = document.querySelector('.scene-1')
const $scene2 = document.querySelector('.scene-2')

// console.log($scene1)
// console.log($scene2)

// $scene1.addEventListener('mousedown', () => {
//     $scene1.style.display = 'none'
//     $scene2.style.display = 'block'
// })

// set variables
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
// Start scene functions 
// End scene functions
const endSceneOne = () => 
{
    $sceneOne.style.display = 'none'
    console.log('End scene 1')
    invisible = false
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
    invisible = false
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
    invisible = false
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
    invisible = false
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
    startSceneFive()
}

const startSceneFive = () => 
{
    // $sceneFour.style.display = 'block'
    // a transformer en message de fin 
}

// Event changing scene
// START SCENE 1
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
// END SCENE 1

// START SCENE 2
$footballBlock.addEventListener('mousedown', () =>
{
    choises.sport += 1
    endSceneTwo()
})

$bookBlock.addEventListener('mousedown', () =>
{
    choises.intel += 1
    endSceneTwo()
})

$listeningMusicBlock.addEventListener('mousedown', () =>
{
    choises.music += 1
    endSceneTwo()
})

$videogamesBlock.addEventListener('mousedown', () =>
{
    choises.social += 1
    endSceneTwo()
})
// END SCENE 2

// START SCENE 3
$punchingballBlock.addEventListener('mousedown', () =>
{
    choises.sport += 1
    endSceneThree()
})

$studyingBlock.addEventListener('mousedown', () =>
{
    choises.intel += 1
    endSceneThree()
})

$guitarBlock.addEventListener('mousedown', () =>
{
    choises.music += 1
    endSceneThree()
})

$chairBlock.addEventListener('mousedown', () =>
{
    choises.social += 1
    endSceneThree()
})

$sofaBlock.addEventListener('mousedown', () =>
{
    choises.social += 1
    endSceneThree()
})
// END SCENE 3

// START SCENE 4

// $working.addEventListener('mousedown', () =>
// {
//     choises.stress += 1
//     choises.intel += 1
//     endSceneFour()
// })

// $speaking.addEventListener('mousedown', () =>
// {
//     choises.social += 1
//     endSceneFour()
// })

$speakersPartyBlock.addEventListener('mousedown', () =>
{
    choises.music += 1
    console.log('Ajouter la fin musique ici')
    endSceneFour()
})

$ddrPartyBlock.addEventListener('mousedown', () =>
{
    choises.social += 1
    endSceneFour()
})

$bookCollegeBlock.addEventListener('mousedown', () =>
{
    choises.intel += 1
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