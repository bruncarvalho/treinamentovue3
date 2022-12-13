export default (httpClient) => ({
  getMe: async () => {
    const response = await httpClient.get('./user/me')

    return {
      data: response.data
    }
  },
  generateApikey: async () => {
    const response = await httpClient.post('/users/me/apikey')

    return {
      data: response.data
    }
  }
})
