import { Routes } from '@angular/router';
import { OneComponent } from './one/one.component';
import { ChildAComponent } from './two/child-a/child-a.component';
import { ChildBComponent } from './two/child-b/child-b.component';
import { TwoComponent } from './two/two.component';

export const routes: Routes = [
    {path: "one", component: OneComponent},
    {path: "two", component: TwoComponent, children:[
        {path: "child-a", component: ChildAComponent},
        {path: "child-b", component: ChildBComponent}
    ]}

];
