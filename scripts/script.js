document.addEventListener("DOMContentLoaded", function () {
  fetch("../datas/food_items.json")
    .then((response) => response.json())
    .then((data) => {
      const foodItemsContainer = document.getElementById(
        "food-items-container"
      );

      data.forEach((item) => {
        const foodItemDiv = document.createElement("div");
        foodItemDiv.classList.add("food-item");

        let imageHtml = "";
        if (item.image) {
          imageHtml = `<img src="${item.image}" alt="${item.name}">`;
        }

        foodItemDiv.innerHTML = `
                    ${imageHtml}
                    <h3>${item.name}</h3>
                    <p>${item.description}</p>
                    <p class="price">$${item.price.toFixed(2)}</p>
                `;

        foodItemsContainer.appendChild(foodItemDiv);
      });
    })
    .catch((error) => {
      console.error("Error fetching food items:", error);
      const foodItemsContainer = document.getElementById(
        "food-items-container"
      );
      foodItemsContainer.innerHTML =
        "<p>Could not load the menu. Please try again later.</p>";
    });
});
