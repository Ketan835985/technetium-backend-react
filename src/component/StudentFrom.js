import * as React from 'react';

import { useState } from 'react';


export default function StudentFrom() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        PhoneNumber: '',
        address: '',
        message: '',
    });
    const [tableData, setTableData] = useState([])
    // let name, value
    const handleChange = (e) => {
        // name : e.target.name
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        const newEntry = {
            name: formData.name,
            email: formData.email,
            PhoneNumber: formData.PhoneNumber,
            address: formData.address,
            message: formData.message
          };
      
          // Update the table data state with the new entry
          setTableData([...tableData, newEntry]);
        e.preventDefault();
        
        setFormData({
            name: '',
            email: '',
            PhoneNumber: '',
            address: '',
            message: '',
        });
    };
    return (
        <>
        <div className="container">
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email :</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="name">Number :</label>
                <input
                    type="text"
                    id="PhoneNumber"
                    name="PhoneNumber"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="name">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="name"> Message :</label>
                <input
                    type="text"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
        </div>
        <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
        {tableData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.name}</td>
              <td>{entry.email}</td>
              <td>{entry.PhoneNumber}</td>
              <td>{entry.address}</td>
              <td>{entry.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </>
    );
}