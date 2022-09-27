import React, {useContext} from 'react';
import {Routes ,Route, Navigate} from 'react-router-dom';
//import {authRoutes, publicRoutes} from "../routes";
import {ADMIN_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE} from "../utils/const";
import Admin from "../pages/Admin";
import Shop from "../pages/Shop";
import Auth from "../pages/Auth";
import ProductPage from "../pages/ProductPage";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context);
    return (
        <Routes>

            {user.isAuth && <Route path={ADMIN_ROUTE} element={<Admin/>}/>}

            <Route path={MAIN_ROUTE} element={<Shop/>}/>
            <Route path={LOGIN_ROUTE} element={<Auth/>}/>
            <Route path={REGISTRATION_ROUTE} element={<Auth/>}/>
            <Route path={PRODUCT_ROUTE + '/:id'} element={<ProductPage/>}/>
            <Route path="*" element={<Navigate to ={MAIN_ROUTE} />}/>
        </Routes>
    );
};

export default AppRouter;