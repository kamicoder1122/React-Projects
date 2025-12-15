import style from './Contact.module.css';
import Button from './Button';
import { TbMessageDots } from "react-icons/tb";
import { PiPhoneBold } from "react-icons/pi";
import { HiMail } from 'react-icons/hi';
const ContactForm = () => {
  event.preventDefault();
  const onSubmit = (event) => {
    console.log("name",event.target[0].value);
    console.log("email",event.target[1].value);
    console.log("text",event.target[2].value);
  }


  return( 
  <section className={style.container}>
    <div className={style.contact_form}>
      <div className={style.top_btn}>
      <Button text='VIA SUPPORT CHAT' icon={<TbMessageDots fontSize= "24px" /> } />
      <Button onClick={onViaCallSubmit} text='VIA CALL' icon={<PiPhoneBold fontSize= "24px" />} />
      </div>
      <Button isOutline={true} text='VIA EMAIL FORM' icon={<PiPhoneBold fontSize= "24px" />} />
      <form onClick={onSubmit}>
        <div className={style.form_control}>
          <label htmlFor='name'>Name</label>
        <input type='text' name='name' />
        </div>
        <div className={style.form_control}>
          <label htmlFor='email'>Email</label>
        <input type='email' name='email' />
        </div>
        <div className={style.form_control}>
          <label htmlFor='text'>Text</label>
        <textarea name='text' rows="8" />
        </div>
        <div style={{display: 'flex', justifyContent: 'end'}}>
          <Button text="SUBMIT BUTTON" />
        </div>
      </form>
      <TbMessageDots />
      <PiPhoneBold />
      <HiMail />
      <Button />
    </div>
    <div className= {style.contact_image}>
      <img src='/images/Service 24_7-pana 1.svg' alt='contact image' />
    </div>
  </section> 
  )
} 

export default ContactForm;
