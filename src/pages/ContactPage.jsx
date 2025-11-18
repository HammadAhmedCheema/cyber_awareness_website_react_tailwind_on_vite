import React, { useState } from 'react';
import Hero from '../components/Hero';
import { db } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        incidentType: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

    const heroData = {
        title: "Contact & Report Incidents",
        subtitle: "Get in touch with our security team or report suspicious activities and potential threats."
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.incidentType || !formData.message) {
            alert("Please fill out all required fields.");
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            await addDoc(collection(db, "incidents"), {
                ...formData,
                submittedAt: serverTimestamp()
            });

            setSubmitStatus('success');
            setFormData({ name: '', email: '', incidentType: '', message: '' }); // Reset form
        } catch (error) {
            console.error("Error adding document to Firebase: ", error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            <Hero title={heroData.title} subtitle={heroData.subtitle} />
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-6 text-center">Security Incident Report Form</h3>
                        
                        {submitStatus === 'success' && (
                            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-6" role="alert">
                                <p className="font-bold">Success!</p>
                                <p>Your report has been submitted. Our team will review it shortly.</p>
                            </div>
                        )}
                        {submitStatus === 'error' && (
                             <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                                <p className="font-bold">Error!</p>
                                <p>There was a problem submitting your report. Please try again later.</p>
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name *</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email Address *</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue" />
                            </div>
                            <div>
                                <label htmlFor="incidentType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Incident Type *</label>
                                <select id="incidentType" name="incidentType" value={formData.incidentType} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue">
                                    <option value="">Select an incident type...</option>
                                    <option value="phishing">Phishing Email</option>
                                    <option value="malware">Malware Detection</option>
                                    <option value="data-breach">Data Breach</option>
                                    <option value="suspicious-activity">Suspicious Activity</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Incident Description *</label>
                                <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-primary-blue focus:border-primary-blue" placeholder="Provide detailed information..."></textarea>
                            </div>
                            <div className="text-right">
                                <button type="submit" disabled={isSubmitting} className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary-blue hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue disabled:bg-gray-400">
                                    {isSubmitting ? 'Submitting...' : 'Submit Report'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactPage;