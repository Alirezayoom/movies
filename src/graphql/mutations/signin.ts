import { gql } from "@apollo/client";

export const SIGNIN_MUTATION = gql`
  mutation Signin($email: String!, $password: String!) {
    signin(email: $email, password: $password)
  }
`;
