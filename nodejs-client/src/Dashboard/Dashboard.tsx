import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { XGrid, GridColDef, GridCellParams } from '@material-ui/x-grid';
import { DataGrid } from '@material-ui/data-grid';
import AddForm from './AddForm';
import EditForm from './EditForm';
import { useDispatch, useSelector} from 'react-redux';
import {
    Button,
    AppBar,
    Toolbar,
    Typography ,
    CircularProgress
} from '@material-ui/core';
import CityData from './CityData';


const Dashboard = () => {

    const [student, setStudent] = useState<any>();
    const [isAdd, setIsAdd] = useState(false);
    const [isEdit, setIsEdit] = useState<any>();

    const myState = useSelector((state: any) => {
        return state.auth
    })
    console.log("Dashboard",myState.isAuthentication, myState.currentUserName)

    const getRowId = (row: any) => row.id;

    useEffect(() => {

        

        axios.get("http://localhost:4001/restfulapi/student", {withCredentials: true})
            .then(res => {
                setStudent(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteStudent = (index : any) => {
        axios.delete(`http://localhost:4001/restfulapi/student/${index}`, {withCredentials: true})
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }



    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'Id',
            width: 150,
            hide: true
        },
        {
            field: 'name',
            headerName: 'Name',
            width: 150,
        },
        {
            field: 'email',
            headerName: 'Email',
            width: 150,
        },
        {
            field: 'phone',
            headerName: 'Phone Number',
            width: 150,
        },
        {
            field: 'address',
            headerName: 'Address',
            width: 150,
        },
        {
            field: '__v',
            headerName: 'version',
            width: 150,
            hide: true
        },
        {
            field: 'delete',
            headerName: "Delete",
            width: 150,
            renderCell: (params : GridCellParams) => {
                return <Button variant="outlined" onClick={() => {
                    let index = getRowId(params);
                    console.log("row id", index);
                    deleteStudent(index)
                }}>Delete</Button>
            }
        },
        {
            field: 'edit',
            headerName: "Edit",
            width: 150,
            renderCell: (params: GridCellParams) => {
                return <Button variant="outlined" onClick={() => {
                    let index = getRowId(params);
                    console.log("row id", index);
                    setIsEdit(index)
                }}>Edit</Button>
            }
        }
    ]


    return (
        <div>
            
            <h1>I am in dashboard</h1>
            <Button variant="outlined" onClick={() => setIsAdd(true)}>+</Button>
            {isAdd && <AddForm closeAdd={() => setIsAdd(false)} />}
            {isEdit && <EditForm index={isEdit} closeEdit={() => setIsEdit(null)} />}
            <div style={{ height: '500px', width: '100%' }}>
                {student ? <DataGrid
                    columns={columns}
                    rows={student}
                /> : <CircularProgress />}
            </div>

            

        </div>
    );
};

export default Dashboard;