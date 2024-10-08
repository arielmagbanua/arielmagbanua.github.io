let info = {
  name: "Ariel Magbanua",
  logo_name: "Ariel Magbanua",
  flat_picture: require("./src/assets/id_transparent.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false,
    },
  },
  description:
    "I am a passionate software engineer who enjoys coding and building applications. I build applications for both web and mobile and currently exploring machine learning and AI.",
  links: {
    linkedin: "https://www.linkedin.com/in/arielmagbanua/",
    github: "https://github.com/arielmagbanua",
    twitter: "https://x.com/Ariel_Magbanua",
    medium: "https://medium.com/@arielmagbanua",
  },
  education: [
    {
      name: "Holy Cross of Davao College",
      place: "Davao City, Philippines",
      date: "2007 - 2012",
      degree: "Bachelor of Science (BS), Computer Engineering",
      description:
        "Studied electronics, computer networks, and software engineering. ",
      skills: [
        "Software Engineering",
        "Web Development",
        "PHP",
        "Java",
        "C++",
        "VB .NET",
      ],
    },
  ],
  experience: [
    {
      name: "Mapúa Malayan Colleges Mindanao",
      place: "Davao City, Philippines",
      date: "August 2023 - present",
      position: "College Instructor",
      description:
        "Teaching Object Oriented Programming and Mobile Application Development.",
      skills: [
        "Java",
        "Kotlin",
        "Git",
        "Android",
        "C#",
        "Python",
        "SQLite",
        "SQL",
        "Teaching",
      ],
    },
    {
      name: "Zeald / Dash10 Managed Services",
      place: "Davao City, Philippines",
      date: "January 2019 - March 2024",
      position: "Senior Software Engineer",
      description:
        "Currently working as a senior level software engineer in the Research and Development Department. Our department focuses on the research and development of our current or upcoming systems, products, and tools.",
      skills: [
        "HTML5",
        "CSS3",
        "PHP",
        "JSON",
        "JavaScript",
        "C#",
        "MySQL",
        "Laravel",
        ".NET Core",
        "VueJS",
        "Bootstrap",
        "JQuery",
        "REST",
      ],
    },
    {
      name: "IdeaHub IT Solutions Provider, Inc.",
      place: "Davao City, Philippines",
      date: "September 2012 - December 2019",
      position: "Senior Software Developer",
      description:
        "I worked as one of the Android developers in the company and was deployed in an android project for a US client for almost three years, and then I worked on various web development projects for different US clients. My experience mostly using native Android java for mobile, Laravel framework for web, and server maintenance to ensure that all the applications were running correctly.",
      skills: [
        "HTML5",
        "CSS3",
        "PHP",
        "JSON",
        "JavaScript",
        "MySQL",
        "SQLite",
        "Java",
        "Laravel",
        "Android",
        "Bootstrap",
        "JQuery",
        "REST",
      ],
    },
    {
      name: "STI College Davao",
      place: "Davao City, Philippines",
      date: "June 2014 - June 2015 / June 2018 - November 2018",
      position: "IT Instructor",
      description:
        "Instructor for Mobile Applications Development (Android), Data Structures and Algorithms courses of STI College Davao IT Department.",
      skills: ["Java", "Android", "SQLite"],
    },
  ],
  skills: [
    {
      title: "Languages",
      info: [
        "PHP",
        "Dart",
        "Java",
        "Kotlin",
        "HTML5",
        "CSS3",
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
      ],
      icon: "fa fa-code",
    },
    {
      title: "Front-end Frameworks",
      info: ["Android Jetpack Compose", "VueJs", "React", "Bootstrap 4"],
      icon: "fa fa-cubes",
    },
    {
      title: "Back-end Frameworks",
      info: ["Laravel", "Firebase Functions", ".NET Core"],
      icon: "fa fa-duotone fa-cubes-stacked",
    },
    {
      title: "Mobile",
      info: ["Android", "Flutter"],
      icon: "fa fa-duotone fa-mobile",
    },
    {
      title: "Cloud Services",
      info: ["Firebase", "Google App Engine"],
      icon: "fa fa-solid fa-cloud",
    },
    {
      title: "Databases",
      info: ["MySQL", "SQLite", "Firestore"],
      icon: "fa fa-solid fa-database",
    },
    {
      title: "SaaS",
      info: ["Xero", "Infusion Business Software"],
      icon: "fa fa-solid fa-server",
    },
    {
      title: "Tools",
      info: [
        "Git",
        "Sass",
        "Android Studio",
        "PHPStorm",
        "WebStorm",
        "PyCharm",
        "Visual Studio Code",
      ],
      icon: "fa fa-solid fa-screwdriver-wrench",
    },
    {
      title: "AI / Machine Learning",
      info: ["TensorFlow", "Google Vision AI"],
      icon: "fa fa-solid fa-brain",
    },
  ],
  projects: {
    open_source: [
      {
        name: "Dart Basics",
        pictures: [
          {
            img: require("./src/assets/portfolio/dart/dartbasics.png"),
          },
        ],
        technologies: ["PHP"],
        category: "Library",
        date: "July 2022 - Present",
        github: "https://github.com/google/dart-basics",
        visit: "https://github.com/google/dart-basics",
        description:
          "Useful extension methods on the built-in objects in Dart, such as String, Iterable, and Object.",
      },
      {
        name: "ESV Bible for Dart",
        pictures: [
          {
            img: require("./src/assets/portfolio/esv_bible/pub_esv_bible.png"),
          },
        ],
        technologies: ["Dart"],
        category: "Library",
        date: "July 2022 - Present",
        github: "https://github.com/arielmagbanua/esv_bible",
        visit: "https://pub.dev/packages/esv_bible",
        description:
          "A future based dart package for the ESV API from Crossway which can be used to fetch ESV bible passages.",
      },
      {
        name: "NLT Bible for Dart",
        pictures: [
          {
            img: require("./src/assets/portfolio/nlt_bible/pub_nlt_bible.png"),
          },
        ],
        technologies: ["Dart"],
        category: "Library",
        date: "August 2022 - Present",
        github: "https://github.com/arielmagbanua/nlt_bible",
        visit: "https://pub.dev/packages/nlt_bible",
        description:
          "A future based dart package for the NLT API from Tyndale which can be used to fetch NLT and KJV bible passages.",
      },
      {
        name: "Google Photos API Library",
        pictures: [
          {
            img: require("./src/assets/portfolio/photoslibrary/1.png"),
          },
        ],
        technologies: ["PHP"],
        category: "Library",
        date: "September 2021 - Present",
        github: "https://github.com/google/php-photoslibrary",
        visit: "https://github.com/google/php-photoslibrary",
        description:
          "This repository contains the PHP client library for the Google Photos Library API.",
      },
    ],
    work: [
      {
        name: "Foundation",
        pictures: [
          {
            img: require("@/assets/portfolio/foundation/1.png"),
          },
          {
            img: require("@/assets/portfolio/foundation/2.png"),
          },
          {
            img: require("@/assets/portfolio/foundation/3.png"),
          },
          {
            img: require("@/assets/portfolio/foundation/4.png"),
          },
          {
            img: require("@/assets/portfolio/foundation/5.png"),
          },
          {
            img: require("@/assets/portfolio/foundation/6.png"),
          },
        ],
        technologies: [
          "Android",
          "Kotlin",
          "Jetpack Compose",
          "Firebase Authentication",
          "Firestore",
        ],
        category: "Mobile",
        date: "April 2024 - Present",
        github: "https://github.com/Growpoint-Davao/foundations",
        visit:
          "https://play.google.com/store/apps/details?id=church.thegrowpoint.foundations",
        description:
          "The GrowPoint Foundation is a seven-lesson personal discipleship guide to help facilitate conversations to jump-start someone’s walk with God. It is a tool to engage people, communicate the gospel to them, and help them follow Jesus. The goal is not to finish the booklet——it’s to help them know and walk with God.",
      },
      {
        name: "Mesh",
        pictures: [
          {
            img: require("./src/assets/portfolio/mesh/1.png"),
          },
          {
            img: require("./src/assets/portfolio/mesh/2.png"),
          },
          {
            img: require("./src/assets/portfolio/mesh/3.png"),
          },
          {
            img: require("./src/assets/portfolio/mesh/4.png"),
          },
          {
            img: require("./src/assets/portfolio/mesh/5.png"),
          },
        ],
        technologies: [
          "PHP",
          "HTML5",
          "CSS",
          "JavaScript",
          "MySQL",
          "Laravel",
          "VueJs",
        ],
        category: "Web App",
        date: "March 2019 - Present",
        visit: "https://www.meshautomate.io/",
        description: "Software integration middleware and automation tool.",
      },
      {
        name: "Personal Website / Portfolio",
        pictures: [
          {
            img: require("./src/assets/portfolio/personal/1.png"),
          },
          {
            img: require("./src/assets/portfolio/personal/2.png"),
          },
        ],
        technologies: [
          "VueJs",
          "HTML5",
          "CSS",
          "Bootstrap4",
          "Firebase Hosting",
        ],
        category: "Web App",
        date: "January 2018 - Present",
        github: "https://github.com/arielmagbanua/arielmagbanua.github.io",
        visit: "https://arielmagbanua.com/",
        description: "My personal website and portfolio page.",
      },
      {
        name: "GEM Academy",
        pictures: [
          {
            img: require("./src/assets/portfolio/gema/1.png"),
          },
          {
            img: require("./src/assets/portfolio/gema/2.png"),
          },
          {
            img: require("./src/assets/portfolio/gema/3.png"),
          },
          {
            img: require("./src/assets/portfolio/gema/4.png"),
          },
        ],
        technologies: [
          "PHP",
          "HTML5",
          "CSS",
          "JavaScript",
          "MySQL",
          "Laravel",
          "VueJs",
          "Facebook Sign-in API",
          "Google Sign-in API",
        ],
        category: "Web App",
        date: "April 2020 - November 2020",
        visit: "https://www.gemacademy.nz/",
        description:
          "Self-Paced online digital internship with NZ's most experienced digital agency for SME's",
      },
      {
        name: "Para Po!",
        pictures: [
          {
            img: require("./src/assets/portfolio/parapo/1.png"),
          },
          {
            img: require("./src/assets/portfolio/parapo/2.jpg"),
          },
          {
            img: require("./src/assets/portfolio/parapo/3.png"),
          },
          {
            img: require("./src/assets/portfolio/parapo/4.png"),
          },
          {
            img: require("./src/assets/portfolio/parapo/5.png"),
          },
        ],
        technologies: [
          "Java",
          "Android",
          "SQLite",
          "Google Maps API",
          "Places API",
        ],
        category: "Mobile",
        date: "May 2017 - March 2018",
        description:
          "An Android application that allows the user to find jeepney that passes to user's desired origin and destination locations. It does compute estimated fare for each possible jeepney for those who are not familiar with the usual fare of Davao City jeepneys.",
      },
      {
        name: "ParaPo Web App",
        pictures: [
          {
            img: require("./src/assets/portfolio/parapo/6.png"),
          },
          {
            img: require("./src/assets/portfolio/parapo/7.png"),
          },
        ],
        technologies: [
          "PHP",
          "HTML5",
          "CSS",
          "JavaScript",
          "MySQL",
          "Laravel",
          "Google Maps API",
        ],
        category: "Web App",
        date: "May 2017 - March 2018",
        description:
          "The web app allows the user to search and view all available Jeepney routes in Davao City. The web application also serves as administrator and data source of the partner android application which is Para Po!",
      },
      {
        name: "Leads Filter",
        pictures: [
          {
            img: require("./src/assets/portfolio/eiqleadsfilter/1.png"),
          },
        ],
        technologies: ["PHP", "HTML5", "CSS", "JavaScript", "MySQL", "Laravel"],
        category: "Web App",
        date: "July 2015 - April 2016",
        visit: "http://leadfilter.engageiq.com/",
        description:
          "Receives lead requests and will enable administrators to filter or curate those leads for quality control.",
      },
      {
        name: "Reports Generator",
        pictures: [
          {
            img: require("./src/assets/portfolio/eiqreportsgen/1.png"),
          },
        ],
        technologies: ["PHP", "HTML5", "CSS", "JavaScript", "MySQL", "Laravel"],
        category: "Web App",
        date: "May 2015 - December 2019",
        visit: "http://reports.engageiq.com/",
        description:
          "Web application for generating and downloading of advertising leads revenue reports sheet.",
      },
      {
        name: "Lead Reactor",
        pictures: [
          {
            img: require("./src/assets/portfolio/eiqleadreactor/1.png"),
          },
        ],
        technologies: ["PHP", "HTML5", "CSS", "JavaScript", "MySQL", "Laravel"],
        category: "Web App",
        date: "May 2015 - December 2019",
        visit: "http://leadreactor.engageiq.com/",
        description:
          "Web application for managing the Engage Logic IQ publishers, advertisers, survey campaigns, and collection of leads.",
      },
    ],
  },
};

export default info;
