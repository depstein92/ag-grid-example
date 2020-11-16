import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import BatchPanel from './BatchPanel';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const styles = {
  width: '80%',
  height: '100vh',
  margin: '50px auto',
  borderTop: '1px solid black',
  '&:hover': {
    'cursor': 'pointer'
  }  
}

const App = () => {
    const [rowData, setRowData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const columnFields = [
      'email',
      'name.title',
      'name.first',
      'name.last',
      'dob.age',
      'location.city',
      'location.state',
      'location.country',
      'gender'
    ]

    useEffect(() => {
      let isMounted = true;
      const getProfileData = async () => {
        const rowData = await axios.get(
          'https://randomuser.me/api/?format=json&results=500'
        );
        setIsLoading(false);
        setRowData(rowData.data.results); 
      }
      getProfileData();
      return () => {isMounted = false}      
    }, [])
    
    return (
        <div data-testid="parentGrid" className="ag-theme-alpine" style={styles}>
            <BatchPanel />
            {isLoading && (
              <div data-testid="loading-circle">
                <CircularProgress />
              </div>)
            }
            <AgGridReact
                
                rowData={rowData}>
                {rowData && columnFields.map((fieldName, index) => {
                  return (
                    <div key={index} data-testid="column">
                      <AgGridColumn field={fieldName}></AgGridColumn>
                    </div>  
                  )
                }) }
            </AgGridReact>
        </div>
    );
};
export default App;
