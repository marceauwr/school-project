const $sceneFourCollege = document.querySelector('.scene-4-college')
const $teenagerCollege = $sceneFourCollege.querySelector('.teenager-college')
const $bookCollegeBlock = $sceneFourCollege.querySelector('.book-college-block')
const $bookCollege = $sceneFourCollege.querySelector('.book-college')
const $bookCollegeAnim = $sceneFourCollege.querySelector('.book-college-anim')

$bookCollegeBlock.addEventListener('mouseenter', () =>
{
    $teenagerCollege.style.opacity = '0'
    $bookCollege.style.opacity = '0'
    invisible = true
    setTimeout(function(){
         $bookCollegeAnim.style.opacity = '1'
    }, 300)
})

$bookCollegeBlock.addEventListener('mouseleave', () =>
{
    $bookCollegeAnim.style.opacity = '0'
    invisible = false
    setTimeout(function(){ 
        $teenagerCollege.style.opacity = '1'
        $bookCollege.style.opacity = '1'
    }, 300)
})