import { useContext, FC, useEffect, useState } from 'react';
import { CANDIDATE, IVoter } from '../constant';
import { UserContext } from '../Context';

const Vote:FC = () => {
    const [form, setForm] = useState<IVoter>({
        fullname: '',
        email: '',
        candidateName: '',
    })

    const voteContext = useContext(UserContext)
    const [votes, setVote] = voteContext.voteData;

    const setFormHandle = (event: any, key: string) => {
        setForm({...form, [key]: event.target.value})
    }

    const submitHandle = () => {
        setVote([...votes, form]);
    }
    return (
        <div>
            <input name="fullname" placeholder="Enter your full name" onChange={(event) => setFormHandle(event, 'fullname')} />
            <input name="email" placeholder="Enter your email"  onChange={(event) => setFormHandle(event, 'email')} />
            <select name="candidateName" value={form.candidateName} onChange={(event) => setFormHandle(event, 'candidateName')}>
                {
                    CANDIDATE.map((item: any,index) => {
                        return <option value={item.value} key={index}>{item.text}</option>
                    })
                }
            </select>
            
            <button onClick={submitHandle}>submit</button>
        </div>
    );
};

export default Vote;