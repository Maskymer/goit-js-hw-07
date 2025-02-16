
const categoriesList = document.getElementById('categories');  
 
const categories = categoriesList.querySelectorAll('.item');  

console.log(`Кількість категорій: ${categories.length}`);  

categories.forEach(category => {  
    const title = category.querySelector('h2').textContent;  

    const items = category.querySelectorAll('ul > li');  

    console.log(`Категорія: ${title}, Кількість елементів: ${items.length}`);  
});