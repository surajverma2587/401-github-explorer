import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export const Repo = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="https://placehold.co/600x400" />
      <Card.Body>
        <Card.Title>title</Card.Title>
        <Card.Text>description</Card.Text>
        <Button variant="warning">View in GitHub</Button>
      </Card.Body>
    </Card>
  );
};
