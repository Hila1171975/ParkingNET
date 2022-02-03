import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { EditParkingDetailsComponent } from './edit-parking-details/edit-parking-details.component';
import { Footer1Component } from './footer1/footer1.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MapComponent } from './map/map.component';
import { NavComponent } from './nav/nav.component';
import { ParkingListComponent } from './parking-list/parking-list.component';
import { PaymentComponent } from './payment/payment.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: "nav", component: NavComponent, children: [
          {path: "myhome", component: HomeComponent },
          {path: "login", component: LoginComponent },
          {path: "search", component: SearchComponent },
          {path: "bankDetails", component: BankDetailsComponent },
          {path: "payment", component: PaymentComponent },
          {path: "myParkingList", component: ParkingListComponent },
          {path: "editParkingDetails/:id", component: EditParkingDetailsComponent },
          {path: "myFooter", component: Footer1Component },
          {path: "myMap", component: MapComponent }
    ]},
];


// const routes: Routes = [
//   {path:"menu", component:MenuComponent,children:[
//     {path:"payment",component:PaymentComponent},
//     {path:"showClothDetails/:id",component:ShowClothDetailsComponent},
//     {path:"myhome",component:HomeComponent, children:[
//       {path:"singUp",component:SignUpComponent},
//       {path:"singIn",component:SignInComponent}

// ]},
// {path:"myclothingList",component:ClothingListComponent,children:[
//  // {path:"addNewCloth",component:EditClothingListComponent},
//   {path:"editClothing/:id",component:EditClothingListComponent}
// ]},

// {path:"mycategoriesList",component:CategoriesListComponent,children:[
//  // {path:"addNewCategory",component:EditCategoriesListComponent},
//   {path:"editCategory/:id",component:EditCategoriesListComponent}
// ]},

// {path:"myCart",component:ShoppingCartComponent},
// {path:"singUp",component:SignUpComponent},
// {path:"singIn",component:SignInComponent}

//   ]}
// ];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
