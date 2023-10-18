<script lang="ts">
	import '../app.postcss';
	// site-wide scripts like analytics, session maangement
	import Toasts from '$lib/components/Toasts.svelte';
</script>

<svelte:head>
	<!-- Importing fonts & other site wide head tags instead of doing directly in app.html -->
	<title>Sveltekit Template</title>
	<link href="https://fonts.googleapis.com/css?family=Inter" rel="stylesheet" />
</svelte:head>

<!-- for example, this component should be accessible on any page, thats why we're adding it to the layout
https://www.melt-ui.com/docs/builders/toast -->
<Toasts />

<slot />
