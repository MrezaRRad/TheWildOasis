/* eslint react/prop-types: 0 */

import styled from "styled-components";

const ErrorContainer = styled.div`
  color: red;
`;

function Error({ children }) {
  return <ErrorContainer>{children}</ErrorContainer>;
}

export default Error;
