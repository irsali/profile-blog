<script lang="ts">
	import { onMount } from 'svelte';
	
	export let duration = 1000; // Duration in milliseconds
	
	let visible = true;
	
	onMount(() => {
		// Hide preloader after specified duration
		setTimeout(() => {
			visible = false;
		}, duration);
	});
</script>

{#if visible}
	<div class="preloader" class:preloader--hidden={!visible}>
			<div class="preloader__container">
		<!-- Animated logo/name -->
		<div class="preloader__logo">
			<span class="preloader__text">I</span>
			<span class="preloader__text">A</span>
		</div>
		
		<!-- Loading dots -->
		<div class="preloader__dots">
			<div class="preloader__dot"></div>
			<div class="preloader__dot"></div>
			<div class="preloader__dot"></div>
		</div>
		
		<!-- Progress bar -->
		<div class="preloader__progress">
			<div class="preloader__progress-bar"></div>
		</div>
		
		<!-- Loading text -->
		<div class="preloader__loading-text">
			<span>Loading</span>
			<span class="preloader__loading-dots">...</span>
		</div>
	</div>
	</div>
{/if}

<style>
	.preloader {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: var(--color-bg);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 9999;
		transition: opacity 0.5s ease, visibility 0.5s ease;
	}

	.preloader--hidden {
		opacity: 0;
		visibility: hidden;
	}

	.preloader__container {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	.preloader__logo {
		display: flex;
		gap: 0.5rem;
	}

	.preloader__text {
		font-size: 3rem;
		font-weight: 800;
		color: var(--color-primary);
		animation: preloaderBounce 1.5s ease-in-out infinite;
	}

	.preloader__text:nth-child(1) {
		animation-delay: 0s;
	}

	.preloader__text:nth-child(2) {
		animation-delay: 0.2s;
	}

	.preloader__dots {
		display: flex;
		gap: 0.5rem;
	}

	.preloader__dot {
		width: 12px;
		height: 12px;
		background: var(--color-primary);
		border-radius: 50%;
		animation: preloaderPulse 1.5s ease-in-out infinite;
	}

	.preloader__dot:nth-child(1) {
		animation-delay: 0s;
	}

	.preloader__dot:nth-child(2) {
		animation-delay: 0.2s;
	}

	.preloader__dot:nth-child(3) {
		animation-delay: 0.4s;
	}

	.preloader__progress {
		width: 200px;
		height: 4px;
		background: var(--color-bg-alt);
		border-radius: 2px;
		overflow: hidden;
	}

	.preloader__progress-bar {
		height: 100%;
		background: var(--color-primary);
		border-radius: 2px;
		animation: preloaderProgress 2s ease-in-out infinite;
	}

	.preloader__loading-text {
		font-size: 1rem;
		color: var(--color-text-light);
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.preloader__loading-dots {
		animation: preloaderLoadingDots 1.5s ease-in-out infinite;
	}

	@keyframes preloaderBounce {
		0%, 20%, 50%, 80%, 100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-20px);
		}
		60% {
			transform: translateY(-10px);
		}
	}

	@keyframes preloaderPulse {
		0%, 100% {
			transform: scale(1);
			opacity: 1;
		}
		50% {
			transform: scale(1.2);
			opacity: 0.7;
		}
	}

	@keyframes preloaderProgress {
		0% {
			width: 0%;
		}
		50% {
			width: 70%;
		}
		100% {
			width: 100%;
		}
	}

	@keyframes preloaderLoadingDots {
		0%, 20% {
			opacity: 0;
		}
		50% {
			opacity: 1;
		}
		80%, 100% {
			opacity: 0;
		}
	}

	/* Dark theme adjustments */
	[data-theme="dark"] .preloader {
		background: var(--color-bg);
	}

	[data-theme="dark"] .preloader__progress {
		background: var(--color-border);
	}

	/* Responsive */
	@media (max-width: 768px) {
		.preloader__text {
			font-size: 2.5rem;
		}

		.preloader__progress {
			width: 150px;
		}
	}

	@media (max-width: 480px) {
		.preloader__text {
			font-size: 2rem;
		}

		.preloader__progress {
			width: 120px;
		}
	}
</style> 