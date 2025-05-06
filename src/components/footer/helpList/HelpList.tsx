import React from 'react';
import style from './helpList.module.scss';
import {
  helpListData,
  IHelpListData,
} from '@/constants/footer/helpList/helpList';
import QuestionsList from '../questionsAbout/QuestionsList';

const HelpList = () => {
  const transformedData = helpListData.map((item: IHelpListData) => ({
    title: item.title,
    options: item.options || [], // Ensure options is always an array
  }));
  return (
    <div className={style.help_list_container}>
      <QuestionsList items={transformedData} used={true} />
    </div>
  );
};

export default HelpList;
