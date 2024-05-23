import { Component, HostListener, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common'; // 導入 CommonModule
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    TabViewModule,
    ImageModule,
    CommonModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  OrderMid1ImgSrc = '../../../assets/images/order/768-order-mid-img-1.png';
  OrderMid2ImgSrc = '../../../assets/images/order/768-order-mid-img-2.png';
  activeStyle: 'flowers' | 'additional' = 'flowers';

  constructor(private route: ActivatedRoute) {
    this.updateImageSource();
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const style = params.get('style');
      if (style === 'flowers' || style === 'additional') {
        this.activeStyle = style;
      }
    });
  }

  setActiveStyle(style: 'flowers' | 'additional') {
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

  openLink() {
    window.open('https://www.instagram.com/rebloom_studio__?igsh=MmdsZnA2bmhkNzhw&utm_source=qr', '_blank');
  }
}
