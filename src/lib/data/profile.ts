/**
 * Profile Data
 * 
 * Centralized data file containing all profile information including
 * personal details, work experience, skills, achievements, and projects.
 */

export interface Profile {
	name: string;
	title: string;
	description: string;
	location: string;
	email: string;
	github: string;
	linkedin: string;
	blog: string;
}

export interface Company {
	name: string;
	role: string;
	period: string;
	description: string;
	technologies: string[];
}

export interface Skills {
	programming: string[];
	frameworks: string[];
	cloud: string[];
	tools: string[];
	other: string[];
}

export interface Achievement {
	title: string;
	description: string;
	year?: string;
}

export interface Project {
	title: string;
	description: string;
	technologies: string[];
	github?: string;
	live?: string;
	image?: string;
}

// Profile Information
export const profile: Profile = {
	name: 'Irshad Ali',
	title: 'Project Lead & Full-Stack Software Engineer',
	description: 'Result-driven software engineer with extensive experience in full-stack development, specializing in .NET technologies, modern JavaScript frameworks, and cloud-native architectures. I help businesses create smart and scalable solutions to their general and unique problems.',
	location: 'India',
	email: 'irshad.ali@example.com',
	github: 'https://github.com/irsali',
	linkedin: 'https://linkedin.com/in/irshad-ali',
	blog: '/blog'
};

// Work Experience
export const companies: Company[] = [
	{
		name: 'Persistent Systems',
		role: 'Project Lead',
		period: 'Jan 2024 - Present',
		description: 'Leading development teams and delivering enterprise solutions with modern technologies. Working with Smartlinx to improve their product quality, providing real-time data and advanced scheduling tools to manage staffing costs.',
		technologies: ['.NET Core', 'Azure Functions', 'Microservices', 'SQL Server', 'Azure DevOps']
	},
	{
		name: 'Persistent Systems',
		role: 'Senior Engineering Lead',
		period: 'Nov 2021 - Dec 2023',
		description: 'Led development of Consent Management Platform for customizable cookie compliance banner with autoblocking. Modernized Ivanti legacy projects with AWS and modern cloud technologies.',
		technologies: ['AWS', 'Amazon Redshift', 'Node.js', 'Angular', 'Python', 'Big Data']
	},
	{
		name: 'Persistent Systems (Shree Partners)',
		role: 'Sr. Software Engineer',
		period: 'Jul 2017 - Nov 2021',
		description: 'Developed cloud-native, enterprise-grade marketing automation and CRM-integrated web application, built with scalable architecture for global deployment and multilingual support.',
		technologies: ['.NET Core', 'Azure Functions', 'Angular', 'SQL Server', 'Azure DevOps']
	},
	{
		name: 'Brain Technosys Pvt. Ltd.',
		role: 'Sr. Software Engineer',
		period: 'Apr 2016 - Jun 2017',
		description: 'Built enterprise applications using .NET and modern JavaScript frameworks. Implemented e-commerce platform with ElasticSearch, Cassandra, and Angular.',
		technologies: ['ElasticSearch', 'Cassandra', 'ASP.NET MVC', 'AngularJS', 'SQL Server']
	}
];

// Skills
export const skills: Skills = {
	programming: [
		'C#',
		'JavaScript',
		'TypeScript',
		'Python',
		'SQL'
	],
	frameworks: [
		'.NET Core',
		'ASP.NET',
		'Node.js',
		'Angular',
		'Svelte',
	],
	cloud: [
		'AWS',
		'Azure',
		'Docker',
		'Cloud-Native Development',
		'Microservices',
		'Serverless',
	],
	tools: [
		'Git',
		'Visual Studio',
		'VS Code',
		'Cursor AI',
		'Azure DevOps',
		'CI/CD',
		'Infrastructure as Code',
		'Big Data',		
		'Monitoring'
	],
	other: [
		'Performance Optimization',
		'Architecture Design',
		'Technical Documentation',
		'Problem Solving',
		'Security',
		'Unit Testing',
		'Knowledge Sharing',
		'Continuous Learning',
		'Team Collaboration',
		'Leadership'
	]
};

// Achievements
export const achievements: Achievement[] = [
	{
		title: 'AWS Certified Solutions Architect',
		description: 'Achieved AWS Solutions Architect certification demonstrating expertise in cloud architecture and AWS services.',
		year: '2023'
	},
	{
		title: 'Microsoft Certified: Azure Developer Associate',
		description: 'Earned Azure Developer certification showcasing proficiency in Azure development and cloud solutions.',
		year: '2022'
	},
	{
		title: 'Led Successful Enterprise Migration',
		description: 'Successfully led the migration of legacy systems to modern cloud-native architecture, improving performance by 40%.',
		year: '2021'
	},
	{
		title: 'Mentored 15+ Junior Developers',
		description: 'Provided technical mentorship and guidance to junior developers, helping them grow their skills and advance their careers.',
		year: '2020-2023'
	},
	{
		title: 'Open Source Contributor',
		description: 'Active contributor to open source projects, particularly in the .NET and JavaScript ecosystems.',
		year: '2019-Present'
	}
];

// Projects
export const recentProjects: Project[] = [
	{
		title: 'Consent Management Platform',
		description: 'Developed a comprehensive cookie compliance and consent management platform with customizable banners and automatic blocking capabilities.',
		technologies: ['Angular', 'Node.js', 'AWS', 'MongoDB'],
		github: 'https://github.com/irsali/consent-platform'
	},
	{
		title: 'Marketing Automation System',
		description: 'Built a cloud-native marketing automation platform with CRM integration, supporting global deployment and multilingual content.',
		technologies: ['.NET Core', 'Azure Functions', 'Angular', 'SQL Server'],
		github: 'https://github.com/irsali/marketing-automation'
	},
	{
		title: 'E-commerce Platform',
		description: 'Developed a high-performance e-commerce platform using modern technologies with search optimization and scalable architecture.',
		technologies: ['ASP.NET MVC', 'ElasticSearch', 'Cassandra', 'AngularJS'],
		github: 'https://github.com/irsali/ecommerce-platform'
	},
	{
		title: 'Smartlinx Staffing Solution',
		description: 'Enhanced staffing management system with real-time data analytics and advanced scheduling tools for cost optimization.',
		technologies: ['.NET Core', 'Azure Functions', 'Microservices', 'SQL Server'],
		github: 'https://github.com/irsali/smartlinx-staffing'
	},
	{
		title: 'Personal Portfolio Website',
		description: 'Modern, responsive portfolio website built with SvelteKit featuring dark/light theme, animated backgrounds, and blog functionality.',
		technologies: ['SvelteKit', 'TypeScript', 'CSS', 'Vite'],
		github: 'https://github.com/irsali/portfolio-blog',
		live: 'https://irshad-ali.dev'
	},
	{
		title: 'API Gateway Service',
		description: 'Designed and implemented a microservices API gateway with authentication, rate limiting, and request routing capabilities.',
		technologies: ['.NET Core', 'Ocelot', 'Redis', 'Docker'],
		github: 'https://github.com/irsali/api-gateway'
	}
];

// Calculate experience years
export const experienceYears = new Date().getFullYear() - 2016; 