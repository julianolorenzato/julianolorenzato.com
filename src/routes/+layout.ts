import type { LayoutLoad } from './$types'
import { octokit } from '$lib/octokit'

export const load: LayoutLoad = async () => {
	const repos = await octokit.rest.repos
		.listForUser({
			username: 'julianolorenzato',
			per_page: 50,
			sort: 'pushed'
		})
		.then(res => res.data)

	return { repos: repos.filter(repo => repo.topics?.includes('project')) }
}

export const prerender = true
