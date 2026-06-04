import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Framer Motion",
    image: "framer.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Stripe",
    image: "stripe.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
] as const;

export const SOCIALS = [
  {
    name: "LinkedIn",
    icon: RxLinkedinLogo,
    link: "https://www.linkedin.com/in/praduman12/",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/praduman1212",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    image: "mui.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    image: "redux.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React Query",
    image: "reactquery.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "MongoDB",
    image: "mongodb.png",
    width: 40,
    height: 40,
  },
  {
    skill_name: "Firebase",
    image: "firebase.png",
    width: 55,
    height: 55,
  },
  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Graphql",
    image: "graphql.png",
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "React Native",
    image: "reactnative.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Tauri",
    image: "tauri.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "YogSkool — Flutter mobile app",
    description:
      "YogSkool is a full-stack wellness platform that connects practitioners, instructors, and venues in one ecosystem—so communities can grow classes, courses, and brands without juggling five different apps. Technologies: **Flutter** and **Dart** (developed with **Android Studio**), **Firebase** (Authentication, Cloud Messaging, and Firestore or Cloud Storage for real-time feeds and media metadata), **Node.js**, **Express.js**, **TypeScript**, **REST APIs**, **Socket.io** for realtime events, presence, and messaging, **Agora** for HD **video calls** and live virtual classes, plus curated **third-party APIs** (maps, SMS, analytics, and more as needed), **payment gateway** integrations, **Git** and **GitHub** for version control and **CI/CD** workflows, **Docker** for repeatable builds and deployments, **AWS** (**EC2** for application hosting, **Amazon S3** for media and assets, **RDS** for managed **PostgreSQL**), and **Vercel** for edge-friendly web or API surfaces—plus push notifications and a robust role-based access control (**RBAC**) layer with multiple account types and instructor login flows. Features we provide: find yoga partners and build practice circles; discover and list yoga spaces and properties; create and promote events; post free job listings for studios and teachers; create reels for discovery and engagement; analytics management for reach, attendance, and revenue signals; launch TTC (Teacher Training Course) programs; schedule and publish live or recorded sessions; spin up your own virtual or online institute and wellness center; dedicated instructor tools and dashboards; Zumba and multi-format class support; and polished multi-role login so students, teachers, studio owners, and admins each see exactly what they need.",
    image: "/projects/yoga-mobile-app.svg",
    gallery: [
      "/projects/yoga-1.jpeg",
      "/projects/yoga-2.jpeg",
      "/projects/yoga-3.jpeg",
      "/projects/yoga-4.jpeg",
    ] as const,
    link: "https://drive.google.com/drive/folders/1NvQIy79BgGDpzAmWRu2zj3GN6-35Sf3f?usp=drive_link",
  },
  {
    title: "iCureIn — Clinic & telemedicine",
    description:
      "iCureIn is a clinic-grade digital health suite that unifies front-desk operations, clinical workflows, and remote care—built for hospitals, polyclinics, and growing practices that need one secure system instead of fragmented tools. Technologies: **Next.js** and **TypeScript** for responsive clinic, physician, and patient/caretaker web experiences; **Node.js** and **Express.js** exposing versioned **REST APIs**; **PostgreSQL** on **Amazon RDS** with optional read scaling patterns; **AWS EC2** for application workloads, **Amazon S3** for documents, imaging, and exports, and **IAM**-aware deployment practices; **Firebase** for authentication helpers, real-time listeners, and Cloud Messaging where instant alerts matter; first-class integrations with **third-party APIs** (video, SMS, email, e-labs, e-pharmacy, and insurer or clearinghouse hooks as required); **payment gateway** integrations with receipts and reconciliation views; **Git** and **GitHub** for branching, reviews, and delivery automation; **JWT**-based **RBAC** across user/patient, caretaker, doctor, nurse, reception, billing, and admin roles; and **WebRTC** or managed video SDKs for secure telemedicine sessions. Features we provide: full clinic management—OPD queues, departments, staff roster, and inventory-aware prescription templates; structured **EHR** with visit notes, diagnoses, allergies, immunizations, attachments, and longitudinal timelines; dedicated caretaker access to book visits, share reports, and coordinate care for dependents; patient self-service for appointments, documents, and reminders; telemedicine with secure video calls, waiting rooms, and session logs; doctor schedule management with slots, buffers, leave blocks, and automatic conflict checks; billing, invoices, packages, and insurance-ready fields where applicable; in-app messaging and notifications; lab/imaging order tracking; consent and audit trails for compliance; analytics for load, revenue, and no-shows—designed for reliability, privacy, and day-to-day speed at the front desk and in the consulting room.",
    image: "/projects/icurein-health.svg",
    gallery: [
      "/projects/icurein-1.jpeg",
      "/projects/icurein-2.jpeg",
      "/projects/icurein-3.jpeg",
      "/projects/icurein-4.jpeg",
    ] as const,
    gallerySingleAutoplayMs: 4000,
    link: "https://i-cure-in.vercel.app/",
  },
  {
    title: "EzoPOS — Inventory & billing software",
    description:
      "**EzoPOS** at **ezopos.com** is a retail and outlet operations platform built for chains that need one system for stock, billing, and role-based control across many stores. Technologies: **Next.js**, **TypeScript**, **Node.js**, **Express.js**, **REST APIs**, **Firebase Authentication** and **Cloud Firestore** for secure sign-in and live sync, **UPI** and payment integrations for fast checkout and settlements, and **GitHub** for source control and delivery workflows. Access is organized around multiple logins—**super admin**, **outlet**, **employee**, and **manager** roles—each with scoped permissions. Features we provide: **outlet management** (outlets, counters, and day-to-day operations), full **billing** and invoicing flows, **stats and analytics** dashboards for sales and performance, **stock alerts** and inventory visibility so low or critical SKUs never surprise you, and operational tooling that keeps outlets, staff, and leadership aligned.",
    image: "/projects/inventory-billing.svg",
    link: "https://inventory-and-billing-software.vercel.app/",
  },
  {
    title: "Specsvue.in — Client eyewear site",
    description:
      "**Specsvue.in** is a full **storefront** plus **admin panel** I shipped for a client in **2 days** only—a fast, **futuristic** eyewear experience on the front and a control center behind it so they never need a dev for day-to-day changes. Technologies: **Next.js**, **Tailwind CSS**, **Firebase** (Authentication, Firestore or Realtime Database for configurable content, and Storage for media), **GitHub** for collaboration and releases, and **payment gateway** integrations for secure checkout. I built a **discount** and **coupon** utility so campaigns and codes are easy to create and track, full **sale** flows for promotions and clearance-style events, and **prescription-based** pricing rules so eligible eyewear or lens bundles can auto-apply the right **discount** at checkout. The admin experience stays **dynamic**: owners can switch the site **color theme**, manage **hero** imagery, and keep **inventory**, **billing**, **stats**, and **analytics** aligned with the live shop—so the brand looks cutting-edge while the operations stay grounded.",
    image: "/projects/specsvue.svg",
    gallery: ["/projects/frontstore.png", "/projects/admin.png"] as const,
    gallerySingleAutoplayMs: 4000,
    link: "https://www.specsvue.in/",
  },
  {
    title: "Trendinghashtag.in",
    description:
      "TrendingHashtag.in – An **AI**-powered hashtag generator that helps creators and businesses boost their social media reach. It provides country-specific trending hashtags, removes banned tags to ensure safe posting, and offers extra tools like couple/wedding hashtag generators and media downloaders, all in one platform.",
    image: "/projects/trendinghashtag.png",
    link: "https://trending-hashtags.vercel.app/",
  },
  {
    title: "ISP Website (Hilltell)",
    description:
      "HillTell.in – An ISP company website that I developed using **PHP**, **XAMPP**, and **MySQL** (**phpMyAdmin**). It highlights services like Managed WiFi, MPLS, P2P connectivity, and IP One Class, with a responsive design, integrated contact options, and an interactive chatbot for customer queries.",
    image: "/projects/hilltell.png",
    link: "https://hilltell.in/index.php",
  },
    {
    title: "Enterprise Admin Dashboard",
      description:
      "The Enterprise Admin Dashboard with API Vault & Workflow Management is a full-stack business management platform built with **Next.js**, **Node.js**, and **Firebase**. It offers intern and employee management, company management, announcements, and a secure API vault within a modern responsive UI. Designed with a 3-tier architecture, it ensures scalability, security, and efficiency through **JWT** authentication, **RBAC**, and encrypted storage.",
    image: "/projects/crm.png",
    link: "https://cyberclipper-admin-panel-ochre.vercel.app/",
   
  },
  {
    title: "Portfolio Website",
    description:
      "A **Next.js**, **Tailwind** & **Three.js** personal portfolio demonstrating my expertise in full-stack development—from frontend and backend to cloud, mobile, and AI.",
    image: "/projects/project-3.png",
    link: "https://github.com/praduman1212/My-Portfolio",
  },
    {
    title: "File Sharing Web Application",
    description:
      "File Sharing Web Application – A **MERN** stack project I developed that enables users to securely upload, share, and manage files online. Built with **MongoDB**, **Express.js**, **React.js**, and **Node.js**, it features a clean UI, fast performance, and secure file handling",
    image: "/projects/file sharing app.png",
    link: "https://github.com/praduman1212/File-Sharing-Web-Application-",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "About Me",
    data: [
      {
        name: "I’m Praduman Sharma, a passionate Software Engineer from Dehradun. I’m open to relocation and remote opportunities, and I’m driven by a love for building impactful digital solutions with creativity and precision.",
        icon: null,
        link: null,
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "LinkedIn",
        icon: RxLinkedinLogo,
        link: "https://www.linkedin.com/in/praduman12/",
      },
      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/praduman1212",
      },
    ],
  },
  {
    title: "Quick Links",
    data: [
      {
        name: "Hire Me",
        icon: null,
        link: "https://wa.me/919520949165",
      },
      {
        name: "Learn about me",
        icon: null,
        link: "#about-me",
      },
      {
        name: "Contact Me",
        icon: null,
        link: "mailto:sharmapraduman6@gmail.com",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  linkedin: "https://www.linkedin.com/in/praduman12/",
  github: "https://github.com/praduman1212",
  whatsapp: "https://wa.me/919520949165",
};
