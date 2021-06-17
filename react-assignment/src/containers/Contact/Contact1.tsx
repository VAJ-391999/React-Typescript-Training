import React, { ReactElement, FC, useState, useEffect } from 'react';
import './Contact.css';
import Pagination from '@material-ui/lab/Pagination';
import { Grid, Card, CardContent, Typography, capitalize } from '@material-ui/core';
import axios from 'axios';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import CustomModal from '../../containers/Modal/Modal';



function getModalStyle() {
    const top = 50;
    const left = 70;

    return {
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        
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


const Contact1: FC = (): ReactElement => {

    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [page, setPage] = useState<number>(1);
    const [posts, setPosts] = useState<any | null>(null);
    const itemsPerPage = 10;
    const [singlePost, setSinglePost] = useState<any | null>(null);
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let body: JSX.Element  = (
        <div></div>
    );

    if(posts !== null && singlePost !== null) {
        body = (
            <div style={modalStyle} className={classes.paper}>
                <h2 id="simple-modal-title">{singlePost.title}</h2>
                <p id="simple-modal-description">{singlePost.body}</p>
            </div>
        );
    }
    
    let onOfPages: number = 0;
    if (posts) {
        onOfPages = Math.ceil(posts.length / itemsPerPage)
    }

    useEffect(() => {
        const loadData = axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                const urlposts = res.data;
                setPosts(urlposts);

            })
        console.log(posts);
    }, [page])



    return (
        <div className="Contact">
            <h1>Posts</h1>
            <div className="Posts">
                <Grid container spacing={2}>
                    {posts && posts.slice((page - 1) * itemsPerPage, page * itemsPerPage)
                        .map((post: any, index: any) => (
                            <Grid item xs={12} sm={4} md={3} key={index}>
                                <Card onClick={() => { handleOpen(); setSinglePost(post) }} style={{ height: '250px' }}>
                                    <CardContent>
                                        <Typography>
                                            <h1>
                                                {post.id}
                                            </h1>
                                        </Typography>
                                        <Typography>
                                            <h3>
                                                {post.title}
                                            </h3>
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
            </div>


            <div className="paginationDiv">
                <Pagination
                    page={page}
                    count={onOfPages}
                    defaultPage={1}
                    onChange={(event, value) => setPage(value)} />

            </div>

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

export default Contact1;