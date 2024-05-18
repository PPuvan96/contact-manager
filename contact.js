document.getElementById('button').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
        contacts.push({ name, email });
        localStorage.setItem('contacts', JSON.stringify(contacts));
        displayContacts();
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
    }
});

function displayContacts() {
    const contactList = document.getElementById('contactList');
    contactList.innerHTML = '';
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];

    contacts.forEach((contact, index) => {
        const contactDiv = document.createElement('div');
        const contactInfo = document.createElement('div');
        contactInfo.classList.add('contact-info');
        contactInfo.textContent = `${contact.name}, ${contact.email}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
            deleteContact(index);
        });

        contactDiv.appendChild(contactInfo);
        contactDiv.appendChild(deleteButton);
        contactList.appendChild(contactDiv);
    });
}

function deleteContact(index) {
    let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    contacts.splice(index, 1);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    displayContacts();
}

document.addEventListener('DOMContentLoaded', displayContacts);
