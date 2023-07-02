import React from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact';

const ContactPure = ( { contact } ) => {
    return (
        <div>

            <h2>
                Nombre: {contact.Nombre}
            </h2>

            <h2>
                Apellido: {contact.Apellido}
            </h2>

            <h2>
                Email: {contact.Email}
            </h2>

            <h2>
                Conectado: {contact.Conectado ? 'Contacto En Linea' : 'Contacto No Disponible'}
            </h2>
            
        </div>
    );
};


ContactPure.propTypes = {
    contact: PropTypes.instanceOf(Contact)
};


export default ContactPure;
