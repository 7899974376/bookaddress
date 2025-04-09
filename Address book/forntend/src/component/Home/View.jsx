import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/contacts")
      .then(res => {
        setContacts(res.data);
        setLoading(false);
      })
      .catch(() => {
        alert("Failed to fetch contacts.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="container mt-5 text-center"><p>Loading contacts...</p></div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">All Contacts</h2>
      {contacts.length === 0 ? (
        <p className="alert alert-info">No contacts available.</p>
      ) : (
        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
            
            </tr>
          </thead>
          <tbody>
            {contacts.map(contact => (
              <tr key={contact._id}>
                <td>{contact.name}</td>
                <td>{contact.phone}</td>
                <td>{contact.email}</td>
                <td>{contact.address}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="text-center mt-4">
        <Link to="/add" className="btn btn-primary">Add New Contact</Link>
      </div>
    </div>
  );
}

export default ContactList;
