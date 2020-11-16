
1. RouterModule
2. Configuring Routes
3. RouterOutlet
4. routerLink
5. Route Parameters
6. Wildcard Routes
7. Redirecting Routes
8. Nested Routes
9. Relative Paths
10. Lazy Loading Routes
11. Route Guards


order of route path : 

      pageNotFound component must appear at the end. if you used it in the beginning all route map to pageNotFound component

      const routes: Routes = [
        {
          path: 'comp1',
          component: 'Component1'
        },
        {
          path: 'comp2',
          component: 'component2'
        },
        {
          path:'**',
          component: 'PagenotFoundComponent'
        }
      ]

for empty path use pathMatch : full

      const routes: Routes = [
        {
          path:'',
          redirectTo:'home',
          pathMatch:'full'          // match with localhost:4200/
        }
      ]
