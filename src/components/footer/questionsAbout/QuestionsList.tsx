'use client';
import React, { useState } from 'react';
import style from './questionsList.module.scss';
import Link from 'next/link';
import generateLinkFromText from '@/utils/generLinkFromText';

interface QuestionItem {
  title: string;
  content?: string;
  options?: string[];
}

interface QuestionsListProps {
  items: QuestionItem[];
  used: boolean;
}

const QuestionsList: React.FC<QuestionsListProps> = ({ items, used }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleActive = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`${style.list_container} ${used ? style.isUsed : ''}`}>
      <div className={style.list_inner}>
        <ul className={style.list_inner_ul}>
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <li key={index}>
                <h3
                  className={isActive ? style.isActive : ''}
                  onClick={() => toggleActive(index)}
                >
                  <Link
                    href={
                      !isActive
                        ? `#${generateLinkFromText(item.title.toLowerCase())}`
                        : '#'
                    }
                    scroll={false}
                  >
                    {item.title}
                  </Link>
                </h3>
                {item.content ? (
                  <div className={isActive ? style.active : style.hidden}>
                    <p>{item.content}</p>
                  </div>
                ) : (
                  Array.isArray(item.options) &&
                  item.options.length > 0 && (
                    <ul className={style.list_options}>
                      {item.options.map((option, optIndex) => (
                        <li
                          key={optIndex}
                          className={isActive ? style.active : style.hidden}
                        >
                          <Link
                            href={`/help/${generateLinkFromText(option.toLocaleLowerCase())}`}
                            className="block w-full"
                          >
                            {option}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default QuestionsList;
