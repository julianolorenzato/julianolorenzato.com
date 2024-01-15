import { GITHUB_PERSONAL_ACCESS_TOKEN } from '$env/static/private'
import { Octokit } from 'octokit'

export const octokit = new Octokit({
	auth: GITHUB_PERSONAL_ACCESS_TOKEN
})
