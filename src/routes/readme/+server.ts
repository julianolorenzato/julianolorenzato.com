import { octokit } from '$lib/server/octokit'
import { error, json, text } from '@sveltejs/kit'
import type { RequestHandler } from './$types'

export const GET: RequestHandler = async ({ url: { searchParams } }) => {
	const name = searchParams.get('name')

	if (!name) {
		error(400, 'Need')
	}

	const readme = await octokit.rest.repos
		.getReadme({
			owner: 'julianolorenzato',
			repo: name as string,
			mediaType: {
				format: 'html'
			}
		})
		.then(res => res.data)

	return json(readme)
}
