export interface EmptyStateProps {
  heading: string;
  description: string;
  testAttributeName?: string;
  buttonText?: string;
  buttonHandler?: (() => void) | undefined;
}

export const InvalidUserEmptyState: EmptyStateProps = {
  heading: 'Invalid Username',
  description: 'Usernames for user accounts on GitHub.com can only contain alphanumeric characters, dashes (-) and be less than 39 characters',
  testAttributeName: 'EmptyStateInvalidUsername',
  buttonText: 'Go Back',
}