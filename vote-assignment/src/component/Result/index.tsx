import { FC, useContext } from 'react';
import { BarChart, Bar } from 'recharts';
import { CANDIDATE, IVoter } from '../constant';
import { UserContext } from '../Context';


const Result:FC = () => {
    const voteContext = useContext(UserContext)
    const [votes] = voteContext.voteData;
    let candidate: IVoter[];

    let tData: any = [];
    CANDIDATE.forEach((i) => {
        candidate = votes.filter((item: any) => item.candidateName === i.value);
        tData = [...tData, {name: i.value, totalvote: candidate.length}];
    });
   
    return (
        <div>
            <BarChart width={500} height={500} data={tData}>
                <Bar dataKey="totalvote" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default Result;