const loop = () =>
{
    requestAnimationFrame(loop)
    if(invisible)
    {
        $baby.style.opacity = '0'
        $schoolboy.style.opacity = '0'
        $teenager.style.opacity = '0'
        $teenagerParty.style.opacity = '0'
        $teenagerCollege.style.opacity = '0'
    }
    else
    {
        $schoolboy.style.opacity = '1'
        $teenager.style.opacity = '1'
        $teenagerParty.style.opacity = '1'
        $teenagerCollege.style.opacity = '1'
    }
}

loop()