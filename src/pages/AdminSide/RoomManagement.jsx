import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // Firebase configuration file
import { collection, doc, getDocs, deleteDoc, updateDoc, addDoc } from "firebase/firestore";
import Sidebar from './Sidebar';
import "../../css/style.css";

const RoomManagement = () => {
    const [roomTypes, setRoomTypes] = useState([]);
    const [selectedRoomType, setSelectedRoomType] = useState("");
    const [rooms, setRooms] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState(null);
    const [newStatus, setNewStatus] = useState("");
    const [newRoom, setNewRoom] = useState({
        Room_no: "",
        Floor: "",
        Status: false, // Default status is false (Occupied)
    });

    // Fetch Room Types with Name
    useEffect(() => {
        const fetchRoomTypes = async () => {
            const querySnapshot = await getDocs(collection(db, "RoomTypes"));
            const types = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                name: doc.data().Name, // Storing Name field
            }));
            setRoomTypes(types);
        };
        fetchRoomTypes();
    }, []);

    // Fetch Rooms based on selected Room Type
    useEffect(() => {
        const fetchRooms = async () => {
            if (selectedRoomType) {
                const roomsCollection = collection(db, "RoomTypes", selectedRoomType, "Rooms");
                const querySnapshot = await getDocs(roomsCollection);
                const roomsData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setRooms(roomsData);
            }
        };
        fetchRooms();
    }, [selectedRoomType]);

    // Handle Room Type Selection
    const handleRoomTypeChange = (e) => {
        setSelectedRoomType(e.target.value);
    };

    // Handle Delete Room
    const handleDeleteRoom = async (roomId) => {
        if (window.confirm("Are you sure you want to delete this room?")) {
            await deleteDoc(doc(db, "RoomTypes", selectedRoomType, "Rooms", roomId));
            setRooms(rooms.filter((room) => room.id !== roomId));
        }
    };

    // Handle Edit Room (Open Modal)
    const handleEditRoom = (room) => {
        setSelectedRoom(room);
        setNewStatus(room.Status ? "True" : "False"); // Convert boolean status to "True"/"False"
        setShowEditModal(true);
    };

    // Handle Update Room Status
    const handleUpdateStatus = async (e) => {
        e.preventDefault();

        const statusBoolean = newStatus === "True"; // Convert to boolean

        await updateDoc(doc(db, "RoomTypes", selectedRoomType, "Rooms", selectedRoom.id), {
            Status: statusBoolean,
        });

        setShowEditModal(false);
        setRooms(
            rooms.map((room) =>
                room.id === selectedRoom.id ? { ...room, Status: statusBoolean } : room
            )
        );
    };

    // Handle Add Room (Open Modal)
    const handleAddRoom = () => {
        setNewRoom({
            Room_no: "",
            Floor: "",
            Status: false,
        });
        setShowAddModal(true);
    };

    // Handle Save New Room
    const handleSaveNewRoom = async (e) => {
        e.preventDefault();

        // Add new room to the selected room type's "Rooms" subcollection
        await addDoc(collection(db, "RoomTypes", selectedRoomType, "Rooms"), {
            Room_no: newRoom.Room_no,
            Floor: newRoom.Floor,
            Status: newRoom.Status,
        });

        // Refresh the rooms list
        const roomsCollection = collection(db, "RoomTypes", selectedRoomType, "Rooms");
        const querySnapshot = await getDocs(roomsCollection);
        const roomsData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setRooms(roomsData);

        setShowAddModal(false);
    };

    return (
        <div className="room-management-container">
            <Sidebar />
            <h1 className="room-management-heading">Room Management</h1>
            <div className="room-type-selector">
                <label className="room-type-label" htmlFor="room-type">
                    Select Room Type:
                </label>
                <select
                    className="room-type-select"
                    id="room-type"
                    value={selectedRoomType}
                    onChange={handleRoomTypeChange}
                >
                    <option value="">Select a room type</option>
                    {roomTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                            {type.name}
                        </option>
                    ))}
                </select>
            {/* Add Room Button */}
            <button className="modal-button ml-30" onClick={handleAddRoom}>
                Add New Room
            </button>
            </div>


            <table className="rooms-table">
                <thead>
                    <tr>
                        <th className="table-header">Room Number</th>
                        <th className="table-header">Floor Number</th>
                        <th className="table-header">Status</th>
                        <th className="table-header">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {rooms.map((room) => (
                        <tr key={room.id} className="table-row">
                            <td className="table-data">{room.Room_no}</td>
                            <td className="table-data">{room.Floor}</td>
                            <td className="table-data">{room.Status ? "Available" : "Occupied"}</td>
                            <td className="table-data">
                                <button
                                    className="edit-button"
                                    onClick={() => handleEditRoom(room)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDeleteRoom(room.id)}
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
                        <h2 className="modal-heading">Edit Room Status</h2>
                        <form className="edit-form" onSubmit={handleUpdateStatus}>
                            <label className="form-label" htmlFor="room-status">
                                Status:
                            </label>
                            <select
                                className="form-select"
                                id="room-status"
                                value={newStatus}
                                onChange={(e) => setNewStatus(e.target.value)}
                            >
                                <option value="True">Available</option>
                                <option value="False">Occupied</option>
                            </select>
                            <button type="submit" className="update-button">
                                Update
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Room Modal */}
            {showAddModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <span className="close-modal" onClick={() => setShowAddModal(false)}>
                            &times;
                        </span>
                        <h2 className="modal-heading">Add New Room</h2>
                        <form className="edit-form" onSubmit={handleSaveNewRoom}>
                            <label className="form-label" htmlFor="room-number">
                                Room Number:
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                id="room-number"
                                value={newRoom.Room_no}
                                onChange={(e) =>
                                    setNewRoom({ ...newRoom, Room_no: e.target.value })
                                }
                            />

                            <label className="form-label" htmlFor="floor">
                                Floor:
                            </label>
                            <input
                                className="form-input"
                                type="text"
                                id="floor"
                                value={newRoom.Floor}
                                onChange={(e) =>
                                    setNewRoom({ ...newRoom, Floor: e.target.value })
                                }
                            />

                            <label className="form-label" htmlFor="status">
                                Status:
                            </label>
                            <select
                                className="form-select"
                                id="status"
                                value={newRoom.Status ? "True" : "False"}
                                onChange={(e) =>
                                    setNewRoom({
                                        ...newRoom,
                                        Status: e.target.value === "True",
                                    })
                                }
                            >
                                <option value="True">Available</option>
                                <option value="False">Occupied</option>
                            </select>

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

export default RoomManagement;