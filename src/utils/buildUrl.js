export const buildUrl = (searchTerm, searchType) => {
  if (searchType === "organisation") {
    return `https://api.github.com/orgs/${searchTerm}/repos`;
  }

  if (searchType === "username") {
    return `https://api.github.com/users/${searchTerm}/repos`;
  }

  return "";
};
