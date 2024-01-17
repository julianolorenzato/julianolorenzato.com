import { Octokit } from 'octokit'
import { GITHUB_PERSONAL_ACCESS_TOKEN } from '$env/static/private'

export const octokit = new Octokit({
	auth: GITHUB_PERSONAL_ACCESS_TOKEN
})
