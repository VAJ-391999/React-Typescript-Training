import { ISubMenuList } from '../../../Interfaces/ToolbarSubMenuList';

export const submenulist: ISubMenuList[] = [
    {
        name: "Home",
        menulist: [{
            title: "Home1",
            path: "/home/home1"
        },
        {
            title: "Home2",
            path: "/home/home2"
        }    
        ]
    },
    {
        name: "About",
        menulist: [{
            title: "About1",
            path: "about/about1"
        }]
    },
    {
        name: "Contact",
        menulist: [{
            title: "Contact1",
            path: "contact/contact1"
        }]
    }
];


