export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "UI/UX Designer",
		icon: "/backend.webp",
	},
	{
		title: "Full Stack Web Developer",
		icon: "/web.webp",
	},
	{
		title: "App Developer",
		icon: "/mobile.webp",
	},
	{
		title: "Software Engineer",
		icon: "/creator.webp",
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: "/tech/html.webp",
	},
	{
		name: "CSS 3",
		icon: "/tech/css.webp",
	},
	{
		name: "JavaScript",
		icon: "/tech/javascript.webp",
	},
	{
		name: "TypeScript",
		icon: "/tech/typescript.webp",
	},
	{
		name: "React JS",
		icon: "/tech/reactjs.webp",
	},
	{
		name: "Next.JS",
		icon: "/tech/nextjs.svg",
	},
	{
		name: "Redux Toolkit",
		icon: "/tech/redux.webp",
	},
	{
		name: "Tailwind CSS",
		icon: "/tech/tailwind.webp",
	},
	{
		name: "Three JS",
		icon: "/tech/threejs.webp",
	},
	{
		name: "git",
		icon: "/tech/git.webp",
	},
	{
		name: "figma",
		icon: "/tech/figma.webp",
	},
	{
		name: "wordpress",
		icon: "/tech/wordpress.webp",
	},
	{
		name: "bootstrap",
		icon: "/tech/bootstrap.webp",
	},
];

const experiences = [
	{
		title: "WEB Developer & UI/UX Designer",
		company_name: "V.M Solutions",
		icon: "/company/wtw.jpg",
		iconBg: "#383E56",
		date: "2020 -  2021",
		points: [
			"Self-Taught Expertise: Gained proficiency in Wed development and UI/UX design through independent learning.",
			"Collaborative Design: Worked closely with stakeholders to gather feedback and iterate on the portfolio website's interactivity.",
			"Successful Website Development: Designed and developed a visually appealing and user-friendly portfolio website using Wed technologies.",
			"Positive Business Impact: Contributed to +54.25% sales and overall business growth through the improved website."
		],
	},
	{
		title: "Software Developer & WEB developer",
		company_name: "FreeLencer",
		icon: "/company/download.png",
		iconBg: "#E6DEDD",
		date: "2023 - Present",
		points: [
			"Developing and maintaining Websites Site for clients around the globe",
			"Analyzing feedbacks and fixing bugs.",
			"Search Engine Optimization.",
			"Design Maintainence and hosting maintenance.",
		],
	},
];

const testimonials = [
	{
		id: 1,
		testimonial:
			"Behance is a social media platform owned by Adobe whose main focus is to showcase and discover creative work.",
		name: "Nikita Phartyal",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/nikita-phartyal-7879a0239/",
	},
	{
		id: 2,
		testimonial:
			"LinkedIn is a business and employment-focused social media platform that works through websites and mobile apps.",
		name: "Pawan Pandey",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/pawan-pandey-6828a38b/",
	},
	{
		id: 3,
		testimonial:
			"Dribbble is a self-promotion and social networking platform for digital designers and creatives. It serves as a design portfolio.",
		name: "Aditi Khandagale",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/aditi-khandagale-bb2164215/",
	},
	{
		id: 4,
		testimonial:
			"Also do check out my UI/UX Portfolio where I have shared by design studies.",
		name: "Swati Modi",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/swati-modi/",
	},
	{
		id: 5,
		testimonial:
			"Also do check out my Github Profile where I have shared all my codes from basic to advanced.",
		name: "Mangesh Deshmukh",
		image: "/socialmedia/linkedin.svg",
		link: "https://www.linkedin.com/in/mangesh-deshmukh-327321214/",
	},
];


const projects :{
	name: string;
	description: string;
	tags: {
		name: string;
		color: string;
	}[];
	image: string;
	source_code_link?: string;
	deploy_link: string;
	platform: "Netlify" | "Vercel" | "Figma" | "Wordpress" | "Web"
}[] = [
	{
		name: "Swasthya",
		description:
			" Designed and developed a visually appealing and user-friendly HMS web-application using PHP",
		tags: [
			{
				name: "Core_PHP",
				color: "blue-text-gradient",
			},
			{
				name: "Laravel",
				color: "orange-text-gradient",
			},
			
		],
		image: "/projectimg/Hos.png",
		source_code_link: "https://github.com/Vivek7738/Hospital-Management-System",
		platform: "Web",
		deploy_link: "https://github.com/Vivek7738/Hospital-Management-System",
	},
	{
		name: "GalacticVision",
		description:
			" GalacticVisions: Designed and developed a modern, visually appealing, and user-friendly portfolio website using Next.JS.",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "Next UI",
				color: "orange-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/Home.png",
		source_code_link: "https://github.com/Vivek7738/Galaticvisions",
		platform: "Web",
		deploy_link: "https://github.com/Vivek7738/Galaticvisions",
	},
	{
		name: "BBDMS",
		description:
			"A responsive Blood Bank HomePage showcasing different features such as various features, etc. It has a beautiful interface made using ReactJS",
		tags: [
			{
				name: "next",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "blue-text-gradient",
			},
		],
		image: "/projectimg/Homepage.png",
		source_code_link: "https://github.com/Vivek7738/BBDMS",
		platform: "Vercel",
		deploy_link: "https://github.com/Vivek7738/BBDMS",
	},
];

export { services, technologies, experiences, testimonials, projects };
