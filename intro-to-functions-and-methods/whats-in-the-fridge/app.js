const downButton = document.querySelector('#down')
const upButton = document.querySelector('#up')
const buyListDisplay = document.querySelector('#first-list')
const fridgeListDisplay = document.querySelector('#second-list')

const buyList = ['chicharon', 'buko pie', 'mango', 'bacon', ]
const fridge = ['nuggets', 'avocado', 'chicken', 'salmon', 'shrimp']

//Challenge: Please fill the fridge array with 5 items of your choice. 


//Challenge 2: You have bought some chicharon.
//Please remove it from the buyList and add it to the items in fridge.


//Challenge 3: Write a function that will remove an item from the fridge,
//and put it in the buyList, on the press of the moveUp button.

function moveToArrays() {
    buyListDisplay.innerHTML = buyList
    fridgeListDisplay.innerHTML = fridge
    }
    moveToArrays();


function moveUp(){
    //your code
   let removeFridge = fridge.pop();
   buyList.push(removeFridge);
   moveToArrays();
}

upButton.addEventListener('click', moveUp)

//Challenge 4: Write a function that will remove the last item in the buyList, 
//and put it in the fridge.


function moveDown(){
    //your code
    let removeBuy =  buyList.pop();
    fridge.unshift(removeBuy);
    moveToArrays();
}




downButton.addEventListener('click', moveDown)

