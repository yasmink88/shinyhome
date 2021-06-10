import React from "react";
import { SafeEnvironmentContainer } from "./SafeEnvironment.style";
import { Container } from "@material-ui/core";

const SafeEnvironment = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Safe Environment <i className={"twf-lock"} />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
