import React, { useState } from 'react';

function AllocationForm() {
  const [allocation, setAllocation] = useState('');
  const [remainingBudget, setRemainingBudget] = useState(1000); // assuming remaining budget is 1000
  const [errorMessage, setErrorMessage] = useState('');

  const handleAllocationChange = (e) => {
    const value = e.target.value;
    if (!/^\d+$/.test(value)) {
      setErrorMessage('Please enter a valid number');
    } else {
      setErrorMessage('');
      setAllocation(value);
    }
  };

  const handleAllocationSubmit = (e) => {
    e.preventDefault();
    if (allocation > remainingBudget) {
      setErrorMessage('Allocation cannot exceed remaining budget');
    } else {
      // submit allocation to server or perform other actions
      console.log('Allocation submitted:', allocation);
    }
  };

  return (
    <div>
      <form onSubmit={handleAllocationSubmit}>
        <label>Allocate budget:</label>
        <input
          type="text"
          value={allocation}
          onChange={handleAllocationChange}
          placeholder="Enter allocation amount"
        />
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <button type="submit">Allocate</button>
      </form>
      <p>Remaining budget: {remainingBudget}</p>
    </div>
  );
}

export default AllocationForm;
