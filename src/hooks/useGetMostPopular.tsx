import {useQuery} from '@tanstack/react-query';

export const useGetPopularRepositories = (language: string) => {
  const tkn = import.meta.env.VITE_GITHUB_TOKEN
  const fetchRepositories = async (): Promise<GithubPopularRepos[]> => {
    const response = await fetch(
        `https://api.github.com/search/repositories?q=${language}&sort=stars&order=desc&per_page=5`, {
      method: 'GET',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'Authorization': `Bearer ${tkn}`
      }
    });
    const data = await response.json()
    return data?.items;
  };

  return useQuery<GithubPopularRepos[], Error>(
      {
        queryKey: ['PopularRepos', language],
        queryFn: fetchRepositories,
        staleTime: 1000 * 60, // do not automatically refetch for at least 1 minute
        cacheTime: 1000 * 60 * 2 // cache responses for 2 minutes
      })
};