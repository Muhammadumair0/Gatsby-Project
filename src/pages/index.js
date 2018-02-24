/* global graphql */

import React from 'react';
import Features from '../components/features';
import HowTo from '../components/how-to';
import Link from 'gatsby-link';

const IndexPage = props =>
  (
 <div style={{
    color:"black"
}}>
    <h1>Hi people</h1>
    <p>Welcome to your Grocier Star.</p>
    <p>Build something great.</p>
    <Link to="/next/" style={{
      textDecoration:"none",
      textColor:"orage"
      ,
    }}>Route to next page</Link>
  </div>
  );

export default IndexPage;

export const pageQuery = graphql`
  query IndexQuery {
    allDataJson {
      edges {
        node {
          features {
            title
          }
          howTo {
            title
          }
        }
      }
    }
  }
`;
