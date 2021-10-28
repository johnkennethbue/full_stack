const robot = document.querySelector('.robot')

//Challenge: Make Eve move when you click its body.


function moveRobot() {
    //add code here
    const moveMent = robot.style.transform = `translateX(${i+=10}vw)`;

    if (moveMent === `translateX(91vw)`){
        robot.style.transform = `translateY(21vw)`;
    }
    else{
        return;
    }
}
let i = 1;

robot.addEventListener('click', moveRobot)