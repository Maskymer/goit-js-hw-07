
document.addEventListener("DOMContentLoaded", () => {  
  
    const categories = document.querySelectorAll("#categories .item");  

    console.log(`Number of categories: ${categories.length}`);  

    categories.forEach(category => {  

        const categoryTitle = category.querySelector("h2").innerText;  

        const elements = category.querySelectorAll("ul li");  

        console.log(`Category: ${categoryTitle}`);  
        console.log(`Elements: ${elements.length}`);  
    });  
});