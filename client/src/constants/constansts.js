import React from 'react';
import AddProject from '../containers/project/addProject'
import ProjectList from '../containers/project/projectList'
import TotalDevelopers from '../containers/developer/developer'

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
                        component: TotalDevelopers
                      },
                      {
                        path: "/Invite",
                        exact: false,
                        sidebar: () => <div>invite!</div>,
                        component: () => <h2>invite</h2>
                      }
                    ];