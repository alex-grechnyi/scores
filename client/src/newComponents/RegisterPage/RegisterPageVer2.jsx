import React from 'react';
import styles from './registerVer2.module.css';

import { Container, Row, Col } from 'react-bootstrap';

const RegisterPageVer2 = ({
  login,
  password,
  confirmPassword,
  userName,
  onChange,
  onSubmit,
  error,
  isInvalid,
}) => {

  const formFields = [
    {
      title: 'Login',
      name: 'login',
      value: login,
      type: 'text',
    },
    {
      title: 'Full Name',
      name: 'userName',
      value: userName,
      type: 'text',
    },
    {
      title: 'Password',
      name: 'password',
      value: password,
      type: 'password',
    },
    {
      title: 'Confirm password',
      name: 'passwordConfirmation',
      value: confirmPassword,
      type: 'password',
    },
  ];

  return (
    <div className={styles.registerWrapper}>
      <Container>
        <Row>
          <Col>
            <form>
              <label className={styles.labelLogin}>Register</label>
              <div className="form-group">
                {formFields.map(({ title, name, value, type }, key) => (
                  <input
                    key={key}
                    name={name}
                    type={type}
                    className={styles.formControl}
                    placeholder={title}
                    id={title}
                    value={value}
                    onChange={onChange}
                  />
                ))}
              </div>
              <button
                onClick={onSubmit}
                type="button"
                className={styles.submitButton}
                disabled={isInvalid}
              >
                Register
              </button>
              <p>{error}</p>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default RegisterPageVer2;
