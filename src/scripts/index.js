import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import data from '../DATA.json';   
console.log(data);

data.restaurants.forEach((restaurant)=>{
    let datares = `<div  class= "card">
            <div class= "card-img"><img tabindex="0" src="${restaurant.pictureId}" alt="${restaurant.name}"></div>
            <div  class="card-content">
                <div tabindex="0"class="card-title">${restaurant.name}</div>
                <div class="inner-collapse">
                <div tabindex="0"class="card-city">Location : ${restaurant.city}</div>
                <div tabindex="0"class="card-rating">Rating : ${restaurant.rating}</div>
                </div>
                <p tabindex="0"class="card-deskripsi">${restaurant.description.substring(0,100)}...</p>
            </div>

    ` ;
    document.getElementById("card-container").innerHTML += datares;

});


const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
 
 
hamburgerButtonElement.addEventListener("click", event => {
 drawerElement.classList.toggle("open");
 event.stopPropagation();
});
