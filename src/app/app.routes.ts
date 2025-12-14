import { Routes } from '@angular/router';
import { Home } from './11Routing/home';
import { UserRouting } from './11Routing/userRouting';
import { UserForms } from './12Forms/forms';
import { Images } from './10OptimizedImages/images';
import { Components } from './01Components/components';
import { ComponentComp } from './02ComponentComposition/componentComp';
import { Conditionals } from './03Conditionals/conditionals';
import { Loops } from './04Loops/loops';
import { PropBinding } from './05PropBinding/propBinding';
import { EventHandling } from './06EventHandling/eventHandling';
import { InputProp } from './07InputProp/inputProp';
import { OutputProp } from './08OutputProp/outputProp';
import { Defer } from './09Defer/defer';
import { ReactiveForm } from './13 ReactiveForms/reactiveforms';
import { InjService } from './14InjService/injServices';
import { DI } from './15DI/app';
import { Pipes } from './16Pipes/pipes';

export const routes: Routes = [
    {
        path: '',
        title: 'Home Page',
        component: Home
    },
    {
        path: 'components',
        title: '01 Components',
        component: Components
    },
    {
        path: 'composition',
        title: '02 Component Composition',
        component: ComponentComp
    },
    {
        path: 'conditionals',
        title: '03 Conditionals',
        component: Conditionals
    },
    {
        path: 'loops',
        title: '04 Loops',
        component: Loops
    },
    {
        path: 'prop',
        title: '05 Property Binding',
        component: PropBinding
    },
    {
        path: 'event',
        title: '06 Event Handling',
        component: EventHandling
    },
    {
        path: 'input',
        title: '07 Input Properties',
        component: InputProp
    },
    {
        path: 'output',
        title: '08 Output Properties',
        component: OutputProp
    },
    {
        path: 'defer',
        title: '09 Defer',
        component: Defer
    },
    {
        path: 'images',
        title: '10 Optimized images',
        component: Images
    },
    {
        path: 'routing',
        title: '11 Routing',
        component: UserRouting
    },
    {
        path: 'forms',
        title: '12 Forms',
        component: UserForms
    },
    {
        path: 'reactiveforms',
        title: '13 Reactive Forms',
        component: ReactiveForm
    },
    {
        path: 'service',
        title: '14 Injectable Service',
        component: InjService
    },
    {
        path: 'di',
        title: '15 Dependency Injection',
        component: DI
    },
    {
        path: 'pipes',
        title: '16 Pipes',
        component: Pipes
    },

];