import App from '../lib/App.js'
import Lib from '../lib/index.js';

const myLib = new Lib();
console.log("test object",myLib);  

const obj = new App()
const test = document.querySelector('#root')

test.innerHTML = 
`
<h2>test des fonctions</h2>
<p>${obj.getAllHolidays(2023)}</p>
<p>${obj.isHolidayDay("2022/04/10")}</p> 
`