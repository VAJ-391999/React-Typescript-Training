import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from '../../components/Layout/Layout';
import './MyDownlods.css';
import { makeStyles } from '@material-ui/core/styles';
import { XGrid } from '@material-ui/x-grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell, { SortDirection } from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridValueFormatterParams,
  GridSortDirection,
  GridLinkOperator,
  GridFilterModel,
  GridToolbarContainer,
  GridToolbarExport
} from '@material-ui/data-grid';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});



function GetFull(params: any) {
  return `${params.getValue(params.id, 'firstname') || ''} ${params.getValue(params.id, 'lastename') || ''
    }`;
}

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridToolbarExport />
    </GridToolbarContainer>
  );
}

const columns: GridColDef[] = [
  {
    field: 'firstname',
    headerName: 'First Name',
    width: 150
  },
  {
    field: 'lastename',
    headerName: 'Last Name',
    width: 150, resizable: true
  },
  {
    field: 'full',
    headerName: 'Full Name',
    width: 160, valueGetter: GetFull, sortComparator: (v1, v2, cellParams1, cellParams2) =>
      GetFull(cellParams1).localeCompare(GetFull(cellParams2)),
  },
  {
    field: 'date',
    headerName: 'Year',
    width: 150,
    valueFormatter: (params: GridValueFormatterParams) =>
      (params.value as Date).getFullYear(),
  }
];



const rows1: GridRowsProp = [
  { id: 1, firstname: 'Mahesh', lastename: 'Katariya', date: new Date(1979, 0, 1) },
  { id: 2, firstname: 'Bhola', lastename: 'Sharma', date: new Date(1971, 0, 1) },
  { id: 3, firstname: 'Payal', lastename: 'Mehta', date: new Date(1979, 0, 1) },
  { id: 4, firstname: 'Pretty', lastename: 'Gupta', date: new Date(1975, 0, 1) },
  { id: 5, firstname: 'Mahesh', lastename: 'Katariya', date: new Date(1979, 0, 1) },
  { id: 6, firstname: 'Bhola', lastename: 'Sharma', date: new Date(1971, 0, 1) },
  { id: 7, firstname: 'Payal', lastename: 'Mehta', date: new Date(1979, 0, 1) },
  { id: 8, firstname: 'Pretty', lastename: 'Gupta', date: new Date(1975, 0, 1) }
];




const MyDownloads = () => {

  const [downloadData, setDownloadData] = useState<any>([]);
  const classes = useStyles();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const users = response.data.slice(0, 4);
        setDownloadData(users)
        return
      })
    downloadData.map((u: any) => {
      console.log(u.id)
    })

  }, []);

  const filterModel: GridFilterModel = {
    items: [
      { columnField: 'lastename', operatorValue: 'contains', value: 'Gupta' },
      { columnField: 'firstname', operatorValue: 'contains', value: 'Bhola' },
    ],
    linkOperator: GridLinkOperator.Or,
  };

  const sortModel = [
    {
      field: 'date',
      sort: 'desc' as GridSortDirection,
    },
    {
      field: 'firstname',
      sort: 'asc' as GridSortDirection,
    }
  ]




  return (

    <div className="MyDownloads">
      <h1>I am in Mydownloads</h1>

      <h3>Table view with grid</h3>
      <div style={{ height: 300, width: '20%', flexGrow: 1, display: 'flex' }}>
        <XGrid
          rows={rows1}
          columns={columns}
          rowHeight={30}
          sortingOrder={['desc', 'asc']}
          sortModel={sortModel}
          filterModel={filterModel}
          pageSize={200}
          columnBuffer={2}

        />
      </div>
    </div>

  );
};

export default MyDownloads;