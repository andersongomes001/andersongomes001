import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { v7 as uuidv7 } from 'uuid';

@Component({
  selector: 'app-button-tooltip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-tooltip.component.html',
  styleUrl: './button-tooltip.component.css'
})
export class ButtonTooltipComponent {
    @Input() icon_src: string = "";
    @Input() name: string = "";
    id: string = uuidv7();
}
