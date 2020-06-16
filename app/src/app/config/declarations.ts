import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NMapComponent } from '../n-components/nMapComponent/n-map.component';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';


window['neutrinos'] = {
  environments: environment
}

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-rolesComponent
import { rolesComponent } from '../components/rolesComponent/roles.component';
//CORE_REFERENCE_IMPORT-companyinfoComponent
import { companyinfoComponent } from '../components/companyinfoComponent/companyinfo.component';
//CORE_REFERENCE_IMPORT-talentinformation2Component
import { talentinformation2Component } from '../components/talentinformation2Component/talentinformation2.component';
//CORE_REFERENCE_IMPORT-talentinformationComponent
import { talentinformationComponent } from '../components/talentinformationComponent/talentinformation.component';
//CORE_REFERENCE_IMPORT-headerComponent
import { headerComponent } from '../components/headerComponent/header.component';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/homeComponent/home.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => startupService.getDataSource();
}

/**
*bootstrap for @NgModule
*/
export const appBootstrap: any = [
  LayoutComponent,
];


/**
*Entry Components for @NgModule
*/
export const appEntryComponents: any = [
  //CORE_REFERENCE_PUSH_TO_ENTRY_ARRAY
];

/**
*declarations for @NgModule
*/
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  NMapComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-rolesComponent
rolesComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-companyinfoComponent
companyinfoComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-talentinformation2Component
talentinformation2Component,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-talentinformationComponent
talentinformationComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-headerComponent
headerComponent,
//CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
homeComponent,

];

/**
* provider for @NgModuke
*/
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY

];

/**
* Routes available for bApp
*/

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [{path: 'home', component: homeComponent},{path: 'talent', component: talentinformationComponent},{path: 'talent2', component: talentinformation2Component},{path: 'companyinfo', component: companyinfoComponent},{path: 'roles', component: rolesComponent},{path: '', redirectTo: '/home', pathMatch: 'full'},{path: '**', component: PageNotFoundComponent}]
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
