import { Component, Input } from '@angular/core';

import { Passenger } from '../../models/passenger.interface';

@Component({
    selector: 'passenger-detail',
    template: `
        <div>
            <span class="status"
                        [ngStyle]="{ 
                        backgroundColor: (detail.checkedIn ? 'seagreen' : 'lightcoral')
                        }">
                </span>
                    {{ detail.fullname }}

                <p>{{ detail | json }}</p>
                <div class="date">
                    Check in date: {{ detail.checkInDate ? (detail.checkInDate | date: 'yMMMd' | uppercase) : 'Not checked in'}}
                </div>
                <div class="children">
                    Children: {{ detail.children?.length }}
                </div>
        </div>    
    `,
    styleUrls: ['passenger-detail.component.scss']
})
export class PassengerDetailComponent {

    @Input()
    detail: Passenger;

    constructor() { }
}