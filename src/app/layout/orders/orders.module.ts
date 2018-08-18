import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { PageHeaderModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule,ReactiveFormsModule }   from '@angular/forms';

@NgModule({
    imports: [CommonModule,FormsModule,ReactiveFormsModule, OrdersRoutingModule, NgbModule.forRoot(),PageHeaderModule],
    declarations: [OrdersComponent]
})
export class OrdersModule { }
