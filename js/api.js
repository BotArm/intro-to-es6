const getGithubProfile = () =>
    fetch('https://api.github.com/users/nattapong')

export default getGithubProfile