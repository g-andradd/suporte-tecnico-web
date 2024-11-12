import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SupportCenterComponent } from './components/support-center/support-center.component';
import { SolutionResultComponent } from './components/solution-result/solution-result.component';
import { SupportCenterModule } from './components/support-center/support-center.module';
import { SolutionResultModule } from './components/solution-result/solution-result.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SupportCenterModule,
    SolutionResultModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
