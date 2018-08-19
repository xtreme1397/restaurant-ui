import { Component, OnInit, ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm, FormControl } from '@angular/forms';
import { OrdersService } from './orders.service';
@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
    animations: [routerTransition()]
})
export class OrdersComponent implements OnInit {
    closeResult: string;
    selectedItem: any;
    selectedItemQty: any;
    modalReference: any;
    searchText:any;
    @ViewChild('f') signupForm: NgForm;
    constructor(private ordersService: OrdersService, private modalService: NgbModal) { }
    orders: any = [];
    menuItems: any[] = [
        {
            name: 'French Fries', price: '106'
        },
        {
            name: 'Chilli Cheese Toast', price: '115'
        },
        {
            name: 'Chilli Cheese Gralic Toast', price: '115'
        },
        {
            name: 'Garlic Bread', price: '98'
        },
        {
            name: 'Garlic Bread with Cheese', price: '119'
        },
        {
            name: 'Cold Cofee', price: '50'
        }
    ];

    ngOnInit() { 
        this.getOrders();
    }

    open(content) {
        this.modalReference = this.modalService.open(content);
        this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private generateOrderPayload(formControl) {
        let selectedItem = this.menuItems.find((item) => {
            return item.name === formControl.itemName;
        })

        let ordePayload = {
            customerName: formControl.username,
            mobile: formControl.mobile,
            items: [
                {
                    name: selectedItem.name,
                    quantity: formControl.itemQty
                }
            ],
            price: ((+selectedItem.price) * (+formControl.itemQty))
        };
        return ordePayload;
    }
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    getOrders() {
        this.ordersService.getOrder().subscribe((response) => {
            this.orders = response;
            console.log("orders", this.orders);
        }, (error) => {
            console.log("error");
        })
    }
    onSubmit(form: NgForm) {
        this.ordersService.addOrder(this.generateOrderPayload(form.value)).subscribe((response) => {
            this.orders.push(response)
            this.modalReference.close();
        }, (error) => {
            console.log(error);
        });

    }
}
