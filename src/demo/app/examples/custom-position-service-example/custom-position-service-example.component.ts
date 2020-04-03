import { Component, OnInit } from '@angular/core';
import { CustomPositionService } from './custom-position-service-example.service';
import { NG_DROPDOWN_PLACEMENT_SERVICE } from 'src/ng-select/lib/ng-dropdown-panel-placement.service';

@Component({
    selector: 'custom-position-service-example',
    templateUrl: './custom-position-service-example.component.html',
    styleUrls: ['./custom-position-service-example.component.scss'],
    providers: [
        { provide: NG_DROPDOWN_PLACEMENT_SERVICE, useClass: CustomPositionService }
    ]
})
export class CustomPositionExampleComponent implements OnInit {

    cities = [
        { value: 1, label: 'Vilnius' },
        { value: 2, label: 'Kaunas' },
        { value: 3, label: 'Pavilnys' }
    ];

    ngOnInit() {
    }
}
