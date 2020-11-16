1. By default, NgModules are eagerly loaded, which means that as soon as the app loads, so do all the NgModules, whether or not they are immediately necessary. 
2. For large apps with lots of routes, consider lazy loading—a design pattern that loads NgModules as needed. 
3. Lazy loading helps keep initial bundle sizes smaller, which in turn helps decrease load times.
