import { link } from "fs";

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Motivation", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [

    {
      id: 7,
      title: "",
      description: "",
      className: "lg:row-span-10 lg:col-span-3 md:col-span-3 ",
      imgClassName: "",
      titleClassName: "",
      img: "",
      spareImg: "",
    },

    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:row-span-10 lg:col-span-2  md:col-span-3 ",
      imgClassName: "",
      titleClassName: "justify-center z-0",
      img: "",
      spareImg: "",
    },

    // {
    //   id: 0,
    //   title: "My experience",
    //   description: "Where i have worked and learned",
    //   className: "md:col-span-2 md:row-span-1",
    //   imgClassName: "",
    //   titleClassName: "mb-[-20px]",
    //   img: "/ATC.jpg",
    //   spareImg: "",
    // },

    {
      id: 5,
      title: "My experience",
      description: "Where i have worked and learned",
      className: "lg:col-span-2 md:col-span-3 md:row-span-3",
      imgClassName: "",
      titleClassName: "mb-[-20px]",
      img: "",
      spareImg: "",
    },

    {
      id: 4,
      title: "My Interests",
      description: "What I do when I am not creating experiences",
      className: "lg:col-span-2 md:col-span-3 md:row-span-3",
      imgClassName: "",
      titleClassName: "mb-[-20px] z-0",
      img: "",
      spareImg: "",
    },

    {
      id: 11,
      title: "",
      description: "",
      className: "md:col-span-1 md:row-span-3",
      imgClassName: "",
      titleClassName: "",
      img: "",
      spareImg: "",
    },





    // {
    //   id: 10,
    //   title: "Currently improving my VR game",
    //   description: "The Inside Scoop",
    //   className: "lg:col-span-2 md:col-span-6 md:row-span-1",
    //   imgClassName: "relative right-0 bottom-0 md:w-96 w-60",
    //   titleClassName: "justify-center md:justify-start lg:justify-center z-0",
    //   img: "/CMGT.jpg",
    //   spareImg: "/grid.svg",
    // },

    // {
    //   id: 1,
    //   title: "I prioritize client collaboration, fostering open communication ",
    //   description: "",
    //   className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    //   imgClassName: "w-full h-full",
    //   titleClassName: "justify-end z-0",
    //   img: "/b1.svg",
    //   spareImg: "",
    // },
    // {
    //   id: 2,
    //   title: "I'm very flexible with time zone communications",
    //   description: "",
    //   className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    //   imgClassName: "",
    //   titleClassName: "justify-start z-0",
    //   img: "",
    //   spareImg: "",
    // },


    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-full md:col-span-full md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center z-0",
      img: "",
      spareImg: "",
    },


  ];

//  export const people = [
//     {
//       id: 1,
//       name: "Yoel",
//       designation: "Software Engineer",
//       image: "https://media.licdn.com/dms/image/v2/D4D03AQHr04aFKQYWiA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719749990079?e=1749686400&v=beta&t=H2o5H1WfPF8ZJytnB9MYDvkuvCJSLsnemD7ifK6-U0o",
//     },
//  ]
export const projects = [
  {
    id: 1,
    title: "The shooting range: Into VR",
    des: "My first Virtual Reality project made in Unreal engine using blueprints. The game consists of two manually reloadable weapons and a shooting range.",
    img: "/titleVR.png",
    iconLists: ["/unreal-engine.svg", "/vr-glasses.png"],
    link: "https://bovdh.itch.io/the-shooting-range-into-vr",
    goTo: "Check itch.io",
    projectType: "Personal project"
  },
  {
    id: 2,
    title: "Sweet dreams",
    des: "In the movie Sweet Dreams, a man is haunted in his dreams by a demon. This movie was entirely created by me, except for the acting. I did everything behind the scenes for this movie, from developing the story to editing.",
    img: "/sweetDreams.png",
    iconLists: ["/premiere.svg", "/afterEffects.png"],
    link: "https://www.youtube.com/watch?v=7F0cSCxYBNY",
    goTo: "See it on Youtube",
    projectType: "Short film"
  },
  {
    id: 3,
    title: "Beat the bubble",
    des: "A beat the buddy like game created for the global game jam 2025. I worked on programming and gameplay design.",
    img: "/bdsm.png",
    iconLists: ["/unity.png"],
    link: "https://bovdh.itch.io/beat-the-bubble",
    goTo: "Check itch.io",
    projectType: "2 day game-jam"
  },
  {
    id: 4,
    title: "Champagne shot",
    des: "An arcade game with a custom controller. I was in charge of designing the gameplay and creating the controller.",
    img: "/arcade.png",
    iconLists: ["/photoshop.svg", "/arduino.png", "/c++.svg", "/premiere.svg"],
    link: "https://bovdh.itch.io/champagne-shot",
    goTo: "Check itch.io",
    projectType: "2 week group project"
  },
  {
    id: 5,
    title: "The shooting range",
    des: "My first experience in Unreal engine using blueprints. A simple shooter game featuring of 2 guns and a shooting range.",
    img: "/shootingRange.png",
    iconLists: ["/unreal-engine.svg", ],
    link: "https://bovdh.itch.io/the-shooting-range",
    goTo: "Check itch.io",
    projectType: "Personal project"
  },
  {
    id: 6,
    title: "No one will save you: sound remake",
    des: "For a school project i was tasked to remake all the audio of this movie trailer using Ableton live.",
    img: "/nwsy.png",
    iconLists: ["/ableton.png"],
    link: "https://youtu.be/rvik3mPMrdc",
    goTo: "See it on Youtube",
    projectType: "Sound recreation"
  },

];

export const testimonials = [
  {
    quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Interested in mechanic design",
    desc: "My greatest interest lies with creating creative and immersive mechanics for games and other interactive experiences",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Exited to start working",
    desc: "I am exited and motivated to start working in a real development environment. And to create immersive experiences.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Passionate about what i do",
    desc: "I am very passionate about creating experiences that are fun and engaging, while using the latest technologies to create them.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Eager to learn",
    desc: "The industry is always evolving, with new technologies and new possibilities. that's why its important for me to never stop learning.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Bo-tje"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/bo-van-der-hulst-a259b42bb/"
  },
  {
    id: 3,
    img: "/yt.png",
    link: "https://www.youtube.com/@bovanderhulst9935"
  },
];