import { Component, OnInit,ViewChild } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss'],
    animations: [routerTransition()]
})
export class OrdersComponent implements OnInit {
    closeResult: string;
    selectedItem:any;
    selectedItemQty:any;
    modalReference:any;
    @ViewChild('f') signupForm: NgForm;
    constructor(private modalService: NgbModal) { }
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

    ngOnInit() { }
  
    open(content) {
       this.modalReference= this.modalService.open(content);
       this.modalReference.result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
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
    onSubmit(form:NgForm){
        console.log("called",form.value);
        this.modalReference.close();
    }
}
