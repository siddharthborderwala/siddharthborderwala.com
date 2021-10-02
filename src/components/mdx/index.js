import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import * as Code from './code';
import * as Heading from './heading';
import * as Typography from './typography';
import * as Lists from './lists';

const components = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  inlineCode: Code.InlineCode,
  code: Code.Block,
  p: Typography.Paragraph,
  em: Typography.Emphasis,
  strong: Typography.Strong,
  del: Typography.StrikeThrough,
  hr: Typography.ThematicBreak,
  ul: Lists.UnorderedList,
  ol: Lists.OrderedList,
};

const RenderMDX = ({ children }) => {
  return (
    <MDXProvider components={components}>
      <MDXRenderer>{children}</MDXRenderer>
    </MDXProvider>
  );
};

export default RenderMDX;
