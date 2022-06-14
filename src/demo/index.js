import App from '../lib/App.js'
import Lib from '../lib/index.js';

const myLib = new Lib();
console.log("test object",myLib);  

const obj = new App()
const test = document.querySelector('#root')

test.innerHTML = 
`
<h2>test des fonctions</h2>
<p>${obj.getAllHolidays(2024)}</p>
<p>${obj.isHolidayDay("2024/5/1")}</p> 
`