import { ILeftAccordion } from '../../../Interfaces/ToolbarSubMenuList';

export const leftaccordion: ILeftAccordion[] = [
    {
        heading: "My Profile",
        menulist: [{
            title: "My Photo",
            path: "/myprofile/myphoto"
        }, 
        {
            title: "My Downloads",
            path: "/myprofile/mydownloads"
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