import { Component, HostListener, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common'; // 導入 CommonModule
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    TabViewModule,
    ImageModule,
    CommonModule
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
  activeStyle: 'designer' | 'minimalist' = 'designer';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const style = params.get('style');
      if (style === 'designer' || style === 'minimalist') {
        this.activeStyle = style;
      }
    });
  }

  setActiveStyle(style: 'designer' | 'minimalist') {
    this.activeStyle = style;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
  }
}
