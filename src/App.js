import Container from "react-bootstrap/Container";
import Stack from "react-bootstrap/Stack";

import { Banner } from "./components/Banner";
import { SearchForm } from "./components/SearchForm";
import { Repos } from "./components/Repos";
import { AlertBanner } from "./components/AlertBanner";

export const App = () => {
  return (
    <Container>
      <Stack gap={3}>
        <Banner />
        <SearchForm />
        <Repos />
        <AlertBanner />
      </Stack>
    </Container>
  );
};
