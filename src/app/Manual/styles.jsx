import styled, { css } from "styled-components";

const Container = styled.div`
  width: 50vw;
  margin: 50px auto;
  border-radius: 20px;
  border: 1px solid #707070;
  padding: 20px;
`;

const ErrorContainer = styled.div`
  background-color: pink;
  padding: 20px;
  border-radius: 20px;
  opacity: 0;
  transition: opacity 1s ease-in;
  &.Active {
    opacity: 1;
  }
`;

const FlowLabel = styled.h2`
  font-weight: bold;
  text-align: center;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const PasswordInputContainer = styled.form`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const TextLabel = styled.h3`
  font-weight: bold;
  margin-right: 20px;
`;

const TextInput = css`
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 10px;
  width: 300px;
`;

const EmailInput = styled.input.attrs({ type: "text" })`
  ${TextInput}
`;

const PasswordInput = styled.input.attrs({ type: "password" })`
  ${TextInput}
`;

const ConfirmButton = styled.button.attrs({ type: "button" })`
  min-width: 140px;
  padding: 5px 10px;
  background-color: lightblue;
`;

const NextForm = styled.div`
  border-bottom: 1px solid #707070;
  width: 60px;
  margin-bottom: 20px;
`;

export {
  Container,
  ErrorContainer,
  FlowLabel,
  InputContainer,
  PasswordInputContainer,
  TextLabel,
  TextInput,
  EmailInput,
  PasswordInput,
  ConfirmButton,
  NextForm
};
