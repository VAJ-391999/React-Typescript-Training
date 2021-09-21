import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

type Params = {
    id: string;
}

const StarDetails: FC = () => {
    const {id = null} = useParams<Params>();
    const [starData, setStarData] = useState<any>({});
    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(res => {
            setStarData(res.data);
        });
    }, [id]);
    
    return (
        <div>
            {
                starData && (
                    <>
                        <h1>{starData.name}</h1>
                        <h2>{starData.eye_color}</h2>
                        <h3>{starData.birth_year}</h3>
                    </>
                )
            }
        </div>
    );
};

export default StarDetails;