import axios from 'axios';

const API_URL = 'http://localhost:5000/faqs';

export const getFaqs = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        console.error('Error fetching FAQs:', error);
    }
};

export const createFaq = async (faq) => {
    try {
        const response = await axios.post(API_URL, faq);
        return response.data;
    } catch (error) {
        console.error('Error creating FAQ:', error);
    }
};

export const deleteFaq = async (id) => {
    try {
        await axios.delete(`${API_URL}/${id}`);
    } catch (error) {
        console.error('Error deleting FAQ:', error);
    }
};
