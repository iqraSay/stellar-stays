import React, { useState, useEffect } from "react";
import { db } from "../../firebase"; // Firebase configuration file
import {
  collection,
  doc,
  getDocs,
  deleteDoc,
  updateDoc,
  addDoc,
} from "firebase/firestore";
import Sidebar from "./Sidebar";
import "../../css/style.css";

const RoomTypeManagement = () => {
  const [roomTypes, setRoomTypes] = useState([]);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedRoomType, setSelectedRoomType] = useState(null);
  const [newRoomType, setNewRoomType] = useState({
    Name: "",
    Room_price: 0,
    Max_guest: 0,
    Description: {
      Space: 0,
      Beds: 0,
      Bath: 0,
      Details: "",
    },
  });

  // Fetch Room Types
  useEffect(() => {
    const fetchRoomTypes = async () => {
      const querySnapshot = await getDocs(collection(db, "RoomTypes"));
      const types = querySnapshot.docs.map((doc) => ({
        id: doc.id, // Use document ID
        ...doc.data(),
      }));
      setRoomTypes(types);
    };
    fetchRoomTypes();
  }, []);

  // Handle Delete Room Type
  const handleDeleteRoomType = async (roomTypeId) => {
    if (window.confirm("Are you sure you want to delete this room type?")) {
      await deleteDoc(doc(db, "RoomTypes", roomTypeId)); // Use document ID
      setRoomTypes(roomTypes.filter((type) => type.id !== roomTypeId));
    }
  };

  // Handle Edit Room Type (Open Modal)
  const handleEditRoomType = (roomType) => {
    setSelectedRoomType(roomType);
    setShowEditModal(true);
  };

  // Handle Update Room Type
  const handleUpdateRoomType = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "RoomTypes", selectedRoomType.id), {
      // Use document ID
      ...selectedRoomType,
    });
    setShowEditModal(false);
    setRoomTypes(
      roomTypes.map((type) =>
        type.id === selectedRoomType.id ? selectedRoomType : type
      )
    );
  };

  // Handle Add Room Type (Open Modal)
  const handleAddRoomType = () => {
    setNewRoomType({
      Name: "",
      Room_price: 0,
      Max_guest: 0,
      Description: {
        Space: 0,
        Beds: 0,
        Bath: 0,
        Details: "",
      },
    });
    setShowAddModal(true);
  };

  // Handle Save New Room Type
  const handleSaveNewRoomType = async (e) => {
    e.preventDefault();
    const newTypeId = "t" + (roomTypes.length + 1); // Auto-generate Type_id
    const newRoomTypeData = {
      ...newRoomType,
      Type_id: newTypeId,
    };

    // Add new room type document
    const docRef = await addDoc(collection(db, "RoomTypes"), newRoomTypeData);

    // Create "Rooms" subcollection in the new document
    await addDoc(collection(db, "RoomTypes", docRef.id, "Rooms"), {});

    setShowAddModal(false);
    setRoomTypes([...roomTypes, { ...newRoomTypeData, id: docRef.id }]);
  };

  return (
    <div className="room-management-container">
      <Sidebar />
      <h1 className="room-management-heading">Room Type Management</h1>
      <button className="modal-button" onClick={handleAddRoomType}>
        Add New Room Type
      </button>

      <table className="rooms-table">
        <thead>
          <tr>
            <th className="table-header">Name</th>
            <th className="table-header">Room Price</th>
            <th className="table-header">Max Guests</th>
            <th className="table-header">Space</th>
            <th className="table-header">Beds</th>
            <th className="table-header">Bath</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {roomTypes.map((roomType) => (
            <tr key={roomType.id} className="table-row">
              <td className="table-data">{roomType.Name}</td>
              <td className="table-data">{roomType.Room_price}</td>
              <td className="table-data">{roomType.Max_guest}</td>
              <td className="table-data">{roomType.Description?.Space}</td>
              <td className="table-data">{roomType.Description?.Beds}</td>
              <td className="table-data">{roomType.Description?.Bath}</td>
              <td className="table-data">
                <button
                  className="edit-button"
                  onClick={() => handleEditRoomType(roomType)}
                >
                  Edit
                </button>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteRoomType(roomType.id)} // Use document ID
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
            <span
              className="close-modal"
              onClick={() => setShowEditModal(false)}
            >
              &times;
            </span>
            <h2 className="modal-heading">Edit Room Type</h2>
            <form className="edit-form" onSubmit={handleUpdateRoomType}>
              <label className="form-label" htmlFor="name">
                Name:
              </label>
              <input
                className="form-input"
                type="text"
                id="name"
                value={selectedRoomType?.Name || ""}
                onChange={(e) =>
                  setSelectedRoomType({
                    ...selectedRoomType,
                    Name: e.target.value,
                  })
                }
              />

              <label className="form-label" htmlFor="room-price">
                Room Price:
              </label>
              <input
                className="form-input"
                type="number"
                id="room-price"
                value={selectedRoomType?.Room_price || 0}
                onChange={(e) =>
                  setSelectedRoomType({
                    ...selectedRoomType,
                    Room_price: parseFloat(e.target.value),
                  })
                }
              />

              <label className="form-label" htmlFor="max-guest">
                Max Guests:
              </label>
              <input
                className="form-input"
                type="number"
                id="max-guest"
                value={selectedRoomType?.Max_guest || 0}
                onChange={(e) =>
                  setSelectedRoomType({
                    ...selectedRoomType,
                    Max_guest: parseInt(e.target.value),
                  })
                }
              />

              <label className="form-label" htmlFor="space">
                Space:
              </label>
              <input
                className="form-input"
                type="number"
                id="space"
                value={selectedRoomType?.Description?.Space || 0}
                onChange={(e) =>
                  setSelectedRoomType({
                    ...selectedRoomType,
                    Description: {
                      ...selectedRoomType.Description,
                      Space: parseFloat(e.target.value),
                    },
                  })
                }
              />

              <label className="form-label" htmlFor="beds">
                Beds:
              </label>
              <input
                className="form-input"
                type="number"
                id="beds"
                value={selectedRoomType?.Description?.Beds || 0}
                onChange={(e) =>
                  setSelectedRoomType({
                    ...selectedRoomType,
                    Description: {
                      ...selectedRoomType.Description,
                      Beds: parseInt(e.target.value),
                    },
                  })
                }
              />

              <label className="form-label" htmlFor="bath">
                Bath:
              </label>
              <input
                className="form-input"
                type="number"
                id="bath"
                value={selectedRoomType?.Description?.Bath || 0}
                onChange={(e) =>
                  setSelectedRoomType({
                    ...selectedRoomType,
                    Description: {
                      ...selectedRoomType.Description,
                      Bath: parseInt(e.target.value),
                    },
                  })
                }
              />

              <label className="form-label" htmlFor="details">
                Details:
              </label>
              <input
                className="form-input"
                type="text"
                id="details"
                value={selectedRoomType?.Description?.Details || ""}
                onChange={(e) =>
                  setSelectedRoomType({
                    ...selectedRoomType,
                    Description: {
                      ...selectedRoomType.Description,
                      Details: e.target.value,
                    },
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

      {/* Add Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span
              className="close-modal"
              onClick={() => setShowAddModal(false)}
            >
              &times;
            </span>
            <h2 className="modal-heading">Add New Room Type</h2>
            <form className="edit-form" onSubmit={handleSaveNewRoomType}>
              <label className="form-label" htmlFor="name">
                Name:
              </label>
              <input
                className="form-input"
                type="text"
                id="name"
                value={newRoomType.Name}
                onChange={(e) =>
                  setNewRoomType({ ...newRoomType, Name: e.target.value })
                }
              />

              <label className="form-label" htmlFor="room-price">
                Room Price:
              </label>
              <input
                className="form-input"
                type="number"
                id="room-price"
                value={newRoomType.Room_price}
                onChange={(e) =>
                  setNewRoomType({
                    ...newRoomType,
                    Room_price: parseFloat(e.target.value),
                  })
                }
              />

              <label className="form-label" htmlFor="max-guest">
                Max Guests:
              </label>
              <input
                className="form-input"
                type="number"
                id="max-guest"
                value={newRoomType.Max_guest}
                onChange={(e) =>
                  setNewRoomType({
                    ...newRoomType,
                    Max_guest: parseInt(e.target.value),
                  })
                }
              />

              <label className="form-label" htmlFor="space">
                Space:
              </label>
              <input
                className="form-input"
                type="number"
                id="space"
                value={newRoomType.Description.Space}
                onChange={(e) =>
                  setNewRoomType({
                    ...newRoomType,
                    Description: {
                      ...newRoomType.Description,
                      Space: parseFloat(e.target.value),
                    },
                  })
                }
              />

              <label className="form-label" htmlFor="beds">
                Beds:
              </label>
              <input
                className="form-input"
                type="number"
                id="beds"
                value={newRoomType.Description.Beds}
                onChange={(e) =>
                  setNewRoomType({
                    ...newRoomType,
                    Description: {
                      ...newRoomType.Description,
                      Beds: parseInt(e.target.value),
                    },
                  })
                }
              />

              <label className="form-label" htmlFor="bath">
                Bath:
              </label>
              <input
                className="form-input"
                type="number"
                id="bath"
                value={newRoomType.Description.Bath}
                onChange={(e) =>
                  setNewRoomType({
                    ...newRoomType,
                    Description: {
                      ...newRoomType.Description,
                      Bath: parseInt(e.target.value),
                    },
                  })
                }
              />

              <label className="form-label" htmlFor="details">
                Details:
              </label>
              <input
                className="form-input"
                type="text"
                id="details"
                value={newRoomType.Description.Details}
                onChange={(e) =>
                  setNewRoomType({
                    ...newRoomType,
                    Description: {
                      ...newRoomType.Description,
                      Details: e.target.value,
                    },
                  })
                }
              />

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

export default RoomTypeManagement;
