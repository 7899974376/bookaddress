const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const EmployeeModel = require("./Modele/Employee");
const ContactModel = require("./Modele/Contact");

const app = express();
app.use(express.json());
app.use(cors());


// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/employee")
.then(() => console.log("MongoDB connected"))
  .catch(err => console.log("Mongo error", err));

// Register route
app.post("/register", (req, res) => {
    EmployeeModel.create(req.body)
        .then(employee => res.json(employee))
        .catch(err => res.status(500).json(err));
});

// Login route
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success");
                } else {
                    res.json("The password is wrong");
                }
            } else {
                res.json("No existing record");
            }
        })
        .catch(err => res.status(500).json(err));
});



// CONTACT ROUTES
// Create contact
// app.post("/contacts", (req, res) => {
//     ContactModel.create(req.body)
//         .then(employee => res.json(contact))
//         .catch(err => res.status(500).json(err));
// });

app.post("/contacts", (req, res) => {
    ContactModel.create(req.body)
        .then(contact => res.json(contact))
        .catch(err => res.status(500).json(err));
});


// Get all contacts
app.get("/contacts", (req, res) => {
    ContactModel.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(500).json(err));
});

// Update contact
app.put("/contacts/:id", (req, res) => {
    ContactModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(updated => res.json(updated))
        .catch(err => res.status(500).json(err));
});

// Delete contact
app.delete("/contacts/:id", (req, res) => {
    ContactModel.findByIdAndDelete(req.params.id)
        .then(result => res.json({ message: "Contact deleted" }))
        .catch(err => res.status(500).json(err));
});


// Start server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
