import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 // 設定初始圖片來源
  HeaderLogoImgSrc = '../../../assets/images/layouts/1280-header-logo.png';
  HeaderHamburgerImgSrc='../../../assets/images/layouts/768-header-hamburger.png';

 constructor() {
   this.updateImageSource();
 }

 // 監聽視窗大小變化
 @HostListener('window:resize', ['$event'])
 onResize(event:Event) {
   this.updateImageSource();
 }

 // 根據螢幕寬度更新圖片來源
 updateImageSource() {
   if (window.innerWidth <= 768) {
     this.HeaderLogoImgSrc = '../../../assets/images/layouts/768-header-logo.png';
     this.HeaderHamburgerImgSrc='../../../assets/images/layouts/768-header-hamburger.png';
   }
   else if (window.innerWidth <= 600) {
     this.HeaderLogoImgSrc = '../../../assets/images/layouts/600-header-logo.png';
     this.HeaderHamburgerImgSrc = '../../../assets/images/layouts/600-header-hamburger.png';
   }
   else if (window.innerWidth <= 500) {
    this.HeaderLogoImgSrc = '../../../assets/images/layouts/500-header-logo.png';
    this.HeaderHamburgerImgSrc = '../../../assets/images/layouts/500-header-hamburger.png';
   }
   else if (window.innerWidth <= 400) {
    this.HeaderLogoImgSrc = '../../../assets/images/layouts/400-header-logo.png';
    this.HeaderHamburgerImgSrc = '../../../assets/images/layouts/400-header-hamburger.png';
   }else{
    this.HeaderLogoImgSrc = '../../../assets/images/layouts/1280-header-logo.png';
    this.HeaderHamburgerImgSrc='../../../assets/images/layouts/768-header-hamburger.png';
   }
 }
}
