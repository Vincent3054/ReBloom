import { AboutTeamsComponent } from './pages/about-teams/about-teams.component';
import { AboutStoryComponent } from './pages/about-story/about-story.component';
import { Routes } from '@angular/router';
import { LayoutCardComponent } from './layouts/main/layout-card/layout-card.component';
import { STATIC_ROUTES } from './core/guards/routes.constant';
import { BREADCRUMB } from './layouts/main/breadcrumb/breadcrumb.constant';

export const routes: Routes = [
  {
    path: '',
    component: LayoutCardComponent,
    children: [
      /**首頁 */
      {
        path: STATIC_ROUTES.HOME,
        loadComponent: () =>
          import('./pages/home/home.component').then(
            (c) => c.HomeComponent
          ),
        data: {
          breadcrumb: BREADCRUMB.HOME,
        },
      },
      {
        path: STATIC_ROUTES.AboutStory,
        loadComponent: () =>
          import('./pages/about-story/about-story.component').then(
            (c) => c.AboutStoryComponent
          ),
      },
      {
        path: STATIC_ROUTES.AboutTeams,
        loadComponent: () =>
          import('./pages/about-teams/about-teams.component').then(
            (c) => c.AboutTeamsComponent
          ),
      },
      {
        path: `${STATIC_ROUTES.Order}/:style`,
        loadComponent: () =>
          import('./pages/order/order.component').then(
            (c) => c.OrderComponent
          ),
      },
      {
        path: STATIC_ROUTES.QA,
        loadComponent: () =>
          import('./pages/qa/qa.component').then(
            (c) => c.QaComponent
          ),
      }
    ]
  }
];
