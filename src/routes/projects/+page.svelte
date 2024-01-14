<script lang="ts">
    import { env } from '$env/dynamic/public'
    const a = env.PUBLIC_GITHUB_API_URL
</script>

<h1>Here are my projects ${a}</h1>