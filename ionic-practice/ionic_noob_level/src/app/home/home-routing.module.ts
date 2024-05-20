import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { TabOneComponent } from '../components/tab-one/tab-one.component';
import { GalleryComponent } from '../components/gallery/gallery.component';
import { TabThreeComponent } from '../components/tab-three/tab-three.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: `tab_one`,
    component: TabOneComponent
  },
  {
    path: `gallery`,
    component: GalleryComponent
  },
  {
    path: `tab_three`,
    component: TabThreeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
