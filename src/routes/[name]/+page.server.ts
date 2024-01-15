import { PUBLIC_GITHUB_API_URL } from '$env/static/public'
import { octokit } from '$lib/server/octokit'
import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ params: { name } }) => {
	const [repo, language, readme] = await Promise.all([
		loadRepo(name),
		loadLanguage(name),
		loadReadme(name)
	])

	return { repo, readme, language }
}

const loadRepo = (name: string) =>
	octokit.rest.repos.get({ owner: 'julianolorenzato', repo: name }).then(res => res.data)

const loadLanguage = (name: string) =>
	octokit.rest.repos
		.listLanguages({
			owner: 'julianolorenzato',
			repo: name
		})
		.then(res => res.data)

const loadReadme = (name: string) =>
	octokit.rest.repos
		.getReadme({
			owner: 'julianolorenzato',
			repo: name,
			mediaType: {
				format: 'html'
			}
		})
		.then(res => res.data)
