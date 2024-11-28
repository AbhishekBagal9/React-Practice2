import React, { useState } from 'react'
import Button from '../Button/Button'
import './ContactForm.css'
import { TiMessage } from "react-icons/ti";
import { IoMdMail } from "react-icons/io";

const ContactForm = () => {
  const [name,SetName] = useState("")
  const [email,SetEmail] = useState("")
  const [text,SetText] = useState("")

 
  const onsubmit = (e) => {
    e.preventDefault();
    SetName(e.target[0].value)
    SetEmail(e.target[1].value)
    SetText(e.target[2].value)
  };
  
  return (
    <section className='main'>
       <div className="contact-form">
       <div>
          {name + " " + email + " " + text}
        </div>
        <div className="topbtns">
        <div className="primary-btns">
            <Button title="VIA SUPPORT CHAT" icon={<TiMessage style={{fontSize:"24px"}}/>}/>
            <Button  title="VIA CALL" icon={<TiMessage style={{fontSize:"24px"}}/>}/>
            </div>
        <Button className="secondry-btn" title="VIA EMAIL FORM" icon={<IoMdMail style={{fontSize:"24px"}}/>}/>
       </div>
       <div className="form-controler">
       <form action="
       " onSubmit={onsubmit}>
        <label htmlFor="name" id='name'>Name</label>
        <input type="" name='name'/>
        <label htmlFor="email" id='email'>E-mail</label>
        <input type="" name='email'/>
        <label htmlFor="text" id='text'>TEXT</label>
        <textarea type="" name='text' rows="6"/>
        <div className="submit" style={{display:'flex',justifyContent:'end'}}>
        <Button title="SUBMIT"/>
        
        </div>
        
       </form>
       </div>
       </div>
  
        <div className="image">
            <img src="/Images/Service 24_7-pana 1.png" alt="" />
        </div> 
</section>
  )
}

export default ContactForm;