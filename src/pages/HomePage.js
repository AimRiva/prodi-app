import React from 'react'
import Header from '../components/employee/Header';
import SearchBar from '../components/employee/SearchBar';
import EmployeeList from '../components/employee/EmployeeList';


const HomePage = () => {
    return (
        <div>
            <Header title="Employee Direcctory" />
            <SearchBar />
            <EmployeeList />

        </div>
    )
};

export default HomePage;
