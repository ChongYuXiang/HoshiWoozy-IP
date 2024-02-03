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

let url = 'https://randomuser.me/api/';


window.addEventListener("DOMContentLoaded", (event) => {
    const el = document.getElementById('signIn');
    if (el) {
        el.addEventListener('click', function(){
            fetch(url)
            .then(response => response.json()) 
            .then(function(data){
            console.log(data)
            console.log(data.results[0].email)
            let image = document.getElementById("avatar");
            image.src = data.results[0].picture.thumbnail;
            let userTxt = document.getElementById("username");
            userTxt.textContent = data.results[0].login.username;
            let emailTxt = document.getElementById("email");
            emailTxt.textContent = data.results[0].email;
            });
            let points = document.getElementById("points");
            points.textContent = "5000"
        });
    }
});
