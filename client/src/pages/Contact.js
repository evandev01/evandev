import React, { useState } from 'react';
import ContactComp from '../components/ContactComp';
import NavTabs from '../components/NavTabs';
import HeaderContact from '../components/HeaderContact';
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

function Contact() {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        subject: '',
        message: ''
    });

    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    // FIRST NAME event handler
    function onFirstNameChange(e) {
        setFormState({
            firstName: e.target.value
        })
    };
    // LAST NAME event handler
    function onLastNameChange(e) {
        setFormState({
            lastName: e.target.value
        })
    };
    // EMAIL event handler
    function onEmailChange(e) {
        setFormState({ email: e.target.value })
    };
    // OCCUPATION event handler
    function onOccupationChange(e) {
        setFormState({ occupation: e.target.value })
    };
    // SUBJECT event handler
    function onSubjectChange(e) {
        setFormState({ subject: e.target.value })
    };
    // MESSAGE event handler
    function onMessageChange(e) {
        setFormState({ message: e.target.value })
    };
    // Reset form event handler
    function resetForm() {
        setFormState({
            firstName: '',
            lastName: '',
            email: '',
            occupation: '',
            message: ''
        })
    }
    // Form submit event handler
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
        resetForm();
        const sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);
        console.log(process.env.SENDGRID_API_KEY);

        // Message from form
        const msg = {
            to: 'evanbero@evandev.com',
            from: formState.email, // Change to your verified sender
            subject: formState.subject,
            text: {
                occupation: formState.occupation,
                message: formState.message
            } 
        }
          sgMail
            .send(msg)
            .then(() => {
              console.log('Email sent')
            })
            .catch((error) => {
              console.error(error)
            })
    };


    return (
        <div id='contact-body'>
            <HeaderContact />
            <NavTabs />
            <ContactComp
                firstNameChange={onFirstNameChange}
                lastNameChange={onLastNameChange}
                emailChange={onEmailChange}
                occupationChange={onOccupationChange}
                subjectChange={onSubjectChange}
                messageChange={onMessageChange}
                submit={handleSubmit}
            />
        </div>
    )
};

export default Contact;
