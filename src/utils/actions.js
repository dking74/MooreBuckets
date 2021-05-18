import axios from 'axios';

export const sendEmail = async (formFields) => {
  return axios.post('/api/v1/email', formFields);
};

export default {
  sendEmail
}