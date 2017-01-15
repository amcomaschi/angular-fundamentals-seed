import { Component, OnInit } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-dashboard',
    styleUrls: ['./passenger-dashboard.component.scss'],
    template: `
        <div>
            <passenger-count
                [items]="passengers">
            </passenger-count>
            <passenger-detail
                *ngFor="let passenger of passengers;"
                [detail]="passenger">
            </passenger-detail>
        </div>
    `
})
export class PassengerDashboardComponent implements OnInit {

    passengers: Passenger[];

    constructor() { }

    ngOnInit() {
        console.log('OnInit');

        this.passengers = [{
            id: 1,
            fullname: 'Ariel',
            checkedIn: false,
            checkInDate: 1490234567654,
            children: null
        },
        {
            id: 2,
            fullname: 'Ariel',
            checkedIn: true,
            checkInDate: null,
            children: [{ name: 'Luca', age: 1 }]
        }
        ]
    }
}