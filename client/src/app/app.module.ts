import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncFormComponent } from './components/func-form/func-form.component';
import { FuncListComponent } from './components/func-list/func-list.component';
//import { HashLocationStrategy, LocationStrategy} from '@angular/common';
import{ HttpClientModule } from '@angular/common/http';
import { FuncService } from './services/func.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,    
    FuncFormComponent,    
    FuncListComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AngularFontAwesomeModule        
  ],
  providers: [
    FuncService,
    //{provide: LocationStrategy, useClass:HashLocationStrategy}   
  ],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
