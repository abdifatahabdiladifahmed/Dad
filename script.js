// const menuItems = [
//   { title: "Dish Menu 1", image: "images/menu one.jpg" },
//   { title: "Dish Menu 2", image: "images/menu two.jpg" },
//   { title: "Dish Menu 3", image: "images/menu three.jpg" },
//   { title: "Dish Menu 4", image: "images/menu four.jpg" },
//   { title: "Dish Menu 5", image: "images/menu five.jpg" },
//   { title: "Dish Menu 6", image: "images/menu six.jpg" },
//   { title: "Dish Menu 7", image: "images/menu seven.jpg" },
//   { title: "Dish Menu 8", image: "images/menu eight.jpg" }
// ];

// const loadMenuItems = () => {
//   const menuContainer = document.getElementById("menu-items");
//   menuContainer.innerHTML = "";

//   menuItems.forEach(item => {
//     const menuItem = document.createElement("div");
//     menuItem.classList.add("menu-item", "bg-white", "rounded", "shadow-md", "p-6");

//     menuItem.innerHTML = `
//       <img src="${item.image}" alt="${item.title}" class="w-full object-cover rounded mb-6">
//       <h3 class="text-2xl font-bold mb-4">${item.title}</h3>
//     `;

//     menuContainer.appendChild(menuItem);
//   });
// };

// document.addEventListener("DOMContentLoaded", loadMenuItems);
