export default {
	tags: [
		"posts"
	],
	layout: "layouts/post.njk",

	eleventyComputed: {
		permalink: data => {
			// Only set permalink for Markdown files (optional, but safer)
			if (!data.title || !data.page || !data.page.date) return false;
			const date = data.page.date;
			const yyyy = date.getFullYear();
			const mm = String(date.getMonth() + 1).padStart(2, '0');
			// Use dashes for DF style, or change to '_' if you want underscores
			const slug = (data.title || '').toLowerCase().replace(/[^\w]+/g, '-').replace(/(^-|-$)/g, '');
			return `/${yyyy}/${mm}/${slug}/`;
		}
	}
};