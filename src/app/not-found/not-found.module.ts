import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [NotFoundComponent],
})
export class NotFoundModule {}
