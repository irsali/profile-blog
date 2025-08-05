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
	stackoverflow: string;
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
	backendFrameworks: string[];
	frontendFrameworks: string[];
	dataStore: string[];
	cloud: string[];
	ai: string[];
	tools: string[];
	devops: string[];
	architecture: string[];
	leadership: string[];
	dataEngineering: string[];
	security: string[];
}

export interface SkillCategory {
	id: string;
	title: string;
	icon: string;
	skills: string[];
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
	title: 'Architect and Project Lead',
	description: 'Result-driven software engineer with extensive experience in full-stack development, specializing in .NET technologies, modern JavaScript frameworks, and cloud-native architectures. I help businesses create smart and scalable solutions to their general and unique problems.',
	location: 'India',
	email: 'irshad.ali@example.com',
	github: 'https://github.com/irsali',
	linkedin: 'https://linkedin.com/in/irshad-ali',
	stackoverflow: 'https://stackoverflow.com/users/4478515/irshad-ali',
	blog: '/blog'
};

// Work Experience
export const companies: Company[] = [
	{
		name: 'Persistent Systems',
		role: 'Project Lead',
		period: 'Jan 2024 - Jul 2025',
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
	},
	{
		name: 'Brain Technosys Pvt. Ltd.',
		role: 'Software Engineer',
		period: 'May 2015 - Mar 2016',
		description: 'Implemented e-commerce application to virtually sell anything from different merchants. Built using ASP.NET MVC 5, EF 6, SQL Server, Apache Ignite, Unity, ElasticSearch, and Cassandra.',
		technologies: ['ASP.NET MVC', 'Entity Framework', 'SQL Server', 'Apache Ignite', 'ElasticSearch', 'Cassandra', 'AngularJS']
	},
	{
		name: 'ATG Trans',
		role: 'Software Engineer',
		period: 'Nov 2014 - May 2015',
		description: 'Solutions Engineering and .NET Framework development.',
		technologies: ['.NET Framework', 'Solutions Engineering']
	}
];

// Skills
export const skills: Skills = {
	programming: [
		'C#',
		'TypeScript',
		'JavaScript',
		'HTML',
		'CSS',
		'Python'
	],
	dataStore: [
		'PostgreSQL',
		'SQL Server',
		'ElasticSearch',
		'Azure Blob Storage',
		'AWS S3',
		'Apache Ignite',
		'Cassandra'
	],
	ai: [
		'Ollama',
		'Prompt Engineering',
		'Embedding and Semantic Search',
		'RAG',
		'AWS Lex',
		'Google Dialogflow',
		'IBM Watson'
	],
	backendFrameworks: [
		'.NET Core',
		'ASP.NET MVC',
		'Web API',
		'WCF',
		'Entity Framework',
		'LINQ',
		'Identity',
		'Autofac',
		'Unity',
		'AutoMapper',
		'Razor Engine',
		'Node.js',
		'Express'
	],
	frontendFrameworks: [
		'Angular',
		'Angular Material',
		'jQuery',
		'Ajax',
		'DataTable',
		'Bootstrap',
		'Tailwind CSS',
		'Svelte'
	],
	cloud: [
		'Azure',
		'AWS',
		'Serverless',
		'Azure Functions',
		'Cloud-Native Development',
		'Redshift',
		'Elastic Beanstalk',
		'ECS',
		'CloudFront',
		'ElastiCache'
	],
	tools: [
		'Git',
		'Visual Studio',
		'VS Code',
		'GitHub Copilot',
		'Cursor',
		'Postman',
		'Jira',
		'Jupyter Notebook',
		'DOMO',
		'Dataiku',
		'IIS',
		'n8n',
		'Docker',
		'sinon',
		'chai'
	],
	devops: [
		'Azure DevOps',
		'CI/CD',
		'Monitoring',
		'CloudWatch'
	],
	architecture: [
		'Performance Optimization',
		'Solution Architecture',
		'Database Design',
		'System Integration',
		'Root Cause Analysis',
		'Data Pipeline Development'
	],
	leadership: [
		'Technical Documentation',
		'Problem Solving',
		'Knowledge Sharing',
		'Continuous Learning',
		'Team Collaboration',
		'Leadership',
		'Mentoring',
		'Cross-functional Collaboration'
	],
	dataEngineering: [
		'Database Schema Design',
		'ETL',
		'Data Integration'
	],
	security: [
		'Security',
		'GDPR Compliance',
		'CCPA Compliance',
		'HIPAA Compliance'
	]
};

// Skills Categories for looping
export const skillCategories: SkillCategory[] = [
	{
		id: 'programming',
		title: 'Programming Languages',
		icon: 'Code',
		skills: skills.programming
	},
	{
		id: 'dataStore',
		title: 'Data Store',
		icon: 'Database',
		skills: skills.dataStore
	},
	{
		id: 'ai',
		title: 'AI & Machine Learning',
		icon: 'Brain',
		skills: skills.ai
	},
	{
		id: 'cloud',
		title: 'Cloud & Infrastructure',
		icon: 'Cloud',
		skills: skills.cloud
	},
	{
		id: 'backendFrameworks',
		title: 'Backend Frameworks',
		icon: 'Server',
		skills: skills.backendFrameworks
	},
	{
		id: 'frontendFrameworks',
		title: 'Frontend Frameworks',
		icon: 'Globe',
		skills: skills.frontendFrameworks
	},
	{
		id: 'tools',
		title: 'Development Tools',
		icon: 'Monitor',
		skills: skills.tools
	},
	{
		id: 'devops',
		title: 'DevOps & CI/CD',
		icon: 'Git',
		skills: skills.devops
	},
	{
		id: 'architecture',
		title: 'Architecture & Design',
		icon: 'Settings',
		skills: skills.architecture
	},
	{
		id: 'leadership',
		title: 'Leadership & Collaboration',
		icon: 'Users',
		skills: skills.leadership
	},
	{
		id: 'dataEngineering',
		title: 'Data Engineering',
		icon: 'BarChart3',
		skills: skills.dataEngineering
	},
	{
		id: 'security',
		title: 'Security & Compliance',
		icon: 'Shield',
		skills: skills.security
	}
];

// Achievements
export const achievements: Achievement[] = [
	{
		title: 'Top Talent Award',
		description: 'Recognized for exceptional performance and leadership at Persistent Systems',
		year: '2024'
	},
	{
		title: 'Impressive Initiator Award',
		description: 'Awarded at the 12th foundation day award ceremony at Brain Technosys Pvt. Ltd.',
		year: '2016'
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
		title: 'Nomis Price Manager',
		description: 'Led implementation of dynamic, configuration-driven pricing attributes and rate adjustment rules. Implementation support for large file handling, diff viewer, validations maker/checker process and activation.',
		technologies: ['AWS ECS', 'CloudWatch', 'S3', 'BullMq', 'Node.js', 'Meteor', 'sinon', 'chai'],
	},
	{
		title: 'Smartlinx Healthcare Workforce Management',
		description: 'Led security implementation and penetration testing, ensuring healthcare compliance. Optimized real-time workforce scheduling to improve efficiency across multiple facilities.',
		technologies: ['.NET Core', 'Microservices', 'SQL Server', 'Azure DevOps'],
	},
	{
		title: 'Storhub Data Integration & Automation',
		description: 'Developed scalable ETL pipelines using .NET Core and Azure Durable Functions for data integration across APAC regions. Integrated Zendesk and Oracle NetSuite for unified data visibility.',
		technologies: ['.NET Core', 'Azure Functions', 'PostgreSQL', 'SugarCRM', 'Oracle NetSuite'],
	},
	{
		title: 'Consent Management Platform',
		description: 'Developed comprehensive cookie compliance and consent management platform with customizable banners and automatic blocking capabilities. Features consent analytics dashboard with trust score tracking.',
		technologies: ['AWS Elastic Beanstalk', 'AWS Redshift', 'Azure DevOps', 'Big Data', 'Angular', 'Node.js', 'JavaScript', 'Python'],
		live: 'https://app.hu-manity.co/'
	},
	{
		title: 'SAM&C Applications',
		description: 'Implemented SAM&C applications on microsoft.com domain with global deployment across multiple Azure regions in 18 languages. Built High Touch, Low Touch and No Touch versions.',
		technologies: ['ASP.NET Core 2 MVC', 'Angular 6', 'C#', 'TypeScript', 'Web API 2', 'Azure SQL Database', 'Azure DevOps'],
	},
	{
		title: 'Cybersecurity Self-Assessment',
		description: 'Developed self-assessment applications for Cybersecurity, GDPR, Digital Transformation, and Workplace Productivity. Multiple App Services with Azure Functions and WebJobs.',
		technologies: ['ASP.NET MVC 6', 'C#', 'Azure Functions', 'WebJobs', 'Web API 2', 'Azure CDN', 'jQuery', 'Azure Storage'],
	},
	{
		title: 'VQBZ E-Commerce Platform',
		description: 'Designed scalable EAV-based database schema for flexible product management. Integrated geo-based search & recommendation system using ElasticSearch. Developed multi-vendor onboarding & order tracking system.',
		technologies: ['ASP.NET MVC', 'WCF', 'Elasticsearch', 'Cassandra', 'Angular'],
	},
	{
		title: 'Personal Portfolio Website',
		description: 'Modern, responsive portfolio website built with SvelteKit featuring dark/light theme, animated backgrounds, and blog functionality.',
		technologies: ['SvelteKit', 'TypeScript', 'CSS', 'Vite'],
		github: 'https://github.com/irsali/portfolio-blog',
		live: 'https://ali-irshad.netlify.app'
	}
];

// Calculate experience years
export const experienceYears = new Date().getFullYear() - 2014; // 11+ years as mentioned in resume 