import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupportCenterComponent } from './support-center.component';
import { FormsModule } from '@angular/forms';
import { SolutionResultModule } from '../solution-result/solution-result.module';

@NgModule({
  declarations: [SupportCenterComponent],
  imports: [
    CommonModule,
    FormsModule,
    SolutionResultModule    
  ],
  exports: [
    SupportCenterComponent
  ]
})
export class SupportCenterModule { }
