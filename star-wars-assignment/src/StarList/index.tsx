import {FC, useEffect, useState} from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

const StarList: FC = () => {
    const [data, setData] = useState<any>([]);
    useEffect(() => {
        axios.get('https://swapi.dev/api/people')
        .then(res => {
            setData([...res.data.results]);
        });
    }, [])
    return (
        <div>
           <ul>
               {
                   data && data.map((item:any, index: number) => {
                        return (
                            <div key={index}>
                            <NavLink key={index} to={`/characters/${index+1}`}>{item.name}</NavLink><br/>
                            </div>
                        )
                   })
               }
           </ul>
        </div>
    );
};

export default StarList;