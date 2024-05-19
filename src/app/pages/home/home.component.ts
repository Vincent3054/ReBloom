import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-page-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  HomeTopImgSrc = '../../../assets/images/home/768-top-img.png';
  HomeBottomImgSrc = '../../../assets/images/home/768-bottom-img.png';

  constructor() {
    this.updateImageSource();
  }

  // 監聽視窗大小變化
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateImageSource();
  }

  // 根據螢幕寬度更新圖片來源
  updateImageSource() {
    if (window.innerWidth <= 400) {
      this.HomeTopImgSrc = '../../../assets/images/home/400-top-img.png';
      this.HomeBottomImgSrc = '../../../assets/images/home/400-bottom-img.png';
    } else if (window.innerWidth <= 500) {
      this.HomeTopImgSrc = '../../../assets/images/home/500-top-img.png';
      this.HomeBottomImgSrc = '../../../assets/images/home/500-bottom-img.png';
    } else if (window.innerWidth <= 600) {
      this.HomeTopImgSrc = '../../../assets/images/home/600-top-img.png';
      this.HomeBottomImgSrc = '../../../assets/images/home/600-bottom-img.png';
    } else if (window.innerWidth <= 700) {
      this.HomeTopImgSrc = '../../../assets/images/home/700-top-img.png';
      this.HomeBottomImgSrc = '../../../assets/images/home/700-bottom-img.png';
    } else if (window.innerWidth <= 768) {
      this.HomeTopImgSrc = '../../../assets/images/home/768-top-img.png';
      this.HomeBottomImgSrc = '../../../assets/images/home/768-bottom-img.png';
    } else {
      this.HomeTopImgSrc = '../../../assets/images/home/768-top-img.png';
      this.HomeBottomImgSrc = '../../../assets/images/home/768-bottom-img.png';
    }
  }
}
