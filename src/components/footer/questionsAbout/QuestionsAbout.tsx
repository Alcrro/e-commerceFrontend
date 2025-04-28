import React from 'react';
import QuestionsList from './QuestionsList';
import ContainerLayout from '@/components/layouts/mainLayout/ContainerLayout';
import style from './questionAbout.module.scss';
import { IQuestionList, questionsList } from '@/constants/footer/questionsList';
const QuestionsAbout = () => {
  const transformedData = questionsList.map((item: IQuestionList) => ({
    title: item.title,
    content: item.message,
  }));
  return (
    <ContainerLayout>
      <div className={style.question_about_container}>
        <QuestionsList items={transformedData} used={false} />
      </div>
    </ContainerLayout>
  );
};

export default QuestionsAbout;
