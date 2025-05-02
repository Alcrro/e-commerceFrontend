'use client';
import React, { useEffect, useState } from 'react';
import ElementsList from '../ui/elementsList/ElementsList';
import {
  IMainDepartments,
  mainDepartment,
  mainSubDepartment,
} from '@/constants/mainDepartmentMenu';
import style from './auxProductsMainDepartmentList.module.scss';
import AuxMainDepartmentLink from './mainDepartmentLink/AuxMainDepartmentLink';
import Link from 'next/link';
import CarouselAd from '../ads/CarouselAd';
import CarouselAdSkeleton from '../ui/skeleton/carouselAdSkeleton/CarouselAdSkeleton';

const AuxProductsMainDepartmentList = ({ active }: { active?: boolean }) => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [showAd, setShowAd] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (active) {
      timeout = setTimeout(() => setShowAd(true), 100);
    } else {
      setShowAd(false);
    }
  }, [active]);
  const handleHover = (link: string) => {
    setHoveredLink(link);
  };

  const handleLeave = () => {
    setHoveredLink(null);
  };

  // Filter mainSubDepartment based on hovered link
  const filteredSubDepartments = mainSubDepartment.find(
    (dept) => dept.title === hoveredLink
  );

  return (
    <div
      className={`${style.elements_list} ${active ? style.active : ''}`}
      onMouseLeave={handleLeave} // Reset hover state when leaving the whole component
    >
      <ElementsList<IMainDepartments>
        elements={mainDepartment}
        renderItem={(item: IMainDepartments) => (
          <AuxMainDepartmentLink
            item={item}
            active={active}
            key={item.id}
            onHover={handleHover}
          />
        )}
      />

      <div
        className={`${style.subDepartmentList_container} ${hoveredLink ? style.subDepActive : style.hidden}`}
        onMouseEnter={() => setHoveredLink(hoveredLink)} // Keep hovered state
        onMouseLeave={handleLeave}
      >
        <ul className={style.subDepartmentList_ul}>
          {filteredSubDepartments?.subDepartmentList.map((item) =>
            item.valuesOptions.map((values) => (
              <li key={values.id}>
                <Link href={`/products/${values.link}`}>{values.label}</Link>
              </li>
            ))
          )}
        </ul>
      </div>

      {active && showAd ? <CarouselAd /> : <CarouselAdSkeleton />}
    </div>
  );
};

export default AuxProductsMainDepartmentList;
