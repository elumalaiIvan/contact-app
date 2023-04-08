
import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {
    const renderContactList = props.contacts.map(contact => {
        return <ContactCard id={contact.email} contact={contact} />
    })
    return (
        <div className='ui celled list'>
            {renderContactList}
        </div>
    )
}

export default ContactList
