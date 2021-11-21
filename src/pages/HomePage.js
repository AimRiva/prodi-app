import React from 'react'
import Header from '../components/employee/Header';
import SearchBar from '../components/employee/SearchBar';
import EmployeeList from '../components/employee/EmployeeList';
import Clock from '../components/Clock';


const HomePage = () => {
    return (
        <div>
            <Header title="Employee Direcctory" />
            <Clock />
            <SearchBar />
            <EmployeeList />

        </div>
    )
};

export default HomePage;
