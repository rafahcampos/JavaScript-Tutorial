/*
Writing into an HTML element, using innerHTML.
Writing into the HTML output using document.write().
Writing into an alert box, using window.alert().
Writing into the browser console, using console.log().
*/

/*Vantagens do JavaScript External 
It separates HTML and code
It makes HTML and JavaScript easier to read and maintain
Cached JavaScript files can speed up page loads
*/

/*Using document.write() after an HTML document is loaded, will delete all existing HTML:*/

function myFunction(){
    document.getElementById("demo").innerHTML = `Alteração do parágrafo, parte 3.`
}