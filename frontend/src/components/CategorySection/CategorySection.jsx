import React from 'react';
import './CategorySection.css';
import { assets , categories } from '../../assets/assets';

const CategorySection = ({category}) => {
  return (
    <div className="category-section">
      {categories.map((category) => (
        <div className="category-item" data-category-id={category.id} key={category.id}>
            <div className="content">
                <div className="heading">
                    <p className='submain'>{category.firp}</p>
                    <p className='main'>{category.secp}</p>
                </div>
                <p className='para'>{category.thirp}</p>
            </div>
          <div className="category-image-wrapper">
            <img src={category.imageUrl} alt={category.title} className="category-image" />
            <h3 className="category-title">{category.title}</h3>
            <button className="category-button"><p>Learn More</p></button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategorySection;
