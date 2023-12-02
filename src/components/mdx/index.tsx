import React from 'react';
import { MDXRemote } from 'next-mdx-remote/rsc';

import * as Code from './code';
import * as Heading from './heading';
import * as Typography from './typography';
import * as Lists from './lists';
import ExternalLink from '../external-link';
import type { MDXComponents } from 'mdx/types';

const components: MDXComponents = {
  h1: Heading.H1,
  h2: Heading.H2,
  h3: Heading.H3,
  h4: Heading.H4,
  h5: Heading.H5,
  h6: Heading.H6,
  samp: Code.InlineCode,
  code: Code.Block,
  p: Typography.Paragraph,
  em: Typography.Emphasis,
  strong: Typography.Strong,
  del: Typography.StrikeThrough,
  hr: Typography.ThematicBreak,
  ul: Lists.UnorderedList,
  ol: Lists.OrderedList,
  a: ExternalLink,
};

const RenderMDX: React.FC<{
  source: string;
}> = ({ source }) => {
  return (
    <div className="leading-tight font-light text-base">
      <MDXRemote
        components={components}
        source={source}
        options={{
          parseFrontmatter: true,
        }}
      />
    </div>
  );
};

export default RenderMDX;
