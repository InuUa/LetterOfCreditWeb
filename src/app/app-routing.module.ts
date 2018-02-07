import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardIssuerComponent }   from './dashboard-issuer/dashboard-issuer.component';
import { DashboardAdvisingComponent }   from './dashboard-advising/dashboard-advising.component';
import { DashboardBuyerComponent }   from './dashboard-buyer/dashboard-buyer.component';
import { DashboardSellerComponent }   from './dashboard-seller/dashboard-seller.component';
import { DashboardOverallComponent }   from './dashboard-overall/dashboard-overall.component';
import { ActiveLocComponent }      from './active-loc/active-loc.component';
import { ApplyForLocComponent }  from './apply-for-loc/apply-for-loc.component';
import { ApproveLocComponent } from './approve-loc/approve-loc.component';
import { BillOfLadingComponent } from './bill-of-lading/bill-of-lading.component';
import { PackingListComponent } from './packing-list/packing-list.component';
import { InvoiceCreateComponent } from './invoice-create/invoice.component';
import { ShipComponent } from './ship/ship.component';
import { AllLocSellerComponent } from './all-loc-seller/all-loc-seller.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoginComponent } from './login/login.component';
import { TimelineComponent } from'./timeline/timeline.component';

const routes: Routes = [
  { path: '', redirectTo: '/seller', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardOverallComponent },
  { path: 'approve/:id', component: ApproveLocComponent },
  { path: 'activeloc', component: ActiveLocComponent },
  { path: 'buyer', component: DashboardBuyerComponent },
  { path: 'seller', component: DashboardSellerComponent },
  { path: 'issuing', component: DashboardIssuerComponent},
  { path: 'advising', component: DashboardAdvisingComponent},
  { path: 'applyforloc', component: ApplyForLocComponent },
  { path: 'billoflading', component: BillOfLadingComponent },
  { path: 'packinglist', component: PackingListComponent },
  { path: 'invoice', component: InvoiceCreateComponent },
  { path: 'invoice/:id', component: InvoiceCreateComponent },
  { path: 'ship/:id', component: ShipComponent },
  { path: 'locsummary/:first', component: AllLocSellerComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: LoginComponent },
  { path: 'test', component: TimelineComponent },
  { path: 'corda', component: DashboardSellerComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}