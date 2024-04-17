import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'layout-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './layout-card.component.html',
  styles: [],
})
export class LayoutCardComponent {}
