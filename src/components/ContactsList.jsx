import React from "react";
import { useSelector } from "react-redux";
import { useGetContactQuery, useDeleteContactMutation } from "../redux/contactsSlice";

const Contacts = () => {
    const filter = useSelector(state => state.filter.value);
    const [deleteContact] = useDeleteContactMutation();
    const { data: items = [] } = useGetContactQuery();
    const filteredContacts = filter ? items.filter(({name}) =>
        name.toLowerCase().includes(filter.toLowerCase())) : items;
    return (
        <ul>
            {filteredContacts.map(({ name, id, phone }) => {
                return (
                    <li key={id}>{name}: {phone} <button onClick={() => deleteContact(id)}>Delete</button></li>
                )
            })}
        </ul>
    );
};

export default Contacts;