import { Form, Button, Container } from "react-bootstrap";
import "./Sign.css";
import { SIGN_UP } from "../../router";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  return (
    <div className="Bungkusan">
      <div className="Konten-Kartu ms-auto ">
        <div className="Kartu m-5">
          <h1>Sign In</h1>
          <Form>
            <Container>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Container>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted"></Form.Text>
                </Container>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button className="tombol" type="submit">
                Sign In
              </Button>
              <Button
                className="tombol"
                onClick={() => navigate(SIGN_UP)}
                type="submit"
              >
                Sign Up
              </Button>
            </Container>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
