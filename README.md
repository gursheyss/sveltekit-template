# sveltekit template

hi, this is my stack i use to build my sveltekit apps, this will probably change as time goes on but i find this stack consistent and covers pretty much anything i want to build for now

## file structure

before reading on, please look through the file structure of this repo. most files have comments to explain what each file is for  
- as a general guideline, all files are under their related folder in `$lib` (components in components, database stuff in server, stores in stores, types in types)  
- for the routes, all client-facing pages should go under `(app)` and `(landingpage)` with auth being under `(auth)`, layout groups are used so we can have different `+layout` files for different routes  
- site-wide code is all in our main `+layout` files

## packages

tailwind css + postcss
- [tailwind](https://tailwindcss.com/) is a css framework i use as i find
inline styles a lot easier to work with  
- for any global/new styles, like a color scheme i want to use, i put them in my tailwind.config.cjs  
- i use [postcss](https://postcss.org/) to apply the same set of styles to multiple components. i put them in my app.postcss

### melt-ui

- [melt-ui](https://www.melt-ui.com/) is a headless sveltekit component
library i use, since it provides builders rather than pre-built components i can focus on getting
better at styling the components themselves without having to worry about complexity or
accessibility

### lucide icons

- [svelte-lucide](https://github.com/shinokada/svelte-lucide) is a svelte implementation
of the lucide icon library, it has consistently styled icons which fit most of what i build and are
easily importable which is why i like it

### drizzle

- [drizzle](https://orm.drizzle.team/) is an typesafe orm i use for my database (usually [supabase](https://supabase.com/))  
- i enjoy it because its a light abstraction on native postgres/sql so its helped me learn
native sql as well

### zod

- [zod](https://zod.dev/) is a typescript validation library i use to check data at runtime  
- for example when fetching data from an api, i can use a zod schema to validate the response at runtime  
or use it with superforms to validate form data 

### superforms

- [superforms](https://superforms.rocks/) is a sveltekit library i use for handling forms  
- for example when creating a form, i can use superforms to manage form state, handle validation, and handle form submission  
- it integrates well with zod, allowing me to use zod schemas for form data validation
