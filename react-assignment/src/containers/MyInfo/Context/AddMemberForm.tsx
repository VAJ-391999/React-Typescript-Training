import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import './AddMemberForm';

type Props = {
    changeHandler: ChangeEventHandler,
    submitEdit: MouseEventHandler,
    id: number
}

const AddMemberForm = ({ changeHandler, submitEdit, id }: Props) => {
    return (
        <div className="">
            <h1>Edit Request for ID: {id}</h1>
            <label>Team Member Name: </label>
            <input name="MemberName"
                placeholder=" Enter Team Member Name"
                onChange={(e) => changeHandler(e)} /><br />

            <label>Team Member Project: </label>
            <input
                name="MemberProject"
                placeholder=" Enter Team Member Project"
                onChange={(e) => changeHandler(e)} />
            <button onClick={(e) => submitEdit(e)} >EDIT MEMBER INFO</button>
        </div>
    );
};

export default AddMemberForm;