import { FC, useCallback, useEffect, useState } from "react"
import ContactsItem from "../ContactsItem/ContactsItem";
import styles from './ContactsList.module.css'

import { FixedSizeList as List, ListChildComponentProps } from 'react-window';
import { useFetching } from "../../hooks/useFetching";

interface IProps{
    contacts: any[]
}

interface IRow{
    index: any,
    style: any,
}


const ContactsList: FC<IProps> = ({contacts}):any => {

    const Row: FC<IRow> = useCallback( ({ index, style }):any => {
        const contactIndex = contacts[index];
        return ( 
            contactIndex 
            && <ContactsItem styles={style} key={contactIndex.id} contact={contactIndex}/>
        )   
    },[contacts]);

    return (
        <div className={styles.contactsListWrapper}>
            <List
                className={styles.contactsList}
                height={810}
                itemCount={100}
                itemSize={55}
                width={678}
            >
                {Row}
            </List>
        </div>
        // <div>
        //    {contacts.map((contact, index) => 
        //     <ContactsItem key={contact.id} contact={contact}/>
        // )}
        // </div>
    )
}

export default ContactsList;


