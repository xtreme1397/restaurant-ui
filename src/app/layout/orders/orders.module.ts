import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { PageHeaderModule } from '../../shared';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {OrdersService} from './orders.service';
import {SharedPipesModule} from '../../shared/pipes/shared-pipes.module';
@NgModule({
    imports: [CommonModule,SharedPipesModule, OrdersRoutingModule, FormsModule, ReactiveFormsModule, NgbModule.forRoot(),PageHeaderModule],
    declarations: [OrdersComponent],
    providers:[OrdersService]
})
export class OrdersModule { }
