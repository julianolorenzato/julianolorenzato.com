import { octokit } from '$lib/octokit'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params: { name } }) => {
	const readme = await octokit.rest.repos
		.getReadme({
			owner: 'julianolorenzato',
			repo: name,
			mediaType: {
				format: 'html'
			}
		})
		.then(res => res.data)

	return { readme }
}
