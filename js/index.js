const getGithubProfile = () =>
    fetch('https://api.github.com/users/nattapong')

    getGithubProfile()
        .then(response => console.log(response.json()))
        .catch(e => console.error('Failed while fetching github user profile'))