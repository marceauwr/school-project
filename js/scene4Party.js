const $sceneFourParty = document.querySelector('.scene-4-party')
const $speakersPartyBlock = $sceneFourParty.querySelector('.speakers-party-block')
const $speakersParty = $speakersPartyBlock.querySelector('.speakers-party')
const $speakersPartyAnim = $sceneFourParty.querySelector('.speakers-party-anim')
const $ddrPartyBlock = $sceneFourParty.querySelector('.ddr-party-block')
const $ddrParty = $ddrPartyBlock.querySelector('.ddr-party')
const $ddrPartyAnim = $ddrPartyBlock.querySelector('.ddr-party-anim')
const $teenagerParty = $sceneFourParty.querySelector('.teenager-party')

// Listen to hover event
$speakersPartyBlock.addEventListener('mouseenter', () =>
{
    $teenagerParty.style.opacity = '0'
    invisible = true
    setTimeout(function(){ $speakersPartyAnim.style.opacity = '1' }, 300)
})

$speakersPartyBlock.addEventListener('mouseleave', () =>
{
    $speakersPartyAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $teenagerParty.style.opacity = '1'
    }, 300)
})

$ddrPartyBlock.addEventListener('mouseenter', () =>
{
    $teenagerParty.style.opacity = '0'
    $ddrParty.style.opacity = '0'
    invisible = true
    setTimeout(function(){ 
        $ddrPartyAnim.style.opacity = '1' 
    }, 300)
})

$ddrPartyBlock.addEventListener('mouseleave', () =>
{
    $ddrPartyAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $teenagerParty.style.opacity = '1'
        $ddrParty.style.opacity = '1'
    }, 300)
})