import React, { useState, useEffect } from 'react';
import { getFaqs, createFaq, deleteFaq } from '../api';
import './FAQ.css';

const FAQ = () => {
    const [faqs, setFaqs] = useState([]);
    const [newFaq, setNewFaq] = useState({ question: '', answer: '', imageUrl: '' });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchFaqs();
    }, []);

    const fetchFaqs = async () => {
        setLoading(true);
        setError(null);
        try {
            const faqData = await getFaqs();
            setFaqs(faqData);
        } catch (err) {
            setError('Failed to fetch FAQs');
        } finally {
            setLoading(false);
        }
    };

    const handleAddFaq = async () => {
        if (newFaq.question && newFaq.answer && newFaq.imageUrl) {
            try {
                const createdFaq = await createFaq(newFaq);
                setFaqs([...faqs, createdFaq]);
                setNewFaq({ question: '', answer: '', imageUrl: '' });
            } catch (err) {
                setError('Failed to add FAQ');
            }
        } else {
            setError('All fields are required');
        }
    };

    const handleDeleteFaq = async (id) => {
        try {
            await deleteFaq(id);
            setFaqs(faqs.filter(faq => faq.id !== id));
        } catch (err) {
            setError('Failed to delete FAQ');
        }
    };

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            {loading && <p>Loading...</p>}
            {error && <p className="error-message">{error}</p>}
            {faqs.map(faq => (
                <div key={faq.id} className="faq-item">
                    <img src={faq.imageUrl} alt={faq.question} className="faq-image" />
                    <div className="faq-content">
                        <h4>{faq.question}</h4>
                        <p>{faq.answer}</p>
                    </div>
                    <button onClick={() => handleDeleteFaq(faq.id)}>Delete</button>
                </div>
            ))}
            <div className="faq-form">
                <input 
                    type="text" 
                    placeholder="Question" 
                    value={newFaq.question} 
                    onChange={(e) => setNewFaq({ ...newFaq, question: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Answer" 
                    value={newFaq.answer} 
                    onChange={(e) => setNewFaq({ ...newFaq, answer: e.target.value })}
                />
                <input 
                    type="text" 
                    placeholder="Image URL" 
                    value={newFaq.imageUrl} 
                    onChange={(e) => setNewFaq({ ...newFaq, imageUrl: e.target.value })}
                />
                <button onClick={handleAddFaq}>Add FAQ</button>
            </div>
        </div>
    );
};

export default FAQ;
