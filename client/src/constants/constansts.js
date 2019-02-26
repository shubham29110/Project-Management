import React from 'react';
import AddProject from '../containers/admin/addProject'
import ProjectList from '../containers/admin/projectList'
export const routes =
                    [
                      {
                        path: "/",
                        exact: true,
                        sidebar: () => <div>home!</div>,
                        component: () => <h2>Home</h2>
                      },
                      {
                        path: "/Add-Project",
                        exact: false,
                        component: AddProject 
                      },
                      {
                        path: "/Projects",
                        exact: false,
                        component: ProjectList
                      },
                      {
                        path: "/Developers",
                        exact: false,
                        sidebar: () => <div>developers!</div>,
                        component: () => <h2>developers</h2>
                      },
                      {
                        path: "/Invite",
                        exact: false,
                        sidebar: () => <div>invite!</div>,
                        component: () => <h2>invite</h2>
                      }
                    ];