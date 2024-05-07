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
  HeaderLogImgSrc = '../../../assets/images/layouts/1280-header-logo.png';
//  topRightImgSrc = '../../../assets/images/home/1280-top-right-img.png';

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
     this.HeaderLogImgSrc = '../../../assets/images/layouts/768-header-logo.png';
   } else {
     this.HeaderLogImgSrc = '../../../assets/images/layouts/1280-header-logo.png';
   }
 }
}
