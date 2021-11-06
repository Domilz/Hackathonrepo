let chicken = document.querySelector('.chicken');
let moveBy = 10;


function randomAnswer(){
    var rand = random();

    document.getElementById('answer').style.display = "block";
    document.getElementById('image').style.display = "block"; 

    switch (rand){
        case 1:
            answer_1();
            break;
        case 2:
            answer_2();
            break; 
        case 3:
            answer_3();
            break;
        case 4:
            answer_4();
            break;
        case 5:
            answer_5();
            break;
        default:
            break;
    }
}

function random(){
    // Returns random int between 1 and 5
    return Math.floor(Math.random() * 5) + 1;
}

function answer_1(){
    document.getElementById('answer').innerHTML = 'To get to the other side.';
    document.getElementById('image').src = "./img/chicken2.png";
}


//university heckling
function answer_2() {
    document.getElementById('answer').innerHTML = 'Because it would rather get run over than having to go to KTH.';
    document.getElementById('image').src = "./img/chicken.jpeg";
}

function answer_3(){
    document.getElementById('answer').innerHTML = 'Because it thought it was an egg-cellent idea.';
    document.getElementById('image').src = "./img/chicken3.jpeg";
}

function answer_4(){
    document.getElementById('answer').innerHTML = 'Because it wanted to get to the "other side".';
    document.getElementById('image').src = "./img/chicken4.jpeg";
}

function answer_5(){
    document.getElementById('answer').innerHTML = 'Because it was bored of just standing there.';
    document.getElementById('image').src = "./img/chicken5.jpeg";
}




window.addEventListener('keydown', (e) =>{
  const { style } = block;
  switch(e.key){
    case 'ArrowLeft':
      chicken.style.left = parseInt(chicken.left) - moveBy + 'px';
      break;
    case 'ArrowRight':
      chicken.style.left = parseInt(chicken.left) + moveBy + 'px';
      break;
    case 'ArrowUp':
      chicken.style.left = parseInt(chicken.top) - moveBy + 'px';
      break;
    case 'ArrowDown':
      chicken.style.left = parseInt(chicken.top) + moveBy + 'px';
      break;
  }
});
