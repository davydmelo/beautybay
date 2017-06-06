import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BlogContentPage } from './blog-content';

@NgModule({
  declarations: [
    BlogContentPage,
  ],
  imports: [
    IonicPageModule.forChild(BlogContentPage),
  ],
  exports: [
    BlogContentPage
  ]
})
export class BlogContentPageModule {}
