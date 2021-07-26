import React from 'react';

export default function SingleCard() {
  return (
    <>
      <div className='product-list-item cardd'>
        <div className='item-info'>
          <img src='./images/thumb-7.jpg' alt='product' />
          <div className='item-name'>
            <div className='product-name'>Jacket</div>
            <div className='text-second'>Cloths</div>
          </div>
        </div>
        <div style={{ flex: '1' }}>
          <p>Saving money can cost you a lot of health</p>
        </div>
        <div className='item-sale-info footer'>
          <div className='text-second'>Sales</div>
          <div className='product-sales'>$5,930</div>
        </div>
      </div>

      <style jsx>
        {`
          .cardd {
            height: 200px;
            width: 400px;
            padding: 9px;
            flex-direction: column;
            display: flex;
            border-radius: 10px;
            background-color: #add8e68c;
          }
        `}
      </style>
    </>
  );
}
