import React from 'react';
import HelpList from './helpList/HelpList';
import QuestionsAbout from './questionsAbout/QuestionsAbout';

const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <section>
        <QuestionsAbout />
      </section>
      <section>
        <HelpList />
      </section>
    </footer>
  );
};

export default Footer;
