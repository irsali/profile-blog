<script lang="ts">
	import { onMount } from 'svelte';
	import { Mail, ExternalLink, Code, Database, Cloud, Globe, Users, Award, Calendar, MapPin, Star, Zap, Shield, Sun, Moon, Linkedin, Server, Monitor, Bot, Brain, GitBranch, Bug, Settings, BarChart3 } from 'lucide-svelte';
	import { theme, toggleTheme } from '$lib/stores/theme';
	import Preloader from '$lib/components/Preloader.svelte';
	import { profile, companies, skills, skillCategories, achievements, recentProjects, experienceYears } from '$lib/data/profile';
	import { siGithub } from 'simple-icons';
	import 'animate.css';

	/**
	 * Returns the appropriate icon component based on the icon name
	 * @param iconName - The name of the icon to return
	 * @returns The icon component
	 */
	function getIconComponent(iconName: string) {
		const iconMap: Record<string, any> = {
			'Code': Code,
			'Server': Server,
			'Globe': Globe,
			'Database': Database,
			'Cloud': Cloud,
			'Brain': Brain,
			'Monitor': Monitor,
			'Award': Award,
			'Git': GitBranch,
			'Bug': Bug,
			'Settings': Settings,
			'BarChart3': BarChart3,
			'Users': Users,
			'Shield': Shield
		};
		return iconMap[iconName] || Code; // Default to Code if icon not found
	}


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

		// Setup Intersection Observer for animations
		const observer = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					const element = entry.target as HTMLElement;
					const animationType = element.dataset.animate;
					
					requestAnimationFrame(() => {
						// Add animation classes
						element.classList.add('animate__animated');
						if (animationType) {
							element.classList.add(`animate__${animationType}`);
						}
					});
					
					// Stop observing after animation is triggered
					observer.unobserve(element);
				}
			});
		}, {
			threshold: 0.1,
			rootMargin: '-50px 0px'
		});

		// Observe all elements with data-animate attribute
		const animatedElements = document.querySelectorAll('[data-animate]');
		animatedElements.forEach(element => observer.observe(element));

		// Start typing animation for hero title
		startTypingAnimation();
		
	});

	/**
	 * Creates a typing effect for the hero description
	 */
	function startTypingAnimation() {
		const descriptionElement = document.querySelector('.hero__description') as HTMLElement;
		
		if (!descriptionElement) return;

		const descriptionText = descriptionElement.textContent || '';
		
		// Hide the original text but keep it in the layout
		descriptionElement.style.visibility = 'hidden';
		descriptionElement.classList.add('typing'); // Add typing class for cursor
		
		// Create a visible overlay for typing
		const typingOverlay = document.createElement('span');
		typingOverlay.style.cssText = `
			position: absolute;
			top: 0;
			left: 0;
			visibility: visible;
			background: transparent;
			pointer-events: none;
		`;
		descriptionElement.appendChild(typingOverlay);

		let currentIndex = 0;
		const typeSpeed = 50; // milliseconds per character

		function typeNextChar() {
			if (currentIndex < descriptionText.length) {
				typingOverlay.textContent += descriptionText[currentIndex];
				currentIndex++;
				setTimeout(typeNextChar, typeSpeed);
			} else {
				// Remove typing class when finished
				setTimeout(() => {
					descriptionElement.classList.remove('typing');
					// Show the original text and remove overlay
					descriptionElement.style.visibility = 'visible';
					typingOverlay.remove();
				}, 500);
			}
		}

		// Start typing after a short delay
		setTimeout(typeNextChar, 1000);
	}
</script>

<svelte:head>
	<title>{profile.name} - {profile.title}</title>
	<meta name="description" content={profile.description} />
</svelte:head>

<!-- Preloader -->
<Preloader duration={0} />

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
<section class="hero section">
	
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
<section id="about" class="section" data-animate="fadeInUp">
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
			<div class="achievement" data-animate="fadeInRight">
				<div class="achievement__content">
					<h3 class="achievement__title">{achievement.title}</h3>
					<p class="achievement__description">{achievement.description}</p>
					{#if achievement.year}
						<span class="achievement__year">{achievement.year}</span>
					{/if}
				</div>
			</div>
		{/each}
			</div>
		</div>
	</div>
</section>

<!-- Experience Section -->
<section id="experience" class="section section--alt" data-animate="fadeInUp">
	<div class="container">
		<h2 class="section__title">Professional Experience</h2>
		<div class="experience__timeline">
						{#each companies as company, index}
			<div class="timeline__item" data-animate="fadeInLeft">
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
<section id="projects" class="section" data-animate="fadeInUp">
	
	<div class="container">
		<h2 class="section__title">Featured Projects</h2>
		<div class="projects__grid">
						{#each recentProjects as project}
			<div class="project-card" data-animate="fadeInUp">
					<div class="project__header">
						<h3 class="project__title">{project.title}</h3>
					</div>
					<p class="project__description">{project.description}</p>
					<div class="project__technologies">
						{#each project.technologies as tech}
							<span class="tech-tag">{tech}</span>
						{/each}
					</div>
					<div class="project__links">
						{#if project.github}
							<a href={project.github} target="_blank" rel="noopener" class="project__link">
								<svg class="project__link-icon" viewBox="0 0 24 24" fill="currentColor">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
								</svg>
								GitHub
							</a>
						{/if}
						{#if project.live}
							<a href={project.live} target="_blank" rel="noopener" class="project__link">
								<ExternalLink class="project__link-icon" />
								Live Demo
							</a>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Skills Section -->
<section id="skills" class="section section--alt" data-animate="fadeInUp">
	
	<div class="container">
		<h2 class="section__title">Skills & Technologies</h2>
		<div class="skills__grid">
						{#each skillCategories as category}
			<div class="skills__category" data-animate="fadeInUp">
					<h3 class="skills__category-title">
						<svelte:component this={getIconComponent(category.icon)} class="skills__icon" />
						{category.title}
					</h3>
					<div class="skills__list">
						{#each category.skills as skill}
							<span class="skill-tag">{skill}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Contact Section -->
<section id="contact" class="section" data-animate="fadeInUp">
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
					<svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
						<path d={siGithub.path} />
					</svg>
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
			Built with curiosity, creativity, and a bit of AI magic. © {new Date().getFullYear()} {profile.name}.
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
		background: var(--color-bg-alt);
		color: var(--color-text);
		position: relative;
		overflow: hidden;
	}

	.hero__container {
		max-width: var(--container-max-width);
		margin: 0 auto;
		padding: 0 var(--container-padding);
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 4rem;
		align-items: center;
		position: relative;
		z-index: 4;
	}



	/* Animated Tech Stack Background */
	.tech-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 3;
	}

	.tech-icon {
		position: absolute;
		left: var(--x);
		top: var(--y);
		background: rgba(25, 199, 166, 0.1);
		color: var(--color-primary);
		padding: 0.5rem 1rem;
		border-radius: var(--radius-md);
		border: 1px solid rgba(25, 199, 166, 0.2);
		font-size: 0.875rem;
		font-weight: 500;
		white-space: nowrap;
		animation: float var(--speed) ease-in-out infinite;
		animation-delay: var(--delay);
		opacity: 0.7;
		transition: all 0.3s ease;
	}

	.tech-icon:hover {
		opacity: 1;
		background: rgba(25, 199, 166, 0.15);
		transform: scale(1.05);
	}

	@keyframes float {
		0%, 100% {
			transform: translateY(0px) rotate(0deg);
		}
		25% {
			transform: translateY(-10px) rotate(1deg);
		}
		50% {
			transform: translateY(-5px) rotate(-1deg);
		}
		75% {
			transform: translateY(-15px) rotate(0.5deg);
		}
	}

	/* Dark theme adjustments for tech icons */
	[data-theme="dark"] .tech-icon {
		background: rgba(25, 199, 166, 0.15);
		border-color: rgba(25, 199, 166, 0.3);
	}

	[data-theme="dark"] .tech-icon:hover {
		background: rgba(25, 199, 166, 0.2);
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
		position: relative;
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
		position: relative;
		min-height: 1.7em;
	}

	.hero__description::after {
		content: '|';
		position: absolute;
		right: -8px;
		top: 0;
		color: var(--color-primary);
		animation: blink 1s infinite;
		opacity: 0;
	}

	@keyframes blink {
		0%, 50% { opacity: 1; }
		51%, 100% { opacity: 0; }
	}

	.hero__description.typing::after {
		opacity: 1;
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
		position: relative;
		z-index: 2;
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
		position: relative;
		z-index: 2;
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
		background: var(--color-bg-alt);
		color: var(--color-text);
		padding: 2rem 0;
		text-align: center;
	}

	.footer__text {
		margin: 0;
		opacity: 0.8;
	}

	/* Animation Controls */
	.animate__animated {
		--animate-duration: 0.8s;
	}

	/* Initial state for elements that will be animated */
	[data-animate] {
		opacity: 0;
		transform: translateY(30px);
		transition: opacity 0.6s ease-out, transform 0.6s ease-out;
	}

	[data-animate].animate__animated {
		opacity: 1;
		transform: translateY(0);
	}

	/* Staggered delays for grid items */
	.project-card:nth-child(1) { animation-delay: 0.1s; }
	.project-card:nth-child(2) { animation-delay: 0.2s; }
	.project-card:nth-child(3) { animation-delay: 0.3s; }

	.skills__category:nth-child(1) { animation-delay: 0.1s; }
	.skills__category:nth-child(2) { animation-delay: 0.2s; }
	.skills__category:nth-child(3) { animation-delay: 0.3s; }
	.skills__category:nth-child(4) { animation-delay: 0.4s; }

	.timeline__item:nth-child(1) { animation-delay: 0.1s; }
	.timeline__item:nth-child(2) { animation-delay: 0.2s; }
	.timeline__item:nth-child(3) { animation-delay: 0.3s; }
	.timeline__item:nth-child(4) { animation-delay: 0.4s; }

	.achievement:nth-child(1) { animation-delay: 0.1s; }
	.achievement:nth-child(2) { animation-delay: 0.2s; }
	.achievement:nth-child(3) { animation-delay: 0.3s; }

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

