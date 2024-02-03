function navFunction1() {
    const element = document.getElementById("info");
    element.scrollIntoView({ behavior: "smooth" });
}
function navFunction2() {
    const element = document.getElementById("characters");
    element.scrollIntoView({ behavior: "smooth" });
}
function navFunction3() {
    const element = document.getElementById("updates");
    element.scrollIntoView({ behavior: "smooth" });
}
function navFunction4() {
    const element = document.getElementById("shop");
    element.scrollIntoView({ behavior: "smooth" });
}

let points = -1;

let url = 'https://randomuser.me/api/';
window.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById('signIn');
    if (el) {
        el.addEventListener('click', function(){
            fetch(url)
            .then(response => response.json()) 
            .then(function(data){
            let image = document.getElementById("avatar");
            image.src = data.results[0].picture.thumbnail;
            let userTxt = document.getElementById("username");
            userTxt.textContent = data.results[0].login.username;
            let emailTxt = document.getElementById("email");
            emailTxt.textContent = data.results[0].email;
            });
            points = 5000;
            let pointtxt = document.getElementById("points");
            pointtxt.textContent = points;
        });
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById('200p1');
    if (el) {
        el.addEventListener('click', function(){
            console.log(points)
            if (points >= 200) {
                points -= 200;
                let pointtxt = document.getElementById("points");
                pointtxt.textContent = points;
            }
            else if (points == -1) {
                window.alert("Please sign in first to purchase items.")
            }
            else {
                window.alert("You do not have enough points to purchase this item.")
            }
        });
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById('200p2');
    if (el) {
        el.addEventListener('click', function(){
            console.log(points)
            if (points >= 200) {
                points -= 200;
                let pointtxt = document.getElementById("points");
                pointtxt.textContent = points;
            }
            else if (points == -1) {
                window.alert("Please sign in first to purchase items.")
            }
            else {
                window.alert("You do not have enough points to purchase this item.")
            }
        });
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById('800p');
    if (el) {
        el.addEventListener('click', function(){
            console.log(points)
            if (points >= 800) {
                points -= 800;
                let pointtxt = document.getElementById("points");
                pointtxt.textContent = points;
            }
            else if (points == -1) {
                window.alert("Please sign in first to purchase items.")
            }
            else {
                window.alert("You do not have enough points to purchase this item.")
            }
        });
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById('2000p');
    if (el) {
        el.addEventListener('click', function(){
            console.log(points)
            if (points >= 2000) {
                points -= 2000;
                let pointtxt = document.getElementById("points");
                pointtxt.textContent = points;
            }
            else if (points == -1) {
                window.alert("Please sign in first to purchase items.")
            }
            else {
                window.alert("You do not have enough points to purchase this item.")
            }
        });
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById('700p');
    if (el) {
        el.addEventListener('click', function(){
            console.log(points)
            if (points >= 700) {
                points -= 700;
                let pointtxt = document.getElementById("points");
                pointtxt.textContent = points;
            }
            else if (points == -1) {
                window.alert("Please sign in first to purchase items.")
            }
            else {
                window.alert("You do not have enough points to purchase this item.")
            }
        });
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById('2500p');
    if (el) {
        el.addEventListener('click', function(){
            console.log(points)
            if (points >= 2500) {
                points -= 2500;
                let pointtxt = document.getElementById("points");
                pointtxt.textContent = points;
            }
            else if (points == -1) {
                window.alert("Please sign in first to purchase items.")
            }
            else {
                window.alert("You do not have enough points to purchase this item.")
            }
        });
    }
});


function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
    setTimeout(function(){
        popup.classList.toggle("show");
    }, 2000);
  }

