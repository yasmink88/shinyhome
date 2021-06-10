import React from "react";
import { PageTitleContainer } from "./PageTitle.style";
import { PageTitleH2 } from "./PageTitle.style";
import { PageSubtitleStyle } from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleH2>{props.title}</PageTitleH2>
      <PageSubtitleStyle>{props.subtitle}</PageSubtitleStyle>
    </PageTitleContainer>
  );
};

export default PageTitle;
