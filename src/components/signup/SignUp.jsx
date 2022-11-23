import { Form, Button } from "react-bootstrap";
import "./signup.css";
import { Container } from "react-bootstrap";
const SignUp = () => {
  return (
    <div className="Bungkusan">
      <div className="Konten-Kartu">
        <div className="Kartu">
          <h1>Sign Up</h1>
          <Form>
            <Container>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter your username" />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button className="tombol" type="submit">
                Sign Up
              </Button>
            </Container>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
