// const listCategories = document.querySelector('#categories');
// console.log(`Number of categories: ${listCategories.children.length}`);

const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  console.log(
    `Category: ${item.firstElementChild.textContent}\nElements: ${item.lastElementChild.children.length}`
  );
});
