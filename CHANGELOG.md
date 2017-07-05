## Changelog

- 20170705 
  - rxjs 5.4.2 fixes the typescript 2.4.1 lint problem
  - cleanup some ```ng lint``` "problems"
  - ad some e2e and spec tests   
- 20170704 
  - add Greenkeeper and Travis CI (also Bluemix DevOps) 
- 20170630 
  - detach from fork jelbourn/material2-app because its not active maintained anymore [jelbourn comment](https://github.com/jelbourn/material2-app/pull/47#issuecomment-305238701)  
  - update to Angular 4.2.5 and material2 beta7
  - rxjs 5.x with typescript 2.4.x problem [rxjs issue 2539](https://github.com/ReactiveX/rxjs/issues/2539) workaround in tsconfig.json 
- 20170531 
  - update dependencies 
  - material@2.0.0-beta.6
  - replace deprecated import of MaterialModule  
    (-> split to seperate import for each componet)
- 20170515 
  - update to @angular/cli 1.0.3 , Angular 4.1.2 &  @angular/material@2.0.0-beta.5
- 20170428 
  - update to _@angular/cli 1.0.1 & Angular 4.1.0_
  - update to _@angular/material@2.0.0-beta.3_
  - deprecated use of `<md-input>` and `<md-sidenav-layout>` replaced with `<md-input-container>` and `<md-sidenav-container>` 
  - theming as described in https://material.angular.io/guide/theming  including Multiple themes and theme for overlay-based components
  - some code cleaning (e.g.`<md-icon>` use, css file sorted, ...) 

