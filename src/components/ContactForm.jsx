import { useState } from "react";
import shortid from "shortid";
import styles from "./styles/styles.module.css";
import { useAddContactMutation, useGetContactQuery } from "../redux/contactsSlice";

export default function Form() {
    const { data: items } = useGetContactQuery();
    const [addContact] = useAddContactMutation();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    
const nameInputId = shortid.generate();

    const handleChange = e => {
        const { name, value } = e.currentTarget;
        if (name === 'name') {
            setName(value)
        }
        if (name === 'number') {
            setPhone(value)
        }
    };

    const handleAddContact = e => {
        e.preventDefault();
        setContact({
            id: shortid.generate(),
            name,
            phone
        });
        setName('');
        setPhone('');
    };

    const setContact = value => {
        if (items.every(({ name }) =>
            name.toLowerCase() !== value.name.toLowerCase())) {
            addContact(value)
        } else {
            alert(`${value.name} is already in contacts`);
        }
    };

    return (
        <form onSubmit={handleAddContact}>
            <label htmlFor={nameInputId} className={styles.label}>
                Name
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    id={nameInputId}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label htmlFor={nameInputId} className={styles.label}>
                Number
                <input
                    type="tel"
                    name="number"
                    value={phone}
                    onChange={handleChange}
                    id={nameInputId}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button type="submit">Add contacts</button>
        </form>
    );
};