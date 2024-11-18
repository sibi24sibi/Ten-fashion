import { useState } from "react";
import axios from "axios";

const ContactForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        Subject: "",
        message: "",
    });

    const [responseMessage, setResponseMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:8000/contactForm", formData);
            setResponseMessage(response.data.message);
        } catch (error) {
            console.error("Error submitting form:", error);
            setResponseMessage(error.response?.data?.error || "An error occurred");
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            {responseMessage && (
                <div className={`alert ${responseMessage.includes("success") ? "bg-green-500" : "bg-red-500"} text-white p-2 mb-4`}>
                    {responseMessage}
                </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Subject</label>
                    <input
                        type="text"
                        name="Subject"
                        value={formData.Subject}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md"
                    ></textarea>
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default ContactForm;
