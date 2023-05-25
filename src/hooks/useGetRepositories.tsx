import { useQuery } from '@tanstack/react-query';
import {GithubRepo} from "../types/githubRepo.ts";

interface ResponseData {
  headers: string | null,
  data: GithubRepo[]
}

export const useGetUserRepositories = (username: string | undefined, perPage: number) => {
  const tkn = import.meta.env.VITE_GITHUB_TOKEN
  const fetchRepositories = async (): Promise<ResponseData> => {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=${perPage}`, {
      method: 'GET',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'Authorization': `Bearer ${tkn}`
      }
    });
    const data = await response.json()
    const link = response.headers.get('link')
    return {
      headers: link,
      data: data
    }

  };

  return useQuery<ResponseData, Error>(
      {
        queryKey: ['Repos', username],
        queryFn: fetchRepositories,
        staleTime: 1000 * 60, // do not automatically refetch for at least 1 minute
        cacheTime: 1000 * 60 * 2 // cache responses for 2 minutes
      })
};