import React, { createContext, useReducer } from "react"

export const ResourceContext = createContext();

// item allowing multiple selection has "_" in front of key
const initialState = {
    personal: {
        category_display: "",
        firstName: "",
        lastName: "",
        title_options: [],
        _tag_options: [],
        // old data set below, for demo / prototype purpose
        // _tags: [],
        // title: [],
    },
    contact: {
        category_display: "",
        _email_options: [],
        _phone_options: [],
        _location_options: [],
    },
    summary: {
        category_display: "",
        tag_options: [],
        blocks: []
    },
    social: {
        category_display: "",
        tag_options: [],
        blocks: []
    },
    skills: {
        category_display: "",
        tag_options: [],
        title_options: [],
        skill_options: [],
        blocks: []
    },
    education: {
        category_display: "",
        tag_options: [],
        education_entities: []
    },
    projects: {
        category_display: "",
        tag_options: [],
        projects: []
    },
    experience: {
        category_display: "",
        tag_options: [],
        companies: []
    },
    // block_options: {

    //     contact: {

    //     },
    //     summary: {

    //     }
    // },
    current_resume: {
        res_id: "",
        style_id: "",
        tags: {

        },
        personal: {
            title_options_selection: null,
            _tag_options_selection: []
        },
        contact: {

        },
        summary: {

        },
        social: {

        },
        skills: {

        },
        education: {

        },
        projects: {

        },
        experience: {

        }
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INITIAL_RESOURCE":
            return {
                ...state,
                personal: action.resources.personal,
                contact: action.resources.contact,
                summary: action.resources.summary,
                social: action.resources.social,
                skills: action.resources.skills,
                education: action.resources.education,
                projects: action.resources.projects,
                experience: action.resources.experience,
                current_resume: action.current
            }
        case "UPDATE_CURRENT_RESUME_PERSONAL":
            return {

            }
        default:
            throw new Error()
    }
}

export const ResourceContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <ResourceContext.Provider value={[state, dispatch]}>
            {props.children}
        </ResourceContext.Provider>
    )
}

    // personal: {
    //     category_display: "Personal Information",
    //     firstName: "Ming",
    //     lastName: "Liu",
    //     title_options: ["Software Engineer", "Mobile App Developer", "Frontend Developer", "Backend Developer", "Full Stack Engineer"],
    //     tag_options: ["Frontend", "Full Stack", "Backend", "Mobile", "Software"],
    //     // old data set below, for demo / prototype purpose
    //     _tags: ["Frontend", "Full Stack", "Backend", "Mobile", "Software"],
    //     title: ["Software Engineer", "Mobile App Developer", "Frontend Developer", "Backend Developer", "Full Stack Engineer"],
    // },
    // contact: {
    //     category_display: "Contacts",
    //     email_options: ["ming@brooksidemediaco.com", "mingliudev@gmail.com"],
    //     phone_options: ["347-882-0395", "516-662-6028"],
    //     location_options: ["New York, NY", "Ithaca, NY"],
    // },
    // summary: {
    //     category_display: "Summary",
    //     tag_options: ["AWS", "DevOp", "Cloud", "Product Manager", "React", "Python"],
    //     blocks: [
    //         {
    //             title: "Summary",
    //             description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare ante ante, id aliquam eros mattis nec. Duis mollis pellentesque ex vel varius. Vivamus eget ex condimentum, suscipit velit non, lacinia metus. Vestibulum semper in lectus sit amet feugiat. Sed ultricies dictum odio, non pharetra turpis blandit et. Aenean sodales pulvinar sem nec sagittis. Praesent ultrices tempor fermentum. Donec gravida, est eu feugiat sollicitudin, enim ipsum tempus nisl, et ornare felis orci et elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod iaculis odio vel lacinia. Aenean mollis felis eu leo ullamcorper molestie. Nam quis augue risus. Maecenas ac ligula quis diam malesuada venenatis.",
    //             tags: ["AWS", "DevOp", "Cloud"]
    //         },
    //         {
    //             title: "Objective",
    //             description: "Donec vitae finibus nisl. Aliquam ipsum mi, feugiat vitae arcu non, ultricies vulputate erat. Maecenas at odio vehicula, cursus ligula vitae, feugiat neque. Nam massa ipsum, blandit non urna non, dictum mattis sapien. Donec molestie vel tortor eget finibus. Nam sit amet lorem pharetra, feugiat purus eget, iaculis tellus. Curabitur urna velit, sagittis id est quis, suscipit dignissim turpis. Pellentesque vel elementum turpis. Pellentesque posuere ornare euismod. Suspendisse potenti. Sed fringilla quam nisi, nec pharetra arcu tempor id. Nunc consectetur condimentum purus, vitae lobortis lorem porttitor vitae. Suspendisse sed posuere leo. Sed ac sollicitudin nulla. Nulla eget metus sed mauris tincidunt viverra quis at odio.",
    //             tags: ["AWS", "React", "Python"]
    //         },
    //         {
    //             title: "Summary",
    //             description: "Nulla vitae pulvinar sem. In vel metus mauris. Phasellus consectetur sed massa ultrices consectetur. In volutpat sem in facilisis pharetra. Donec vestibulum est augue, at interdum dui bibendum eget. Curabitur pretium quam vitae auctor vestibulum. Morbi efficitur tortor ac ex tincidunt, eu faucibus tellus aliquet. Mauris quis magna venenatis libero dignissim porta ut in libero. Maecenas ullamcorper egestas molestie. Sed mattis ac libero id vestibulum. Nulla pharetra, lectus in tristique faucibus, lacus metus dapibus nunc, a viverra felis nulla eget ex. Cras consectetur libero at mi bibendum, in scelerisque tortor vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    //             tags: ["AWS", "Python", "Product Manager"]
    //         }
    //     ]
    // },
    // social: {
    //     category_display: "Social",
    //     tag_options: ["developer", "engineer", "product manager", "mobile developer"],
    //     blocks: [
    //         {
    //             media: 'Linkedin',
    //             userName: 'mingliu68',
    //             link: "",
    //             tags: []
    //         },
    //         {
    //             media: 'Twitter',
    //             userName: 'intoxic8_sky',
    //             link: "",
    //             tags: []
    //         },
    //         {
    //             media: 'Github',
    //             userName: 'mingliu68',
    //             link: "",
    //             tags: []
    //         }
    //     ]
    // },
    // skills: {
    //     category_display: "Skills",
    //     tag_options: ["developer", "engineer", "product manager", "mobile developer", "web dev", 'full stack'],
    //     title_options: ['Technology', 'Tech Stack', 'Soft Skills', 'Web Dev', 'Languages', 'Frameworks', 'Libraries'],
    //     skill_options: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Express', 'Python', 'PHP', 'React Native', 'Node.js'],
    //     blocks: [
    //         {
    //             title: "Technology",
    //             skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Express', 'Python', 'PHP', 'React Native', 'Node.js'],
    //             tags: ['web dev', 'full stack']
    //         },
    //         {
    //             title: "Languages",
    //             skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Express', 'Python', 'PHP', 'React Native', 'Node.js'],
    //             tags: ['web dev', 'full stack']
    //         },
    //         {
    //             title: "Frameworks",
    //             skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Redux', 'Express', 'Python', 'PHP', 'React Native', 'Node.js'],
    //             tags: ['web dev', 'full stack', 'developer']
    //         },
    //     ]
    // },
    // education: {
    //     category_display: "Education",
    //     tag_options: ["developer", "engineer", "product manager", "mobile developer", "web dev", 'full stack', "tutor"],
    //     education_entities: [
    //         {
    //             institution: "Hofstra University",
    //             startYear: "2007",
    //             endYear: "2008",
    //             city: "Hempstead",
    //             state_province: "NY",
    //             degree: "Bachelor of Business Administration - Accounting",
    //             isActive: false,
    //             blocks: [
    //                 {
    //                     description: "Minored in Mathematics",
    //                     tags: ["engineer"]
    //                 },
    //                 {
    //                     description: "Graduated Summa Cum Laude.\nMinored in Mathematics\nMajor GPA: 3.96\nMinor GPA: 4.00",
    //                     tags: ["full stack", "engineer"]
    //                 },
    //                 {
    //                     description: "Graduated Summa Cum Laude.\nMinored in Mathematics\nMajor GPA: 3.96\nMinor GPA: 4.00\nInitiated peer-to-peer tutoring service",
    //                     tags: ["tutor"]
    //                 },
    //             ]
    //         },
    //         {
    //             institution: "State University of New York at Stony Brook",
    //             startYear: "1996",
    //             endYear: "1997",
    //             city: "Stony Brook",
    //             state_province: "NY",
    //             degree: null,
    //             isActive: false,
    //             blocks: [
    //                 {
    //                     description: "Concentration in Pre Physical Therapy",
    //                     tags: []
    //                 },
    //                 {
    //                     description: "Overall GPA: 3.68",
    //                     tags: []
    //                 },
    //             ]
    //         },

    //     ]
    // },
    // projects: {
    //     category_display: "Projects",
    //     tag_options: ["developer", "engineer", "product manager", "mobile developer", "web dev", 'full stack', "tutor", 'React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3'],
    //     projects: [
    //         {
    //             project_title: "Bark & Meowski - The Ultimate Animal Rescue Portal",
    //             blocks: [
    //                 {
    //                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare ante ante, id aliquam eros mattis nec. Duis mollis pellentesque ex vel varius. Vivamus eget ex condimentum, suscipit velit non, lacinia metus. Vestibulum semper in lectus sit amet feugiat. Sed ultricies dictum odio, non pharetra turpis blandit et. Aenean sodales pulvinar sem nec sagittis. Praesent ultrices tempor fermentum. Donec gravida, est eu feugiat sollicitudin, enim ipsum tempus nisl, et ornare felis orci et elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod iaculis odio vel lacinia. Aenean mollis felis eu leo ullamcorper molestie. Nam quis augue risus. Maecenas ac ligula quis diam malesuada venenatis.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 },
    //                 {
    //                     description: "Donec vitae finibus nisl. Aliquam ipsum mi, feugiat vitae arcu non, ultricies vulputate erat. Maecenas at odio vehicula, cursus ligula vitae, feugiat neque. Nam massa ipsum, blandit non urna non, dictum mattis sapien. Donec molestie vel tortor eget finibus. Nam sit amet lorem pharetra, feugiat purus eget, iaculis tellus. Curabitur urna velit, sagittis id est quis, suscipit dignissim turpis. Pellentesque vel elementum turpis. Pellentesque posuere ornare euismod. Suspendisse potenti. Sed fringilla quam nisi, nec pharetra arcu tempor id. Nunc consectetur condimentum purus, vitae lobortis lorem porttitor vitae. Suspendisse sed posuere leo. Sed ac sollicitudin nulla. Nulla eget metus sed mauris tincidunt viverra quis at odio.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 },
    //                 {
    //                     description: "Nulla vitae pulvinar sem. In vel metus mauris. Phasellus consectetur sed massa ultrices consectetur. In volutpat sem in facilisis pharetra. Donec vestibulum est augue, at interdum dui bibendum eget. Curabitur pretium quam vitae auctor vestibulum. Morbi efficitur tortor ac ex tincidunt, eu faucibus tellus aliquet. Mauris quis magna venenatis libero dignissim porta ut in libero. Maecenas ullamcorper egestas molestie. Sed mattis ac libero id vestibulum. Nulla pharetra, lectus in tristique faucibus, lacus metus dapibus nunc, a viverra felis nulla eget ex. Cras consectetur libero at mi bibendum, in scelerisque tortor vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 },
    //             ]
    //         },
    //         {
    //             project_title: "ResumeBlox - The Ultimate Customizable Resume Builder",
    //             blocks: [
    //                 {
    //                     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare ante ante, id aliquam eros mattis nec. Duis mollis pellentesque ex vel varius. Vivamus eget ex condimentum, suscipit velit non, lacinia metus. Vestibulum semper in lectus sit amet feugiat. Sed ultricies dictum odio, non pharetra turpis blandit et. Aenean sodales pulvinar sem nec sagittis. Praesent ultrices tempor fermentum. Donec gravida, est eu feugiat sollicitudin, enim ipsum tempus nisl, et ornare felis orci et elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod iaculis odio vel lacinia. Aenean mollis felis eu leo ullamcorper molestie. Nam quis augue risus. Maecenas ac ligula quis diam malesuada venenatis.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 },
    //                 {
    //                     description: "Donec vitae finibus nisl. Aliquam ipsum mi, feugiat vitae arcu non, ultricies vulputate erat. Maecenas at odio vehicula, cursus ligula vitae, feugiat neque. Nam massa ipsum, blandit non urna non, dictum mattis sapien. Donec molestie vel tortor eget finibus. Nam sit amet lorem pharetra, feugiat purus eget, iaculis tellus. Curabitur urna velit, sagittis id est quis, suscipit dignissim turpis. Pellentesque vel elementum turpis. Pellentesque posuere ornare euismod. Suspendisse potenti. Sed fringilla quam nisi, nec pharetra arcu tempor id. Nunc consectetur condimentum purus, vitae lobortis lorem porttitor vitae. Suspendisse sed posuere leo. Sed ac sollicitudin nulla. Nulla eget metus sed mauris tincidunt viverra quis at odio.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 },
    //                 {
    //                     description: "Nulla vitae pulvinar sem. In vel metus mauris. Phasellus consectetur sed massa ultrices consectetur. In volutpat sem in facilisis pharetra. Donec vestibulum est augue, at interdum dui bibendum eget. Curabitur pretium quam vitae auctor vestibulum. Morbi efficitur tortor ac ex tincidunt, eu faucibus tellus aliquet. Mauris quis magna venenatis libero dignissim porta ut in libero. Maecenas ullamcorper egestas molestie. Sed mattis ac libero id vestibulum. Nulla pharetra, lectus in tristique faucibus, lacus metus dapibus nunc, a viverra felis nulla eget ex. Cras consectetur libero at mi bibendum, in scelerisque tortor vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 },
    //             ]
    //         }
    //     ]
    // },
    // experience: {
    //     category_display: "Experience",
    //     tag_options: ["developer", "engineer", "product manager", "mobile developer", "web dev", 'full stack', "tutor", 'React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3'],
    //     companies: [
    //         {
    //             company: "Intoxic8 Studio, LLC",
    //             title: "App Developer",
    //             startMonth: "December",
    //             startYear: "2011",
    //             endMonth: null,
    //             endYear: null,
    //             isActive: true,
    //             blocks: [
    //                 {
    //                     descirption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare ante ante, id aliquam eros mattis nec. Duis mollis pellentesque ex vel varius. Vivamus eget ex condimentum, suscipit velit non, lacinia metus. Vestibulum semper in lectus sit amet feugiat. Sed ultricies dictum odio, non pharetra turpis blandit et. Aenean sodales pulvinar sem nec sagittis. Praesent ultrices tempor fermentum. Donec gravida, est eu feugiat sollicitudin, enim ipsum tempus nisl, et ornare felis orci et elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod iaculis odio vel lacinia. Aenean mollis felis eu leo ullamcorper molestie. Nam quis augue risus. Maecenas ac ligula quis diam malesuada venenatis.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 },
    //                 {
    //                     description: "Donec vitae finibus nisl. Aliquam ipsum mi, feugiat vitae arcu non, ultricies vulputate erat. Maecenas at odio vehicula, cursus ligula vitae, feugiat neque. Nam massa ipsum, blandit non urna non, dictum mattis sapien. Donec molestie vel tortor eget finibus. Nam sit amet lorem pharetra, feugiat purus eget, iaculis tellus. Curabitur urna velit, sagittis id est quis, suscipit dignissim turpis. Pellentesque vel elementum turpis. Pellentesque posuere ornare euismod. Suspendisse potenti. Sed fringilla quam nisi, nec pharetra arcu tempor id. Nunc consectetur condimentum purus, vitae lobortis lorem porttitor vitae. Suspendisse sed posuere leo. Sed ac sollicitudin nulla. Nulla eget metus sed mauris tincidunt viverra quis at odio.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 },
    //                 {
    //                     description: "Nulla vitae pulvinar sem. In vel metus mauris. Phasellus consectetur sed massa ultrices consectetur. In volutpat sem in facilisis pharetra. Donec vestibulum est augue, at interdum dui bibendum eget. Curabitur pretium quam vitae auctor vestibulum. Morbi efficitur tortor ac ex tincidunt, eu faucibus tellus aliquet. Mauris quis magna venenatis libero dignissim porta ut in libero. Maecenas ullamcorper egestas molestie. Sed mattis ac libero id vestibulum. Nulla pharetra, lectus in tristique faucibus, lacus metus dapibus nunc, a viverra felis nulla eget ex. Cras consectetur libero at mi bibendum, in scelerisque tortor vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 }
    //             ]
    //         },
    //         {
    //             company: "Freelancer at Brookside Media & Co.",
    //             title: "Web Developer",
    //             startMonth: "December",
    //             startYear: "2005",
    //             endMonth: null,
    //             endYear: null,
    //             isActive: true,
    //             blocks: [
    //                 {
    //                     descirption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ornare ante ante, id aliquam eros mattis nec. Duis mollis pellentesque ex vel varius. Vivamus eget ex condimentum, suscipit velit non, lacinia metus. Vestibulum semper in lectus sit amet feugiat. Sed ultricies dictum odio, non pharetra turpis blandit et. Aenean sodales pulvinar sem nec sagittis. Praesent ultrices tempor fermentum. Donec gravida, est eu feugiat sollicitudin, enim ipsum tempus nisl, et ornare felis orci et elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas euismod iaculis odio vel lacinia. Aenean mollis felis eu leo ullamcorper molestie. Nam quis augue risus. Maecenas ac ligula quis diam malesuada venenatis.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 },
    //                 {
    //                     description: "Donec vitae finibus nisl. Aliquam ipsum mi, feugiat vitae arcu non, ultricies vulputate erat. Maecenas at odio vehicula, cursus ligula vitae, feugiat neque. Nam massa ipsum, blandit non urna non, dictum mattis sapien. Donec molestie vel tortor eget finibus. Nam sit amet lorem pharetra, feugiat purus eget, iaculis tellus. Curabitur urna velit, sagittis id est quis, suscipit dignissim turpis. Pellentesque vel elementum turpis. Pellentesque posuere ornare euismod. Suspendisse potenti. Sed fringilla quam nisi, nec pharetra arcu tempor id. Nunc consectetur condimentum purus, vitae lobortis lorem porttitor vitae. Suspendisse sed posuere leo. Sed ac sollicitudin nulla. Nulla eget metus sed mauris tincidunt viverra quis at odio.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 },
    //                 {
    //                     description: "Nulla vitae pulvinar sem. In vel metus mauris. Phasellus consectetur sed massa ultrices consectetur. In volutpat sem in facilisis pharetra. Donec vestibulum est augue, at interdum dui bibendum eget. Curabitur pretium quam vitae auctor vestibulum. Morbi efficitur tortor ac ex tincidunt, eu faucibus tellus aliquet. Mauris quis magna venenatis libero dignissim porta ut in libero. Maecenas ullamcorper egestas molestie. Sed mattis ac libero id vestibulum. Nulla pharetra, lectus in tristique faucibus, lacus metus dapibus nunc, a viverra felis nulla eget ex. Cras consectetur libero at mi bibendum, in scelerisque tortor vestibulum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
    //                     tags: ['React', 'Redux', 'React Native', 'PostgreSQL', 'Node.js', 'JavaScript', 'HTML5', 'CSS3']
    //                 }
    //             ]
    //         },
    //     ]
    // }