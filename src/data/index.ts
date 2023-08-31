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

export const architecturalDesign = [
    {
        id:1,
        name:'Architectural Design',
        description:'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image:'/images/services/hero-services-2.jpg'
    },
    {
        id:2,
        name:'Architectural Design',
        description:'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image:'/images/services/hero-services-2.jpg'
    },
    {
        id:3,
        name:'Architectural Design',
        description:'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image:'/images/services/hero-services-2.jpg'
    },
    {
        id:4,
        name:'Architectural Design',
        description:'Horem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        image:'/images/services/hero-services-2.jpg'
    },
]

export const services = [
    {
        name:'SPACE PLANNING',
        description:'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        icon:'/icons/plan.svg'
    },
    {
        name:'CONSTRUCTION',
        description:'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        icon:'/icons/construction.svg'
    },
    {
        name:'INTERIOR DESIGN',
        description:'Worem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
        icon:'/icons/interior-design.svg'
    },
]

export const teams = [
    {
        name:'SAMUEL MARK',
        image:'/images/about-us/teams/profile_1.jpg',
        role:'Lead Designer'
    },
    {
        name:'SAMUEL MARK',
        image:'/images/about-us/teams/profile_2.jpg',
        role:'Lead Designer'
    },
    {
        name:'SAMUEL MARK',
        image:'/images/about-us/teams/profile_3.jpg',
        role:'Lead Designer'
    },
    {
        name:'SAMUEL MARK',
        image:'/images/about-us/teams/profile_4.jpg',
        role:'Lead Designer'
    },
    {
        name:'SAMUEL MARK',
        image:'/images/about-us/teams/profile_5.jpg',
        role:'Lead Designer'
    },
    {
        name:'SAMUEL MARK',
        image:'/images/about-us/teams/profile_6.jpg',
        role:'Lead Designer'
    },
]

export const faq = [
    {
        id:1,
        question:'can I propose my own design?',
        description:'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
        id:2,
        question:'How many day\'s on average will it take to finish a design? ',
        description:'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
    {
        id:3,
        question:'How could I know a design is what I\'m looking for?',
        description:'Gorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.'
    },
]


export const projects = [
    {
        id:1,
        name:'House design with amazing open sky view',
        image:"/images/hero-image.jpg",
        description:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat',
        detailDescription:'lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu'
    },
    {
        id:2,
        name:'House design with amazing open sky view',
        image:"/images/hero-image.jpg",
        description:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat',
        detailDescription:'lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu'
    },
    {
        id:3,
        name:'House design with amazing open sky view',
        image:"/images/hero-image.jpg",
        description:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat',
        detailDescription:'lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu'
    },
    {
        id:4,
        name:'House design with amazing open sky view',
        image:"/images/hero-image.jpg",
        description:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat',
        detailDescription:'lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu'
    },
    {
        id:5,
        name:'House design with amazing open sky view',
        image:"/images/hero-image.jpg",
        description:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat',
        detailDescription:'lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu'
    },
    {
        id:6,
        name:'House design with amazing open sky view',
        image:"/images/hero-image.jpg",
        description:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat',
        detailDescription:'lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu'
    },
    {
        id:7,
        name:'House design with amazing open sky view',
        image:"/images/hero-image.jpg",
        description:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat',
        detailDescription:'lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu'
    },
    {
        id:8,
        name:'House design with amazing open sky view',
        image:"/images/hero-image.jpg",
        description:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat',
        detailDescription:'lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu'
    },
    {
        id:9,
        name:'House design with amazing open sky view',
        image:"/images/hero-image.jpg",
        description:'Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat',
        detailDescription:'lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu'
    },
]