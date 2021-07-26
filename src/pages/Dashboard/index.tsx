import React from 'react'
import RecentlyViewed from './RecentlyViewed'
import NewTasks from './NewTasks'
import ProcessTask from './ProcessTask'
import CompletedTask from './CompletedTask'

import './dashboard.css'
export default function index() {
    return (
        <>
        <RecentlyViewed/>
        <NewTasks/>
        <ProcessTask/>
        <CompletedTask/>
        </>
    )
}
