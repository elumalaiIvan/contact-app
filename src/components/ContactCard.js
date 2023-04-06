const ContactCard = ({ contact }) => {

    return (
        <div className="item" >
            <img className="ui avatar image" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="user" />
            <div className='content'>
                <div className='header'>{contact.name}</div>
                <div>{contact.email}</div>
            </div>
            <i className="trash alternate outline icon" style={{ color: "red", marginTop: "7px" }}></i>
        </div>
    )
}

export default ContactCard;