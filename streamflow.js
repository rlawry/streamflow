var dateNow = new Date();
var dateEnd = new Date();
var answered = false;
var points = 0;
var spun = false;
var beginColor = 0;
var otherColor = 0;
var spinSpeed, spinDirection, direction;

document.addEventListener("DOMContentLoaded", function(){
    
    window.onkeyup = function(event){
        if(event.code === 'Space'){
            if(spun==false){
                answered = false;
                spun = true;
                document.getElementById("status").innerHTML = "";
                dateEnd = new Date();
                dateEnd.setSeconds(dateNow.getSeconds() + 1); 

                spinSpeed = Math.random()*1.5;
                spinDirection = generateSpinDirection();
                spinSpeed = spinSpeed * spinDirection;
                document.querySelectorAll(".pie").forEach(item => {item.classList.remove("flashcorrect");});
                document.querySelectorAll(".pie").forEach(item => {item.classList.remove("flashwrong");});
            }
            else if (spun ==true && answered == false){
                document.getElementById("status").innerHTML = "You need to guess";
            }
        }
    };
    document.getElementById("spin-button").addEventListener("click", function() {
        if(spun==false){
            answered = false;
            spun = true;
            document.getElementById("status").innerHTML = "";
            dateEnd = new Date();
            dateEnd.setSeconds(dateNow.getSeconds() + 1); 

            spinSpeed = Math.random()*1.5;
            spinDirection = generateSpinDirection();
            spinSpeed = spinSpeed * spinDirection;
            document.querySelectorAll(".pie").forEach(item => {item.classList.remove("flashcorrect");});
            document.querySelectorAll(".pie").forEach(item => {item.classList.remove("flashwrong");});
        }
        else if (spun ==true && answered == false){
            document.getElementById("status").innerHTML = "You need to guess";
        }
    });
    var buttons = document.querySelectorAll(".btn").length;
    for (var i = 0; i < buttons ; i++) {
        document.querySelectorAll(".btn")[i].addEventListener("click", function(e) {
                console.log(plane.rotation.z + " current rotation");
                if(spun == true && answered == false){
                    testDirection(this.value);
                }
                else if(spun == false){
                    document.getElementById("status").innerHTML = "You need to spin";
                }
                else if(answered == true){
                    document.getElementById("status").innerHTML = "You need to guess";
                }
            }
        );

    }
});


function generateSpinDirection(){
    if(Math.random() < 0.5){return 1}
    else return -1;
}

function determineAngle(e){
    var result;
    var cycles = Math.floor(e / (2*Math.PI));
    if(Math.abs(cycles)>=1){
        result = e - cycles*2*Math.PI;
        return result;
    }
    else{
        return e;
    }
}

var correct = false;
var levelPoints = 10;
var dir;
var level1Correction = Math.PI/18
var level2Correction = 19 * Math.PI/18;

function testDirection(e){
    if(points < levelPoints){
        dir = determineAngle(plane.rotation.z-level1Correction);
    }
    else{
        dir = determineAngle(plane.rotation.z-level2Correction-level1Correction);
        console.log(dir + " direction");
    }
    var n=0;
    var fluff = 40;

    n = (dir * 180/Math.PI);
    if(dir<0){n += 2*Math.PI;}
    
    console.log("Button " + e + " pressed. N value = " + n + ".  +Fluff = " + (n + fluff) + " and - Fluff = " + (n - fluff) +".");
    if(answered == false && spun == true){
        if ((337.5 - fluff < n || n <= 22.5 + fluff) && e == 2) {

            correct = true;
        }
        else if (22.5 - fluff < n && n <= 67.5 + fluff && e == 1) {
            correct = true;
        }
        else if (67.5 - fluff < n && n <= 112.5 + fluff && e == 0) {
            correct = true;
        }
        else if (112.5 - fluff < n && n <= 157.5 + fluff && e == 7) {
            correct = true;
        }
        else if (157.5 - fluff < n && n <= 202.5 + fluff && e == 6) {
            correct = true;
        }
        else if (202.5 - fluff < n && n <= 247.5 + fluff && e == 5) {
            correct = true;
        }
        else if (247.5 - fluff < n && n <= 292.5 + fluff && e == 4) {
            correct = true;
        }
        else if (292.5 - fluff < n && n <= 337.5 + fluff && e == 3) {
            correct = true;
        }
        else{
            correct = false;
        }
        if(correct){
            document.querySelectorAll(".pie").forEach(item => {item.classList.add("flashcorrect");});
            points++;
            document.getElementById("status").innerHTML = "Correct!";
            if(beginColor+6<=255){
                beginColor += 6;
                otherColor += 3;
            }
            renderer.setClearColor("rgb("+otherColor+","+beginColor+","+otherColor+")");
            document.body.style.backgroundColor = "rgb("+otherColor+","+beginColor+","+otherColor+")";
            if(points==levelPoints){
                const loader2 = new THREE.TextureLoader();
                loader2.load(
                    'stream2.png',
                    function(texture){
                        plane.material = new THREE.MeshBasicMaterial({
                            map: texture
                        });
                    });
                    document.getElementById("status").innerHTML = "Correct! Next Level";
            }
        }
        else if(!correct){
            console.log("WRONG");
            if(points>0){points--;}
            document.querySelectorAll(".pie").forEach(item => {item.classList.add("flashwrong");});
            document.getElementById("status").innerHTML = "WRONG (maybe)!  Lose Points!";
            if(beginColor-6>=0){
                beginColor -= 6;
            }
        }
        answered = true;
        spun = false;
    }
    document.getElementById("points").innerHTML = "Points: " + points;
}

import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.124/build/three.module.js'; 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 130, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth*.5, window.innerHeight*.5 );

document.body.appendChild( renderer.domElement );
var plane;
const loader = new THREE.TextureLoader();
loader.load(
    'streamIMG.png',
    function(texture){
        const material = new THREE.MeshBasicMaterial({
            map: texture
        })
        plane = new THREE.Mesh(new THREE.PlaneGeometry(8, 8),material);
        plane.overdraw = true;

        scene.add(plane);
        console.log(plane.rotation.z + " initial rotation");
    });

camera.position.z = 3;
document.getElementById("container").appendChild(renderer.domElement);

window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth*.5, window.innerHeight*.5 );

}

const animate = function () {
    requestAnimationFrame( animate );
    dateNow = new Date();
    if(dateNow < dateEnd){
        plane.rotation.z += spinSpeed;
    }
    renderer.render( scene, camera );
};

animate();


