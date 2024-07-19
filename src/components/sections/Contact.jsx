import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: white;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: #666;
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #fff;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid #ddd;
  outline: none;
  font-size: 18px;
  color: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #007bff;
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid #ddd;
  outline: none;
  font-size: 18px;
  color: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #007bff;
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: linear-gradient(225deg, #6a1b9a 0%, #ab47bc 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
`;

const notifySuccess = () => {
  toast.success(
    <div>
      <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '8px', color: '#4caf50' }} />
      Message sent
    </div>
  );
};

const notifyError = () => {
  toast.error(
    <div>
      <FontAwesomeIcon icon={faExclamationCircle} style={{ marginRight: '8px', color: '#f44336' }} />
      Failed to send message
    </div>
  );
};

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_qnbvlzd', 'template_j5ze414', form.current, {
        publicKey: 'SYXX_dpqLj4MPvhkH',
      })
      .then(
        () => {
          notifySuccess();
          e.target.reset();
        },
        (error) => {
          notifyError();
        }
      );
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={sendEmail}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="user_email" />
          <ContactInput placeholder="Your Name" name="user_name" />
          <ContactInputMessage placeholder="Message" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </Container>
  );
};

export default Contact;
