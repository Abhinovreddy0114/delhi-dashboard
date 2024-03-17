import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UlbComponent } from './ulb/ulb.component';
import { Club1Component } from './club-1/club-1.component';
import { C1Component } from './c1/c1.component';
import { Mp1Component } from './mp-1/mp-1.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Header2Component } from './header2/header2.component';
import { DialogComponent } from './dialog/dialog.component';
import { Header3Component } from './header3/header3.component';
import { Header4Component } from './header4/header4.component';
import { Header5Component } from './header5/header5.component';
import { AgmCoreModule } from '@agm/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
const appRoutes: Routes = [
  { path : '' , component :HomeComponent},
  { path : 'ward/:id' , component :UlbComponent},
  { path : 'locality/:id' , component :Club1Component},
  // { path : 'c1' , component :C1Component},
  { path : 'street/:id' , component :Mp1Component}
  
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UlbComponent,
    Club1Component,
    C1Component,
    Mp1Component,
    FooterComponent,
    Header2Component,
    DialogComponent,
    Header3Component,
    Header4Component,
    Header5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    // AgmCoreModule.forRoot({
    //   apiKey : 'AIzaSyA1Dob_JwWXyAOXEjF-Xph7ja1WFTAztaI'
    // }),
    // AgmCoreModule.forRoot({
    //   apiKey: environment.firebaseConfig.apiKey
    // }),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
