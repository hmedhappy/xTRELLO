import React from 'react';
import RecentlyViewed from './RecentlyViewed';
import NewTasks from './NewTasks';
import ProcessTask from './ProcessTask';
import CompletedTask from './CompletedTask';

import './styles/dashboard.css';
export default function index() {
  return (
    <>
      <div className='mainTab'>
        <RecentlyViewed />
        <NewTasks />
        <ProcessTask />
        <CompletedTask />
      </div>
    </>
  );
}
