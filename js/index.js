import api from './api'

api()
    getGithubProfile()
        .then(response => console.log(response.json()))
        .catch(e => console.error('Failed while fetching github user profile'))
        .then(response => console.log('response', response))