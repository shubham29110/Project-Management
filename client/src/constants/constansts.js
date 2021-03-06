import React from 'react';
import AddProject from '../containers/project/addProject'
import ProjectList from '../containers/project/projectList'
import TotalDevelopers from '../containers/developer/developer'
import AssignedProject from '../containers/project/assignedProject'
import Tasks from '../components/project/Tasks'
import OpenTask from '../components/project/OpenTask'

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
                      },  
                      {
                        path: "/Developer",
                        exact: true,
                        component: AssignedProject
                      }, 
                      {
                        path: "/Tasks",
                        exact: false,
                        component: Tasks
                      },
                      {
                        path:'/OpenTask',
                        exact: false,
                        component: OpenTask
                      },
                      {
                        path:'/Developer/:token',
                        exact: false,
                        component: AssignedProject
                      }
                    ];