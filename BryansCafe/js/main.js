// Função para carregar o menu do XML
document.addEventListener("DOMContentLoaded", function() {
    fetch('xml/menu.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(data, "application/xml");

            // Meals Section
            const meals = xml.getElementsByTagName("meal");
            const mealItems = document.getElementById("meal-items");

            Array.from(meals).forEach(meal => {
                const name = meal.getElementsByTagName("name")[0].textContent;
                const price = meal.getElementsByTagName("price")[0].textContent;
                const description = meal.getElementsByTagName("description")[0].textContent;

                const row = `
                    <tr>
                        <td>${name}</td>
                        <td>${price}</td>
                        <td>${description}</td>
                    </tr>
                `;
                mealItems.innerHTML += row;
            });

            // Coffee Section
            const coffees = xml.getElementsByTagName("coffee");
            const coffeeItems = document.getElementById("coffee-items");

            Array.from(coffees).forEach(coffee => {
                const size = coffee.getElementsByTagName("size")[0].textContent;
                const price = coffee.getElementsByTagName("price")[0].textContent;
                const description = coffee.getElementsByTagName("description")[0].textContent;

                const row = `
                    <tr>
                        <td>${size}</td>
                        <td>${price}</td>
                        <td>${description}</td>
                    </tr>
                `;
                coffeeItems.innerHTML += row;
            });

            // Other Beverages Section
            const otherBeverages = xml.getElementsByTagName("beverage");
            const otherBeveragesItems = document.getElementById("other-beverages");

            Array.from(otherBeverages).forEach(beverage => {
                const name = beverage.getElementsByTagName("name")[0].textContent;
                const price = beverage.getElementsByTagName("price")[0].textContent;

                const row = `
                    <tr>
                        <td>${name}</td>
                        <td>${price}</td>
                    </tr>
                `;
                otherBeveragesItems.innerHTML += row;
            });
        })
        .catch(error => console.error("Error loading XML:", error));
});