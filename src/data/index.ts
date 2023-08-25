import { Routes } from "../../Routes";
import design_1Image from "../../public/images/design-1.jpg"
import design_2Image from "../../public/images/design-2.jpg"
import design_3Image from "../../public/images/design-3.jpg"

export const Navigations = [
    {
        route:Routes.HOME,
        name:'Home'
    },
    {
        route:Routes.PROJECTS,
        name:'Projects'
    },
    {
        route:Routes.SERVICES,
        name:'Services'
    },
    {
        route:Routes.ABOUTUS,
        name:'About Us'
    },
    {
        route:Routes.CONTACTUS,
        name:'Contact Us'
    }
]

export const Designs = [
    {
        image:design_1Image,
        color:'#08D3BB'
    },
    {
        image:design_2Image,
        color:'#1090CB'
    },
    {
        image:design_3Image,
        color:'#8E41B2'
    },
]