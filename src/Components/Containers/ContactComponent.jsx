import React from "react";
import { Contact } from "../../models/contact";
import ContactPure from "../Pures/ContactPure";

function ContactComponent() {
    
    const nuevoContacto = new Contact('NombreEjemplo', 'AppEjemplo', 'ejemplo@gmail.com', false)
    
    
    return(
        <div>
            <ContactPure contact={nuevoContacto} />
        </div>
    )
}

export default ContactComponent;