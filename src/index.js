import initLoad from './initialLoad.js';
import contactPage from './contact';
import menuPage from './menu';
import sImage from './Spaghetti.jpg';
import rImage from './restImage.jpg';
import './styles.css';



function createElement(){
    //Import variables
    const content = document.getElementById('content');
    const init = initLoad();
    const mPage = menuPage();
    const cPage = contactPage();

    //Header element logic is inside index.js because no available solution for tab switching on imported elements
    
    //Header element
    const header = document.createElement('header');
    const headerList = document.createElement('ul');
    const home = document.createElement('li');
    const menu = document.createElement('li');
    const contact = document.createElement('li');

    home.setAttribute('id','selected');
    menu.setAttribute('id', 's');
    contact.setAttribute('id', 's');
    //Text for header buttons
    home.textContent = "Home";
    menu.textContent = "Menu";
    contact.textContent = "Contact Us";
    //Append to header
    headerList.appendChild(home);
    headerList.appendChild(menu);
    headerList.appendChild(contact);
    header.appendChild(headerList);

    mPage.firstChild.lastChild.src = sImage;
    init.lastChild.src = rImage;

    document.body.appendChild(header);
    content.appendChild(init);

    //tab switching logic goes here
    headerList.addEventListener('click', (e)=> {
        
        if(!e.target.nextSibling){
            //Contact Us
            e.target.setAttribute('id','selected');
            e.target.previousSibling.setAttribute('id', 's');
            e.target.parentNode.firstChild.setAttribute('id', 's');
            headerList.setAttribute('id', 'contact-us');
            content.removeChild(content.firstChild);
            content.appendChild(cPage);
        } else if(!e.target.previousSibling){
            //Home
            e.target.setAttribute('id','selected');
            e.target.nextSibling.setAttribute('id', 's');
            e.target.parentNode.childNodes[2].setAttribute('id', 'd');
            headerList.setAttribute('id', 'home');
            content.removeChild(content.firstChild);
            content.appendChild(init);
        } else {
            //Menu
            e.target.setAttribute('id','selected');
            e.target.nextSibling.setAttribute('id', 's');
            e.target.previousSibling.setAttribute('id', 'd');
            headerList.setAttribute('id', 'menu');
            //Remove current page and set menu page
            content.removeChild(content.firstChild);
            content.appendChild(mPage);
        }
    });



    return content;
}
document.body.appendChild(createElement());
/**
 * <h1>Giovanni's Italian Cuisine</h1>
        <p>Giovanni's is an excellent choice for your next meal. All ingredients are locally sourced and brought to you on a silver platter(literally)</p>
 */