import React from 'react';
import style from './suggestionTitle.module.scss';
const SuggestionTitle = ({ description }: { description: string }) => {
  return <div className={style.title}>{description}</div>;
};

export default SuggestionTitle;
