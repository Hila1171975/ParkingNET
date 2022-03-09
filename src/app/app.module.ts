import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { SearchComponent } from './search/search.component';
import { PaymentComponent } from './payment/payment.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { EditParkingDetailsComponent } from './edit-parking-details/edit-parking-details.component';
import { Footer1Component } from './footer1/footer1.component';
import {HttpClientModule} from  '@angular/common/http'
import { BankAccountService } from './Services/bank-account.service';
import { ParkingService } from './Services/parking.service';
import { RentService } from './Services/rent.service';
import { UserService } from './Services/user.service';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map/map.component';
import { ContactComponent } from './contact/contact.component'
import { ScheduleModule, DayService, WeekService, WorkWeekService, MonthService, AgendaService, DragAndDropService, ResizeService} from '@syncfusion/ej2-angular-schedule';
import { CalenderComponent } from './calender/calender.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    LoginComponent,
    BankDetailsComponent,
    SearchComponent,
    PaymentComponent,
    ParkingListComponent,
    EditParkingDetailsComponent,
    Footer1Component,
    MapComponent,
    ContactComponent,
    CalenderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GoogleMapsModule,
    ScheduleModule
  ],
  providers: [BankAccountService, ParkingService, RentService, UserService,  DayService, WeekService, WorkWeekService, MonthService, AgendaService,DragAndDropService,ResizeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
