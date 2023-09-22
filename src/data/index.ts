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
        image: "https://res.cloudinary.com/desqmglcs/image/upload/v1692280528/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/4054%20Beck/4054Beck_HiRes_47_of_50_ze4rn1.jpg",
        color:'#08D3BB',
        desc_1: "Introducing the 'Beck' Home Project",
        desc_2:"Crafting Dream Homes for a Brighter Tomorrow",
        desc_3: "We craft homes with lasting memories in mind, prioritizing quality and sustainability for your family.",
        desc_4: "Celebrate life in our thoughtfully designed homes, where quality and sustainability cater to your family's needs.",
        title: "At 'Beck,' ",
        link: "https://jjp-beta.vercel.app/projects/1"
    },
    {
        image: "https://res.cloudinary.com/desqmglcs/image/upload/v1692282219/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/900%20Fiske%20%282020%29/900_Fiske_Street-53_xmzbbu.jpg",
        color:'#08D3BB',
        desc_1: "Introducing the 'Fiske' Home Project",
        desc_2:"Crafting Dream Homes for a Brighter Tomorrow",
        desc_3: "We create homes for cherished memories, prioritizing quality and sustainability for your family's comfort.",
        desc_4: "'Fiske' - Where Convenience Meets Comfort. Explore a modern living community designed for easy access to schools, shopping, and more.",
        title: "At 'Fiske,' ",
        link: "https://jjp-beta.vercel.app/projects/2"
    },
    {
        image:  "https://res.cloudinary.com/desqmglcs/image/upload/v1692280591/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/3958%20Sunswept%20Dr/SKY_PHOTOGRAPHY_LA-2Y_wa8nk0.jpg",
        color:'#08D3BB',
        desc_1: "Introducing the 'SunsweptDr' Home Project",
        desc_2:"Crafting Dream Homes for a Brighter Tomorrow",
        desc_3: "we create homes that last, with a focus on quality and sustainability for your family's well-being.",
        desc_4: "SunsweptDr' -  Where Comfort Meets Convenience. Discover a modern living community designed for easy living.",
        title: "At 'SunsweptDr,' ",
        link: "https://jjp-beta.vercel.app/projects/8"
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
        name:'ARCHITECTURAL DESIGN',
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


export const Projects = [
    {
      id: "1",
      name: "Beck",
      image:
        "https://res.cloudinary.com/desqmglcs/image/upload/v1692280528/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/4054%20Beck/4054Beck_HiRes_47_of_50_ze4rn1.jpg",
    },
    {
      id: "2",
      name: "Fiske",
      image:
        "https://res.cloudinary.com/desqmglcs/image/upload/v1692282219/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/900%20Fiske%20%282020%29/900_Fiske_Street-53_xmzbbu.jpg",
    
    },
    {
      id: "3",
      name: "Hortense",
      image:
        "https://res.cloudinary.com/desqmglcs/image/upload/v1692282127/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/12721%20Hortense/DJI_0231_sttgjr.jpg",
    
    },
    {
      id: "4",
      name: "lliff",
      image:
        "https://res.cloudinary.com/desqmglcs/image/upload/v1692281677/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/770%20Iliff%20%282018%29/SkyFilm_65_d1ubjx.jpg",
    
    },
    {
      id: "5",
      name: "RanchoSt",
      image:
        "https://res.cloudinary.com/desqmglcs/image/upload/v1692282373/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/17320%20Rancho%20st/1-1024x683_ir4drj.jpg",
    
    },
    {
      id: "6",
      name: "Sancola",
      image:
        "https://res.cloudinary.com/desqmglcs/image/upload/v1692281531/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/4405%20Sancola/4405SancolaAve_TolucaLake_CA91602_USAPre-Twilights-1_ttfutx.jpg",
    },
    {
      id: "7",
      name: "Shadyglade",
      image:
        "https://res.cloudinary.com/desqmglcs/image/upload/v1692282384/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/4322%20shadyglade/SkyFilm-02-1024x684_l1cnti.jpg",
   
    },
  
    {
      id: "8",
      name: "SunsweptDr",
      image:
        "https://res.cloudinary.com/desqmglcs/image/upload/v1692280591/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/3958%20Sunswept%20Dr/SKY_PHOTOGRAPHY_LA-2Y_wa8nk0.jpg",
    
    },
    {
      id: "9",
      name: "Valley Vista",
      image:
        "https://res.cloudinary.com/desqmglcs/image/upload/v1692282367/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/15125%20Valley%20Vista/15125_Valley_Vista_Boulevard_-_High_Resolution_4_km3fms.jpg",
    
    },
    {
      id: "10",
      name: "WoodBridge",
      image:
        "https://res.cloudinary.com/desqmglcs/image/upload/v1692280587/House%20Pictures-20230812T204648Z-002%20%28copy%29/House%20Pictures/12005%20Woodbridge/SKY_PHOTOGRAPHY_LA-RR2_dl3fao.jpg",
    }
  ];