import { SplitmediaTextComponent } from './../../shared/compoents/splitmedia-text/splitmedia-text.component';
import { Component,NO_ERRORS_SCHEMA } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    SplitmediaTextComponent,
    TabViewModule,
    ImageModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
}
