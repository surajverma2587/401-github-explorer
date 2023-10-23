import Stack from "react-bootstrap/Stack";
import { Repo } from "./Repo";

export const Repos = () => {
  return (
    <Stack direction="horizontal" gap={3} className="justify-content-evenly">
      <Repo />
      <Repo />
      <Repo />
      <Repo />
      <Repo />
    </Stack>
  );
};
