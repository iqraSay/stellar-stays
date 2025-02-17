import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // Firebase configuration file
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import Sidebar from './Sidebar';
import "../../css/style.css";

const UserManagement = () => {
    const [users, setUsers] = useState([]);

    // Fetch Users with Role "User"
    useEffect(() => {
        const fetchUsers = async () => {
            const querySnapshot = await getDocs(collection(db, "Users"));
            const usersData = querySnapshot.docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                .filter((user) => user.Role === "User"); // Filter users with Role "User"
            setUsers(usersData);
        };
        fetchUsers();
    }, []);

    // Handle Delete User
    const handleDeleteUser = async (userId) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            await deleteDoc(doc(db, "Users", userId));
            setUsers(users.filter((user) => user.id !== userId));
        }
    };

    return (
        <div className="room-management-container">
            <Sidebar />
            <h1 className="room-management-heading">User Management</h1>

            <table className="rooms-table">
                <thead>
                    <tr>
                        <th className="table-header">Username</th>
                        <th className="table-header">Gmail</th>
                        <th className="table-header">Phone Number</th>
                        <th className="table-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} className="table-row">
                            <td className="table-data">{user.Username}</td>
                            <td className="table-data">{user.Email}</td>
                            <td className="table-data">{user.Phone_no}</td>
                            <td className="table-data">
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteUser(user.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserManagement;