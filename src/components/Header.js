import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
    <h1>I am header</h1>
    <NavLink to="/"  activeClassName="selected" exact>Home</NavLink>
    <NavLink to="/create"  activeClassName="selected">Create Expense</NavLink>
    <NavLink to="/HelpPage"  activeClassName="selected">Help</NavLink>
    </header>
)

export default Header 