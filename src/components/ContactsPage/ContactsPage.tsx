import { FC, useEffect, useRef, useState } from "react"
import { ContactsFilter } from "../ContactsFilter/ContactsFilter";
import style from './ContactsPage.module.css'
import ContactsHeader from "../ContactsHeader/ContactsHeader";
import ContactsList from "../ContactsList/ContactsList";
import { useFetching } from "../../hooks/useFetching";
import apiService from "../../api/apiService";


const ContactsPage: FC = () => {
    const [isToken, setIsToken] = useState(false);
    const [contacts, setContacts] = useState([]);
    const [contactsLength, setContactsLength] = useState(0);
    const divRef = useRef<HTMLDivElement>(null);

    const [fetchToken] = useFetching(async () => {
        const bodyData = {
            "refreshToken": "059c420e-7424-431f-b23b-af0ecabfe7b8",
            "teamId": "a001994b-918b-4939-8518-3377732e4e88"
        };
        const response = await apiService.post(bodyData);
        setIsToken(true);
        localStorage.setItem('token', response.access_token);
    })
    
    const [fetchContacts, isLoading] = useFetching(async () => {
        const urlFirstFetch = '/contacts?count=100';
        const response = await apiService.get(urlFirstFetch);
        setContacts(response.contacts);
        setContactsLength(response.contacts.length);
    })

    // useEffect(() => {
    //     !isToken && fetchToken();
    //     isToken && fetchContacts();
    // },[]);


    useEffect(() => {
        !isToken && fetchToken();
        isToken && fetchContacts();
    },[isToken]);

    return (
        <div className={style.contacts}>
            <div className={style.contactsFilter}>
                <ContactsFilter />
            </div>
            <div className={style.contactsContent}>
                <div className={style.contactsContent1}>
                    <ContactsHeader contactsLength={contactsLength}/>
                    <ContactsList contacts={contacts}/>
                    <div ref={divRef}/> 
                </div>
            </div>
        </div>
    )
}

export default ContactsPage;
