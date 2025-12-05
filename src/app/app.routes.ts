import { Routes } from '@angular/router';
import { Home } from './11Routing/home';
import { User } from './11Routing/user';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: Home
    },
    {
        path: 'user',
        title: 'User Page',
        component: User
    }
];