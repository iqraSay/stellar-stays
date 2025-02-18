import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // Firebase configuration file
import { collection, getDocs } from "firebase/firestore";
import Sidebar from './Sidebar';
import "../../css/style.css";

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    // Fetch Feedbacks from Firestore
    useEffect(() => {
        const fetchFeedbacks = async () => {
            const querySnapshot = await getDocs(collection(db, "Feedbacks"));
            const feedbacksData = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            setFeedbacks(feedbacksData);
        };
        fetchFeedbacks();
    }, []);

    return (
        <div className="room-management-container">
            <Sidebar />
            <h1 className="room-management-heading">Feedbacks</h1>

            <table className="rooms-table">
                <thead>
                    <tr>
                        <th className="table-header">Username</th>
                        <th className="table-header">Rating</th>
                        <th className="table-header">Review</th>
                    </tr>
                </thead>
                <tbody>
                    {feedbacks.map((feedback) => (
                        <tr key={feedback.id} className="table-row">
                            <td className="table-data">{feedback.Username}</td>
                            <td className="table-data">{feedback.Rating}</td>
                            <td className="table-data">{feedback.Review}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Feedbacks;