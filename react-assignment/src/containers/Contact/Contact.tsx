import React, { ReactElement, FC, useEffect, useState } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import {XGrid} from '@material-ui/x-grid';
import {GridColDef, GridCellParams, GridRowIdGetter} from '@material-ui/data-grid'
import './Contact.css';
import axios from 'axios';
import { Button, FormControl, InputLabel, Input, FormHelperText } from '@material-ui/core';

type Props = {
    google: any
}


const Contact: FC<Props> = (props: Props): ReactElement => {

    const [client, setClient] = useState<any[]>([]);
    const [addClient,setAddClient] = useState<boolean>(false);
    const [newClient, setNewClient] = useState<any>({
        name: "",
        email: "",
        address: ""
    })
    const [isEdit,setIsEdit] = useState<boolean>(false);
    const [editId,setEditId] = useState<number>(0);
    const [editClient,setEditClient] = useState<any>({
        name: "",
        email: "",
        address: "",
        id: editId
    })

    const getRowId: GridRowIdGetter = (row) => row.id;

    const columns: GridColDef[] = [
        {
            field: 'id',
            headerName: 'Client Id',
            width: 150,
            resizable: true,
            flex: 1
        },
        {
            field: 'name',
            headerName: 'Client Name',
            width: 150,
            resizable: true,
            flex: 1
        },
        {
            field: 'email',
            headerName: 'Client EmailId',
            width: 150,
            resizable: true,
            flex: 1
        },
        {
            field: 'address',
            headerName: 'Client Address',
            width: 150,
            resizable: true,
            flex: 1
        },
        {
            field: 'deleteaction',
            headerName: 'Delete Client',
            width: 150,
            resizable: true,
            flex: 1,
            renderCell: (params: GridCellParams) => (
                <strong>
                    <Button
                        variant="outlined"
                        className="deleteclient"
                        onClick={()=> {
                            let index: number = Number(getRowId(params));
                            deletClient(index)
                        }}
                        >
                            Delete
                        </Button>
                </strong>
            ),
        },
        {
            field: 'editaction',
            headerName: 'Edit',
            width: 150,
            resizable: true,
            flex: 1,
            renderCell: (params: GridCellParams) => (
                <strong>
                   <Button
                        variant="outlined"
                        className="editclient"
                        onClick={()=> {
                            let index: number = Number(getRowId(params));
                            setEditId(index)
                            setIsEdit(true)
                        }}
                        >
                            Edit
                        </Button>
                </strong>
            ),
        }

    ]
      let jsonData: null | any = null

      useEffect(() => {
        axios.get('http://localhost:3003/users')
        .then(res => {
            console.log(res.data)
            jsonData = res.data
            setClient(jsonData)
        })
      },[])

      console.log(client)
      const clientDetailsArr = Object.keys(newClient);

      const addNewClient = () => {
          axios.post('http://localhost:3003/users',newClient)
          .then(res => console.log(res.data))
      }

      const deletClient = (id: number) => {
        axios.delete(`http://localhost:3003/users/${id}`)
        .then(res => console.log(res.data))
    }

    const editClientFun = () => {
        axios.put(`http://localhost:3003/users/${editId}`, editClient)
        .then(res => console.log(res.data))
    }

    const mapStyles = {
        width: '100%',
        height: '100%',
      };

    return (

        <div className="Contact">
            <div className="contact-heading">
            <h1>
                I am in Contact page
            </h1><br />
            <Button variant="contained" onClick={() => setAddClient(true)}>Add Client +</Button>
            </div>
            {
                addClient && 
                <div className="addClient">
                    <form>
                        {clientDetailsArr.map((item,index) => {
                            return  <div key={index}><FormControl>
                            <InputLabel htmlFor="my-input">{item}</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby="my-helper-text"
                                onChange={(event) => setNewClient({...newClient, [item]: event.target.value})}
                                type="text" />
                        </FormControl><br />
                        
                        </div>
                        })}
                        <Button variant="contained" className="cancleButton" onClick={() => setAddClient(false)}>Cancle</Button>
                        <Button variant="contained" onClick={()=> {addNewClient();setAddClient(false)}}>Add Client</Button>
                    </form>
                </div>
            }

            {
                isEdit && 
                <div className="editClient">
                    <form>
                        {clientDetailsArr.map((item,index) => {
                            return  <div key={index}><FormControl>
                            <InputLabel htmlFor="my-input">{item}</InputLabel>
                            <Input
                                id="my-input"
                                aria-describedby="my-helper-text"
                                onChange={(event) => setEditClient({...editClient, [item]: event.target.value})}
                                type="text" />
                        </FormControl><br />
                        
                        </div>
                        })}
                        <Button variant="contained" className="cancleButton" onClick={() => setIsEdit(false)}>Cancle</Button>
                        <Button variant="contained" onClick={()=> {editClientFun();setIsEdit(false)}}>Add Client</Button>
                    </form>
                </div>
            }
            <div style={{ height: 300, width: '80%', flexGrow: 1, display: 'flex', margin: '50px' }} className="XGrid-Table">
                <XGrid
                    rows={client}
                    columns={columns}    
                />
            </div>
            <div className="mapSection">
                <Map
                    google={props.google}
                    style={mapStyles}
                    initialCenter={{ lat: 47.444, lng: -122.176 }}
                >
                </Map>
            </div>
            
        </div>

    );
};

//export default Contact;

export default GoogleApiWrapper({
    apiKey: "AIzaSyD0AADzULRuylQQpjYhgC8GRhwxnNb_Qns"
})(Contact)