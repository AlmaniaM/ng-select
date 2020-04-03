import { Injectable } from '@angular/core';
import { DropdownPlacement, OffsetParams } from 'src/ng-select/lib/ng-dropdown-panel-placement.service';
import { DropdownPosition } from '@ng-select/ng-select';

@Injectable()
export class CustomPositionService implements DropdownPlacement {

    constructor() { }

    getOffset(position: DropdownPosition, parent: ClientRect, select: ClientRect, dropdown: ClientRect): OffsetParams {
        const delta = select.height;
        let offsetBottom = parent.bottom - select.bottom;
        let offsetTop = select.top - parent.top;
        const params: OffsetParams = {
            bottom: 'auto',
            top: 'auto'
        };

        if (position === 'top') {
            if (dropdown.height > offsetTop) {
                offsetTop = dropdown.height;
                params.maxHeight = `${offsetTop}px`;
            }
            params.bottom = offsetBottom + delta + 'px';
            return params;
        }

        if (dropdown.height > offsetBottom) {
            offsetBottom = dropdown.height;
            params.maxHeight = `${offsetBottom}px`;
        }
        params.top = offsetTop + delta + 'px';
        return params;
    }

}
