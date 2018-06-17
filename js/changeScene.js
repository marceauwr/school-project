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
    if (choises.intel < choises.social)
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
    if (sceneFourPanel == 'party')
    {
        $sceneFourParty.style.display = 'none'
    }
    else if (sceneFourPanel == 'college')
    {
        $sceneFourCollege.style.display = 'none'
    }
    startSceneFive()
}

const $sceneFive = document.querySelector('.scene-5')
const startSceneFive = () => 
{
    $sceneFive.style.display = 'block'
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