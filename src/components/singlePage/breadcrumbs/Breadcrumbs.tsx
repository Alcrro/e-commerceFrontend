import React from 'react';
import style from './breadcrumbs.module.scss';
import BreadCrumbsUI from '@/components/ui/breadcrumbs/BreadCrumbsUI';
const Breadcrumbs = () => {
  return (
    <section className={style.section_breadcrumbs}>
      <BreadCrumbsUI />
    </section>
  );
};

export default Breadcrumbs;
