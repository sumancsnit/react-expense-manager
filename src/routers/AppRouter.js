import React, {Fragment} from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboard'
import EditExpensePage from '../components/EditExpensePage'
import AddExpensePage from '../components/AddExpensePage'
import HelpPage from '../components/HelpPage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'



const AppRouter = () => (
    <BrowserRouter>
        <Fragment> 
            <Header />
        <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact />
        <Route path="/create" component={AddExpensePage}/>
        <Route path='/edit/:id' component={EditExpensePage}/>
        <Route path='/HelpPage' component={HelpPage}/>
        <Route component={NotFoundPage}/>
        </Switch>
        </Fragment>
    </BrowserRouter>
);

export default AppRouter;