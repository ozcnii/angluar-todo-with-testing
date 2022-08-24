import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AboutComponent],
})
export class AboutModule {}
