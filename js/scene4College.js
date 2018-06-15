const $sceneFourCollege = document.querySelector('.scene-4-college')
const $teenagerCollege = $sceneFourCollege.querySelector('.teenager-college')
const $socialCollegeBlock = $sceneFourCollege.querySelector('.social-college-block')
const $friendCollege = $sceneFourCollege.querySelector('.friend-2-college')
const $bookCollegeBlock = $sceneFourCollege.querySelector('.book-college-block')
const $bookCollege = $sceneFourCollege.querySelector('.book-college')
const $bookCollegeAnim = $sceneFourCollege.querySelector('.book-college-anim')













$socialCollegeBlock.addEventListener('mousedown', () =>
{
    choises.intel += 1
    endSceneFour()
})

$bookCollegeBlock.addEventListener('mousedown', () =>
{
    choises.social += 1
    endSceneFour()
})