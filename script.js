const menuItems = [
  { title: "Dish Menu 1", image: "images/2.jpg" },
  { title: "Dish Menu 2", image: "images/11.jpg" },
  { title: "Dish Menu 3", image: "images/15.jpg" },
  { title: "Dish Menu 4", image: "images/18.jpg" },
  { title: "Dish Menu 5", image: "images/21.jpg" },
  { title: "Dish Menu 6", image: "images/22.jpg" },
  { title: "Dish Menu 7", image: "images/23.jpg" },
  { title: "Dish Menu 8", image: "images/24.jpg" }
];

const loadMenuItems = () => {
  const menuContainer = document.getElementById("menu-items");
  menuContainer.innerHTML = "";

  menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item", "rounded", "shadow-lg", "p-6", "bg-white");

    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="rounded mb-4">
      <h3 class="text-2xl font-bold mb-2">${item.title}</h3>
      <p class="text-gray-700">A delightful description of ${item.title} goes here.</p>
    `;

    menuContainer.appendChild(menuItem);
  });
};

document.addEventListener("DOMContentLoaded", loadMenuItems);