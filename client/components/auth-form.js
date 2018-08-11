import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Card, Button, Form } from 'semantic-ui-react';
import { login } from '../store';

const LogIn = props => {
  const { name, handleSubmit, error } = props;
  return (
    <div>
      <div>
        <img
          id="background-image"
          src="/img/river.jpeg"
          alt="background image"
        />
      </div>
      <Container className="authorization-form">
        <Card className="auth-card">
          <Card.Content>
            <Form onSubmit={handleSubmit} name={name}>
              <Form.Field>
                <label htmlFor="email">Email</label>
                <input name="email" type="text" placeholder="Email" />
              </Form.Field>
              <Form.Field>
                <label htmlFor="password">Password</label>
                <input name="password" type="text" placeholder="Password" />
              </Form.Field>
              <Button
                color="teal"
                content="Log In with Account"
                labelPosition="left"
                icon="user"
                type="submit"
                className="wide-button"
              />
              {error && error.response && <div> {error.response.data} </div>}
            </Form>
            <Button
              as="a"
              href="/auth/google"
              labelPosition="left"
              content="Log In with Google"
              icon="google"
              className="wide-button"
            />
          </Card.Content>
        </Card>
      </Container>
    </div>
  );
};

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Log In',
    error: state.user.error,
  };
};

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(login(email, password));
    },
  };
};

export default connect(mapLogin, mapDispatch)(LogIn);

LogIn.propTypes = {
  name: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
