import { Component, HostListener, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';
import { CommonModule } from '@angular/common'; // 導入 CommonModule
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-about-story',
  standalone: true,
  imports: [
    TabViewModule,
    ImageModule,
    CommonModule,
    RouterModule,
  ], templateUrl: './about-story.component.html',
  styleUrl: './about-story.component.scss'
})
export class AboutStoryComponent {

}
