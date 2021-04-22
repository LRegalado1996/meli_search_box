import React from 'react';
import './Breadcrumbs.scss';
import { useSelector } from 'react-redux';

const Breadcrumbs = () => {
    const categoryId = useSelector(store => store.setCategoryId.categoryId);

  return (
    <div className="Breadcrumbs">
        { categoryId }
    </div>
  );
}
export { Breadcrumbs };