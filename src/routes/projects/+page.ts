import { PUBLIC_GITHUB_API_URL } from '$env/static/public'
import type { PageLoad } from './$types'
import axios from 'axios'

export const load: PageLoad = async () => {
	const repos = await axios
		.get('/users/julianolorenzato/repos', {
			baseURL: PUBLIC_GITHUB_API_URL,
			params: {
				sort: 'pushed'
			}
		})
		.then(res => res.data)

	return { repos: repos.filter((repo: any) => true) }
}
