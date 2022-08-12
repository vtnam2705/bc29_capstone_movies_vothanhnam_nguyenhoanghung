import React from 'react'
import { useRoutes } from 'react-router-dom'
import NoAuthGuard from '../guards/no-auth-guard';
import AuthGuard from '../guards/auth-guard';
import HomeLayouts from '../layouts/home';
import Booking from '../pages/booking/booking';
import Home from '../pages/home/home';
import Login from '../pages/Login/login';
import MovieDetails from '../pages/movie-details/movie-details';
import AdminLayout from '../layouts/admin';
import MovieManagement from '../pages/movie-management/movie-management';
import AdminGuard from '../guards/adminGuard';

export default function Router() {
    const routing = useRoutes([
        {
            path: '/',
            element: <HomeLayouts />,
            children: [
                {
                    path: '/',
                    element: <Home />,
                },
                {
                    path: '/movie/:movieId',
                    element: <MovieDetails />
                },
                {
                    path: '/',
                    element: <AuthGuard />,
                    children: [
                        {
                            path: '/booking/:maLichChieu',
                            element: <Booking />
                        }
                    ]
                },
                {
                    path: '/',
                    element: <NoAuthGuard />,
                    children: [
                        {
                            path: '/login',
                            element: <Login />
                        }
                    ]
                }
            ]
        },

        {
            path: '/admin',
            element: <AdminLayout />,
            children: [
                {
                    path: '/admin/',
                    element: <AdminGuard />,
                    children: [
                        {
                            path: '/admin/movie-management',
                            element: <MovieManagement />
                        }
                    ]
                }
            ]
        }


    ]);


    return routing;
}
