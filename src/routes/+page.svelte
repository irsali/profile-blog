<script lang="ts">
	import { onMount } from 'svelte';
	import { Github, Linkedin, Mail, ExternalLink, Code, Database, Cloud, Globe, Users, Award, Calendar, MapPin, Star, Zap, Shield, Sun, Moon } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';

	// Profile data
	const profile = {
		name: 'Irshad Ali',
		title: 'Project Lead & Full-Stack Software Engineer',
		description: 'Result-driven software engineer with extensive experience in full-stack development, specializing in .NET technologies, modern JavaScript frameworks, and cloud-native architectures. I help businesses create smart and scalable solutions to their general and unique problems.',
		location: 'India',
		email: 'irshad.ali@example.com',
		github: 'https://github.com/irsali',
		linkedin: 'https://linkedin.com/in/irshad-ali',
		blog: '/blog'
	};

	const companies = [
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

	const skills = {
		programming: ['C#', 'JavaScript', 'TypeScript', 'Node.js', 'Python'],
		frameworks: ['Angular', '.NET Core', 'ASP.NET', 'React', 'Vue.js'],
		cloud: ['Azure', 'AWS', 'Google Cloud Platform', 'Docker', 'Kubernetes'],
		tools: ['Git', 'Visual Studio', 'VS Code', 'Azure DevOps', 'Jenkins']
	};

	const achievements = [
		{
			icon: Star,
			title: 'Top Talent Award',
			description: 'Recognized for exceptional performance and leadership at Persistent Systems'
		},
		{
			icon: Shield,
			title: 'Healthcare Compliance',
			description: 'Led security implementation and penetration testing for healthcare workforce management system'
		},
		{
			icon: Zap,
			title: 'Consent Management Platform',
			description: 'Developed GDPR/CCPA compliant cookie management platform serving global customers'
		}
	];

	const allProjects = [
		{
			name: 'Nomis Price Manager',
			period: 'Sep 2024 - Jun 2025',
			description: 'Led implementation of dynamic, configuration-driven pricing attributes and rate adjustment rules. Tech stack: AWS ECS, CloudWatch, S3, BullMq, Node.js, Meteor.',
			technologies: ['AWS ECS', 'CloudWatch', 'S3', 'BullMq', 'Node.js', 'Meteor'],
			company: 'Persistent Systems'
		},
		{
			name: 'Smartlinx Healthcare',
			period: 'Oct 2023 - Aug 2024',
			description: 'Led security implementation and penetration testing, ensuring healthcare compliance. Optimized real-time workforce scheduling across multiple facilities.',
			technologies: ['.NET Core', 'Microservices', 'SQL Server', 'Azure DevOps'],
			company: 'Persistent Systems'
		},
		{
			name: 'Storhub Data Integration',
			period: 'Dec 2022 - Oct 2023',
			description: 'Developed scalable ETL pipelines using .NET Core and Azure Durable Functions for data integration across APAC regions.',
			technologies: ['.NET Core', 'Azure Functions', 'PostgreSQL', 'SugarCRM', 'Oracle NetSuite'],
			company: 'Persistent Systems'
		},
		{
			name: 'Consent Management Platform',
			period: 'Jul 2019 - Dec 2022',
			description: 'Developed fully customizable cookie compliance banner with autoblocking for GDPR, CCPA compliance. Features consent analytics dashboard with trust score tracking.',
			technologies: ['AWS Elastic Beanstalk', 'AWS Redshift', 'Azure DevOps', 'Big Data', 'Angular', 'Node.js', 'JavaScript', 'Python'],
			company: 'Persistent Systems',
			url: 'https://cookie-compliance.co/'
		},
		{
			name: 'SAM&C Applications',
			period: 'Dec 2017 - Feb 2019',
			description: 'Implemented SAM&C applications on microsoft.com domain with global deployment across multiple Azure regions in 18 languages. Built High Touch, Low Touch and No Touch versions.',
			technologies: ['ASP.NET Core 2 MVC', 'Angular 6', 'C#', 'TypeScript', 'Web API 2', 'Azure SQL Database', 'Azure DevOps'],
			company: 'Persistent Systems'
		},
		{
			name: 'Cybersecurity Self-Assessment',
			period: 'Jul 2017 - Dec 2018',
			description: 'Developed self-assessment applications for Cybersecurity, GDPR, Digital Transformation, and Workplace Productivity. Multiple App Services with Azure Functions and WebJobs.',
			technologies: ['ASP.NET MVC 6', 'C#', 'Azure Functions', 'WebJobs', 'Web API 2', 'Azure CDN', 'jQuery', 'Azure Storage'],
			company: 'Persistent Systems'
		},
		{
			name: 'VQBZ E-Commerce Platform',
			period: 'May 2015 - Jun 2017',
			description: 'Designed scalable EAV-based database schema for flexible product management. Integrated geo-based search & recommendation system using ElasticSearch. Developed multi-vendor onboarding & order tracking system.',
			technologies: ['ASP.NET MVC', 'WCF', 'Elasticsearch', 'Cassandra', 'Angular'],
			company: 'Brain Technosys Pvt. Ltd.'
		}
	];

	let currentYear = new Date().getFullYear();
	let experienceYears = currentYear - 2015;

	onMount(() => {
		// Add smooth scrolling for anchor links
		const links = document.querySelectorAll('a[href^="#"]');
		links.forEach(link => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				const target = document.querySelector(link.getAttribute('href') || '');
				if (target) {
					target.scrollIntoView({ behavior: 'smooth' });
				}
			});
		});
	});
</script>

<svelte:head>
	<title>{profile.name} - {profile.title}</title>
	<meta name="description" content={profile.description} />
</svelte:head>

<!-- Header -->
<header class="header">
	<div class="header__container">
		<div class="header__left">
			<a href="/" class="header__logo">{profile.name}</a>
		</div>
		<nav class="header__nav">
			<a href="#about" class="nav-link">About</a>
			<a href="#experience" class="nav-link">Experience</a>
			<a href="#projects" class="nav-link">Projects</a>
			<a href="#skills" class="nav-link">Skills</a>
			<a href={profile.blog} class="nav-link">Blog</a>
			<button class="theme-toggle" on:click={toggleTheme} aria-label="Toggle theme">
				{#if $theme === 'dark'}
					<Sun class="theme-toggle__icon" />
				{:else}
					<Moon class="theme-toggle__icon" />
				{/if}
			</button>
		</nav>
	</div>
</header>

<!-- Hero Section -->
<section class="hero">
	<div class="hero__container">
		<div class="hero__content">
			<h1 class="hero__title">
				<span class="hero__name">{profile.name}</span>
				<span class="hero__subtitle">{profile.title}</span>
			</h1>
			<p class="hero__description">
				{profile.description}
			</p>
			<div class="hero__stats">
				<div class="stat">
					<span class="stat__number">{experienceYears}+</span>
					<span class="stat__label">Years Experience</span>
				</div>
				<div class="stat">
					<span class="stat__number">15+</span>
					<span class="stat__label">Projects Delivered</span>
				</div>
			</div>
			<div class="hero__actions">
				<a href="#contact" class="btn btn--primary">
					<Mail class="btn__icon" />
					Get in Touch
				</a>
				<a href={profile.blog} class="btn btn--secondary">
					<ExternalLink class="btn__icon" />
					Read My Blog
				</a>
			</div>
		</div>
		<div class="hero__visual">
			<div class="hero__image">
				<img src="/static/profile/profile.jpg" alt={profile.name} class="profile-image" />
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section id="about" class="section">
	<div class="container">
		<h2 class="section__title">About Me</h2>
		<div class="about__content">
			<div class="about__text">
				<p>
					I'm a result-driven software engineer with extensive experience in full-stack development, 
					specializing in .NET technologies, modern JavaScript frameworks, and cloud-native architectures.
				</p>
				<p>
					I help businesses create smart and scalable solutions to their general and unique problems. 
					With expertise in cloud platforms, microservices, and modern development practices, 
					I've successfully delivered enterprise-level applications and led development teams.
				</p>
				<p>
					My focus areas include performance optimization, security implementation, and building 
					maintainable, scalable systems that drive business value.
				</p>
			</div>
			<div class="about__achievements">
				{#each achievements as achievement}
					<div class="achievement">
						<svelte:component this={achievement.icon} class="achievement__icon" />
						<div class="achievement__content">
							<h3 class="achievement__title">{achievement.title}</h3>
							<p class="achievement__description">{achievement.description}</p>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<!-- Experience Section -->
<section id="experience" class="section section--alt">
	<div class="container">
		<h2 class="section__title">Professional Experience</h2>
		<div class="experience__timeline">
			{#each companies as company, index}
				<div class="timeline__item">
					<div class="timeline__marker"></div>
					<div class="timeline__content">
						<div class="timeline__header">
							<h3 class="timeline__title">{company.role}</h3>
							<span class="timeline__company">{company.name}</span>
							<span class="timeline__period">{company.period}</span>
						</div>
						<p class="timeline__description">{company.description}</p>
						<div class="timeline__technologies">
							{#each company.technologies as tech}
								<span class="tech-tag">{tech}</span>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Projects Section -->
<section id="projects" class="section">
	<div class="container">
		<h2 class="section__title">Featured Projects</h2>
		<div class="projects__grid">
			{#each allProjects as project}
				<div class="project-card">
					<div class="project__header">
						<h3 class="project__title">{project.name}</h3>
						<div class="project__meta">
							<span class="project__period">{project.period}</span>
							<span class="project__company">{project.company}</span>
						</div>
					</div>
					<p class="project__description">{project.description}</p>
					<div class="project__technologies">
						{#each project.technologies as tech}
							<span class="tech-tag">{tech}</span>
						{/each}
					</div>
					{#if project.url}
						<a href={project.url} target="_blank" rel="noopener" class="project__link">
							<ExternalLink class="project__link-icon" />
							View Project
						</a>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Skills Section -->
<section id="skills" class="section section--alt">
	<div class="container">
		<h2 class="section__title">Skills & Technologies</h2>
		<div class="skills__grid">
			<div class="skills__category">
				<h3 class="skills__category-title">
					<Code class="skills__icon" />
					Programming Languages
				</h3>
				<div class="skills__list">
					{#each skills.programming as skill}
						<span class="skill-tag">{skill}</span>
					{/each}
				</div>
			</div>
			<div class="skills__category">
				<h3 class="skills__category-title">
					<Globe class="skills__icon" />
					Frameworks & Libraries
				</h3>
				<div class="skills__list">
					{#each skills.frameworks as skill}
						<span class="skill-tag">{skill}</span>
					{/each}
				</div>
			</div>
			<div class="skills__category">
				<h3 class="skills__category-title">
					<Cloud class="skills__icon" />
					Cloud & Infrastructure
				</h3>
				<div class="skills__list">
					{#each skills.cloud as skill}
						<span class="skill-tag">{skill}</span>
					{/each}
				</div>
			</div>
			<div class="skills__category">
				<h3 class="skills__category-title">
					<Database class="skills__icon" />
					Tools & Platforms
				</h3>
				<div class="skills__list">
					{#each skills.tools as skill}
						<span class="skill-tag">{skill}</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="section">
	<div class="container">
		<h2 class="section__title">Get in Touch</h2>
		<div class="contact__content">
			<div class="contact__info">
				<div class="contact__item">
					<Mail class="contact__icon" />
					<a href="mailto:{profile.email}" class="contact__link">{profile.email}</a>
				</div>
				<div class="contact__item">
					<MapPin class="contact__icon" />
					<span class="contact__text">{profile.location}</span>
				</div>
			</div>
			<div class="contact__social">
				<a href={profile.github} class="social-link" target="_blank" rel="noopener">
					<Github class="social-icon" />
					<span>GitHub</span>
				</a>
				<a href={profile.linkedin} class="social-link" target="_blank" rel="noopener">
					<Linkedin class="social-icon" />
					<span>LinkedIn</span>
				</a>
				<a href={profile.blog} class="social-link">
					<ExternalLink class="social-icon" />
					<span>Blog</span>
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Footer -->
<footer class="footer">
	<div class="container">
		<p class="footer__text">
			Built with curiosity, creativity, and a bit of AI magic. © {currentYear} {profile.name}.
		</p>
	</div>
</footer>

<style>
	/* Header */
	.header {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		background: var(--color-header-bg);
		backdrop-filter: blur(20px);
		border-bottom: 1px solid rgba(255, 255, 255, 0.2);
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
		z-index: var(--z-index-header);
		transition: var(--theme-transition);
	}

	.header__container {
		max-width: var(--container-max-width);
		margin: 0 auto;
		padding: 0 var(--container-padding);
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 64px;
	}

	.header__logo {
		font-weight: 700;
		font-size: 1.25rem;
		color: var(--color-text);
		text-decoration: none;
		transition: var(--theme-transition);
	}

	.header__logo:hover {
		color: var(--color-primary);
	}

	.header__nav {
		display: flex;
		gap: 2rem;
	}

	.nav-link {
		color: var(--color-text);
		text-decoration: none;
		font-weight: 500;
		transition: var(--theme-transition);
		position: relative;
	}

	.nav-link:hover {
		color: var(--color-primary);
	}

	.nav-link::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background: var(--color-primary);
		transition: width 0.3s ease;
	}

	.nav-link:hover::after {
		width: 100%;
	}

	/* Hero Section */
	.hero {
		padding: 120px 0 80px;
		background: linear-gradient(135deg, var(--color-hero-gradient-start) 0%, var(--color-hero-gradient-end) 100%);
		color: white;
	}

	.hero__container {
		max-width: var(--container-max-width);
		margin: 0 auto;
		padding: 0 var(--container-padding);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
	}

	.hero__title {
		margin: 0 0 1.5rem 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.hero__name {
		font-size: 3.5rem;
		font-weight: 800;
		line-height: 1.1;
	}

	.hero__subtitle {
		font-size: 1.5rem;
		font-weight: 400;
		opacity: 0.9;
	}

	.hero__description {
		font-size: 1.125rem;
		margin: 0 0 2rem 0;
		opacity: 0.9;
		line-height: 1.7;
	}

	.hero__stats {
		display: flex;
		gap: 2rem;
		margin-bottom: 2rem;
	}

	.stat {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.stat__number {
		font-size: 2rem;
		font-weight: 700;
		color: var(--color-primary);
	}

	.stat__label {
		font-size: 0.875rem;
		opacity: 0.8;
		text-align: center;
	}

	.hero__actions {
		display: flex;
		gap: 1rem;
	}

	.hero__visual {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.hero__image {
		width: 300px;
		height: 300px;
		border-radius: 50%;
		overflow: hidden;
		border: 4px solid var(--color-hero-border);
		box-shadow: var(--shadow-lg);
	}

	.profile-image {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	/* About Section */
	.about__content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: start;
	}

	.about__text p {
		font-size: 1.125rem;
		margin: 0 0 1.5rem 0;
		color: var(--color-text-light);
		line-height: 1.7;
	}

	.achievement {
		display: flex;
		gap: 1rem;
		margin-bottom: 2rem;
		padding: 1.5rem;
		background: var(--color-bg);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.achievement:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.achievement__icon {
		width: 2rem;
		height: 2rem;
		color: var(--color-primary);
		flex-shrink: 0;
	}

	.achievement__title {
		font-size: 1.125rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: var(--color-text);
	}

	.achievement__description {
		margin: 0;
		color: var(--color-text-light);
		line-height: 1.6;
	}

	/* Experience Section */
	.experience__timeline {
		position: relative;
		max-width: 800px;
		margin: 0 auto;
	}

	.experience__timeline::before {
		content: '';
		position: absolute;
		left: 1rem;
		top: 0;
		bottom: 0;
		width: 2px;
		background: var(--color-border);
	}

	.timeline__item {
		position: relative;
		margin-bottom: 3rem;
		padding-left: 3rem;
	}

	.timeline__marker {
		position: absolute;
		left: 0.5rem;
		top: 0.5rem;
		width: 1rem;
		height: 1rem;
		background: var(--color-primary);
		border-radius: 50%;
		border: 3px solid var(--color-bg);
		box-shadow: var(--shadow-sm);
	}

	.timeline__content {
		background: var(--color-bg);
		padding: 2rem;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.timeline__content:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.timeline__header {
		margin-bottom: 1rem;
	}

	.timeline__title {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: var(--color-text);
	}

	.timeline__company {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-primary);
		margin-right: 1rem;
	}

	.timeline__period {
		font-size: 0.875rem;
		color: var(--color-text-light);
		background: var(--color-bg-alt);
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-md);
	}

	.timeline__description {
		margin: 0 0 1rem 0;
		color: var(--color-text-light);
		line-height: 1.6;
	}

	.timeline__technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.tech-tag {
		background: var(--color-primary);
		color: white;
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-md);
		font-size: 0.75rem;
		font-weight: 500;
	}

	/* Projects Grid Section */
	.projects__grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 2rem;
	}

	.project-card {
		background: var(--color-bg);
		padding: 2rem;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.project-card:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.project__header {
		margin-bottom: 1rem;
	}

	.project__title {
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 0.5rem 0;
		color: var(--color-text);
	}

	.project__meta {
		display: flex;
		gap: 1rem;
		font-size: 0.875rem;
		color: var(--color-text-light);
	}

	.project__period {
		font-size: 0.875rem;
		color: var(--color-primary);
		font-weight: 500;
	}

	.project__company {
		font-size: 0.875rem;
		color: var(--color-text-light);
		background: var(--color-bg-alt);
		padding: 0.25rem 0.75rem;
		border-radius: var(--radius-md);
	}

	.project__description {
		margin: 0 0 1rem 0;
		color: var(--color-text-light);
		line-height: 1.6;
	}

	.project__technologies {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-bottom: 1rem;
	}

	.project__link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--color-primary);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s;
	}

	.project__link:hover {
		color: var(--color-primary-hover);
	}

	.project__link-icon {
		width: 1rem;
		height: 1rem;
	}

	/* Skills Section */
	.skills__grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.skills__category {
		background: var(--color-bg);
		padding: 2rem;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-sm);
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.skills__category:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
	}

	.skills__category-title {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		font-size: 1.25rem;
		font-weight: 600;
		margin: 0 0 1.5rem 0;
		color: var(--color-text);
	}

	.skills__icon {
		width: 1.5rem;
		height: 1.5rem;
		color: var(--color-primary);
	}

	.skills__list {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
	}

	.skill-tag {
		background: var(--color-bg-alt);
		color: var(--color-text);
		padding: 0.5rem 1rem;
		border-radius: var(--radius-md);
		font-size: 0.875rem;
		font-weight: 500;
		transition: all 0.2s;
	}

	.skill-tag:hover {
		background: var(--color-primary);
		color: white;
		transform: translateY(-1px);
	}

	/* Contact Section */
	.contact__content {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		max-width: 800px;
		margin: 0 auto;
	}

	.contact__info {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.contact__item {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.contact__icon {
		width: 1.5rem;
		height: 1.5rem;
		color: var(--color-primary);
	}

	.contact__link {
		color: var(--color-text);
		text-decoration: none;
		font-weight: 500;
		transition: color 0.2s;
	}

	.contact__link:hover {
		color: var(--color-primary);
	}

	.contact__text {
		color: var(--color-text);
		font-weight: 500;
	}

	.contact__social {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.social-link {
		display: flex;
		align-items: center;
		gap: 0.75rem;
		padding: 1rem 1.5rem;
		background: var(--color-bg);
		border-radius: var(--radius-md);
		text-decoration: none;
		color: var(--color-text);
		font-weight: 500;
		transition: all 0.2s;
		box-shadow: var(--shadow-sm);
	}

	.social-link:hover {
		transform: translateY(-2px);
		box-shadow: var(--shadow-md);
		color: var(--color-primary);
	}

	.social-icon {
		width: 1.25rem;
		height: 1.25rem;
	}

	/* Footer */
	.footer {
		background: var(--color-text);
		color: var(--color-bg);
		padding: 2rem 0;
		text-align: center;
	}

	.footer__text {
		margin: 0;
		opacity: 0.8;
	}

	/* Responsive Design */
	@media (max-width: 1024px) {
		.projects__grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 768px) {
		.hero__container {
			grid-template-columns: 1fr;
			text-align: center;
			gap: 2rem;
		}

		.hero__name {
			font-size: 2.5rem;
		}

		.hero__subtitle {
			font-size: 1.25rem;
		}

		.hero__stats {
			justify-content: center;
		}

		.hero__actions {
			justify-content: center;
			flex-wrap: wrap;
		}

		.about__content {
			grid-template-columns: 1fr;
			gap: 2rem;
		}

		.contact__content {
			grid-template-columns: 1fr;
			gap: 2rem;
			text-align: center;
		}

		.skills__grid {
			grid-template-columns: 1fr;
		}

		.projects__grid {
			grid-template-columns: 1fr;
		}

		.header__nav {
			display: none;
		}
	}

	@media (max-width: 480px) {
		.hero {
			padding: 100px 0 60px;
		}

		.hero__name {
			font-size: 2rem;
		}

		.hero__stats {
			flex-direction: column;
			gap: 1rem;
		}

		.hero__actions {
			flex-direction: column;
		}

		.project-card {
			margin: 0 0.5rem;
			padding: 1.5rem;
		}
	}
</style>
