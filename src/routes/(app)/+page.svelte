<script lang="ts">
	import { addToast } from '$lib/components/Toasts.svelte';
	import { Smile } from 'lucide-svelte';

	function create() {
		addToast({
			data: {
				title: 'Test',
				description: 'This is a test toast from the Melt-UI library',
				color: 'bg-green-500'
			}
		});
	}
</script>

<section class="p-4 text-pink">
	<h1 class="text-3xl font-bold mb-4">sveltekit template overview</h1>

	<p class="mb-4">
		hi, this is my stack i use to build my sveltekit apps, this will probably change as time goes on
		but i find this stack consistent and covers pretty much anything i want to build for now
	</p>

	<h1 class="text-2xl font-bold mb-4 underline">file structure</h1>
	<p class="mb-4">
		before reading on, please look through the file structure of this repo. most files have comments to explain what each file is for <br>
		as a general guideline, all files are under their related folder in <u>$lib</u> (components in components, database stuff in server, stores in stores, types in types) <br>
		for the routes, all client-facing pages should go under (app) and (landingpage) with auth being under (auth), layout groups are used so we can have different +layout files for different routes <br>
		site-wide code is all in our main +layout files
	</p>

	<h1 class="text-2xl font-bold mb-4 underline">packages</h1>

	<a href="https://tailwindcss.com/" class="heading">tailwind css + postcss</a>
	<p class="mb-4">
		<a href="https://tailwindcss.com/" class="link">tailwind</a> is a css framework i use as i find
		inline styles a lot easier to work with <br />
		for any global/new styles, like a color scheme i want to use, i put them in my tailwind.config.cjs
		<br />
		and i use <a href="https://postcss.org/" class="link">postcss</a> to apply the same set of styles
		to multiple components. i put them in my app.postcss
	</p>

	<h2 class="heading">melt-ui</h2>
	<p class="mb-4">
		<a href="https://www.melt-ui.com/" class="link">melt-ui</a> is a headless sveltekit component
		libary i use, since it provides builders rather than pre-built components i can focus on getting
		better at styling the components themselves without having to worry about complexity or
		accessibility <br />
		for example heres a toast from the library
	</p>

	<button class="rounded-md bg-purple-800 text-pink-200 px-4 py-2 hover:opacity-75 border border-pink border" on:click={create}>
		click me
	</button>

	<div class="flex flex-row items-center space-x-2">
		<h2 class="heading mt-2">lucide icons</h2>
		<Smile />
	</div>
	<p class="mb-4">
		<a href="https://github.com/shinokada/svelte-lucide" class="link">svelte-lucide</a> is a svelte implementation
		of the lucide icon library, it has consistently styled icons which fit most of what i build and are
		easily importable which is why i like it
	</p>

	<h2 class="heading">drizzle</h2>
	<p class="mb-4">
		<a href="https://orm.drizzle.team/" class="link">drizzle</a> is an typesafe orm i use for my database (usually <a
			href="https://supabase.com/"
			class="link">supabase</a
		>) <br /> i enjoy it because its a light abstraction on native postgres/sql so its helped me learn
		native sql as well
	</p>

	<h2 class="heading">zod</h2>
	<p class="mb-4">
		<a href="https://zod.dev/" class="link">zod</a> is a typescript validation library i use to check data at runtime<br />
		for example when fetching data from an api, i can use a zod schema to validate the response at runtime <br />
		or use it with superforms to validate form data 
	</p>

	<h2 class="heading">superforms</h2>
	<p class="mb-4">
		<a href="https://superforms.rocks/" class="link">superforms</a> is a sveltekit library i use for handling forms<br />
		for example when creating a form, i can use superforms to manage form state, handle validation, and handle form submission <br />
		it integrates well with zod, allowing me to use zod schemas for form data validation
	</p>
</section>
