// Отримуємо кількість категорій (кількість ліжок з class='item')
const items = document.querySelectorAll("#categories .item");

console.log("Number of categories:", items.length);

items.forEach((item) => {
  // Отримуємо заголовок категорії
  const categoryTitle = item.querySelector("h2").textContent;

  // Отримуємо всі елементи li в цій категорії (включаючи вкладені)
  const categoryItems = item.querySelectorAll("li");

  console.log("Category:", categoryTitle);
  console.log("Elements:", categoryItems.length);
});
