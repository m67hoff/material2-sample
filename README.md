# material2-app

[![Greenkeeper badge](https://badges.greenkeeper.io/m67hoff/material2-sample.svg)](https://greenkeeper.io/)
Simple app that consumes Angular Material 2 components. Built with the `angular-cli`.

NOTE: This is an updated version of the original:
https://github.com/jelbourn/material2-app


**See it live:**  http://material2-sample.eu-de.mybluemix.net

#### local install:
```
git clone https://github.com/m67hoff/material2-sample
cd material2-sample
npm i
ng s
```
#### Changelog to original:
- create my own branch _mhoff_ (for testing and to maintain pull request)

- update to _@angular/cli 1.0.1 & Angular 4.1.0_
- update to _@angular/material@2.0.0-beta.3_
  - deprecated use of `<md-input>` and `<md-sidenav-layout>` replaced with `<md-input-container>` and `<md-sidenav-container>` 
  - theming as described in https://material.angular.io/guide/theming  including Multiple themes and theme for overlay-based components
- some code cleaning (e.g.`<md-icon>` use, css file sorted, ...) 
- update to _@angular/cli 1.0.3_ , Angular 4.1.2_ &  _@angular/material@2.0.0-beta.5_
- update dependencies & test with material@2.0.0-beta.6
- replace deprecated import of MaterialModule  (-> split to seperate import for each componet)
- 20170630 detach from fork jelbourn/material2-app because its not active [jelbourn comment](https://github.com/jelbourn/material2-app/pull/47#issuecomment-305238701) 
- 20170630 update to Angular 4.2.5 and material2 beta7  

#### ToDo
- check if rxjs 5.x typescript 2.4.x problem still exists [rxjs issue 2539](https://github.com/ReactiveX/rxjs/issues/2539)

---
[![Dependencies Status](https://david-dm.org/m67hoff/material2-sample.svg)](https://david-dm.org/m67hoff/material2-sample)
[![devDependencies Status](https://david-dm.org/m67hoff/material2-sample/dev-status.svg)](https://david-dm.org/m67hoff/material2-sample?type=dev)
