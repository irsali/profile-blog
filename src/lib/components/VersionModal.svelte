<script lang="ts">
	import { X } from 'lucide-svelte';

	interface VersionPreview {
		version: string;
		title: string;
		description: string;
		image?: string;
		link?: string;
	}

	interface Props {
		show: boolean;
		versions: VersionPreview[];
		onClose?: () => void;
	}

	let { show, versions, onClose } = $props();

	/**
	 * Close modal
	 */
	function handleClose() {
		if (onClose) {
			onClose();
		}
	}

	/**
	 * Close modal when clicking outside
	 */
	function handleModalClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			handleClose();
		}
	}
</script>

{#if show}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="version-modal" onclick={handleModalClick}>
		<div class="version-modal__content">
			<button class="version-modal__close" onclick={handleClose} aria-label="Close modal">
				<X />
			</button>

			<!-- Main Orb Body -->
			<div class="version-modal__orb">
				
				<!-- Rotating orb elements based on reference CSS -->
				<div class="orb-elements">
					<div class="orb-element" style="--x: -53%; --y: -53%; --t: 37;"></div>
					<div class="orb-element" style="--x: -47%; --y: -52%; --t: 58;"></div>
					<div class="orb-element" style="--x: -45%; --y: -50%; --t: 46;"></div>
					<div class="orb-element" style="--x: -53%; --y: -45%; --t: 72;"></div>
					<div class="orb-element" style="--x: -55%; --y: -45%; --t: 62;"></div>
				</div>

				<!-- White center of the orb -->
				<div class="orb-center" style="--x: -55%; --y: -45%; --t: 62;"></div>
				<div class="version-content">
					<div class="perspective-wrapper">
						<h2 class="perspective-text">
							Looking for a different <br /> site? Go back in time...
						</h2>
						<div class="version-preview">
							<div>
								<a href="https://irsali.github.io/">
									<img src="/static/profile/portfolio.jpg" alt="Portfolio Preview" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
{/if}

<style>
	/* Version Modal Styles */
	.version-modal {
		position: fixed;
		top: 0;
		left: 0;
		width: 100vw;
		height: 100vh;
		background: radial-gradient(circle at 50% 35%, rgb(51, 68, 85), rgba(0, 0, 0, 0.7));
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
		backdrop-filter: blur(20px);
	}

	.version-modal__content {
		background: transparent;
		border-radius: 24px;
		padding: 2rem;
		position: relative;
		width: 90%;
		max-width: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
	}

	.version-modal__close {
		position: fixed;
		top: 2rem;
		right: 2rem;
		background: rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(255, 255, 255, 0.2);
		border-radius: 50%;
		color: white;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: all 0.2s ease;
		z-index: 1001;
		backdrop-filter: blur(10px);
	}

	.version-modal__close:hover {
		background: rgba(255, 255, 255, 0.2);
		transform: scale(1.05);
	}

	/* Main Orb Body */
	.version-modal__orb {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 500px;
		height: 500px;
		pointer-events: none;
		z-index: 0;
		overflow: visible;
	}

	/* Rotating orb elements for the glowing effect */
	.orb-elements {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	/* White center of the orb */
	.orb-center {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 400px;
		height: 400px;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			rgba(255, 255, 255, 0.9) 0%,
			rgba(255, 255, 255, 0.7) 50%,
			rgba(255, 255, 255, 0.3) 100%
		);
		box-shadow:
			0 0 20px rgba(255, 255, 255, 0.5),
			0 0 40px rgba(255, 255, 255, 0.3),
			0 0 60px rgba(255, 255, 255, 0.1);
		z-index: 2;
		backdrop-filter: blur(2px);
	}

	.orb-element {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(var(--x, -50%), var(--y, -50%)) rotate(0deg);
		font-size: 20vmin;
		width: 3.5em;
		height: 3.5em;
		border-radius: 90% 95% 85% 105%;
		background: #0f0;
		background: linear-gradient(45deg, #00ff88, #00ccff, #ff0088, #ff8800);
		mix-blend-mode: screen;
		filter: hue-rotate(0deg);
		animation: wobble calc(0.15s * var(--t)) linear infinite;
		transform-origin: -var(--y) -var(--x);
		box-shadow:
			inset 0 0 0.5em 0.2em #000,
			0 0 0.15em 0 #fff;
		opacity: 0.8;
	}

	@keyframes wobble {
		to {
			filter: hue-rotate(360deg);
			transform: translate(var(--x), var(--y)) rotate(360deg);
		}
	}

	.version-content {
		position: absolute;
		top: 5%;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		z-index: 5;
		padding: 2rem;
		border-radius: 50%;
		overflow: hidden;
	}

	.perspective-wrapper {
		perspective: 100px;
		transform: rotateX(25deg) translateZ(100px);
		transform-origin: 50% 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2.5rem;
		width: 100%;
		max-width: 400px;
	}

	.perspective-text {
		font-size: 1.5rem;
		font-weight: 600;
		color: white;
		text-shadow: 0 0 20px rgba(255, 255, 255, 0.8);
		transform: rotateX(12deg) translateZ(20px);
		transform-origin: center bottom;
		text-align: center;
		line-height: 1.3;
		backface-visibility: hidden;
	}

	.version-preview {
		perspective: 600px;
		transform: rotateX(10deg) translateZ(10px);
		transform-origin: 50% 100%;
		width: 100%;
		max-width: 320px;
	}

	.version-preview > div {
		transform-style: preserve-3d;
		transform: rotateX(5deg) rotateY(-3deg) translateZ(5px);
		transition: transform 0.3s ease;
		backface-visibility: hidden;
		width: 100%;
	}

	.version-preview img {
		border-radius: 12px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		border: 2px solid rgba(255, 255, 255, 0.2);
		display: block;
		width: 100%;
		height: auto;
		cursor: pointer;
		transition: transform 0.3s ease;
		transform-style: preserve-3d;
		transform: rotateX(5deg) rotateY(-3deg) translateZ(5px);
	}

	.version-preview img:hover {
		transform: scale(1.05) translateZ(40px);
	}

	.version-content h2 {
		font-weight: 600;
		color: black;
		margin: 0 0 0.5rem 0;
		text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
	}

	/* Version previews container */
	.version-preview {
		display: flex;
		flex-direction: row;
		justify-content: center;
		gap: 1rem;
		align-items: center;
	}

	.version-preview a {
		display: block;
		width: 100%;
		transform: scale(0.9);
		transform-origin: center;
		transition:
			transform 0.5s ease,
			filter 0.3s ease;
		filter: drop-shadow(0 0 12px rgba(255, 255, 255, 0.3));
		pointer-events: auto;
	}
	.version-preview img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: 10px;
		box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
		border: 2px solid rgba(255, 255, 255, 0.3);
		transition: transform 0.3s ease;
	}

	.version-preview img:hover {
		transform: scale(1.03) translateZ(25px);
		box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
		border-color: rgba(255, 255, 255, 0.5);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.version-modal__close {
			top: 1.5rem;
			right: 1.5rem;
			width: 44px;
			height: 44px;
		}

		.version-modal__content {
			padding: 1rem;
			width: 95%;
		}

		.version-modal__orb {
			width: 350px;
			height: 350px;
		}
		.orb-center {
			width: 150px;
			height: 150px;
		}
		.perspective-wrapper {
			max-width: 320px;
			gap: 2rem;
		}
		.perspective-text {
			font-size: 1.25rem;
			transform: rotateX(8deg) translateZ(15px);
		}
		.version-preview > div {
			transform: rotateX(10deg) rotateY(-5deg) translateZ(10px);
		}

		.version-preview a {
			transform: scale(0.85);
		}

		.version-preview img {
			border-radius: 8px;
		}

		.orb-element {
			width: 25em;
			height: 25em;
		}
	}

	@media (max-width: 480px) {
		.version-modal__close {
			top: 1rem;
			right: 1rem;
			width: 40px;
			height: 40px;
		}

		.version-modal__content {
			padding: 0.75rem;
			width: 98%;
		}

		.version-modal__orb {
			width: 280px;
			height: 280px;
		}

		.orb-center {
			width: 120px;
			height: 120px;
		}

		.perspective-wrapper {
			max-width: 260px;
			gap: 1.5rem;
		}

		.perspective-text {
			font-size: 1rem;
			transform: rotateX(5deg) translateZ(10px);
		}

		.version-preview > div {
			transform: rotateX(6deg) rotateY(-3deg) translateZ(5px);
		}

		.version-preview a {
			transform: scale(0.8);
		}
		.version-preview img {
			border-radius: 6px;
			border-width: 1px;
		}

		.version-preview img:hover {
			transform: scale(1.01) translateZ(5px);
		}

		.orb-element {
			width: 20em;
			height: 20em;
		}
	}

	@media (max-width: 360px) {
		.version-modal__close {
			top: 0.75rem;
			right: 0.75rem;
			width: 36px;
			height: 36px;
		}

		.version-modal__orb {
			width: 250px;
			height: 250px;
		}
		.orb-center {
			width: 100px;
			height: 100px;
		}

		.perspective-wrapper {
			max-width: 200px;
			gap: 0.75rem;
		}

		.perspective-text {
			font-size: 0.9rem;
			transform: none;
		}

		.version-preview > div {
			transform: rotateX(1deg) rotateY(-0.5deg) translateZ(1px);
		}

		.version-preview a {
			transform: scale(0.8);
		}

		.orb-element {
			width: 18em;
			height: 18em;
		}
	}
</style>
