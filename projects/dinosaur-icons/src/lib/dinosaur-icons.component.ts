import {ChangeDetectionStrategy, Component, ElementRef, Inject, Input, Optional} from '@angular/core';
import {DinosaurIconsRegistry} from './dinosaur-icons-registry.service';
import {DOCUMENT} from '@angular/common';
import {dinosaurIcon} from './icons/dinosaur-icons';

@Component({
    selector: 'dinosaur-icons',
    template: `
        <ng-content></ng-content>
    `,
    styles: [':host::ng-deep svg{width: 50px; height: 50px}'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DinosaurIconsComponent {
    private svgIcon: SVGElement;

    @Input()
    set name(iconName: dinosaurIcon) {
        if (this.svgIcon) {
            this.element.nativeElement.removeChild(this.svgIcon);
        }
        const svgData = this.dinosaurIconRegistry.getIcon(iconName);
        this.svgIcon = this.svgElementFromString(svgData);
        this.element.nativeElement.appendChild(this.svgIcon);
    }

    constructor(private element: ElementRef, private dinosaurIconRegistry: DinosaurIconsRegistry,
                @Optional() @Inject(DOCUMENT) private document: any) {
    }

    private svgElementFromString(svgContent: string): SVGElement {
        const div = this.document.createElement('DIV');
        div.innerHTML = svgContent;
        return div.querySelector('svg') || this.document.createElementNS('http://www.w3.org/2000/svg', 'path');
    }
}
