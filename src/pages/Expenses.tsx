import React from 'react'
import Sidebar from '../components/SIdebar'
import ExpensesDashboard from '../components/ExpensesDashboard'

const Expenses = () => {
    return (
        <div className='bg-[#1B1B1B] min-h-screen flex'>
            <Sidebar/>
            <ExpensesDashboard/>
        </div>
    )
}

export default Expenses