import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DataTable from './components/DataTable';
import data from './DummyData/data';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <DataTable 
          data={data} 
          custClass={"data-table -striped -highlight"} 
          custColumns={[
            {
              Header: "Greetings from Vaclav",
              columns: [
                {
                  Header: "ID",
                  id: "ID",
                  accessor: "ID",
                  filterMethod: (filter, row) =>                   
                  row[filter.id].startsWith(filter.value)
                },
                {
                  Header: "Name",
                  accessor: "Name",
                  filterMethod: (filter, row) =>
                    row[filter.id].startsWith(filter.value) 
                  },
                  {
                  Header: "Description",
                  headerClassName: 'description',
                  accessor: "Description",
                  className: "description",
                  Cell: "renderEditable",
                  filterMethod: (filter, row) =>                   
                    row[filter.id].startsWith(filter.value)
                },
                {
                  Header: "Date",
                  accessor: "Date",
                  filterMethod: (filter, row) =>                   
                    row[filter.id].startsWith(filter.value)
                },
                {
                  Header: "Amount",
                  accessor: "Amount",
                  filterMethod: (filter, row) =>                   
                    row[filter.id]<= filter.value && row[filter.id] >= filter.value-10
                }
              ]
            }
          ]}        
        /> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
