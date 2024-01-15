import type { PageServerLoad } from './$types'
import { octokit } from '$lib/server/octokit'

export const load: PageServerLoad = async () => {
	const repos = await octokit.rest.repos
		.listForUser({
			username: 'julianolorenzato',
			per_page: 100,
			sort: 'pushed'
		})
		.then(res => res.data)

	return { repos: repos.filter(repo => repo.topics?.includes('project')) }
}
