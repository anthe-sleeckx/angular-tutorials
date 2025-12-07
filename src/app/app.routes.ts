import { Routes } from '@angular/router';
import { Home } from './11Routing/home';
import { User } from './11Routing/user';
import { UserForms } from './12Forms/user';
import { Images } from './10OptimizedImages/user';

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
    },
    {
        path: 'forms',
        title: '12 Forms',
        component: UserForms
    },
    {
        path: 'images',
        title: '10 Optimized images',
        component: Images
    }
];