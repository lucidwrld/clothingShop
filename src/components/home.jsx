import './home.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(faSearch, faBars, faBagShopping);
const Home = () => {
 console.log('am here today')
 function myFunction() {
  // Declare variables
  console.log("dsfd")
  var input, filter, ul, li, a, i;
  input = document.getElementById("mySearch");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myMenu");
  li = ul.getElementsByTagName("li");
  var foundItems = false;
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
   a = li[i].getElementsByTagName("h1")[0];
   if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
    li[i].style.display = "";
    foundItems = true;
   } else {
    li[i].style.display = "none";

   }
  }
  if (!foundItems) {
   var noItemsMessage = document.getElementById("noItemsMessage");
   noItemsMessage.style.display = "block";
  } else {
   var noItemsMessagee = document.getElementById("noItemsMessage");
   noItemsMessagee.style.display = "none";
  }
 }
 return (
  <div className="Home">
   <div className='homea'>
    <h1>Quality Clothing To Fit Your Taste</h1>
    <h2>Thank you for choosing Stiran as your fashion destination. We look forward to serving you and helping you create unforgettable fashion moments.</h2>
    <button>Shop With Us Now <FontAwesomeIcon icon="bag-shopping" /></button>
   </div>
   <div className='homeb'>
    <div className='b1'>
     <input type='text' id="mySearch" onKeyUp={myFunction} placeholder='Vintage T-shirts'></input>
     <button><FontAwesomeIcon icon="search" /></button>
    </div>
    <div className='b2'><ul id='myMenu'>
     <h1 id='noItemsMessage'> No items</h1>
     <li><h1>Men Joggers</h1></li>
     <li><h1>Women Joggers</h1></li>
     <li><h1>Unisex Joggers</h1></li>
     <li><h1>Men T-shirts</h1></li>
     <li><h1>Women T-shirts</h1></li>
     <li><h1>Unisex T-shirt</h1></li>
     <li><h1>Unisex Roundneck</h1></li>
     <li><h1>Skirts</h1></li>
     <li><h1>Men Trousers</h1></li>
     <li><h1>Women Trousers</h1></li>
    </ul></div>
   </div>
  </div>
 )
}

export default Home;