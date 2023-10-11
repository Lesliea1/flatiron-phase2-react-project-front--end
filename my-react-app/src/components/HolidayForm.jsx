import React, { useState } from 'react';

const HolidayForm = ({ addHoliday }) => {
  const [newHoliday, setNewHoliday] = useState({
    date: '',
    localName: '',
    global: '',
    name: '',
    launchYear: '', // Add the launchYear property
    types: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewHoliday({
      ...newHoliday,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = 'http://localhost:3000/holidayList';

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newHoliday),
      });

      if (response.ok) {
        const addedHoliday = await response.json();
        addHoliday(addedHoliday);
        setNewHoliday({
          date: '',
          localName: '',
          global: '',
          name: '',
          launchYear: '', // Reset the launchYear field
          types: '',
        });
      } else {
        console.error('Failed to add a holiday.');
      }
    } catch (error) {
      console.error('Error occurred when making the POST request', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="date"
        placeholder="Date"
        value={newHoliday.date}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="localName"
        placeholder="Local Name"
        value={newHoliday.localName}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newHoliday.name}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="launchYear"
        placeholder="Launch Year" 
        value={newHoliday.launchYear}
        onChange={handleInputChange}
      />
      <button type="submit">Add Holiday</button>
    </form>
  );
};

export default HolidayForm;
