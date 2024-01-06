const menuPage = () =>{
    //Menu Page
    //DOM Cache on startup
    const menu = document.createElement('div');
    const item = document.createElement('div');
    const itTitle = document.createElement('h3');
    const text = document.createElement('p');
    const itImage = new Image();
    
    item.classList.add('item')

    itTitle.textContent = 'Spaghetti'
    text.textContent ='Spaghetti pasta served with marinara and garlic bread(Not unlimited).';

    item.appendChild(itTitle);
    item.appendChild(text);
    item.appendChild(itImage);

    menu.appendChild(item);

    return menu;
}
export default menuPage;