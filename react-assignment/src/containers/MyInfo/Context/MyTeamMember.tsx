import React, { createContext, useEffect, useReducer } from 'react';
import MyTeam from '../MyTeam';


interface ITeamMemberList {
    membername: string ,
    memberproject: string,
    id: number,
}

let memberInit: ITeamMemberList[] = [{
    membername: 'Nita' ,
    memberproject: 'Project 1',
    id: 0
}]



type ACTIONTYPE =
| {type: 'ADD', payload: ITeamMemberList}
| {type: 'REMOVE', payload: number}
| {type: 'EDIT', payload: ITeamMemberList, EditId: number}

const memberReducer = (state: ITeamMemberList[] = memberInit, action: ACTIONTYPE): any => {
    switch(action.type) {
        case 'ADD':
            console.log("Add", action.payload)
            return  [...state, action.payload]
        case 'REMOVE':
            return [...state, state.splice(action.payload, 1)]
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



