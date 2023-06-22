import React, { useState, useEffect } from 'react';

const ContactTable = ({ contacts, onDeleteContact }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Ім'я</th>
          <th>Прізвище</th>
          <th>Телефон</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td>{contact.name}</td>
            <td>{contact.surname}</td>
            <td>{contact.phone}</td>
            <td>
              <button onClick={() => onDeleteContact(contact.id)}>Видалити</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const ContactForm = ({ onSaveContact, onCancel }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');

  const handleSave = () => {
    onSaveContact({ name, surname, phone });
    setName('');
    setSurname('');
    setPhone('');
  };

  return (
    <div>
      <h2>Форма контакту</h2>
      <label>
        Ім'я:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Прізвище:
        <input type="text" value={surname} onChange={e => setSurname(e.target.value)} />
      </label>
      <label>
        Телефон:
        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} />
      </label>
      <button onClick={handleSave}>Зберегти</button>
      <button onClick={onCancel}>Скасувати</button>
    </div>
  );
};

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data));
  }, []);

  const handleDeleteContact = id => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
  };

  const handleSaveContact = contact => {
    setContacts(prevContacts => [...prevContacts, contact]);
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div>
      <h1>Список контактів</h1>
      {showForm ? (
        <ContactForm onSaveContact={handleSaveContact} onCancel={handleCancel} />
      ) : (
        <div>
          <ContactTable contacts={contacts} onDeleteContact={handleDeleteContact} />
          <button onClick={() => setShowForm(true)}>Додати контакт</button>
        </div>
      )}
    </div>
  );
};

export default App;