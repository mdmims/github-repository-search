import {useQuery} from '@tanstack/react-query';
import {GithubUser} from "../types/githubUser.ts";

export const useGetUser = (username: string | undefined) => {
  const tkn = import.meta.env.VITE_GITHUB_TOKEN
  const fetchUser = async (): Promise<GithubUser> => {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      method: 'GET',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'Authorization': `Bearer ${tkn}`
      }
    });
    return await response.json()
  };

  return useQuery<GithubUser, Error>(
      ['User', username],
      fetchUser,
      {
        staleTime: 1000 * 60, // do not automatically refetch for at least 1 minute
        cacheTime: 1000 * 60 * 2 // cache responses for 2 minutes
      })
};