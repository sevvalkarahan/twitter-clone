import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Explore from '../pages/explore'
import Natificaitons from '../pages/natifications'
import NotFound from '../pages/notFound'
import Home from '../pages/home'
import MainLayout from '../layouts/main'
import Messages from '../pages/messages'
import Lists from '../pages/lists'
import BookMarks from '../pages/bookmarks'
import Verified from '../pages/verified'
import Profile from '../pages/profile'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "explore",
                element: <Explore />
            },
            {
                path: "natifications",
                element: <Natificaitons />
            },
            {
                path: "messages",
                element: <Messages />
            },
            {
                path: "lists",
                element: <Lists />
            },
            {
                path: "bookmarks",
                element: <BookMarks />
            },
            {
                path: "verified",
                element: <Verified />
            },
            {
                path: "profile",
                element: <Profile />
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    },

])

export default routes
