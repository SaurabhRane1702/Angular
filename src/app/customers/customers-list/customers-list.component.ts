import { SorterService } from "./../../core/sorter.service";
import { Component, OnInit, Input } from "@angular/core";
import { ICustomer } from "src/app/shared/interfaces";

@Component({
  selector: "app-customers-list",
  templateUrl: "./customers-list.component.html",
  styleUrls: ["./customers-list.component.css"],
})
export class CustomersListComponent implements OnInit {
  customersNew: ICustomer[];
  filteredCustomers: ICustomer[];
  customersOrderTotal: number;
  currencyCode: string = "INR";

  @Input() get customers(): any[] {
    return this.customersNew;
  }

  set customers(value: any[]) {
    if (value) {
      this.filteredCustomers = this.customersNew = value;
      this.calculateOrders();
    }
  }
  constructor(private sorterService: SorterService) {}

  ngOnInit() {}

  calculateOrders() {
    this.customersOrderTotal = 0;
    this.filteredCustomers.forEach((cust: ICustomer) => {
      this.customersOrderTotal += cust.orderTotal;
    });
  }

  filter(data: string) {
    if (data) {
      this.filteredCustomers = this.customers.filter((cust: ICustomer) => {
        return (
          cust.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.city.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
          cust.orderTotal.toString().indexOf(data) > -1
        );
      });
    } else {
      this.filteredCustomers = this.customers;
    }
    this.calculateOrders();
  }

  sort(prop: string) {
    // A sorter service will handle the sorting
    this.sorterService.sort(this.filteredCustomers, prop);
  }
}
