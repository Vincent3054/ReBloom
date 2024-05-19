import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute, NavigationEnd, RouterModule } from '@angular/router';
import { filter } from 'rxjs/operators';
import { STATIC_ROUTES } from '../.././core/guards/routes.constant';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  // 設定初始圖片來源
  HeaderLogoImgSrc = '../../../assets/images/layouts/1280-header-logo.png';
  HeaderHamburgerImgSrc = '../../../assets/images/layouts/768-header-hamburger.png';
  HeadercloseHamburgerImgSrc = '../../../assets/images/layouts/768-header-closed-hamburger.png';
  isMenuOpen = false;
  activeRoute = '';
  STATIC_ROUTES = STATIC_ROUTES;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.updateImageSource();
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.activeRoute = this.router.url;
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateImageSource();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  navigateAndCloseMenu() {
    this.isMenuOpen = false; // 關閉菜單
  }

  updateImageSource() {
    if (window.innerWidth <= 390) {
      this.HeaderLogoImgSrc = '../../../assets/images/layouts/390-header-logo.png';
      this.HeaderHamburgerImgSrc = '../../../assets/images/layouts/390-header-hamburger.png';
      this.HeadercloseHamburgerImgSrc = '../../../assets/images/layouts/390-header-closed-hamburger.png';
    } else if (window.innerWidth <= 400) {
      this.HeaderLogoImgSrc = '../../../assets/images/layouts/400-header-logo.png';
      this.HeaderHamburgerImgSrc = '../../../assets/images/layouts/400-header-hamburger.png';
      this.HeadercloseHamburgerImgSrc = '../../../assets/images/layouts/400-header-closed-hamburger.png';
    } else if (window.innerWidth <= 430) {
      this.HeaderLogoImgSrc = '../../../assets/images/layouts/430-header-logo.png';
      this.HeaderHamburgerImgSrc = '../../../assets/images/layouts/430-header-hamburger.png';
      this.HeadercloseHamburgerImgSrc = '../../../assets/images/layouts/430-header-closed-hamburger.png';
    } else if (window.innerWidth <= 500) {
      this.HeaderLogoImgSrc = '../../../assets/images/layouts/500-header-logo.png';
      this.HeaderHamburgerImgSrc = '../../../assets/images/layouts/500-header-hamburger.png';
      this.HeadercloseHamburgerImgSrc = '../../../assets/images/layouts/500-header-closed-hamburger.png';
    } else if (window.innerWidth <= 600) {
      this.HeaderLogoImgSrc = '../../../assets/images/layouts/600-header-logo.png';
      this.HeaderHamburgerImgSrc = '../../../assets/images/layouts/600-header-hamburger.png';
      this.HeadercloseHamburgerImgSrc = '../../../assets/images/layouts/600-header-closed-hamburger.png';
    } else if (window.innerWidth <= 768) {
      this.HeaderLogoImgSrc = '../../../assets/images/layouts/768-header-logo.png';
      this.HeaderHamburgerImgSrc = '../../../assets/images/layouts/768-header-hamburger.png';
      this.HeadercloseHamburgerImgSrc = '../../../assets/images/layouts/768-header-closed-hamburger.png';
    } else {
      this.HeaderLogoImgSrc = '../../../assets/images/layouts/1280-header-logo.png';
      this.HeaderHamburgerImgSrc = '../../../assets/images/layouts/768-header-hamburger.png';
      this.HeadercloseHamburgerImgSrc = '../../../assets/images/layouts/768-header-closed-hamburger.png';
    }
  }
}
