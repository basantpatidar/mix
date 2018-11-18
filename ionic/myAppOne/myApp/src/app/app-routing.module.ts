import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'mypage', loadChildren: './mypage/mypage.module#MypagePageModule' },
  { path: 'partOne', loadChildren: './part-one/part-one.module#PartOnePageModule' },
  { path: 'partOne/:id', loadChildren: './part-one/part-one.module#PartOnePageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
