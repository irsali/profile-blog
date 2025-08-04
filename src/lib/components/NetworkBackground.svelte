<script lang="ts">
	/**
	 * NetworkBackground Component
	 * 
	 * A reusable component that renders an animated network graph background
	 * inspired by Bitcoin.org's network visualization. Features connected nodes
	 * with various sizes and animated connections.
	 * 
	 * @prop {string} className - Additional CSS classes to apply to the container
	 */
	export let className: string = '';
</script>

<!-- Network Pattern Background -->
<div class="network-background {className}">
	<!-- SVG for Network Connections (Bitcoin.org inspired) -->
	<svg class="network-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
		<!-- Core Network Hub Connections -->
		<line class="network-line network-line--core" x1="50" y1="50" x2="20" y2="25" style="--delay: 0s;"></line>
		<line class="network-line network-line--core" x1="50" y1="50" x2="80" y2="25" style="--delay: 1s;"></line>
		<line class="network-line network-line--core" x1="50" y1="50" x2="20" y2="75" style="--delay: 2s;"></line>
		<line class="network-line network-line--core" x1="50" y1="50" x2="80" y2="75" style="--delay: 3s;"></line>
		
		<!-- Secondary Hub Connections -->
		<line class="network-line network-line--secondary" x1="20" y1="25" x2="10" y2="15" style="--delay: 4s;"></line>
		<line class="network-line network-line--secondary" x1="20" y1="25" x2="35" y2="10" style="--delay: 5s;"></line>
		<line class="network-line network-line--secondary" x1="80" y1="25" x2="90" y2="15" style="--delay: 6s;"></line>
		<line class="network-line network-line--secondary" x1="80" y1="25" x2="65" y2="10" style="--delay: 7s;"></line>
		<line class="network-line network-line--secondary" x1="20" y1="75" x2="10" y2="85" style="--delay: 8s;"></line>
		<line class="network-line network-line--secondary" x1="20" y1="75" x2="35" y2="90" style="--delay: 9s;"></line>
		<line class="network-line network-line--secondary" x1="80" y1="75" x2="90" y2="85" style="--delay: 10s;"></line>
		<line class="network-line network-line--secondary" x1="80" y1="75" x2="65" y2="90" style="--delay: 11s;"></line>
		
		<!-- Cross Connections -->
		<line class="network-line network-line--cross" x1="20" y1="25" x2="80" y2="25" style="--delay: 12s;"></line>
		<line class="network-line network-line--cross" x1="20" y1="75" x2="80" y2="75" style="--delay: 13s;"></line>
		<line class="network-line network-line--cross" x1="20" y1="25" x2="20" y2="75" style="--delay: 14s;"></line>
		<line class="network-line network-line--cross" x1="80" y1="25" x2="80" y2="75" style="--delay: 15s;"></line>
		
		<!-- Diagonal Connections -->
		<line class="network-line network-line--diagonal" x1="20" y1="25" x2="80" y2="75" style="--delay: 16s;"></line>
		<line class="network-line network-line--diagonal" x1="80" y1="25" x2="20" y2="75" style="--delay: 17s;"></line>
		
		<!-- Mid-level Connections -->
		<line class="network-line network-line--mid" x1="35" y1="40" x2="65" y2="40" style="--delay: 18s;"></line>
		<line class="network-line network-line--mid" x1="35" y1="60" x2="65" y2="60" style="--delay: 19s;"></line>
		<line class="network-line network-line--mid" x1="35" y1="40" x2="35" y2="60" style="--delay: 20s;"></line>
		<line class="network-line network-line--mid" x1="65" y1="40" x2="65" y2="60" style="--delay: 21s;"></line>
		
		<!-- Extended Boundary Connections -->
		<line class="network-line network-line--boundary" x1="10" y1="15" x2="5" y2="10" style="--delay: 22s;"></line>
		<line class="network-line network-line--boundary" x1="90" y1="15" x2="95" y2="10" style="--delay: 23s;"></line>
		<line class="network-line network-line--boundary" x1="10" y1="85" x2="5" y2="90" style="--delay: 24s;"></line>
		<line class="network-line network-line--boundary" x1="90" y1="85" x2="95" y2="90" style="--delay: 25s;"></line>
		<line class="network-line network-line--boundary" x1="50" y1="5" x2="50" y2="0" style="--delay: 26s;"></line>
		<line class="network-line network-line--boundary" x1="50" y1="95" x2="50" y2="100" style="--delay: 27s;"></line>
		<line class="network-line network-line--boundary" x1="5" y1="50" x2="0" y2="50" style="--delay: 28s;"></line>
		<line class="network-line network-line--boundary" x1="95" y1="50" x2="100" y2="50" style="--delay: 29s;"></line>
		
		<!-- Additional Radial Connections -->
		<line class="network-line network-line--radial" x1="50" y1="50" x2="30" y2="35" style="--delay: 30s;"></line>
		<line class="network-line network-line--radial" x1="50" y1="50" x2="70" y2="35" style="--delay: 31s;"></line>
		<line class="network-line network-line--radial" x1="50" y1="50" x2="30" y2="65" style="--delay: 32s;"></line>
		<line class="network-line network-line--radial" x1="50" y1="50" x2="70" y2="65" style="--delay: 33s;"></line>
		
		<!-- Outer Ring Connections -->
		<line class="network-line network-line--outer" x1="15" y1="20" x2="25" y2="15" style="--delay: 34s;"></line>
		<line class="network-line network-line--outer" x1="75" y1="20" x2="85" y2="15" style="--delay: 35s;"></line>
		<line class="network-line network-line--outer" x1="15" y1="80" x2="25" y2="85" style="--delay: 36s;"></line>
		<line class="network-line network-line--outer" x1="75" y1="80" x2="85" y2="85" style="--delay: 37s;"></line>
	</svg>
	
	<!-- Network Nodes (Bitcoin.org inspired structure) -->
	<!-- Central Hub Node -->
	<div class="network-node network-node--hub" style="--x: 50%; --y: 50%; --delay: 0s;"></div>
	
	<!-- Primary Hub Nodes -->
	<div class="network-node network-node--primary" style="--x: 20%; --y: 25%; --delay: 1s;"></div>
	<div class="network-node network-node--primary" style="--x: 80%; --y: 25%; --delay: 2s;"></div>
	<div class="network-node network-node--primary" style="--x: 20%; --y: 75%; --delay: 3s;"></div>
	<div class="network-node network-node--primary" style="--x: 80%; --y: 75%; --delay: 4s;"></div>
	
	<!-- Secondary Nodes -->
	<div class="network-node network-node--secondary" style="--x: 10%; --y: 15%; --delay: 5s;"></div>
	<div class="network-node network-node--secondary" style="--x: 35%; --y: 10%; --delay: 6s;"></div>
	<div class="network-node network-node--secondary" style="--x: 90%; --y: 15%; --delay: 7s;"></div>
	<div class="network-node network-node--secondary" style="--x: 65%; --y: 10%; --delay: 8s;"></div>
	<div class="network-node network-node--secondary" style="--x: 10%; --y: 85%; --delay: 9s;"></div>
	<div class="network-node network-node--secondary" style="--x: 35%; --y: 90%; --delay: 10s;"></div>
	<div class="network-node network-node--secondary" style="--x: 90%; --y: 85%; --delay: 11s;"></div>
	<div class="network-node network-node--secondary" style="--x: 65%; --y: 90%; --delay: 12s;"></div>
	
	<!-- Mid-level Nodes -->
	<div class="network-node network-node--mid" style="--x: 35%; --y: 40%; --delay: 13s;"></div>
	<div class="network-node network-node--mid" style="--x: 65%; --y: 40%; --delay: 14s;"></div>
	<div class="network-node network-node--mid" style="--x: 35%; --y: 60%; --delay: 15s;"></div>
	<div class="network-node network-node--mid" style="--x: 65%; --y: 60%; --delay: 16s;"></div>
	
	<!-- Radial Nodes -->
	<div class="network-node network-node--radial" style="--x: 30%; --y: 35%; --delay: 17s;"></div>
	<div class="network-node network-node--radial" style="--x: 70%; --y: 35%; --delay: 18s;"></div>
	<div class="network-node network-node--radial" style="--x: 30%; --y: 65%; --delay: 19s;"></div>
	<div class="network-node network-node--radial" style="--x: 70%; --y: 65%; --delay: 20s;"></div>
	
	<!-- Outer Ring Nodes -->
	<div class="network-node network-node--outer" style="--x: 15%; --y: 20%; --delay: 21s;"></div>
	<div class="network-node network-node--outer" style="--x: 25%; --y: 15%; --delay: 22s;"></div>
	<div class="network-node network-node--outer" style="--x: 75%; --y: 20%; --delay: 23s;"></div>
	<div class="network-node network-node--outer" style="--x: 85%; --y: 15%; --delay: 24s;"></div>
	<div class="network-node network-node--outer" style="--x: 15%; --y: 80%; --delay: 25s;"></div>
	<div class="network-node network-node--outer" style="--x: 25%; --y: 85%; --delay: 26s;"></div>
	<div class="network-node network-node--outer" style="--x: 75%; --y: 80%; --delay: 27s;"></div>
	<div class="network-node network-node--outer" style="--x: 85%; --y: 85%; --delay: 28s;"></div>
	
	<!-- Boundary Nodes (extending beyond view) -->
	<div class="network-node network-node--boundary" style="--x: 5%; --y: 10%; --delay: 29s;"></div>
	<div class="network-node network-node--boundary" style="--x: 95%; --y: 10%; --delay: 30s;"></div>
	<div class="network-node network-node--boundary" style="--x: 5%; --y: 90%; --delay: 31s;"></div>
	<div class="network-node network-node--boundary" style="--x: 95%; --y: 90%; --delay: 32s;"></div>
	<div class="network-node network-node--boundary" style="--x: 50%; --y: 0%; --delay: 33s;"></div>
	<div class="network-node network-node--boundary" style="--x: 50%; --y: 100%; --delay: 34s;"></div>
	<div class="network-node network-node--boundary" style="--x: 0%; --y: 50%; --delay: 35s;"></div>
	<div class="network-node network-node--boundary" style="--x: 100%; --y: 50%; --delay: 36s;"></div>
</div>

<style>
	/* Network Pattern Background */
	.network-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		overflow: hidden;
		z-index: 3;
	}

	/* Network Nodes (Bitcoin.org inspired) */
	.network-node {
		position: absolute;
		left: var(--x);
		top: var(--y);
		width: 4px;
		height: 4px;
		background: var(--color-primary);
		border-radius: 50%;
		box-shadow: 
			0 0 6px var(--color-primary),
			0 0 12px var(--color-primary);
		opacity: 0.6;
		animation: nodePulse 6s ease-in-out infinite;
		animation-delay: var(--delay);
		transition: var(--theme-transition);
	}

	.network-node:hover {
		opacity: 1;
		transform: scale(1.5);
		box-shadow: 
			0 0 8px var(--color-primary),
			0 0 16px var(--color-primary),
			0 0 24px var(--color-primary);
	}

	/* Central Hub Node */
	.network-node--hub {
		width: 16px;
		height: 16px;
		box-shadow: 
			0 0 12px var(--color-primary),
			0 0 24px var(--color-primary),
			0 0 36px var(--color-primary);
		opacity: 0.9;
		animation: nodePulse 4s ease-in-out infinite;
	}

	.network-node--hub:hover {
		transform: scale(1.8);
		box-shadow: 
			0 0 16px var(--color-primary),
			0 0 32px var(--color-primary),
			0 0 48px var(--color-primary);
	}

	/* Primary Hub Nodes */
	.network-node--primary {
		width: 10px;
		height: 10px;
		box-shadow: 
			0 0 8px var(--color-primary),
			0 0 16px var(--color-primary),
			0 0 24px var(--color-primary);
		opacity: 0.8;
		animation: nodePulse 5s ease-in-out infinite;
	}

	.network-node--primary:hover {
		transform: scale(1.6);
		box-shadow: 
			0 0 12px var(--color-primary),
			0 0 24px var(--color-primary),
			0 0 36px var(--color-primary);
	}

	/* Secondary Nodes */
	.network-node--secondary {
		width: 6px;
		height: 6px;
		box-shadow: 
			0 0 4px var(--color-primary),
			0 0 8px var(--color-primary);
		opacity: 0.7;
	}

	/* Mid-level Nodes */
	.network-node--mid {
		width: 5px;
		height: 5px;
		box-shadow: 
			0 0 3px var(--color-primary),
			0 0 6px var(--color-primary);
		opacity: 0.6;
	}

	/* Radial Nodes */
	.network-node--radial {
		width: 4px;
		height: 4px;
		box-shadow: 
			0 0 2px var(--color-primary),
			0 0 4px var(--color-primary);
		opacity: 0.5;
	}

	/* Outer Ring Nodes */
	.network-node--outer {
		width: 3px;
		height: 3px;
		box-shadow: 
			0 0 2px var(--color-primary),
			0 0 4px var(--color-primary);
		opacity: 0.4;
	}

	/* Boundary Nodes */
	.network-node--boundary {
		width: 2px;
		height: 2px;
		box-shadow: 
			0 0 1px var(--color-primary),
			0 0 2px var(--color-primary);
		opacity: 0.3;
	}

	/* SVG Network Connections */
	.network-svg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
	}

	.network-line {
		stroke: var(--color-primary);
		stroke-width: 0.3 !important;
		opacity: 0.2;
		animation: lineFlow 10s ease-in-out infinite;
		animation-delay: var(--delay);
		transition: var(--theme-transition);
		filter: drop-shadow(0 0 1px var(--color-primary));
	}

	.network-line:hover {
		opacity: 0.4;
		stroke-width: 0.8;
		filter: drop-shadow(0 0 2px var(--color-primary));
	}

	/* Core Hub Connections */
	.network-line--core {
		stroke-width: 0.6 !important;
		opacity: 0.4;
		filter: drop-shadow(0 0 2px var(--color-primary));
		animation: lineFlow 8s ease-in-out infinite;
	}

	.network-line--core:hover {
		opacity: 0.6;
		stroke-width: 1.2;
		filter: drop-shadow(0 0 4px var(--color-primary));
	}

	/* Secondary Hub Connections */
	.network-line--secondary {
		stroke-width: 0.4 !important;
		opacity: 0.3;
		filter: drop-shadow(0 0 1.5px var(--color-primary));
		animation: lineFlow 9s ease-in-out infinite;
	}

	/* Cross Connections */
	.network-line--cross {
		stroke-width: 0.35 !important;
		opacity: 0.25;
		filter: drop-shadow(0 0 1px var(--color-primary));
		animation: lineFlow 11s ease-in-out infinite;
	}

	/* Diagonal Connections */
	.network-line--diagonal {
		stroke-width: 0.3 !important;
		opacity: 0.2;
		filter: drop-shadow(0 0 1px var(--color-primary));
		animation: lineFlow 12s ease-in-out infinite;
	}

	/* Mid-level Connections */
	.network-line--mid {
		stroke-width: 0.25 !important;
		opacity: 0.15;
		filter: drop-shadow(0 0 0.5px var(--color-primary));
		animation: lineFlow 13s ease-in-out infinite;
	}

	/* Radial Connections */
	.network-line--radial {
		stroke-width: 0.2 !important;
		opacity: 0.15;
		filter: drop-shadow(0 0 0.5px var(--color-primary));
		animation: lineFlow 14s ease-in-out infinite;
	}

	/* Outer Ring Connections */
	.network-line--outer {
		stroke-width: 0.15 !important;
		opacity: 0.1;
		filter: drop-shadow(0 0 0.5px var(--color-primary));
		animation: lineFlow 15s ease-in-out infinite;
	}

	/* Boundary Connections */
	.network-line--boundary {
		stroke-width: 0.1 !important;
		opacity: 0.08;
		filter: drop-shadow(0 0 0.3px var(--color-primary));
		animation: lineFlow 16s ease-in-out infinite;
	}

	@keyframes nodePulse {
		0%, 100% {
			opacity: 0.6;
			transform: scale(1);
		}
		50% {
			opacity: 1;
			transform: scale(1.1);
		}
	}

	@keyframes lineFlow {
		0%, 100% {
			opacity: 0.1;
			stroke-width: 0.2;
		}
		50% {
			opacity: 0.3;
			stroke-width: 0.4;
		}
	}
	
	/* Thinner Network Lines */
	.network-line {
		stroke-width: 0.4 !important; /* Reduced from 0.8px */
	}
	
	.network-line--boundary {
		stroke-width: 0.3 !important; /* Reduced from 0.6px */
	}
</style> 