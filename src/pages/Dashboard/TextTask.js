import React, { useEffect, useState } from 'react';
import CardAvatar from '../Brackets/CardAvatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

export default function TextTask({data}) {
  const [ramdom] = useState(Math.floor(Math.random() * 6));
  const [ramsomText, setramsomText] = useState('');
  const colorllist = ['#F4F4F4', '#EBFDF5', '#F8E8E83b','#476C5D3b','#87824D3b','#626C853b'];
  useEffect(() => {
    fetch(
      'https://baconipsum.com/api/?type=all-meat&sentences=1&start-with-lorem=1'
    )
      .then((response) => response.json())
      .then((data) => setramsomText(data[0]));
  }, []);
  return (
    <>
      <div
        className='carddd'
        style={{
          backgroundColor: `${
            colorllist[Math.floor(Math.random() * 6)]
          }`,
        }}>
        <div className='card-headerr'>
          <div className='stat-card'></div>
        </div>
        <div className='card-bodyy'>
          <p>
            <b>{data?.title}</b>  
          </p>
          <h6 style={{ minHeight: '62px' }}>
            {data?.contenu || ramsomText}
          </h6>
        </div>
        <div className='card-footerr d-flex justify-content-between align-items-center'>
          <div>
            <AvatarGroup max={4} spacing={'small'}>
              {[...new Array(ramdom)].map((e) => (
                <CardAvatar />
              ))}
            </AvatarGroup>
          </div>
          <div>
            <h6>
              {ramdom} <i class='far fa-eye'></i>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
