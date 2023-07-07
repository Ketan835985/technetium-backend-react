import React, { useState } from 'react';

const TableGenerator = () => {
  const [number, setNumber] = useState('');
  const [tableData, setTableData] = useState([]);

  const generateTable = (event) => {
    const num = event.target.value;
    setNumber(num);

    if (num > 0) {
      const data = [];
      for (let i = 1; i <= num; i++) {
        data.push(<tr key={i}><td>{i}</td></tr>);
      }
      setTableData(data);
    } else {
      setTableData([]);
    }
  };

  return (
    <div>
      <h2>Dynamic Table Generator</h2>
      <input
        type="number"
        value={number}
        min="1"
        onChange={generateTable}
      />
      {number > 0 && (
        <table>
          <tbody>
            {tableData}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TableGenerator;
