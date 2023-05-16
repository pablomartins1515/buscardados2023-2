import React, { ReactNode } from 'react';
import ReactHtmlParser from 'react-html-parser';

interface BlogTextComponentProps {
  html: string ;
}

const BlogTextComponent: React.FC<BlogTextComponentProps> = ({ html }) => {
  return <div>{html !== null && html !== undefined ? ReactHtmlParser(html) : null}</div>;
};

export default BlogTextComponent;
