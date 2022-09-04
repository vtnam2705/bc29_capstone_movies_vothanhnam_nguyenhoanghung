import React, { lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import CartDetail from '../modules/cart/cart';
import Register from '../modules/register/register';
import Schedule from '../modules/Schedule/schedule';
import CreateUserPage from '../pages/create-user/create-user';
import PageNotFound from '../pages/PageNotFound/PageNotFound';
import UpdateMovie from '../pages/update-movie/update-movie';
import UserManagementPage from '../pages/user-management/user-management';
const NoAuthGuard = lazy(() => import('../guards/no-auth-guard'));
const AuthGuard = lazy(() => import('../guards/auth-guard'));
const HomeLayouts = lazy(() => import('../layouts/home'));
const Booking = lazy(() => import('../pages/booking/booking'));
const Home = lazy(() => import('../pages/home/home'));
const Login = lazy(() => import('../pages/Login/login'));
const MovieDetails = lazy(() => import('../pages/movie-details/movie-details'));
const AdminLayout = lazy(() => import('../layouts/admin'));
const MovieManagement = lazy(() => import('../pages/movie-management/movie-management'));
const AdminGuard = lazy(() => import('../guards/adminGuard'));
const CreateMovie = lazy(() => import('../pages/create-movie/create-movie'))

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
                },
                {
                    path: '/register',
                    element: <Register/>
                },
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
                            element: <MovieManagement />,
                        },
                        {
                            path: '/admin/movie-management/create',
                            element: <CreateMovie/>
                        },
                        {
                            path: '/admin/movie-management/update/:movieId',
                            element: <UpdateMovie/>
                        },
                        {
                            path: '/admin/movie-management/showtime/:movieId',
                            element: <Schedule/>
                        },
                        {
                            path: '/admin/user-management',
                            element: <UserManagementPage/>
                        },
                        {
                            path: '/admin/user-management/create',
                            element: <CreateUserPage/>
                        }
                    ]
                }
            ]
        },

        {
            path: '*',
            element: <PageNotFound/>
        }
    ]);


    return routing;
}
