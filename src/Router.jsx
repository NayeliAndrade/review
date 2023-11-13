import { Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import HomePage from './components/homePage/HomePage';
import AddStuff from './components/addStuff/AddStuff';
import EditStuff from './components/editStuff/EditStuff';
import Register from './components/register/Register';
import Profile from './components/profile/Profile';
import PrivateRoute from './routes/PrivateRoute';
import Login from "./components/login/Login"
import Dashboard from './components/dashboard/Dashboard';
import Root from "./routes/Root"
import Review from './components/review/Review';

function Router() {

    return (
        <Routes>
            <Route element={<Root />} >
                <Route index element={<HomePage />} />
                <Route path='*' element={<ErrorPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/addStuff" element={<PrivateRoute><AddStuff /> </PrivateRoute>} />
                <Route path="/editStuff/:id" element={<PrivateRoute> <EditStuff /> </PrivateRoute>} />
                <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                <Route path='/review/:id' element={<PrivateRoute><Review /></PrivateRoute>} />
            </Route>
        </Routes>
    );
}

export default Router;