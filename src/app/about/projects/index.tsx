import React from 'react';
import FadeInSection from '~/components/fade-in-section';
import Text from '~/components/text';

export const Projects = () => {
  return (
    <section id="tech-stack" className="py-24">
      <FadeInSection>
        <h2 className="text-2xl sm:text-3xl font-medium">Projects</h2>
        <Text>Here&apos; some of my projects.</Text>
      </FadeInSection>
    </section>
  );
};
