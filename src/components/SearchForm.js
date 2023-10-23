import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export const SearchForm = () => {
  return (
    <Stack>
      <Stack direction="horizontal" className="justify-content-center">
        <Button variant="primary">Organisation</Button>
        <Button variant="primary">Username</Button>
      </Stack>

      <Form>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter organisation" />
          <Form.Text className="text-danger">
            Please enter a valid search organisation.
          </Form.Text>
        </Form.Group>
        <Button variant="success" type="submit">
          Explore
        </Button>
      </Form>
    </Stack>
  );
};
