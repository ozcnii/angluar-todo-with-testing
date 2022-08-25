import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoModule } from './todo/todo.module';
import { AboutModule } from './about/about.module';
import { NotFoundModule } from './not-found/not-found.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo/todo.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    AboutModule,
    NotFoundModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ todos: todoReducer }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
