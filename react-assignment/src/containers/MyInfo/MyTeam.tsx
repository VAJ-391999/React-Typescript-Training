import React, { useContext, useState } from 'react';
import './MyTeam.css';
import { memberContext } from './Context/MyTeamMember';
import AddMemberForm from './Context/AddMemberForm';



const MyTeam = () => {

    const {member, dispatch} = useContext(memberContext);
    const [newMember, setNewMember] = useState({membername: '', memberproject: '', id: 0});
    const [isEdit, setEdit] = useState<number | null>(null);
   
   
    const addHandler = () => {
        console.log("ADD Item", member.length)
        //debugger
        dispatch({type: 'ADD', payload: newMember })
        setNewMember({membername: '', memberproject: '', id: 0})
    }

    const removeHandler = (index: number) => {
        dispatch({type: 'REMOVE', payload: index});
        setNewMember({membername: '', memberproject: '', id: 0})
        
    }

    const editHandler = (index: number) => {
        setEdit(index);
    }

    const onChangerHandler = (e: any) => {
        if(e.target.name === 'MemberName'){
            setNewMember({...newMember, membername: e.target.value})
        }
        else  {
            setNewMember({...newMember, memberproject: e.target.value})
        }
    }

    const editChangeHandler = (e: any) => {
        setEdit(null)
        dispatch({type: 'EDIT', payload: newMember, EditId: isEdit })
    }

    
    return (
        <div className="MyTeam">
            {isEdit !==null ? <AddMemberForm id={isEdit} changeHandler={(e: any) => onChangerHandler(e)} submitEdit={(e: any) => editChangeHandler(e)} /> : null}
            <h1>Hello</h1>
            <div>
                
                    <label>Team Member Name: </label>
                    <input name="Member Name"
                        placeholder=" Enter Team Member Name"
                        onChange={(e) => setNewMember({...newMember, membername: e.target.value})}
                        value={newMember.membername} /><br />

                    <label>Team Member Project: </label>
                    <input
                        name="Member Project"
                        placeholder=" Enter Team Member Project"
                        onChange={(e) => setNewMember({...newMember, memberproject: e.target.value, id: member.length})}
                        value={newMember.memberproject}/>
                    
                
                <button onClick={() => addHandler()}>ADD member</button>
            </div>
            {member.map((m, index) => {
                return (<div key={index}>
                    <h1 key={index} className="Memberlist">{m.membername} {m.memberproject}</h1>
                    <button onClick={() => removeHandler(index)} className="">DELETE</button>
                    <button onClick={() => editHandler(index)}>Edit</button>
                </div>)
            })}
            
            
            
        </div>
    );
};

export default MyTeam;
