import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CustomersComponent } from "./customers.component";

const routes: Routes = [{ path: "customers", component: CustomersComponent }];
// imports: [ RouterModule.forRoot(routes) ],...//It is commented since forRoot can only be used once
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomersRoutingModule {}
