import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Explore from '../pages/explore'
import Natificaitons from '../pages/natifications'
import NotFound from '../pages/notFound'
import Home from '../pages/home'
import MainLayout from '../layouts/main'
import Messages from '../pages/messages'
import Profile from '../pages/profile'
import Grok from '../pages/grok'
import Community from '../pages/community'
import Premium from '../pages/premium'
import Verified from '../pages/verified'

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
                path: "grok",
                element: <Grok />
            },
            {
                path: "community",
                element: <Community />
            },
            {
                path: "premium",
                element: <Premium />
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
