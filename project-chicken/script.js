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
        case 6:
            answer_6();
            break;
        case 7:
            answer_7();
            break;
        default:
            break;
    }
}

function random(){
    // Returns random int between 1 and 7
    return Math.floor(Math.random() * 7) + 1;
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

function answer_6(){
    document.getElementById('answer').innerHTML = 'Just beak-cause it could.';
    document.getElementById('image').src = "./img/chicken6.webp";
}

function answer_7(){
    document.getElementById('answer').innerHTML = 'To *bock* traffic.';
    document.getElementById('image').src = "./img/chicken7.png";
}


