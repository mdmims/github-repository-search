export const validateGithubUsername = (user: string): boolean => {
  const validRegex = /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i;
  return validRegex.test(user);
}