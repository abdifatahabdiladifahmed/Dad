const menuItems = [
    {
      name: "Recipe 1",
      price: "$xx",
      description: "",
      image: "images/Recipe1"
    },
    {
      name: "Recipe 2",
      price: "$xx",
      description: "",
      image: "images/recipe2"
    },
    {
      name: "recipe 2",
      price: "$xx",
      description: "",
      image: "images/recipe3"
    },
  ];
  
  function displayMenu() {
    const menuContainer = document.getElementById("menu-items");
    menuItems.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item p-4 border rounded shadow-md text-center";
      menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="w-full h-32 object-cover mb-4 rounded">
        <h3 class="text-xl font-bold">${item.name}</h3>
        <p class="text-green-700 font-semibold">${item.price}</p>
        <p class="text-gray-600">${item.description}</p>
      `;
      menuContainer.appendChild(menuItem);
    });
  }
  
  window.onload = displayMenu;
  