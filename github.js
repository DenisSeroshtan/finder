class Github {
  constructor() {
    this.client_id = "ff28f1eefd7e764ab328";
    this.client_secret = "f8617f02822daba4107e5c922b095dadae99b83e";
  }
 
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?clien_id=${this.client_id}&client_secret=${this.client_secret}`)

    const profile = await profileResponse.json();

    return {
       profile
    }
  }
}