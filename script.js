const section = document.querySelector('.contacts');
const addButton = document.querySelector('button');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const phoneInput = document.querySelector('.phone');
const relationInput = document.querySelector('.relation');

const list = [{name: 'Dana Kuntzler', email: "d.l.kuntzler@gmail.com", phone: '2487976510', relation: "Myself"}, {name: 'Max Thomas', email: "msthomas@gmail.com", phone: '5868633555', relation: "Boyfriend"}];


const add = (name, email, phone, relation) => {
list.push({ name: name, email: email, phone: phone, relation: relation});
}

const deleteItem = (index) => {
list.splice(index, 1);
}

const display =() => {
    section.innerHTML = '';
    for (let i = 0; i < list.length; i++) {
      const item = list[i];
    const div = document.createElement('div');
    const nameParagraph = document.createElement('p');
    const emailParagraph = document.createElement('p');
    const phoneParagraph = document.createElement('p');
    const relationParagraph = document.createElement('p');
    const button = document.createElement('button');
    nameParagraph.innerText = `Name ${item.name}`;
    emailParagraph.innerText = `Email ${item.email}`;
    phoneParagraph.innerText = `Phone ${item.phone}`;
    relationParagraph.innerText = `Relation ${item.relation}`;
    
    
    //button.img.src = "trash.jpg";
    button.innerText = `Delete`;
          button.addEventListener('click', () => {
            deleteItem(i);
            display();
          });
  div.appendChild(nameParagraph);
  div.appendChild(emailParagraph);
  div.appendChild(phoneParagraph);
  div.appendChild(relationParagraph);
  div.appendChild(button);
  section.appendChild(div);
    }
  }
  
  addButton.addEventListener('click',() => {
   add(nameInput.value, emailInput.value, phoneInput.value, relationInput.value);
   display();
  })
  
  display();
  