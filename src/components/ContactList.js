
import React from 'react'
import ContactCard from './ContactCard'
import { Link } from "react-router-dom"

function ContactList(props) {

    const renderContactList = props.contacts.map(contact => {
        return <ContactCard id={contact.id} contact={contact} clickHandler={props.getContactID} />
    })
    return (
        <div className="ui main">
            <h2>Contact List
                <Link to="/add">
                    <button className="ui button blue right">Add Contacts</button>
                </Link>
            </h2>
            <div className='ui celled list'>
                {renderContactList}
            </div>
        </div>

    )
}

export default ContactList
