import Button from '../Button/Button';
import {MdMessage} from "react-icons/md";
import {FaPhoneAlt} from "react-icons/fa";
import {HiMail} from "react-icons/hi";
import styles from './Contact.module.css';
import { useState } from 'react';

function ContactForm() {
    // let name = "Name";
    // let email = "Name@gmail.com";
    // let text = "About Yourself";

    const [name,setName] = useState("Name");
    const [email,setEmail] = useState("Name@gmail.com");
    const [text,setText] = useState("About Yourself");

    const onViaCallSubmit = () =>{
        console.log("I am from call");
    };
    const onSubmit = (event) =>{
        event.preventDefault();
        // name = event.target[0].value;
        // email = event.target[1].value;
        // text = event.target[2].value;
        // console.log("name",event.target[0].value);
        // console.log("email",event.target[1].value);
        // console.log("text",event.target[2].value);
        // console.log(event);
        // console.log(name,email,text);

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

    }
  return (
    <section className={styles.container}>
        <div className={styles.contact_form}>
            <div className={styles.top_btn}>
                <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px"/>}/>
                <Button onClick={onViaCallSubmit} text="VIA CALL" icon={<FaPhoneAlt fontSize="24px"/>}/>
            </div>
            <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px"/>}/>
            <form onSubmit={onSubmit}>
                <div className={styles.form_control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' />
                </div>
                <div className={styles.form_control}>
                    <label htmlFor="text">Text</label>
                    <textarea name='text' rows="8" />
                </div>
                <div style={{display: "flex", justifyContent: "end"}}>
                    <Button text="SUBMIT"/>
                </div>
                <div>{name+" "+email+" "+text}</div>
            </form>
        </div>
        <div className={styles.contact_image}>
            <img src="\images\Service 24_7-pana 1.svg" alt="contct image" />
        </div>
    </section>
  )
}

export default ContactForm