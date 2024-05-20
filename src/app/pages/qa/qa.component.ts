import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-qa',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './qa.component.html',
  styleUrl: './qa.component.scss'
})
export class QaComponent {

  activeStyle: string = 'designer';
  QaBannerImgSrc = '../../../assets/images/qa/1920-qa-banner.png'
  QaArrowBottomImgSrc = '../../../assets/images/qa/1920-qa-arrow-bottom.png'
  QaArrowTopImgSrc = '../../../assets/images/qa/1920-qa-arrow-top.png'
  isExpanded: boolean[] = [true, false, false, false]; // 狀態陣列，用來控制每個 QA 區塊的展開與否

  constructor() {
    this.updateImageSource();
  }

  toggle(index: number): void {
    // 更新展開狀態
    this.isExpanded[index] = !this.isExpanded[index];
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
