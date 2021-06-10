import React from 'react';
import myphoto from '../../asserts/myphoto.jpg';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './MyProfile.css';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import UpdatePassword from './UpdatePassword/UpdatePassword';


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        paper: {
            position: 'absolute',
            width: 400,
            backgroundColor: theme.palette.background.paper,
            border: '2px solid #000',
            boxShadow: theme.shadows[5],
            padding: theme.spacing(2, 4, 3),
        },
    }),
);

const MyPhoto = () => {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Text in a modal</h2>
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>

        </div>
    );

    return (
        <div className="MyProfile">
            <h1>Hi</h1>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={2}>
                    <img src={myphoto} alt="My Photo" onClick={handleOpen} /><br />
                </Grid>
                <Grid item xs={12} sm={5}>
                    <ul style={{ textAlign: 'left' }}>
                        <li> Name : Payal Varma </li>
                        <li> Email : payal@gmail.com </li>
                    </ul>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <ul style={{ textAlign: 'left' }}>
                        <li> Address : Gitanager - 2 </li>
                        <li> Zipcode : 345467 </li>
                    </ul>


                </Grid>
            </Grid>
            <h1>Update Password</h1>
            <UpdatePassword/>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>

    );
};

export default MyPhoto;