import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import './EditMemberForm.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

type Props = {
    changeHandler: ChangeEventHandler,
    submitEdit: MouseEventHandler,
    id: number,
    cancleEdit: MouseEventHandler
}

const EditMemberForm = ({ changeHandler, submitEdit, id, cancleEdit }: Props) => {
    return (
        <div className="EditForm">
            <h1>Edit Request for ID: {id}</h1><br />
            <label className="mylabel">Team Member Name: </label>
            <TextField
                id="filled-basic"
                name="MemberName"
                variant="filled"
                label=" Enter Team Member Name"
                onChange={(e) => changeHandler(e)} /><br />




            <label className="mylabel">Team Member Project: </label>
            <TextField
                id="filled-basic"
                name="MemberProject"
                variant="filled"
                label=" Enter Team Member Project"
                onChange={(e) => changeHandler(e)} /><br />

            <Button variant="contained" className="LoginButton" onClick={(e) => cancleEdit(e)} >Cancle</Button>
            <Button variant="contained" className="LoginButton" onClick={(e) => submitEdit(e)} >EDIT MEMBER</Button>

        </div>
    );
};

export default EditMemberForm;

/**  <input name="MemberName"
                placeholder=" Enter Team Member Name"
                onChange={(e) => changeHandler(e)} /><br />
                 <input
                name="MemberProject"
                placeholder=" Enter Team Member Project"
                onChange={(e) => changeHandler(e)} />
                 <button onClick={(e) => submitEdit(e)} >EDIT MEMBER INFO</button>*/