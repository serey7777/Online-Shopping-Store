
// AppRoutes.js - Fixed routing structure
import { Routes, Route } from "react-router-dom";
import AdminRoutes from "./AdminRoutes";
import CustomerRoutes from "./CustomerRoutes";
import PublicRoute from "./PublicRoute"; // New component for public routes

import Dashboard from "../admin/Dashboard";
import Users from "../admin/Users";
import ProductsAdmin from "../admin/Products";

import Home from "../customer/Home";
import Shop from "../customer/Shop";
import Cart from "../customer/Cart";

import Login from "../components/Login";
import Register from "../components/Register";

const AppRoutes = () => (
    <Routes>
        {/* Public routes */}
        <Route element={<PublicRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Route>

        {/* Admin routes */}
        <Route element={<AdminRoutes />}>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/products" element={<ProductsAdmin />} />
        </Route>

        {/* Customer routes */}
        <Route element={<CustomerRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
        </Route>
    </Routes>
);

export default AppRoutes;