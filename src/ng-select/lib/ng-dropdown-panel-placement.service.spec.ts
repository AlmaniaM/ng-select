/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NgDropdownPanelPlacementService } from './ng-dropdown-panel-placement.service';

describe('Service: NgDropdownPanelPlacement', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgDropdownPanelPlacementService]
    });
  });

  it('should ...', inject([NgDropdownPanelPlacementService], (service: NgDropdownPanelPlacementService) => {
    expect(service).toBeTruthy();
  }));
});
