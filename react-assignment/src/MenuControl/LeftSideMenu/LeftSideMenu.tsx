import React, { ReactElement, FC } from 'react';
import './LeftSideMenu.css';
import LeftNavItems from './LeftNavItems/LeftNavItems';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { leftaccordion } from './Accordion/LeftAccordion';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: 'black',
            color: 'white'
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0
        },
        secondaryHeading: {
            fontSize: theme.typography.pxToRem(15),
            color: theme.palette.text.secondary,
        },
    }),
);


const LeftSideMenu: FC = (): ReactElement => {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState<string | boolean>(true);

    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    let leftsubmenu = (
        <div>
            {leftaccordion.map((list, index) => {
                return (
                    <Accordion  key={index}>
                        <AccordionSummary

                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>{list.heading}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <LeftNavItems accordionlist={list.menulist} />
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )

    return (
        <div className="LeftSideMenu">

            {leftsubmenu}



            {/*  <Accordion>
                <AccordionSummary
                    
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <Typography className={classes.heading}>My Profile</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <LeftNavItems/>
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    
                    aria-controls="panel1bh-content"
                    id="panel2bh-header"
                >
                    <Typography className={classes.heading}>My Project</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        <LeftNavItems/>
                    </Typography>
                </AccordionDetails>
          </Accordion>*/}
        </div>
    )
};

export default LeftSideMenu;