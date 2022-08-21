import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './Shared/Components/header/header.component';
import { PostComponent } from './posts/post/post.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { appReducer } from './counter/store/state/app.state';
import { HighlightDirective } from './directives/highlight.directive';
import { NgIfCustomeDirective } from './directives/ng-if-custome.directive';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    HighlightDirective,
    NgIfCustomeDirective,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({
      logOnly: environment.production,
    }),


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
