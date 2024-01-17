import { Octokit } from 'octokit'
import { dev } from '$app/environment'
import { GITHUB_PERSONAL_ACCESS_TOKEN } from '$env/static/private'

export const octokit = new Octokit({
	auth: dev ? undefined : GITHUB_PERSONAL_ACCESS_TOKEN
})
