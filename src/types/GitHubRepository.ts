export type GitHubRepository = {
    name: string;
    html_url: string;
    description: string;
    fork: boolean;
    language: string;
}

const ignoreRepositories = new Set<string>(
    [".github", "website", "markdown-test-file", "sunshine", "rssreader", "ShindouMihou", "Lavalink-Client",
        "imageboard-api", "pixivj", "terms-privacy", "wiki", "gateway-system", "learn-git-pph",
        "mana-issues", "Fake-Amelia"]
)

export async function requestRepositoriesRaw() {
    let repositories: GitHubRepository[] = []
    await fetch('https://api.github.com/users/ShindouMihou/repos?sort=created&per_page=100')
        .then(response => response.json())
        .then(data => data as GitHubRepository[])
        .then(data => repositories = repositories.concat(data))
    await fetch('https://api.github.com/users/BellusQuest/repos?sort=created')
        .then(response => response.json())
        .then(data => data as GitHubRepository[])
        .then(data => repositories = repositories.concat(data))
    await fetch('https://api.github.com/users/Qucy-Studios/repos?sort=created')
        .then(response => response.json())
        .then(data => data as GitHubRepository[])
        .then(data => repositories = repositories.concat(data))
    await fetch('https://api.github.com/users/ManaNet/repos?sort=created')
        .then(response => response.json())
        .then(data => data as GitHubRepository[])
        .then(data => repositories = repositories.concat(data))
    await fetch('https://api.github.com/users/Amelia-chan/repos?sort=created')
        .then(response => response.json())
        .then(data => data as GitHubRepository[])
        .then(data => repositories = repositories.concat(data))
    await fetch('https://api.github.com/users/Ketshap/repos?sort=created')
        .then(response => response.json())
        .then(data => data as GitHubRepository[])
        .then(data => repositories = repositories.concat(data))
    return repositories.filter((repo) => !ignoreRepositories.has(repo.name) && !repo.fork)
}
