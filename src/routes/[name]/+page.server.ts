import { octokit } from '$lib/server/octokit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params: { name } }) => {
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
