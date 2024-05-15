import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-qa',
  standalone: true,
  imports: [],
  templateUrl: './qa.component.html',
  styleUrl: './qa.component.scss'
})
export class QaComponent {

  activeStyle: string = 'designer';
  QaBannerImgSrc = '../../../assets/images/qa/1920-qa-banner.png'
  QaArrowBottomImgSrc = '../../../assets/images/qa/1920-qa-arrow-bottom.png'
  QaArrowTopImgSrc = '../../../assets/images/qa/1920-qa-arrow-top.png'

  constructor() {
    this.updateImageSource();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.updateImageSource();
  }

  updateImageSource() {
    if (window.innerWidth <= 390) {
      this.QaBannerImgSrc = '../../../assets/images/qa/390-qa-banner.png';
      this.QaArrowBottomImgSrc = '../../../assets/images/qa/390-qa-arrow-bottom.png';
      this.QaArrowTopImgSrc = '../../../assets/images/qa/390-qa-arrow-top.png';
    } else if (window.innerWidth <= 430) {
      this.QaBannerImgSrc = '../../../assets/images/qa/430-qa-banner.png';
      this.QaArrowBottomImgSrc = '../../../assets/images/qa/430-qa-arrow-bottom.png';
      this.QaArrowTopImgSrc = '../../../assets/images/qa/430-qa-arrow-top.png';
    } else if (window.innerWidth <= 768) {
      this.QaBannerImgSrc = '../../../assets/images/qa/768-qa-banner.png';
      this.QaArrowBottomImgSrc = '../../../assets/images/qa/768-qa-arrow-bottom.png';
      this.QaArrowTopImgSrc = '../../../assets/images/qa/768-qa-arrow-top.png';
    } else if (window.innerWidth <= 1024) {
      this.QaBannerImgSrc = '../../../assets/images/qa/1024-qa-banner.png';
      this.QaArrowBottomImgSrc = '../../../assets/images/qa/1024-qa-arrow-bottom.png';
      this.QaArrowTopImgSrc = '../../../assets/images/qa/1024-qa-arrow-top.png';
    } else if (window.innerWidth <= 1280) {
      this.QaBannerImgSrc = '../../../assets/images/qa/1280-qa-banner.png';
      this.QaArrowBottomImgSrc = '../../../assets/images/qa/1280-qa-arrow-bottom.png';
      this.QaArrowTopImgSrc = '../../../assets/images/qa/1280-qa-arrow-top.png';
    } else {
      this.QaBannerImgSrc = '../../../assets/images/qa/1920-qa-banner.png';
      this.QaArrowBottomImgSrc = '../../../assets/images/qa/1920-qa-arrow-bottom.png';
      this.QaArrowTopImgSrc = '../../../assets/images/qa/1920-qa-arrow-top.png';
    }
  }
}
