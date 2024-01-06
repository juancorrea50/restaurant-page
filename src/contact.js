const contactPage = () =>{
    //Menu Page
    //DOM Cache on startup
    const contactInfo = document.createElement('div');
    const person = document.createElement('div');
    const name = document.createElement('h3');
    const email = document.createElement('p');
    const number = document.createElement('p');
    
    person.classList.add('person');

    name.textContent = 'GioVanni'
    email.textContent ='GioVannisItalian@FakeDomain.com';
    number.textContent = '555-2345';

    person.appendChild(name);
    person.appendChild(email);
    person.appendChild(number);

    contactInfo.appendChild(person);

    return contactInfo;
}
export default contactPage;