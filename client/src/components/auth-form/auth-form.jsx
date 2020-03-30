import React from 'react';
import styles from './auth-form.module.css';

import { Container, Row, Col } from 'react-bootstrap';

const AuthForm = ({
  state,
  setState,
  submit,
  error,
  isInvalid,
  fieldsMap,
  type,
}) => {
  const onChange = e => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    submit();
  };
  return (
    <div className={styles.registerWrapper}>
      <Container>
        <Row>
          <Col>
            <form>
              <label className={styles.labelLogin}>{type}</label>
              <div className="form-group">
                {fieldsMap.map(
                  ({ title, name, value, type }, key) => (
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
                  ),
                )}
              </div>
              <button
                onClick={onSubmit}
                type="button"
                className={styles.submitButton}
                disabled={isInvalid}
              >
                {type}
              </button>
              <p>{error}</p>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default AuthForm;
