import { Injectable, InjectionToken } from '@angular/core';
import { DropdownPosition } from './ng-select.types';

export const NG_DROPDOWN_PLACEMENT_SERVICE = new InjectionToken<NgDropdownPanelPlacementService>('ng-dp-placement-service', {
	providedIn: 'root',
	factory: () => new NgDropdownPanelPlacementService()
});

export interface OffsetParams {
	bottom: string;
	top: string;
	height?: string;
	maxHeight?: string;
}

export interface DropdownPlacement {
	getOffset(position: DropdownPosition, parent: ClientRect, select: ClientRect, dropdown: ClientRect): OffsetParams;
}

@Injectable({
	providedIn: 'root'
})
export class NgDropdownPanelPlacementService implements DropdownPlacement {

	constructor() { }

	getOffset(position: DropdownPosition, parent: ClientRect, select: ClientRect, dropdown: ClientRect): OffsetParams {
		const delta = select.height;

		if (position === 'top') {
			const offsetBottom = parent.bottom - select.bottom;
			return {
				bottom: offsetBottom + delta + 'px',
				top: 'auto'
			};
		}
		
		const offsetTop = select.top - parent.top;
		return {
			bottom: 'auto',
			top: offsetTop + delta + 'px'
		};
	}

}
