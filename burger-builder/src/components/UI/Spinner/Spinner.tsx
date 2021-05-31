import React, {ReactElement, FC} from 'react';
import './Spinner.css';

const spinner: FC = (): ReactElement => (
    <div className="Loader">Loading...</div>
);

export default spinner;