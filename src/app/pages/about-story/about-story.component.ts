import { Component, HostListener, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common'; // 導入 CommonModule
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-about-story',
  standalone: true,
  imports: [
    TabViewModule,
    ImageModule,
    CommonModule
  ], templateUrl: './about-story.component.html',
  styleUrl: './about-story.component.scss'
})
export class AboutStoryComponent {
  // activeStyle: string = 'designer';
  OrderMid1ImgSrc = '../../../assets/images/order/768-order-mid-img-1.png';
  OrderMid2ImgSrc = '../../../assets/images/order/768-order-mid-img-2.png';
  activeStyle: 'designer' | 'minimalist' = 'designer';

  constructor(private route: ActivatedRoute) {
    this.updateImageSource();
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
    this.updateImageSource();
  }


  // 根據螢幕寬度更新圖片來源
  updateImageSource() {
    if (window.innerWidth <= 390) {
      this.OrderMid1ImgSrc = '../../../assets/images/order/390-order-mid-img-1.png';
      this.OrderMid2ImgSrc = '../../../assets/images/order/390-order-mid-img-2.png';
    } else if (window.innerWidth <= 430) {
      this.OrderMid1ImgSrc = '../../../assets/images/order/430-order-mid-img-1.png';
      this.OrderMid2ImgSrc = '../../../assets/images/order/430-order-mid-img-2.png';
    } else {
      this.OrderMid1ImgSrc = '../../../assets/images/order/768-order-mid-img-1.png';
      this.OrderMid2ImgSrc = '../../../assets/images/order/768-order-mid-img-2.png';
    }
  }
}
