const menuItems = [
  { title: "Dish Menu 1", image: "Public/images/2.jpg" },
  { title: "Dish Menu 2", image: "Public/images/11.jpg" },
  { title: "Dish Menu 3", image: "Public/images/15.jpg" },
  { title: "Dish Menu 4", image: "Public/images/18.jpg" },
  { title: "Dish Menu 5", image: "Public/images/21.jpg" },
  { title: "Dish Menu 6", image: "Public/images/22.jpg" },
  { title: "Dish Menu 7", image: "Public/images/23.jpg" },
  { title: "Dish Menu 8", image: "Public/images/24.jpg" }
];

const loadMenuItems = () => {
  const menuContainer = document.getElementById("menu-items");
  menuContainer.innerHTML = "";

  menuItems.forEach(item => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item", "bg-white", "rounded", "shadow-md", "p-6");

    menuItem.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="w-full object-cover rounded mb-6">
      <h3 class="text-2xl font-bold mb-4">${item.title}</h3>
    `;

    menuContainer.appendChild(menuItem);
  });
};

document.addEventListener("DOMContentLoaded", loadMenuItems);
