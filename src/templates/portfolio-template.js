import React from 'react';
import Layout from '../components/layout';
import { graphql } from 'gatsby';
import styled from 'styled-components';

const PortfolioTemplate = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;

  return (
    <Layout title={frontmatter.title}>
      <PortfolioWrapper>

        <PortfolioCopy dangerouslySetInnerHTML={{ __html: html }} />
      </PortfolioWrapper>
    </Layout>
  );
};

export default PortfolioTemplate;

const PortfolioWrapper = styled.div`
  padding-top: var(--size-900);
  padding-bottom: var(--size-900);
  margin-left: auto;
  margin-right: auto;
  max-width: 70ch;
  word-wrap: break-word;
`;

const PortfolioCopy = styled.div`
  & > * + * {
    margin-top: var(--size-300);
  }

  & > p + p {
    margin-top: var(--size-700);
  }

  * + h1,
  * + h2,
  * + h3 {
    margin-top: var(--size-900);
  }

  h1 {
    font-size: var(--size-700);
  }

  h2 {
    font-size: var(--size-600);
  }

  h3 {
    font-size: var(--size-500);
  }

  b,
  strong {
    font-weight: 600;
  }

  a {
    color: inherit;
    text-decoration: underline;
    text-decoration-thickness: 0.125rem;
  }

  blockquote {
    padding-left: var(--size-400);
    border-left: 5px solid;
    font-style: italic;
  }

  code {
    font-family: 'Source Sans Pro', monospace;
    overflow-x: auto;
    white-space: pre-wrap;
  }

  pre {
    overflow-x: auto;
    white-space: pre-wrap;
    max-width: 100%;
  }
  
  span {
    width: 100px !important;
  }

  img {
    box-shadow: none !important;
  }
`;

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
