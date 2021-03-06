import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard',     title: 'Dashboard',         icon:'nc-bank',       class: '' },
    { path: '/studentManagement',         title: 'Student Management',             icon:'',    class: '' },
    { path: '/subjectManagement',          title: 'Subject Management',              icon:'',      class: '' },
    { path: '/lecturerManagement', title: 'Lecturer Management',     icon:'',    class: '' },
    { path: '/studentProfile',          title: 'Student Profile',      icon:'',  class: '' },
    { path: '/lecturerProfile',         title: 'Lecturer Profile',        icon:'',    class: '' },
    { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
    { path: '/upgrade',       title: 'Upgrade to PRO',    icon:'nc-spaceship',  class: 'active-pro' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
