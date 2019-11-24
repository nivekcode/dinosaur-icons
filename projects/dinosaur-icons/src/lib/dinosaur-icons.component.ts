import {ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, ViewEncapsulation} from '@angular/core';
import {dinosaurIcons} from './icons';

@Component({
  selector: 'dinosaur-icons',
  template: `
      <ng-content></ng-content>
  `,
  styles: ['.dinosaurIcon svg{width: 50px; height: 50px}'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DinosaurIconsComponent {

  @HostBinding('class.dinosaurIcon') true;

  @Input()
  set name(iconName: string) {
    this.element.nativeElement.innerHTML = dinosaurIcons[iconName];
  }

  constructor(private element: ElementRef) {
  }
}
