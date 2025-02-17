import React, { useState, useEffect } from "react";
import { db, auth } from "../../firebase"; // Firebase configuration file
import { collection, getDocs, deleteDoc, doc, updateDoc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Sidebar from './Sidebar';
import "../../css/style.css";

const AdminManagement = () => {
    const [admins, setAdmins] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedAdmin, setSelectedAdmin] = useState(null);
    const [username, setUsername] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    // Fetch Admins with Role "Admin"
    useEffect(() => {
        const fetchAdmins = async () => {
            const querySnapshot = await getDocs(collection(db, "Users"));
            const adminsData = querySnapshot.docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                .filter((user) => user.Role === "Admin"); // Filter admins with Role "Admin"
            setAdmins(adminsData);
        };
        fetchAdmins();
    }, []);

    // Handle Delete Admin
    const handleDeleteAdmin = async (adminId) => {
        if (window.confirm("Are you sure you want to delete this admin?")) {
            await deleteDoc(doc(db, "Users", adminId));
            setAdmins(admins.filter((admin) => admin.id !== adminId));
        }
    };

    // Handle Edit Admin (Open Modal)
    const handleEditAdmin = (admin) => {
        setSelectedAdmin(admin);
        setShowEditModal(true);
    };

    // Handle Update Admin
    const handleUpdateAdmin = async (e) => {
        e.preventDefault();
        await updateDoc(doc(db, "Users", selectedAdmin.id), {
            Username: selectedAdmin.Username,
            Email: selectedAdmin.Email,
            Phone_no: selectedAdmin.Phone_no,
        });
        setShowEditModal(false);
        setAdmins(
            admins.map((admin) =>
                admin.id === selectedAdmin.id ? selectedAdmin : admin
            )
        );
    };

    // Handle Add Admin (Open Modal)
    const handleAddAdminModal = () => {
        setUsername("");
        setPhoneNo("");
        setEmail("");
        setPassword("");
        setError("");
        setShowAddModal(true);
    };

    // Handle Save New Admin
    const handleAddAdmin = async (e) => {
        e.preventDefault();

        if (!username || !phoneNo || !email || !password) {
            setError("All fields are required!");
            return;
        }

        try {
            // Register user with Firebase Authentication
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Update profile with the username
            await updateProfile(user, { displayName: username });

            // Store additional user details in Firestore
            const userRef = doc(db, "Users", user.uid);
            await setDoc(userRef, {
                Email: email,
                Password: password,
                Role: "Admin", // Hidden and default set to "Admin"
                Phone_no: phoneNo,
                Username: username,
            });

            // Refresh the admins list
            const querySnapshot = await getDocs(collection(db, "Users"));
            const adminsData = querySnapshot.docs
                .map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }))
                .filter((user) => user.Role === "Admin");
            setAdmins(adminsData);

            setShowAddModal(false);
            navigate("/");
        } catch (error) {
            setError("Error creating account: " + error.message);
        }
    };

    return (
        <div className="room-management-container">
            <Sidebar />
            <h1 className="room-management-heading">Admin Management</h1>
            <button className="modal-button" onClick={handleAddAdminModal}>
                Add New Admin
            </button>

            <table className="rooms-table">
                <thead>
                    <tr>
                        <th className="table-header">Username</th>
                        <th className="table-header">Email</th>
                        <th className="table-header">Phone Number</th>
                        <th className="table-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {admins.map((admin) => (
                        <tr key={admin.id} className="table-row">
                            <td className="table-data">{admin.Username}</td>
                            <td className="table-data">{admin.Email}</td>
                            <td className="table-data">{admin.Phone_no}</td>
                            <td className="table-data">
                                <button
                                    className="edit-button"
                                    onClick={() => handleEditAdmin(admin)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteAdmin(admin.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Modal */}
            {showEditModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close-modal" onClick={() => setShowEditModal(false)}>
                            &times;
                        </span>
                        <h2 className="modal-heading">Edit Admin</h2>
                        <form className="edit-form" onSubmit={handleUpdateAdmin}>
                            <label className="form-label" htmlFor="username">
                                Username:
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                id="username"
                                value={selectedAdmin?.Username || ""}
                                onChange={(e) =>
                                    setSelectedAdmin({
                                        ...selectedAdmin,
                                        Username: e.target.value,
                                    })
                                }
                            />

                            <label className="form-label" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="form-input"
                                type="email"
                                id="email"
                                value={selectedAdmin?.Email || ""}
                                onChange={(e) =>
                                    setSelectedAdmin({
                                        ...selectedAdmin,
                                        Email: e.target.value,
                                    })
                                }
                            />

                            <label className="form-label" htmlFor="phone-no">
                                Phone Number:
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                id="phone-no"
                                value={selectedAdmin?.Phone_no || ""}
                                onChange={(e) =>
                                    setSelectedAdmin({
                                        ...selectedAdmin,
                                        Phone_no: e.target.value,
                                    })
                                }
                            />

                            <button type="submit" className="update-button">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Admin Modal */}
            {showAddModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close-modal" onClick={() => setShowAddModal(false)}>
                            &times;
                        </span>
                        <h2 className="modal-heading">Add New Admin</h2>
                        <form className="edit-form" onSubmit={handleAddAdmin}>
                            <label className="form-label" htmlFor="username">
                                Username:
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />

                            <label className="form-label" htmlFor="email">
                                Email:
                            </label>
                            <input
                                className="form-input"
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <label className="form-label" htmlFor="phone-no">
                                Phone Number:
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                id="phone-no"
                                value={phoneNo}
                                onChange={(e) => setPhoneNo(e.target.value)}
                            />

                            <label className="form-label" htmlFor="password">
                                Password:
                            </label>
                            <input
                                className="form-input"
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && <p className="error-message">{error}</p>}

                            <button type="submit" className="update-button">
                                Save
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AdminManagement;