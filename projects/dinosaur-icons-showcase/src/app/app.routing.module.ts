import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'foo', loadChildren: () => import('./features/foo/foo.module').then(m => m.FooModule) }, { path: 'bar', loadChildren: () => import('./features/bar/bar.module').then(m => m.BarModule) }];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
