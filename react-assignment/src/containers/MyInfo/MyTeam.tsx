import React, { useCallback, useContext, useState } from 'react';
import './MyTeam.css';
import { memberContext } from './Context/MyTeamMember';
import EditMemberForm from './Context/EditMemberForm';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { XGrid, GridToolbarContainer, GridToolbarExport } from '@material-ui/x-grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Model from '../../components/UI/Model/Model';
import {
    DataGrid,
    GridRowsProp,
    GridRowIdGetter,
    GridColDef,
    GridCellParams,
    GridValueFormatterParams,
    GridSortDirection,
    GridLinkOperator,
    GridFilterModel,

} from '@material-ui/data-grid';






const MyTeam = () => {

    const getRowId: GridRowIdGetter = (row) => row.id;
    const dynamicWidth = Number(100 / 3);

    const columns: GridColDef[] = [
        {
            field: 'membername',
            headerName: 'Member Name',
            width: 150,
            resizable: true,
            flex: 1
        },
        {
            field: 'memberproject',
            headerName: 'Member Project',
            width: 150,
            resizable: true,
            flex: 1
        },
        {
            field: 'deleteaction',
            headerName: 'Delete Member',
            width: 150,
            resizable: true,
            flex: 1,
            renderCell: (params: GridCellParams) => (
                <strong>
                    <IconButton onClick={() => {
                        //console.log("delete", getRowId(params));
                        let index: number = Number(getRowId(params));
                        removeHandler(index)
                    }}>
                        <DeleteIcon />
                    </IconButton>
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
                    <IconButton onClick={() => {
                        let index: number = Number(getRowId(params));
                        editHandler(index)
                    }}>
                        <EditIcon />
                    </IconButton>
                </strong>
            ),
        }

    ];


    const { member, dispatch } = useContext(memberContext);
    const [addMember, setAddMember] = useState<boolean>(false)
    const [newMember, setNewMember] = useState({ membername: '', memberproject: '', id: 0 });
    const [isEdit, setEdit] = useState<number | null>(null);


    const addHandler = () => {
        console.log("ADD Item", member.length)
        //debugger
        dispatch({ type: 'ADD', payload: newMember })
        setNewMember({ membername: '', memberproject: '', id: 0 })
        setAddMember(false)
    }

    const removeHandler = (index: number): void => {
        const temp = dispatch({ type: 'REMOVE', payload: index });
        console.log("remove", temp);
        //debugger
    }

    const editHandler = (index: number) => {
        setEdit(index);
    }

    const onChangerHandler = (e: any) => {
        if (e.target.name === 'MemberName') {
            setNewMember({ ...newMember, membername: e.target.value })
        }
        else {
            setNewMember({ ...newMember, memberproject: e.target.value })
        }
    }

    const editChangeHandler = (e: any) => {
        setEdit(null)
        dispatch({ type: 'EDIT', payload: newMember, EditId: isEdit })
        debugger
    }

    function CustomToolbar() {
        return (
            <GridToolbarContainer>
                <GridToolbarExport />
            </GridToolbarContainer>
        );
    }

    let editform = (
        <EditMemberForm
                        id={isEdit}
                        changeHandler={(e: any) => onChangerHandler(e)}
                        submitEdit={(e: any) => editChangeHandler(e)}
                cancleEdit={() => setEdit(null)} />
    )



    return (
        <div className="MyTeam">


            <h1>My Team</h1>

            <Button variant="contained" className="LoginButton" onClick={() => setAddMember(true)} >+</Button>

            <div className="AddFrom" style={{
                //opacity: addMember ? '1' : "0",  
                display: addMember ? "block" : "none",
                transform: addMember ? 'translateY(0)' : 'translateY(-100vh)'
            }}>

                <div className="form-heading">
                    <h2>Add New Member</h2>
                </div>

                <div className="FormContent">
                    <label className="mylabel">Team Member Name: </label>
                    <TextField
                        id="filled-basic"
                        label="Enter Team Member Name "
                        variant="filled"
                        name="Member Name"
                        onChange={(e) => setNewMember({ ...newMember, membername: e.target.value })} />
                    <br />

                    <label className="mylabel">Team Member Project: </label>
                    <TextField
                        id="filled-basic"
                        label="Enter Team Member Project "
                        variant="filled"
                        onChange={(e) => setNewMember({ ...newMember, memberproject: e.target.value, id: member.length })} /><br />

                    <Button variant="contained" className="LoginButton" onClick={() => setAddMember(false)} >Cancle</Button>
                    <Button variant="contained" className="LoginButton" onClick={() => addHandler()} >ADD MEMBER</Button>
                </div>
            </div>
            <Model show={isEdit !== null ? true : false}>

                {editform}
                {/*isEdit !== null ?
                    <EditMemberForm
                        id={isEdit}
                        changeHandler={(e: any) => onChangerHandler(e)}
                        submitEdit={(e: any) => editChangeHandler(e)}
                cancleEdit={() => setEdit(null)} /> : null*/}
            </Model>

            

            <div style={{ height: 300, width: '80%', flexGrow: 1, display: 'flex', margin: '50px' }} className="XGrid-Table">
                <XGrid
                    rows={member}
                    columns={columns}
                    columnBuffer={2}
                />
            </div>


        </div>
    );
};

export default MyTeam;
{/*<input name="Member Name"
                        placeholder=" Enter Team Member Name"
                        onChange={(e) => setNewMember({...newMember, membername: e.target.value})}
    value={newMember.membername} /> 
    <input
                        name="Member Project"
                        placeholder=" Enter Team Member Project"
                        onChange={(e) => setNewMember({...newMember, memberproject: e.target.value, id: member.length})}
                        value={newMember.memberproject}/>
                        <button onClick={() => addHandler()}>ADD member</button>*/}
{/* addMember && <div className="AddFrom">

                <div className="form-heading">
                    <h2>Add New Member</h2>
                </div>

                <div className="FormContent">
                    <label className="mylabel">Team Member Name: </label>
                    <TextField
                        id="filled-basic"
                        label="Enter Team Member Name "
                        variant="filled"
                        name="Member Name"
                        onChange={(e) => setNewMember({ ...newMember, membername: e.target.value })} />
                    <br />

                    <label className="mylabel">Team Member Project: </label>
                    <TextField
                        id="filled-basic"
                        label="Enter Team Member Project "
                        variant="filled"
                        onChange={(e) => setNewMember({ ...newMember, memberproject: e.target.value, id: member.length })} /><br />

                    <Button variant="contained" className="LoginButton" onClick={() => setAddMember(false)} >Cancle</Button>
                    <Button variant="contained" className="LoginButton" onClick={() => addHandler()} >ADD MEMBER</Button>
                </div>
            </div>*/}

            {/*member.map((m, index) => {
                return (<div key={index}>
                    <h1 key={index} className="Memberlist">{m.membername} {m.memberproject}</h1>
                    <button onClick={() => removeHandler(index)} className="">DELETE</button>
                    <button onClick={() => editHandler(index)}>Edit</button>
                </div>)
            })*/}