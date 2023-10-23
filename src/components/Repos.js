import Stack from "react-bootstrap/Stack";
import { Repo } from "./Repo";

export const Repos = ({ repos }) => {
  return (
    <Stack
      direction="horizontal"
      gap={3}
      className="justify-content-evenly flex-wrap"
    >
      {repos.map((repo) => {
        return <Repo key={repo.id} repo={repo} />;
      })}
    </Stack>
  );
};
