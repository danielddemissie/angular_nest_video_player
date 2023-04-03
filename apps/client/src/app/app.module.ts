import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { ClipsComponent } from './components/clips/clips.component';
import { FooterComponent } from './components/footer/footer.component';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  { path: 'clips/:clipId', component: ClipsComponent, pathMatch: 'full' },
  { path: 'clips', component: ClipsComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '/clips', pathMatch: 'prefix' },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ClipsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(routes)],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
