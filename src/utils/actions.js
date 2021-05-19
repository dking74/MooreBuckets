import axios from 'axios';

export const sendEmail = async (formFields) => {
  return axios.post('/api/v1/email', formFields);
};

export const getTestimonials = async () => {
  const { data } = await axios.get('/api/v1/testimonials');
  return data.map(testimonial => {
    const { attributes } = testimonial;
    const { fields } = attributes;
    const { text, role, reviewer, additionaldetails } = fields;
    return {
      text,
      role,
      reviewer,
      additionalDetails: additionaldetails.split(/\n/).map(detail => detail.slice(0, -1))
    }
  });
};

export const getBios = async () => {
  const { data } = await axios.get('/api/v1/bios');
  return data.map(bio => {
    const { attributes } = bio;
    const { fields } = attributes;
    const { header, description, imagefile } = fields;
    return { header, description, imageFile: imagefile };
  });
};

export default {
  sendEmail,
  getTestimonials,
  getBios,
}