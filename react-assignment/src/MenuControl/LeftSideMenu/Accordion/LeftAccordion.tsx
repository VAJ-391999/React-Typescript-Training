import { ILeftAccordion } from '../../../Interfaces/ToolbarSubMenuList';

export const leftaccordion: ILeftAccordion[] = [
    {
        heading: "My Info",
        menulist: [{
            title: "My Profile",
            path: "/myinfo/myprofile"
        }, 
        {
            title: "My Downloads",
            path: "/myinfo/mydownloads"
        },
        {
            title: "My Team",
            path: "/myinfo/myteam"
        }
        ]
    },
    {
        heading: "My Projects",
        menulist: [{
            title: "Project1",
            path: "/project/project1"
        }, 
        {
            title: "Prject2",
            path: "/project/project2"
        }]
    }
];