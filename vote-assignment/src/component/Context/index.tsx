import React, { useState } from 'react';
import { IVoter } from '../constant';

export const UserContext = React.createContext<any>([]);

const UserContextProvider = (props: any) => {
    const voteList: IVoter[] = []
    const [votes, setVote] = useState(voteList);

    const values = React.useMemo(() => {
        return {
            voteData: [votes, setVote],
        };
    }, [votes]);

    return <UserContext.Provider value={values}>{props.children}</UserContext.Provider>;
};

export default UserContextProvider;