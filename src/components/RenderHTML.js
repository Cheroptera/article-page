import React from 'react';

// Although I've read that it can be risky to use dangerouslySetInnerHTML
// due to potential security risks, I didn't find any other way to render
// the HTML tags provided in the body of the API. I created a variable to shorten
// the amount of code in the components I use them in.

const RenderHTML = ({ html }) => {
  return <p dangerouslySetInnerHTML={{ __html: html }} />;
};

export default RenderHTML;
