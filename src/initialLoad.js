const initLoad = () =>{
    //Home Page
    //DOM Cache on startup
    const image = new Image();
    const desc = document.createElement('p');
    const title = document.createElement('h1');
    const home = document.createElement('div');
    
    
    //Change text content and image source
    title.textContent = "Giovanni's Italian Cuisine";
    desc.textContent = "Giovanni's is an excellent choice for your next meal. All ingredients are locally sourced and brought to you on a silver platter(literally)";
    
    
    home.appendChild(title);
    home.appendChild(desc);
    home.appendChild(image);

    return home;
}


export default initLoad;