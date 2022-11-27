'use strict'

const contactTxt = document.querySelector('.contact-info');
const addContact = document.querySelector('.add-contact');
const removeContact = document.querySelector('.remove-contact')
const grid = document.querySelector('.grid');
const output = document.querySelector('.output');
const contactNum = document.querySelector('.contact-num')

const cells = document.querySelectorAll('.cell');

const contactList = [];
const nameVal = /^[a-zA-Z]+ [a-zA-Z]+, [a-zA-Z]+, [^\s@]+@[^\s@]+.[^\s@]+$/
let count = 0;

class Contact {

    constructor (name, city, email){
        this.name = name;
        this.city = city;
        this.email = email; 
    }
}

contactNum.innerText = `${count} Contacts`;

function createContact() {
    if (nameVal.test(contactTxt.value)){
        if(count < 18){
            const contactInfo = contactTxt.value.split(', ');
            const newContact = new Contact (contactInfo[0], contactInfo[1], contactInfo[2]);


            const newSlot = document.createElement('div');
            const name = document.createElement('p');
            const city = document.createElement('p');
            const email = document.createElement('p');

            name.innerText = `Name: ${newContact.name}`;
            city.innerText = `City: ${newContact.city}`
            email.innerText = `Email: ${newContact.email}`

            newSlot.append(name, city, email);
            newSlot.classList.add('cell');

            contactList.push(newContact);
            grid.append(newSlot);
            count++;
            contactNum.innerText = `${count} Contacts`;
        }
        else{
            output.innerText = 'Contacts are full';
        }
    }
    else{
        output.innerText = 'Please enter valid information';
    }
};

addContact.addEventListener('click', () => {
    createContact();
});

for (const cell of cells){
    cell.onclick = function(e) { this.parentNode.removeChild(this) };
}


