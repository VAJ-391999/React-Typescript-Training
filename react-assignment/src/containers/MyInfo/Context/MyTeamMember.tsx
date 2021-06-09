import { Button } from '@material-ui/core';
import React, { createContext, useEffect, useReducer, useCallback } from 'react';
import MyTeam from '../MyTeam';



interface ITeamMemberList {
    membername: string ,
    memberproject: string,
    id: number,
}

let memberInit: ITeamMemberList[] = [{
    membername: 'Nita' ,
    memberproject: 'Project 1',
    id: 0,
  
}]



type ACTIONTYPE =
| {type: 'ADD', payload: ITeamMemberList}
| {type: 'REMOVE', payload: number}
| {type: 'EDIT', payload: ITeamMemberList, EditId: number}

const memberReducer = (state: ITeamMemberList[] = memberInit, action: ACTIONTYPE): any => {
    switch(action.type) {
        case 'ADD':
            //console.log("Add", action.payload)
            return  [...state, action.payload]
        /*case 'REMOVE':
            //const HandleToggle = useCallback(() => console.log(action.payload, typeof action.payload), []);
            //const index = state.findIndex(x => x.id === action.payload);
            console.log("index for delete", state[action.payload])
            //debugger
            return [...state, state.splice(action.payload, 1)]*/
        case 'REMOVE':
            console.log("index for delete", state[action.payload])
            return state.filter(emp => emp.id !== action.payload)
        case 'EDIT':
            return state.map((mem, index) => mem.id === action.EditId ?  {...mem, membername: action.payload.membername, memberproject: action.payload.memberproject} : mem)
            
        default:
            return state
    }
}




export const memberContext = createContext<{member: ITeamMemberList[]; dispatch: any;}>({member: memberInit, dispatch: () => memberInit});

export const MemberList = () => {

    
    const [member, dispatch] = useReducer(memberReducer, memberInit )

    useEffect(() => {
        console.log(memberInit)
    })

    return (
        <memberContext.Provider value={{member, dispatch}}>
            <MyTeam />
            {/*<button onClick={() => dispatch({type: 'ADD', payload: {membername: 'ed', memberproject: 'pd'}})}>ADD</button>*/}
            
        </memberContext.Provider>
        
    );
}



