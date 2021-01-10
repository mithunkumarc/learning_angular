
example includes feature modules ,each feature module has routing module.

1. configure app routing module. routes pointing to reature modules
2. in the html / navigation page, use routerLink attribute with value as path.
3. configure feature routing module routes, and register feature routing module in feature module ts file.
4. keywords

      routerLink : attribute in html , take value as path
      RouterModule.forRoot(parentLeveRoutes)
      RouterModule.forChild(childFeatureModuleLevelRoutes)
      Routes : path info
