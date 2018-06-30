class Github {
  constructor() {
    this.client_id = "ff28f1eefd7e764ab328";
    this.client_secret = "f8617f02822daba4107e5c922b095dadae99b83e";
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }
 
  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?clien_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&clien_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();

    const repos = await repoResponse.json();

    return {
       profile,
       repos
    }
  }
}