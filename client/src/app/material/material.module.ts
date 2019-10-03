import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';

const MaterialComponents = [ ScrollingModule ];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
