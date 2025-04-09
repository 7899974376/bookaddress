import React, { useState, useEffect } from "react";
import axios from "axios";

function Add() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
  });

  const [contacts, setContacts] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  // Fetch contacts on component mount
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get("http://localhost:3001/contacts");
      setContacts(res.data);
    } catch (err) {
      console.error("Error fetching contacts", err);
    }
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3001/contacts", formData);
      alert("Contact added successfully!");
      setFormData({ name: "", phone: "", email: "", address: "" });
      fetchContacts();
    } catch (err) {
      alert("Error adding contact.");
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3001/contacts/${editingId}`, formData);
      alert("Contact updated successfully!");
      setFormData({ name: "", phone: "", email: "", address: "" });
      setIsEditing(false);
      setEditingId(null);
      fetchContacts();
    } catch (err) {
      alert("Error updating contact.");
    }
  };

  const handleEditClick = (contact) => {
    setFormData(contact);
    setIsEditing(true);
    setEditingId(contact._id); // Make sure your backend returns _id or id
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await axios.delete(`http://localhost:3001/contacts/${id}`);
        alert("Contact deleted successfully!");
        fetchContacts();
      } catch (err) {
        alert("Error deleting contact.");
      }
    }
  };

  return (
    <div className="container mt-5">
      <h2>{isEditing ? "Edit Contact" : "Add Contact"}</h2>

      {/* Form */}
      <form
        onSubmit={isEditing ? handleEdit : handleSubmit}
        className="p-4 border rounded shadow-sm bg-light mb-5"
      >
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone</label>
          <input
            name="phone"
            className="form-control"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            name="email"
            type="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            name="address"
            className="form-control"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>

        <div className="d-flex gap-2">
          <button className="btn btn-primary w-50" type="submit">
            {isEditing ? "Update Contact" : "Add Contact"}
          </button>
          <button
            type="button"
            className="btn btn-secondary w-50"
            onClick={() => {
              setFormData({ name: "", phone: "", email: "", address: "" });
              setIsEditing(false);
              setEditingId(null);
            }}
          >
            Clear
          </button>
        </div>
      </form>

      {/* Contact List */}
      <h3>Contact List</h3>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact._id}>
              <td>{contact.name}</td>
              <td>{contact.phone}</td>
              <td>{contact.email}</td>
              <td>{contact.address}</td>
              <td>
                <button
                  className="btn btn-warning btn-sm me-2"
                  onClick={() => handleEditClick(contact)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(contact._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {contacts.length === 0 && (
            <tr>
              <td colSpan="5" className="text-center">
                No contacts found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default Add;
