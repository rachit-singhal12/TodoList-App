import React from 'react';

const List = (props) => {
  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '20px',
  };

  const thStyle = {
    textAlign : 'center',
    backgroundColor: 'rgba(0, 0, 255, 0.9)',
    color: 'white',
    padding: '10px',    
  };

  const tdStyle = {
    border: '4px solid #ddd',
    padding: '10px',
  };

  return (
    <div id="list">
      <h2>List Items:</h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Title</th>
            <th style={thStyle}>Message</th>
          </tr>
        </thead>
        <tbody>
          {props.listData && props.listData.map((item, index) => (
            <tr key={index}>
              <td style={tdStyle}>{item.title}</td>
              <td style={tdStyle}>{item.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;