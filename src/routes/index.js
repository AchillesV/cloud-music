import React, {lazy, Suspense} from 'react';
import { Redirect } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout';
import BlankLayout from '../layouts/BlankLayout';

const SuspenseComponent = Component => props => {
  return (
    <Suspense fallback={null}>
      <Component {...props}></Component>
    </Suspense>
  )
}

const Recommend = lazy(()=> import("../application/Recommend/"));
const Singers = lazy(()=> import("../application/Singers/"));
const Rank = lazy(()=> import("../application/Rank/"));
const Album = lazy(()=> import("../application/Album/"));
// const Singer = lazy(()=> import("../application/Singer/"));
const Search = lazy(()=> import("../application/Search"));

export default [
  {
    component: BlankLayout,
    routes: [
      {
        path: '/',
        component: HomeLayout,
        routes: [
          {
            path: '/',
            exact: true,
            render: ()=> <Redirect to={"/recommend"} />
          },
          {
            path: '/recommend',
            component: SuspenseComponent(Recommend),
          /*   routes: [
              {
                path: '/recommend/:id',
                component: SuspenseComponent(Album)
              }
            ] */
          },
          {
            path: '/singers',
            component: SuspenseComponent(Singers),
            key: 'singers',
            /* routes: [
              {
                path: '/singers/:id',
                component: SuspenseComponent(Singer)
              }
            ] */
          },
          {
            path: '/rank',
            component: SuspenseComponent(Rank),
            key: 'rank',
            routes:[
              {
                path: '/rank/:id',
                component: SuspenseComponent(Album)
              }
            ]
          },
          {
            path: '/album/:id',
            component: SuspenseComponent(Album),
            exact: true,
            key: 'album'
          },
          {
            path: '/search',
            exact: true,
            key: 'search',
            component: SuspenseComponent(Search)
          }
        ]
      }
    ]
  }
]