let http = new XMLHttpRequest();
http.open('get', 'menu.json', true);
http.send();
http.onload = function(){
   if(this.readyState == 4 && this.status == 200){
      let dishes = JSON.parse(this.responseText);
      let starters = "";
      for(let item of dishes.menu.starters){
         starters += `
            <div class="dish">
               <div class="image"><img src="${item.image}" alt="${item.name}"></div>
               <p class="name">${item.name}</p>
               <p class="description">${item.description}</p>
               <p class="rating"><i class="fa-solid fa-star"></i>${item.rating}</p>
               <p class="price">
               <span>₵</span>
                <span>${item.price}</span> 
               </p>
               <button class="cart"> Order </button>
            </div>
         `;
      }
      document.querySelector("#starter").innerHTML = starters;

      let main_course = "";
      for(let item of dishes.menu.main_courses){
         main_course += `
            <div class="dish">
                <div class="image"><img src="${item.image}" alt="${item.name}"></div>
               <p class="name">${item.name}</p>
               <p class="description">${item.description}</p>
               <p class="rating"><i class="fa-solid fa-star"></i>${item.rating}</p>
               <p class="price">
               <span>₵</span>
                <span>${item.price}</span> 
               </p>
               <button class="cart"> Order </button>
            </div>
         `;
      }
      document.querySelector("#main_course").innerHTML = main_course;

      let sides = "";
      for(let item of dishes.menu.sides){
         sides += `
            <div class="dish">
                <div class="image"><img src="${item.image}" alt="${item.name}"></div>
               <p class="name">${item.name}</p>
               <p class="description">${item.description}</p>
               <p class="rating"><i class="fa-solid fa-star"></i>${item.rating}</p>
               <p class="price">
               <span>₵</span>
                <span>${item.price}</span> 
               </p>
               <button class="cart"> Order </button>
            </div>
         `;
      }
      document.querySelector("#sides").innerHTML = sides;

      let drinks = "";
      for(let item of dishes.menu.drinks){
         drinks += `
            <div class="dish">
                <div class="image"><img src="${item.image}" alt="${item.name}"></div>
               <p class="name">${item.name}</p>
               <p class="description">${item.description}</p>
               <p class="rating"><i class="fa-solid fa-star"></i>${item.rating}</p>
               <p class="price">
               <span>₵</span>
                <span>${item.price}</span> 
               </p>
               <button class="cart"> Order </button>
            </div>
         `;
      }
      document.querySelector("#drinks").innerHTML = drinks;
      

      let desserts = "";
      for(let item of dishes.menu.desserts){
         desserts += `
            <div class="dish">
                <div class="image"><img src="${item.image}" alt="${item.name}"></div>               <p class="name">${item.name}</p>
               <p class="description">${item.description}</p>
               <p class="rating"><i class="fa-solid fa-star"></i>${item.rating}</p>
               <p class="price">
               <span>₵</span>
                <span>${item.price}</span> 
               </p>
               <button class="order"> Order </button>
            </div>
         `;
      }
      document.querySelector("#dessert").innerHTML = desserts;
  
    }

}