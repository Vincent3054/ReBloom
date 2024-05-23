import { Component, HostListener, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common'; // 導入 CommonModule
import { Router, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { STATIC_ROUTES } from '../.././core/guards/routes.constant'; @Component({
  selector: 'app-order',
  standalone: true,
  imports: [
    TabViewModule,
    ImageModule,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent implements OnInit {
  activeStyle: 'designer' | 'minimalist' = 'designer';
  STATIC_ROUTES = STATIC_ROUTES;
  activeRoute = '';

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.activeRoute = this.router.url;
    });
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

  openLink() {
    window.open('https://www.instagram.com/rebloom_studio__?igsh=MmdsZnA2bmhkNzhw&utm_source=qr', '_blank');
  }
}
