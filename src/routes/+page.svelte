<script lang="ts">
	import { onMount } from 'svelte';
	import { messages, getLang, setLang, defaultLang } from '../lib/i18n.js';
	import { projects } from '../lib/projects.js';
	import Icon from '@iconify/svelte';
	import { fade, fly } from 'svelte/transition';

	let lang: keyof typeof messages = getLang();
	let filter = '';
	let showProjects = projects;

	const techIcons = [
		{ name: 'Python', icon: 'devicon:python', url: 'https://www.python.org/' },
		{ name: 'HTML', icon: 'vscode-icons:file-type-html', url: 'https://html.spec.whatwg.org/' },
		{ name: 'CSS', icon: 'devicon:css3', url: 'https://www.w3.org/Style/CSS/' },
		{
			name: 'JavaScript',
			icon: 'devicon:javascript',
			url: 'https://developer.mozilla.org/docs/Web/JavaScript'
		},
		{ name: 'TypeScript', icon: 'devicon:typescript', url: 'https://www.typescriptlang.org/' },
		{ name: 'Rust', icon: 'devicon:rust', url: 'https://www.rust-lang.org/' },
		{ name: 'Tauri', icon: 'devicon:tauri', url: 'https://tauri.app/' }
	];

	const flagIcons = [
		{ code: 'ru', emoji: '🇷🇺' },
		{ code: 'en', emoji: '🇬🇧' },
		{ code: 'de', emoji: '🇩🇪' }
	];

	function changeLang(l: keyof typeof messages) {
		lang = l;
		setLang(l);
	}

	function filterByTech(tech: string) {
		filter = tech;
		showProjects = projects.filter((p) => p.tech.includes(tech));
	}

	function resetFilter() {
		filter = '';
		showProjects = projects;
	}

	onMount(() => {
		lang = getLang() as keyof typeof messages;
	});
</script>

<nav
	class="flex justify-between items-center py-4 px-4 md:px-12 bg-white/60 dark:bg-gray-900/60 backdrop-blur-md shadow-md sticky top-0 z-50"
>
	<div class="flex gap-2 items-center">
		<a href="#about" class="font-bold text-accent text-lg hover:underline">Marsickat</a>
	</div>
	<div class="flex gap-2">
		{#each flagIcons as flag}
			<button
				aria-label={flag.code}
				class="text-2xl px-1 focus:outline-none"
				on:click={() => changeLang(flag.code)}
				class:selected={lang === flag.code}>{flag.emoji}</button
			>
		{/each}
	</div>
</nav>

<main
	class="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-accent via-secondary to-violet animate-bg-pulse"
>
	<!-- About Me Section -->
	<section
		id="about"
		class="w-full max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8 py-16 fade-in-up"
	>
		<div class="flex-shrink-0 flex flex-col items-center">
			<img
				src="/avatar.png"
				alt="avatar"
				class="w-40 h-40 rounded-full shadow-xl object-cover transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
			/>
		</div>
		<div class="flex-1 flex flex-col gap-4 items-center md:items-start">
			<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-2">
				{messages[lang].about_me}
			</h2>
			<p class="text-lg text-gray-700 dark:text-gray-200 max-w-xl">{messages[lang].about}</p>
			<div class="flex flex-wrap gap-4 mt-4">
				{#each techIcons as tech}
					<a
						href={tech.url}
						target="_blank"
						rel="noopener"
						class="group flex flex-col items-center"
					>
						<span
							class="rounded-full border-2 border-transparent group-hover:border-accent transition-all duration-300 p-2 bg-white/80 dark:bg-gray-800/80 shadow tech-icon"
						>
							<Icon icon={tech.icon} width="36" height="36" class="transition-all duration-300" />
						</span>
						<span class="text-xs mt-1 text-gray-600 dark:text-gray-300">{tech.name}</span>
					</a>
				{/each}
			</div>
			<a
				href="https://github.com/Marsickat"
				target="_blank"
				rel="noopener"
				class="mt-6 inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-accent via-secondary to-violet text-white font-semibold shadow-lg transition-all duration-300 hover:from-violet hover:to-accent focus:outline-none"
			>
				<Icon icon="mdi:github" width="24" height="24" />
				{messages[lang].github_btn}
			</a>
		</div>
	</section>

	<!-- Projects Section -->
	<section id="projects" class="w-full max-w-5xl mx-auto py-16 fade-in-up">
		<h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-8">{messages[lang].projects}</h2>
		<div class="flex flex-wrap gap-2 mb-6 overflow-x-auto">
			{#each techIcons as tech}
				<button
					class="flex items-center gap-2 px-3 py-1 rounded-full border-2 transition-all duration-300 text-sm font-medium bg-white/70 dark:bg-gray-800/70 hover:border-accent focus:outline-none {filter ===
					tech.name
						? 'border-accent shadow-neon'
						: 'border-transparent'}"
					on:click={() => filterByTech(tech.name)}
				>
					<Icon icon={tech.icon} width="20" height="20" />
					{tech.name}
				</button>
			{/each}
			<button
				class="ml-2 px-3 py-1 rounded-full border-2 border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 text-sm font-medium hover:border-accent transition-all duration-300"
				on:click={resetFilter}>{messages[lang].filter_reset}</button
			>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each showProjects as project (project.title)}
				<div
					class="bg-white/80 dark:bg-gray-900/80 rounded-2xl shadow-lg p-6 flex flex-col gap-4 transition-all duration-300 fade-in-up"
					in:fly={{ y: 40, duration: 600 }}
				>
					<h3 class="text-xl font-bold text-accent mb-2">{project.title}</h3>
					<p class="text-gray-700 dark:text-gray-200">{project.description[lang]}</p>
					<div class="flex flex-wrap gap-2 mt-2">
						{#each project.tech as t}
							<span
								class="inline-flex items-center gap-1 px-2 py-1 rounded bg-accent/10 text-accent text-xs font-medium"
							>
								{#if techIcons.find((icon) => icon.name === t)}
									<Icon
										icon={techIcons.find((icon) => icon.name === t).icon}
										width="16"
										height="16"
									/>
								{/if}
								{t}
							</span>
						{/each}
					</div>
					<a
						href={project.github}
						target="_blank"
						rel="noopener"
						class="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-accent via-secondary to-violet text-white font-semibold shadow-md transition-all duration-300 hover:from-violet hover:to-accent"
					>
						<Icon icon="mdi:github" width="20" height="20" />
						GitHub
					</a>
				</div>
			{/each}
		</div>
	</section>
</main>

<style>
	.selected {
		outline: 2px solid #00e5c8;
		border-radius: 50%;
	}
	.fade-in-up {
		opacity: 0;
		animation: fadeInUp 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
		animation-delay: 0.1s;
		animation-fill-mode: forwards;
	}
	@keyframes fadeInUp {
		0% {
			opacity: 0;
			transform: translateY(40px);
		}
		100% {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
