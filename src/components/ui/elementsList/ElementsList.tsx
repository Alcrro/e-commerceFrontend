import React, { ReactNode } from 'react';
import style from './elementsList.module.scss';
interface ElementsListProps<T> {
  elements: readonly T[];
  renderItem: (item: T) => ReactNode;
}
const ElementsList = <T,>({ elements, renderItem }: ElementsListProps<T>) => {
  if (!elements) return null;
  return (
    <ul className={style.elements_ul}>
      {elements.map((item, index) => (
        <li key={(item as any).id || index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};

export default ElementsList;
