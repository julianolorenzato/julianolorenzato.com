import type { LayoutServerLoad } from './$types'
import { octokit } from '$lib/server/octokit'

export const load: LayoutServerLoad = async () => {
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
