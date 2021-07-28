(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-menu-menu-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-split-pane>\n  <ion-menu contentId=\"content\">\n \n    <ion-header>\n      <ion-toolbar color=\"tertiary\">\n        <ion-title><b>C.H.E.I.R.R.S.</b> Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n \n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n          <ion-item\n            [routerLink]=\"p.url\"\n            routerDirection=\"root\"\n            [class.active-item]=\"selectedPath.startsWith(p.url)\"\n          >\n          <i class=\"fa fa-industry\"></i>\n            <ion-icon color=\"tertiary\" slot=\"start\" [name]=\"p.icon\"></ion-icon>\n            \n            <ion-text color=\"secondary\">\n            <ion-label>\n              <b>{{ p.title }}</b>\n            </ion-label>\n          </ion-text>\n          </ion-item>\n        </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n\n  <ion-router-outlet id=\"content\" main></ion-router-outlet>\n</ion-split-pane>");

/***/ }),

/***/ "./src/app/pages/menu/menu.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.module.ts ***!
  \*******************************************/
/*! exports provided: MenuPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPageModule", function() { return MenuPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu.page */ "./src/app/pages/menu/menu.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};







var routes = [
    {
        path: '',
        component: _menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"],
        children: [
            {
                path: 'main',
                loadChildren: '../main/main.module#MainPageModule'
            },
            { path: 'bpdi/createcontracttype', loadChildren: '../createcontracttype/createcontracttype.module#CreatecontracttypePageModule' },
            { path: 'bpdi/createbusinessprocesstype', loadChildren: '../createbusinessprocesstype/createbusinessprocesstype.module#CreatebusinessprocesstypePageModule' },
            { path: 'bpdi/createcontract', loadChildren: '../createcontract/createcontract.module#CreatecontractPageModule' },
            { path: 'bpdi/rcommencecontract', loadChildren: '../rcommencecontract/rcommencecontract.module#RcommencecontractPageModule' },
            { path: 'bpdi/rcommencebusprocess', loadChildren: '../rcommencebusprocess/rcommencebusprocess.module#RcommencebusprocessPageModule' },
            { path: 'bpdi/listcontracttypes', loadChildren: '../listcontracttypes/listcontracttypes.module#ListcontracttypesPageModule' },
            { path: 'bpdi/listcurrentandpendingcontracts', loadChildren: '../listcurrentandpendingcontracts/listcurrentandpendingcontracts.module#ListcurrentandpendingcontractsPageModule' },
            { path: 'bpdi/listbusprocesstypes', loadChildren: '../listbusprocesstypes/listbusprocesstypes.module#ListbusprocesstypesPageModule' },
            { path: 'bpdi/listcurrentbusprocesses', loadChildren: '../listcurrentbusprocesses/listcurrentbusprocesses.module#ListcurrentbusprocessesPageModule' },
            { path: 'bpdi/trackaprocess', loadChildren: '../trackaprocess/trackaprocess.module#TrackaprocessPageModule' },
            {
                path: 'bpdi',
                loadChildren: '../bpdi/bpdi.module#BpdiPageModule'
            },
            { path: 'riskmngmnt/riskelements', loadChildren: '../riskelements/riskelements.module#RiskelementsPageModule' },
            { path: 'riskmngmnt/riskelementsinternal', loadChildren: '../riskelementsinternal/riskelementsinternal.module#RiskelementsinternalPageModule' },
            { path: 'riskmngmnt/sovereignandinvestorrisk', loadChildren: '../sovereignandinvestorrisk/sovereignandinvestorrisk.module#SovereignandinvestorriskPageModule' },
            { path: 'riskmngmnt/financialrisk', loadChildren: '../financialrisk/financialrisk.module#FinancialriskPageModule' },
            { path: 'riskmngmnt/developmentrisk', loadChildren: '../developmentrisk/developmentrisk.module#DevelopmentriskPageModule' },
            { path: 'riskmngmnt/assetmngmntrisk', loadChildren: '../assetmngmntrisk/assetmngmntrisk.module#AssetmngmntriskPageModule' },
            { path: 'riskmngmnt/tenancymngmntrisk', loadChildren: '../tenancymngmntrisk/tenancymngmntrisk.module#TenancymngmntriskPageModule' },
            { path: 'riskmngmnt/workshoprisk', loadChildren: '../workshoprisk/workshoprisk.module#WorkshopriskPageModule' },
            { path: 'riskmngmnt/whsrisk', loadChildren: '../whsrisk/whsrisk.module#WhsriskPageModule' },
            { path: 'riskmngmnt/otherrisk', loadChildren: '../otherrisk/otherrisk.module#OtherriskPageModule' },
            { path: 'riskmngmnt/employeerelationsrisk', loadChildren: '../employeerelationsrisk/employeerelationsrisk.module#EmployeerelationsriskPageModule' },
            { path: 'riskmngmnt/riskanalysis', loadChildren: '../riskanalysis/riskanalysis.module#RiskanalysisPageModule' },
            { path: 'riskmngmnt/datasecurityaudit', loadChildren: '../datasecurityaudit/datasecurityaudit.module#DatasecurityauditPageModule' },
            { path: 'riskmngmnt/riskmitigation', loadChildren: '../riskmitigation/riskmitigation.module#RiskmitigationPageModule' },
            { path: 'riskmngmnt/risknotifications', loadChildren: '../risknotifications/risknotifications.module#RisknotificationsPageModule' },
            { path: 'riskmngmnt/emergingrisks', loadChildren: '../emergingrisks/emergingrisks.module#EmergingrisksPageModule' },
            { path: 'riskmngmnt/risktolerances', loadChildren: '../risktolerances/risktolerances.module#RisktolerancesPageModule' },
            { path: 'riskmngmnt/riskmngmntplan', loadChildren: '../riskmngmntplan/riskmngmntplan.module#RiskmngmntplanPageModule' },
            { path: 'riskmngmnt/stratweaknessesrskmngmnt', loadChildren: '../stratweaknessesrskmngmnt/stratweaknessesrskmngmnt.module#StratweaknessesrskmngmntPageModule' },
            { path: 'riskmngmnt/stratthreatsrskmngmnt', loadChildren: '../stratthreatsrskmngmnt/stratthreatsrskmngmnt.module#StratthreatsrskmngmntPageModule' },
            { path: 'riskmngmnt/rskmngmntcommntyrptationrisk', loadChildren: '../rskmngmntcommntyrptationrisk/rskmngmntcommntyrptationrisk.module#RskmngmntcommntyrptationriskPageModule' },
            {
                path: 'riskmngmnt',
                loadChildren: '../riskmngmnt/riskmngmnt.module#RiskmngmntPageModule'
            },
            { path: 'property/registerproperty', loadChildren: '../registerproperty/registerproperty.module#RegisterpropertyPageModule' },
            { path: 'property/importregisterwebprop', loadChildren: '../importregisterwebprop/importregisterwebprop.module#ImportregisterwebpropPageModule' },
            { path: 'property/searchprops', loadChildren: '../searchprops/searchprops.module#SearchpropsPageModule' },
            { path: 'property/searchproptxes', loadChildren: '../searchproptxes/searchproptxes.module#SearchproptxesPageModule' },
            { path: 'property/searchowners', loadChildren: '../searchowners/searchowners.module#SearchownersPageModule' },
            { path: 'property/schmchamenitiesbyprop', loadChildren: '../schmchamenitiesbyprop/schmchamenitiesbyprop.module#SchmchamenitiesbypropPageModule' },
            { path: 'property/searchrepmainthistbyprop', loadChildren: '../searchrepmainthistbyprop/searchrepmainthistbyprop.module#SearchrepmainthistbypropPageModule' },
            { path: 'property/searchtenantsbyprop', loadChildren: '../searchtenantsbyprop/searchtenantsbyprop.module#SearchtenantsbypropPageModule' },
            { path: 'property/searchdocsbyprop', loadChildren: '../searchdocsbyprop/searchdocsbyprop.module#SearchdocsbypropPageModule' },
            { path: 'property/keyregisterproperty', loadChildren: '../keyregisterproperty/keyregisterproperty.module#KeyregisterpropertyPageModule' },
            { path: 'property/filing', loadChildren: '../filing/filing.module#FilingPageModule' },
            { path: 'property/linktoconveyit', loadChildren: '../linktoconveyit/linktoconveyit.module#LinktoconveyitPageModule' },
            { path: 'property/searchacctsrecordsbyprop', loadChildren: '../searchacctsrecordsbyprop/searchacctsrecordsbyprop.module#SearchacctsrecordsbypropPageModule' },
            { path: 'property/propertyvaluessale', loadChildren: '../propertyvaluessale/propertyvaluessale.module#PropertyvaluessalePageModule' },
            { path: 'property/propertyvaluesrental', loadChildren: '../propertyvaluesrental/propertyvaluesrental.module#PropertyvaluesrentalPageModule' },
            {
                path: 'property',
                loadChildren: '../property/property.module#PropertyPageModule'
            },
            { path: 'strategicplanning/strategicswotanalysis', loadChildren: '../strategicswotanalysis/strategicswotanalysis.module#StrategicswotanalysisPageModule' },
            { path: 'strategicplanning/strategicopportunities', loadChildren: '../strategicopportunities/strategicopportunities.module#StrategicopportunitiesPageModule' },
            { path: 'strategicplanning/strategicthreats', loadChildren: '../strategicthreats/strategicthreats.module#StrategicthreatsPageModule' },
            { path: 'strategicplanning/strategicstrengths', loadChildren: '../strategicstrengths/strategicstrengths.module#StrategicstrengthsPageModule' },
            { path: 'strategicplanning/strategicweaknesses', loadChildren: '../strategicweaknesses/strategicweaknesses.module#StrategicweaknessesPageModule' },
            { path: 'strategicplanning/strategicplan', loadChildren: '../strategicplan/strategicplan.module#StrategicplanPageModule' },
            { path: 'strategicplanning/stratoperationalplanning', loadChildren: '../stratoperationalplanning/stratoperationalplanning.module#StratoperationalplanningPageModule' },
            { path: 'strategicplanning/stratbusinessplanning', loadChildren: '../stratbusinessplanning/stratbusinessplanning.module#StratbusinessplanningPageModule' },
            { path: 'strategicplanning/strategicvision', loadChildren: '../strategicvision/strategicvision.module#StrategicvisionPageModule' },
            { path: 'strategicplanning/strategicmission', loadChildren: '../strategicmission/strategicmission.module#StrategicmissionPageModule' },
            { path: 'strategicplanning/strategicconstitution', loadChildren: '../strategicconstitution/strategicconstitution.module#StrategicconstitutionPageModule' },
            {
                path: 'strategicplanning',
                loadChildren: '../strategicplanning/strategicplanning.module#StrategicplanningPageModule'
            },
            { path: 'rdevelop/develproposals', loadChildren: '../develproposals/develproposals.module#DevelproposalsPageModule' },
            { path: 'rdevelop/redevelproposals', loadChildren: '../redevelproposals/redevelproposals.module#RedevelproposalsPageModule' },
            { path: 'rdevelop/developapprovals', loadChildren: '../developapprovals/developapprovals.module#DevelopapprovalsPageModule' },
            { path: 'rdevelop/redevelopapprovals', loadChildren: '../redevelopapprovals/redevelopapprovals.module#RedevelopapprovalsPageModule' },
            { path: 'rdevelop/rdevelsumissionstogovtitleholders', loadChildren: '../rdevelsumissionstogovtitleholders/rdevelsumissionstogovtitleholders.module#RdevelsumissionstogovtitleholdersPageModule' },
            { path: 'rdevelop/rdevelapprovalsfromgovtitleholders', loadChildren: '../rdevelapprovalsfromgovtitleholders/rdevelapprovalsfromgovtitleholders.module#RdevelapprovalsfromgovtitleholdersPageModule' },
            { path: 'rdevelop/projectscheduling', loadChildren: '../projectscheduling/projectscheduling.module#ProjectschedulingPageModule' },
            { path: 'rdevelop/projectbudgeting', loadChildren: '../projectbudgeting/projectbudgeting.module#ProjectbudgetingPageModule' },
            { path: 'rdevelop/projectdesign', loadChildren: '../projectdesign/projectdesign.module#ProjectdesignPageModule' },
            { path: 'rdevelop/rdevelopitems', loadChildren: '../rdevelopitems/rdevelopitems.module#RdevelopitemsPageModule' },
            { path: 'rdevelop/rdevelopjobs', loadChildren: '../rdevelopjobs/rdevelopjobs.module#RdevelopjobsPageModule' },
            { path: 'rdevelop/rdeveloppurchreq', loadChildren: '../rdeveloppurchreq/rdeveloppurchreq.module#RdeveloppurchreqPageModule' },
            { path: 'rdevelop/rdeveloppurchorders', loadChildren: '../rdeveloppurchorders/rdeveloppurchorders.module#RdeveloppurchordersPageModule' },
            { path: 'rdevelop/rdevelopfirstaid', loadChildren: '../rdevelopfirstaid/rdevelopfirstaid.module#RdevelopfirstaidPageModule' },
            { path: 'rdevelop/rdevelopqualassurance', loadChildren: '../rdevelopqualassurance/rdevelopqualassurance.module#RdevelopqualassurancePageModule' },
            { path: 'rdevelop/rdevelopteamboards', loadChildren: '../rdevelopteamboards/rdevelopteamboards.module#RdevelopteamboardsPageModule' },
            { path: 'rdevelop/rdevelopprodschedules', loadChildren: '../rdevelopprodschedules/rdevelopprodschedules.module#RdevelopprodschedulesPageModule' },
            { path: 'rdevelop/rdevelopconstrrequirements', loadChildren: '../rdevelopconstrrequirements/rdevelopconstrrequirements.module#RdevelopconstrrequirementsPageModule' },
            { path: 'rdevelop/projectlegalities', loadChildren: '../projectlegalities/projectlegalities.module#ProjectlegalitiesPageModule' },
            { path: 'rdevelop/projectriskanalysis', loadChildren: '../projectriskanalysis/projectriskanalysis.module#ProjectriskanalysisPageModule' },
            { path: 'rdevelop/projectfinancialanalysis', loadChildren: '../projectfinancialanalysis/projectfinancialanalysis.module#ProjectfinancialanalysisPageModule' },
            { path: 'rdevelop/potentialdevelprojects', loadChildren: '../potentialdevelprojects/potentialdevelprojects.module#PotentialdevelprojectsPageModule' },
            { path: 'rdevelop/potentialredevelprojects', loadChildren: '../potentialredevelprojects/potentialredevelprojects.module#PotentialredevelprojectsPageModule' },
            { path: 'rdevelop/historyofdevelopments', loadChildren: '../historyofdevelopments/historyofdevelopments.module#HistoryofdevelopmentsPageModule' },
            { path: 'rdevelop/historyofredevfelopments', loadChildren: '../historyofredevelopments/historyofredevelopments.module#HistoryofredevelopmentsPageModule' },
            { path: 'rdevelop/combinedprojects', loadChildren: '../combinedprojects/combinedprojects.module#CombinedprojectsPageModule' },
            { path: 'rdevelop/combinedresources', loadChildren: '../combinedresources/combinedresources.module#CombinedresourcesPageModule' },
            { path: 'rdevelop/rdvlpfundingsubmissions', loadChildren: '../rdvlpfundingsubmissions/rdvlpfundingsubmissions.module#RdvlpfundingsubmissionsPageModule' },
            { path: 'rdevelop/filing', loadChildren: '../filing/filing.module#FilingPageModule' },
            {
                path: 'rdevelop',
                loadChildren: '../rdevelop/rdevelop.module#RdevelopPageModule'
            },
            { path: 'sales/agencyagreement', loadChildren: '../agencyagreement/agencyagreement.module#AgencyagreementPageModule' },
            { path: 'sales/weblistings', loadChildren: '../weblistings/weblistings.module#WeblistingsPageModule' },
            { path: 'sales/advsignage', loadChildren: '../advsignage/advsignage.module#AdvsignagePageModule' },
            { path: 'sales/openhouses', loadChildren: '../openhouses/openhouses.module#OpenhousesPageModule' },
            { path: 'sales/privateinspections', loadChildren: '../privateinspections/privateinspections.module#PrivateinspectionsPageModule' },
            { path: 'sales/auctions', loadChildren: '../auctions/auctions.module#AuctionsPageModule' },
            { path: 'sales/salestrustaccting', loadChildren: '../salestrustaccting/salestrustaccting.module#SalestrustacctingPageModule' },
            { path: 'sales/beforeexchange', loadChildren: '../beforeexchange/beforeexchange.module#BeforeexchangePageModule' },
            { path: 'sales/exchangecontracts', loadChildren: '../exchangecontracts/exchangecontracts.module#ExchangecontractsPageModule' },
            { path: 'sales/betweenexchsettlement', loadChildren: '../betweenexchsettlement/betweenexchsettlement.module#BetweenexchsettlementPageModule' },
            { path: 'sales/settlement', loadChildren: '../settlement/settlement.module#SettlementPageModule' },
            { path: 'sales/authoritytoaccount', loadChildren: '../authoritytoaccount/authoritytoaccount.module#AuthoritytoaccountPageModule' },
            { path: 'sales/salescommission', loadChildren: '../salescommission/salescommission.module#SalescommissionPageModule' },
            { path: 'sales/linktoconveyitsales', loadChildren: '../linktoconveyitsales/linktoconveyitsales.module#LinktoconveyitsalesPageModule' },
            { path: 'sales/keyregistersales', loadChildren: '../keyregistersales/keyregistersales.module#KeyregistersalesPageModule' },
            { path: 'sales/customercomplaint', loadChildren: '../customercomplaint/customercomplaint.module#CustomercomplaintPageModule' },
            { path: 'sales/mortgageagreement', loadChildren: '../mortgageagreement/mortgageagreement.module#MortgageagreementPageModule' },
            { path: 'sales/shequreceiveapplication', loadChildren: '../shequreceiveapplication/shequreceiveapplication.module#ShequreceiveapplicationPageModule' },
            { path: 'sales/shequmakeoffertoapplicant', loadChildren: '../shequmakeoffertoapplicant/shequmakeoffertoapplicant.module#ShequmakeoffertoapplicantPageModule' },
            { path: 'sales/filing', loadChildren: '../filing/filing.module#FilingPageModule' },
            {
                path: 'sales',
                loadChildren: '../sales/sales.module#SalesPageModule'
            },
            { path: 'crm/registercustomer', loadChildren: '../registercustomer/registercustomer.module#RegistercustomerPageModule' },
            { path: 'crm/importregwebcustomer', loadChildren: '../importregwebcustomer/importregwebcustomer.module#ImportregwebcustomerPageModule' },
            { path: 'crm/searchcustomer', loadChildren: '../searchcustomer/searchcustomer.module#SearchcustomerPageModule' },
            { path: 'crm/searchcusttxes', loadChildren: '../searchcusttxes/searchcusttxes.module#SearchcusttxesPageModule' },
            { path: 'crm/searchmatchbuyers', loadChildren: '../searchmatchbuyers/searchmatchbuyers.module#SearchmatchbuyersPageModule' },
            { path: 'crm/searchsellers', loadChildren: '../searchsellers/searchsellers.module#SearchsellersPageModule' },
            { path: 'crm/schmatchownerstoprops', loadChildren: '../schmatchownerstoprops/schmatchownerstoprops.module#SchmatchownerstopropsPageModule' },
            { path: 'crm/schmatchleadstoprops', loadChildren: '../schmatchleadstoprops/schmatchleadstoprops.module#SchmatchleadstopropsPageModule' },
            { path: 'crm/schmtchllordstotenantscrm', loadChildren: '../schmtchllordstotenantscrm/schmtchllordstotenantscrm.module#SchmtchllordstotenantscrmPageModule' },
            { path: 'crm/schmatchinvestorstoprops', loadChildren: '../schmatchinvestorstoprops/schmatchinvestorstoprops.module#SchmatchinvestorstopropsPageModule' },
            { path: 'crm/schmatchtenantstoprops', loadChildren: '../schmatchtenantstoprops/schmatchtenantstoprops.module#SchmatchtenantstopropsPageModule' },
            { path: 'crm/marketnets', loadChildren: '../marketnets/marketnets.module#MarketnetsPageModule' },
            { path: 'crm/openhouses', loadChildren: '../openhouses/openhouses.module#OpenhousesPageModule' },
            { path: 'crm/privateinspections', loadChildren: '../privateinspections/privateinspections.module#PrivateinspectionsPageModule' },
            { path: 'crm/auctions', loadChildren: '../auctions/auctions.module#AuctionsPageModule' },
            { path: 'crm/customercomplaint', loadChildren: '../customercomplaint/customercomplaint.module#CustomercomplaintPageModule' },
            { path: 'crm/registerlead', loadChildren: '../registerlead/registerlead.module#RegisterleadPageModule' },
            { path: 'crm/filing', loadChildren: '../filing/filing.module#FilingPageModule' },
            {
                path: 'crm',
                loadChildren: '../crm/crm.module#CrmPageModule'
            },
            { path: 'llordsinvstrs/registerllords', loadChildren: '../registerllords/registerllords.module#RegisterllordsPageModule' },
            { path: 'llordsinvstrs/registerinvestors', loadChildren: '../registerinvestors/registerinvestors.module#RegisterinvestorsPageModule' },
            { path: 'llordsinvstrs/registeragreementtolet', loadChildren: '../registeragreementtolet/registeragreementtolet.module#RegisteragreementtoletPageModule' },
            { path: 'llordsinvstrs/registerotheragreement', loadChildren: '../registerotheragreement/registerotheragreement.module#RegisterotheragreementPageModule' },
            { path: 'llordsinvstrs/searchowners', loadChildren: '../searchowners/searchowners.module#SearchownersPageModule' },
            { path: 'llordsinvstrs/schmatchinvestorstoprops', loadChildren: '../schmatchinvestorstoprops/schmatchinvestorstoprops.module#SchmatchinvestorstopropsPageModule' },
            { path: 'llordsinvstrs/searchrepmainthistbyprop', loadChildren: '../searchrepmainthistbyprop/searchrepmainthistbyprop.module#SearchrepmainthistbypropPageModule' },
            { path: 'llordsinvstrs/marketvaluebyproperty', loadChildren: '../marketvaluebyproperty/marketvaluebyproperty.module#MarketvaluebypropertyPageModule' },
            { path: 'llordsinvstrs/rentalvaluebyproperty', loadChildren: '../rentalvaluebyproperty/rentalvaluebyproperty.module#RentalvaluebypropertyPageModule' },
            { path: 'llordsinvstrs/amenitiesbyproperty', loadChildren: '../amenitiesbyproperty/amenitiesbyproperty.module#AmenitiesbypropertyPageModule' },
            { path: 'llordsinvstrs/importregpropertytolet', loadChildren: '../importregpropertytolet/importregpropertytolet.module#ImportregpropertytoletPageModule' },
            { path: 'llordsinvstrs/searchextenantsofproperty', loadChildren: '../searchextenantsofproperty/searchextenantsofproperty.module#SearchextenantsofpropertyPageModule' },
            { path: 'llordsinvstrs/schmchllordstotenants', loadChildren: '../schmchllordstotenants/schmchllordstotenants.module#SchmchllordstotenantsPageModule' },
            { path: 'llordsinvstrs/searchacctsrecordsbyprop', loadChildren: '../searchacctsrecordsbyprop/searchacctsrecordsbyprop.module#SearchacctsrecordsbypropPageModule' },
            { path: 'llordsinvstrs/searchdocsbyprop', loadChildren: '../searchdocsbyprop/searchdocsbyprop.module#SearchdocsbypropPageModule' },
            { path: 'llordsinvstrs/linktoconveyit', loadChildren: '../linktoconveyit/linktoconveyit.module#LinktoconveyitPageModule' },
            { path: 'llordsinvstrs/keyregisterllords', loadChildren: '../keyregisterllords/keyregisterllords.module#KeyregisterllordsPageModule' },
            { path: 'llordsinvstrs/llordinvestorcomplaint', loadChildren: '../llordinvestorcomplaint/llordinvestorcomplaint.module#LlordinvestorcomplaintPageModule' },
            { path: 'llordsinvstrs/filingllords', loadChildren: '../filingllords/filingllords.module#FilingllordsPageModule' },
            {
                path: 'llordsinvstrs',
                loadChildren: '../llordsinvstrs/llordsinvstrs.module#LlordsinvstrsPageModule'
            },
            { path: 'sharedequity/receiveshequmortgepayment', loadChildren: '../receiveshequmortgepayment/receiveshequmortgepayment.module#ReceiveshequmortgepaymentPageModule' },
            { path: 'sharedequity/issuereceiptmtgepaymntshequ', loadChildren: '../issuereceiptmtgepaymntshequ/issuereceiptmtgepaymntshequ.module#IssuereceiptmtgepaymntshequPageModule' },
            { path: 'sharedequity/refinanceshequmtge', loadChildren: '../refinanceshequmtge/refinanceshequmtge.module#RefinanceshequmtgePageModule' },
            { path: 'sharedequity/closemtgeagrmntshequ', loadChildren: '../closemtgeagrmntshequ/closemtgeagrmntshequ.module#ClosemtgeagrmntshequPageModule' },
            { path: 'sharedequity/contactbyshequowner', loadChildren: '../contactbyshequowner/contactbyshequowner.module#ContactbyshequownerPageModule' },
            { path: 'sharedequity/complaintbyshequowners', loadChildren: '../complaintbyshequowners/complaintbyshequowners.module#ComplaintbyshequownersPageModule' },
            { path: 'sharedequity/complaintagainstshequowners', loadChildren: '../complaintagainstshequowners/complaintagainstshequowners.module#ComplaintagainstshequownersPageModule' },
            { path: 'sharedequity/corroandcommswithshequowner', loadChildren: '../corroandcommswithshequowner/corroandcommswithshequowner.module#CorroandcommswithshequownerPageModule' },
            { path: 'sharedequity/searchshequownersbyproperty', loadChildren: '../searchshequownersbyproperty/searchshequownersbyproperty.module#SearchshequownersbypropertyPageModule' },
            { path: 'sharedequity/searchshequownersbyname', loadChildren: '../searchshequownersbyname/searchshequownersbyname.module#SearchshequownersbynamePageModule' },
            { path: 'sharedequity/searchdocsbyshequowner', loadChildren: '../searchdocsbyshequowner/searchdocsbyshequowner.module#SearchdocsbyshequownerPageModule' },
            { path: 'sharedequity/shequregistershequitymtgageagrmnt', loadChildren: '../shequregistershequitymtgageagrmnt/shequregistershequitymtgageagrmnt.module#ShequregistershequitymtgageagrmntPageModule' },
            { path: 'sharedequity/searchdocsbyshequproperty', loadChildren: '../searchdocsbyshequproperty/searchdocsbyshequproperty.module#SearchdocsbyshequpropertyPageModule' },
            { path: 'sharedequity/filingshequ', loadChildren: '../filingshequ/filingshequ.module#FilingshequPageModule' },
            {
                path: 'sharedequity',
                loadChildren: '../sharedequity/sharedequity.module#SharedequityPageModule'
            },
            { path: 'letting/registeragreementtolet', loadChildren: '../registeragreementtolet/registeragreementtolet.module#RegisteragreementtoletPageModule' },
            { path: 'letting/importregpropertytolet', loadChildren: '../importregpropertytolet/importregpropertytolet.module#ImportregpropertytoletPageModule' },
            { path: 'letting/searchprops', loadChildren: '../searchprops/searchprops.module#SearchpropsPageModule' },
            { path: 'letting/searchproptxes', loadChildren: '../searchproptxes/searchproptxes.module#SearchproptxesPageModule' },
            { path: 'letting/searchowners', loadChildren: '../searchowners/searchowners.module#SearchownersPageModule' },
            { path: 'letting/searchrepmainthistbyprop', loadChildren: '../searchrepmainthistbyprop/searchrepmainthistbyprop.module#SearchrepmainthistbypropPageModule' },
            { path: 'letting/searchextenantsofproperty', loadChildren: '../searchextenantsofproperty/searchextenantsofproperty.module#SearchextenantsofpropertyPageModule' },
            { path: 'letting/regapplicationforlease', loadChildren: '../regapplicationforlease/regapplicationforlease.module#RegapplicationforleasePageModule' },
            { path: 'letting/checkapplicantsbackgroundbyproperty', loadChildren: '../checkapplicantsbackgroundbyproperty/checkapplicantsbackgroundbyproperty.module#CheckapplicantsbackgroundbypropertyPageModule' },
            { path: 'letting/allocations', loadChildren: '../allocations/allocations.module#AllocationsPageModule' },
            { path: 'letting/offertotenant', loadChildren: '../offertotenant/offertotenant.module#OffertotenantPageModule' },
            { path: 'letting/signlease', loadChildren: '../signlease/signlease.module#SignleasePageModule' },
            { path: 'letting/chargebondandrentinadvance', loadChildren: '../chargebondandrentinadvance/chargebondandrentinadvance.module#ChargebondandrentinadvancePageModule' },
            { path: 'letting/receivebondandrent', loadChildren: '../receivebondandrent/receivebondandrent.module#ReceivebondandrentPageModule' },
            { path: 'letting/setuprentcharging', loadChildren: '../setuprentcharging/setuprentcharging.module#SetuprentchargingPageModule' },
            { path: 'letting/recordactionsfortribhrng', loadChildren: '../recordactionsfortribhrng/recordactionsfortribhrng.module#RecordactionsfortribhrngPageModule' },
            { path: 'letting/preparefortribunal', loadChildren: '../preparefortribunal/preparefortribunal.module#PreparefortribunalPageModule' },
            { path: 'letting/reportaftertribunal', loadChildren: '../reportaftertribunal/reportaftertribunal.module#ReportaftertribunalPageModule' },
            { path: 'letting/arrearsbyprop', loadChildren: '../arrearsbyprop/arrearsbyprop.module#ArrearsbypropPageModule' },
            { path: 'letting/arrearsagreementsbyprop', loadChildren: '../arrearsagreementsbyprop/arrearsagreementsbyprop.module#ArrearsagreementsbypropPageModule' },
            { path: 'letting/keyregisterletting', loadChildren: '../keyregisterletting/keyregisterletting.module#KeyregisterlettingPageModule' },
            { path: 'letting/leaseapplicantcomplaint', loadChildren: '../leaseapplicantcomplaint/leaseapplicantcomplaint.module#LeaseapplicantcomplaintPageModule' },
            { path: 'letting/filingletting', loadChildren: '../filingletting/filingletting.module#FilinglettingPageModule' },
            {
                path: 'letting',
                loadChildren: '../letting/letting.module#LettingPageModule'
            },
            { path: 'tenancymngmnt/propertyinspections', loadChildren: '../propertyinspections/propertyinspections.module#PropertyinspectionsPageModule' },
            { path: 'tenancymngmnt/reportdamagebytenant', loadChildren: '../reportdamagebytenant/reportdamagebytenant.module#ReportdamagebytenantPageModule' },
            { path: 'tenancymngmnt/reportpropcareissues', loadChildren: '../reportpropcareissues/reportpropcareissues.module#ReportpropcareissuesPageModule' },
            { path: 'tenancymngmnt/reportabandonedpremises', loadChildren: '../reportabandonedpremises/reportabandonedpremises.module#ReportabandonedpremisesPageModule' },
            { path: 'tenancymngmnt/complaint', loadChildren: '../complaint/complaint.module#ComplaintPageModule' },
            { path: 'tenancymngmntcomplaintbytenant', loadChildren: '../complaintbytenant/complaintbytenant.module#ComplaintbytenantPageModule' },
            { path: 'tenancymngmnt/corroandcommswithtenant', loadChildren: '../corroandcommswithtenant/corroandcommswithtenant.module#CorroandcommswithtenantPageModule' },
            { path: 'tenancymngmnt/searchtenantsbyprop', loadChildren: '../searchtenantsbyprop/searchtenantsbyprop.module#SearchtenantsbypropPageModule' },
            { path: 'tenancymngmnt/searchtenantsledgerbytenant', loadChildren: '../searchtenantsledgerbytenant/searchtenantsledgerbytenant.module#SearchtenantsledgerbytenantPageModule' },
            { path: 'tenancymngmnt/searchdocsbytenant', loadChildren: '../searchdocsbytenant/searchdocsbytenant.module#SearchdocsbytenantPageModule' },
            { path: 'tenancymngmnt/searcharrearsagreementsbytenant', loadChildren: '../searcharrearsagreementsbytenant/searcharrearsagreementsbytenant.module#SearcharrearsagreementsbytenantPageModule' },
            { path: 'tenancymngmnt/linktotica', loadChildren: '../linktotica/linktotica.module#LinktoticaPageModule' },
            { path: 'tenancymngmnt/recordactionsfortribhrng', loadChildren: '../recordactionsfortribhrng/recordactionsfortribhrng.module#RecordactionsfortribhrngPageModule' },
            { path: 'tenancymngmnt/preparefortribunal', loadChildren: '../preparefortribunal/preparefortribunal.module#PreparefortribunalPageModule' },
            { path: 'tenancymngmnt/reportaftertribunal', loadChildren: '../reportaftertribunal/reportaftertribunal.module#ReportaftertribunalPageModule' },
            { path: 'tenancymngmnt/keyregistertenmngmnt', loadChildren: '../keyregistertenmngmnt/keyregistertenmngmnt.module#KeyregistertenmngmntPageModule' },
            { path: 'tenancymngmnt/tenantcomplaint', loadChildren: '../tenantcomplaint/tenantcomplaint.module#TenantcomplaintPageModule' },
            { path: 'tenancymngmnt/maintreqtenmngmnt', loadChildren: '../maintreqtenmngmnt/maintreqtenmngmnt.module#MaintreqtenmngmntPageModule' },
            { path: 'tenancymngmnt/filingten', loadChildren: '../filingten/filingten.module#FilingtenPageModule' },
            {
                path: 'tenancymngmnt',
                loadChildren: '../tenancymngmnt/tenancymngmnt.module#TenancymngmntPageModule'
            },
            { path: 'assetmngmnt/rollingassetmaintbudgets', loadChildren: '../rollingassetmaintbudgets/rollingassetmaintbudgets.module#RollingassetmaintbudgetsPageModule' },
            { path: 'assetmngmnt/propertyinspections', loadChildren: '../maintenancescheduling/maintenancescheduling.module#MaintenanceschedulingPageModule' },
            { path: 'assetmngmnt/propertyinspections', loadChildren: '../propertyinspections/propertyinspections.module#PropertyinspectionsPageModule' },
            { path: 'assetmngmnt/summaryofpropertyissuesbyprop', loadChildren: '../summaryofpropertyissuesbyprop/summaryofpropertyissuesbyprop.module#SummaryofpropertyissuesbypropPageModule' },
            { path: 'assetmngmnt/searchprops', loadChildren: '../searchprops/searchprops.module#SearchpropsPageModule' },
            { path: 'assetmngmnt/searchproptxes', loadChildren: '../searchproptxes/searchproptxes.module#SearchproptxesPageModule' },
            { path: 'assetmngmnt/searchowners', loadChildren: '../searchowners/searchowners.module#SearchownersPageModule' },
            { path: 'assetmngmnt/searchrepmainthistbyprop', loadChildren: '../searchrepmainthistbyprop/searchrepmainthistbyprop.module#SearchrepmainthistbypropPageModule' },
            { path: 'assetmngmnt/searchtenantsbyprop', loadChildren: '../searchtenantsbyprop/searchtenantsbyprop.module#SearchtenantsbypropPageModule' },
            { path: 'assetmngmnt/searchacctsrecordsbyprop', loadChildren: '../searchacctsrecordsbyprop/searchacctsrecordsbyprop.module#SearchacctsrecordsbypropPageModule' },
            { path: 'assetmngmnt/searchdocsbyprop', loadChildren: '../searchdocsbyprop/searchdocsbyprop.module#SearchdocsbypropPageModule' },
            { path: 'assetmngmnt/receivemaintrequest', loadChildren: '../receivemaintrequest/receivemaintrequest.module#ReceivemaintrequestPageModule' },
            { path: 'assetmngmnt/issuemaintrequest', loadChildren: '../issuemaintrequest/issuemaintrequest.module#IssuemaintrequestPageModule' },
            { path: 'assetmngmnt/gathermaintenancequotes', loadChildren: '../gathermaintenancequotes/gathermaintenancequotes.module#GathermaintenancequotesPageModule' },
            { path: 'assetmngmnt/proposemaintsupplier', loadChildren: '../proposemaintsupplier/proposemaintsupplier.module#ProposemaintsupplierPageModule' },
            { path: 'assetmngmnt/issuepurchorder', loadChildren: '../issuepurchorder/issuepurchorder.module#IssuepurchorderPageModule' },
            { path: 'assetmngmnt/inspectwork', loadChildren: '../inspectwork/inspectwork.module#InspectworkPageModule' },
            { path: 'assetmngmnt/receivebillforwork', loadChildren: '../receivebillforwork/receivebillforwork.module#ReceivebillforworkPageModule' },
            { path: 'assetmngmnt/paybillforwork', loadChildren: '../paybillforwork/paybillforwork.module#PaybillforworkPageModule' },
            { path: 'assetmngmnt/searchsuppliers', loadChildren: '../searchsuppliers/searchsuppliers.module#SearchsuppliersPageModule' },
            { path: 'assetmngmnt/searchsuppliertxes', loadChildren: '../searchsuppliertxes/searchsuppliertxes.module#SearchsuppliertxesPageModule' },
            { path: 'assetmngmnt/keyregisterassets', loadChildren: '../keyregisterassets/keyregisterassets.module#KeyregisterassetsPageModule' },
            { path: 'assetmngmnt/maintenancecomplaint', loadChildren: '../maintenancecomplaint/maintenancecomplaint.module#MaintenancecomplaintPageModule' },
            { path: 'assetmngmnt/currentmaintquotes', loadChildren: '../currentmaintquotes/currentmaintquotes.module#CurrentmaintquotesPageModule' },
            { path: 'assetmngmnt/filingassets', loadChildren: '../filingassets/filingassets.module#FilingassetsPageModule' },
            {
                path: 'assetmngmnt',
                loadChildren: '../assetmngmnt/assetmngmnt.module#AssetmngmntPageModule'
            },
            { path: 'workshop/workshopordersrecd', loadChildren: '../workshopordersrecd/workshopordersrecd.module#WorkshopordersrecdPageModule' },
            { path: 'workshop/workshoppurchorders', loadChildren: '../workshoppurchorders/workshoppurchorders.module#WorkshoppurchordersPageModule' },
            { path: 'workshop/workshoppurchreq', loadChildren: '../workshoppurchreq/workshoppurchreq.module#WorkshoppurchreqPageModule' },
            { path: 'workshop/workshopfirstaid', loadChildren: '../workshopfirstaid/workshopfirstaid.module#WorkshopfirstaidPageModule' },
            { path: 'workshop/workshopqualassurance', loadChildren: '../workshopqualassurance/workshopqualassurance.module#WorkshopqualassurancePageModule' },
            { path: 'workshop/workshopteamboards', loadChildren: '../workshopteamboards/workshopteamboards.module#WorkshopteamboardsPageModule' },
            { path: 'workshop/workshopprodschedules', loadChildren: '../workshopprodschedules/workshopprodschedules.module#WorkshopprodschedulesPageModule' },
            { path: 'workshop/workshopproductionrequirements', loadChildren: '../workshopproductionrequirements/workshopproductionrequirements.module#WorkshopproductionrequirementsPageModule' },
            { path: 'workshop/workshoptrackshipmentsin', loadChildren: '../workshoptrackshipmentsin/workshoptrackshipmentsin.module#WorkshoptrackshipmentsinPageModule' },
            { path: 'workshop/workshoptrackshipmentsout', loadChildren: '../workshoptrackshipmentsout/workshoptrackshipmentsout.module#WorkshoptrackshipmentsoutPageModule' },
            { path: 'workshop/workshopprocesses', loadChildren: '../workshopprocesses/workshopprocesses.module#WorkshopprocessesPageModule' },
            { path: 'workshop/workshopinventory', loadChildren: '../workshopinventory/workshopinventory.module#WorkshopinventoryPageModule' },
            { path: 'workshop/factorymaintenance', loadChildren: '../factorymaintenance/factorymaintenance.module#FactorymaintenancePageModule' },
            { path: 'workshop/productcomplaintsrecd', loadChildren: '../productcomplaintsrecd/productcomplaintsrecd.module#ProductcomplaintsrecdPageModule' },
            { path: 'workshop/productcomplaintstosupplier', loadChildren: '../productcomplaintstosupplier/productcomplaintstosupplier.module#ProductcomplaintstosupplierPageModule' },
            { path: 'workshop/filingwkshp', loadChildren: '../filingwkshp/filingwkshp.module#FilingwkshpPageModule' },
            { path: 'workshop/workshopjobs', loadChildren: '../workshopjobs/workshopjobs.module#WorkshopjobsPageModule' },
            { path: 'workshop/workshopitems', loadChildren: '../workshopitems/workshopitems.module#WorkshopitemsPageModule' },
            { path: 'workshop/workshopassembliestoplevel', loadChildren: '../workshopassembliestoplevel/workshopassembliestoplevel.module#WorkshopassembliestoplevelPageModule' },
            { path: 'workshop/workshopassembliessecondlevel', loadChildren: '../workshopassembliessecondlevel/workshopassembliessecondlevel.module#WorkshopassembliessecondlevelPageModule' },
            { path: 'workshop/workshopassembliethirdlevel', loadChildren: '../workshopassembliethirdlevel/workshopassembliethirdlevel.module#WorkshopassembliethirdlevelPageModule' },
            { path: 'workshop/workshopassembliefourthlevel', loadChildren: '../workshopassembliefourthlevel/workshopassembliefourthlevel.module#WorkshopassembliefourthlevelPageModule' },
            { path: 'workshop/workshopassembliefifthlevel', loadChildren: '../workshopassembliefifthlevel/workshopassembliefifthlevel.module#WorkshopassembliefifthlevelPageModule' },
            { path: 'workshop/workshopassembliesixthlevel', loadChildren: '../workshopassembliesixthlevel/workshopassembliesixthlevel.module#WorkshopassembliesixthlevelPageModule' },
            { path: 'workshop/workshopengineeringanddesign', loadChildren: '../workshopengineeringanddesign/workshopengineeringanddesign.module#WorkshopengineeringanddesignPageModule' },
            {
                path: 'workshop',
                loadChildren: '../workshop/workshop.module#WorkshopPageModule'
            },
            { path: 'humanresources/receiveemplapplication', loadChildren: '../receiveemplapplication/receiveemplapplication.module#ReceiveemplapplicationPageModule' },
            { path: 'humanresources/receivesalesagentemplappl', loadChildren: '../receivesalesagentemplappl/receivesalesagentemplappl.module#ReceivesalesagentemplapplPageModule' },
            { path: 'humanresources/regemployee', loadChildren: '../regemployee/regemployee.module#RegemployeePageModule' },
            { path: 'humanresources/salesagent', loadChildren: '../salesagent/salesagent.module#SalesagentPageModule' },
            { path: 'humanresources/searchemployees', loadChildren: '../searchemployees/searchemployees.module#SearchemployeesPageModule' },
            { path: 'humanresources/searchemplandagentstxes', loadChildren: '../searchemplandagentstxes/searchemplandagentstxes.module#SearchemplandagentstxesPageModule' },
            { path: 'humanresources/searchsalesagents', loadChildren: '../searchsalesagents/searchsalesagents.module#SearchsalesagentsPageModule' },
            { path: 'humanresources/groups', loadChildren: '../groups/groups.module#GroupsPageModule' },
            { path: 'humanresources/teams', loadChildren: '../teams/teams.module#TeamsPageModule' }, { path: 'humanresources/salarypacksfringebenefits', loadChildren: '../salarypacksfringebenefits/salarypacksfringebenefits.module#SalarypacksfringebenefitsPageModule' },
            { path: 'humanresources/salescommission', loadChildren: '../salescommission/salescommission.module#SalescommissionPageModule' },
            { path: 'humanresources/payroll', loadChildren: '../payroll/payroll.module#PayrollPageModule' },
            { path: 'humanresources/employmentdutydescriptions', loadChildren: '../employmentdutydescriptions/employmentdutydescriptions.module#EmploymentdutydescriptionsPageModule' },
            { path: 'humanresources/searchdocsbyemply', loadChildren: '../searchdocsbyemply/searchdocsbyemply.module#SearchdocsbyemplyPageModule' },
            { path: 'humanresources/searchdocsbysalesagent', loadChildren: '../searchdocsbysalesagent/searchdocsbysalesagent.module#SearchdocsbysalesagentPageModule' },
            { path: 'humanresources/performancemngmnt', loadChildren: '../performancemngmnt/performancemngmnt.module#PerformancemngmntPageModule' },
            { path: 'humanresources/terminateagentoremployee', loadChildren: '../terminateagentoremployee/terminateagentoremployee.module#TerminateagentoremployeePageModule' },
            { path: 'humanresources/employmentapplicantcomplaint', loadChildren: '../employmentapplicantcomplaint/employmentapplicantcomplaint.module#EmploymentapplicantcomplaintPageModule' },
            { path: 'humanresources/employeecomplaint', loadChildren: '../employeecomplaint/employeecomplaint.module#EmployeecomplaintPageModule' },
            { path: 'humanresources/workshopsafetytraining', loadChildren: '../workshopsafetytraining/workshopsafetytraining.module#WorkshopsafetytrainingPageModule' },
            { path: 'humanresources/workshopinduction', loadChildren: '../workshopinduction/workshopinduction.module#WorkshopinductionPageModule' },
            { path: 'humanresources/hrworkshop', loadChildren: '../hrworkshop/hrworkshop.module#HrworkshopPageModule' },
            { path: 'humanresources/workshopqualificationsregister', loadChildren: '../workshopqualificationsregister/workshopqualificationsregister.module#WorkshopqualificationsregisterPageModule' },
            { path: 'humanresources/firstaidhr', loadChildren: '../firstaidhr/firstaidhr.module#FirstaidhrPageModule' },
            { path: 'humanresources/rolesandemployees', loadChildren: '../rolesandemployees/rolesandemployees.module#RolesandemployeesPageModule' },
            { path: 'humanresources/employeemediation', loadChildren: '../employeemediation/employeemediation.module#EmployeemediationPageModule' },
            { path: 'humanresources/jobdescriptionshr', loadChildren: '../jobdescriptionshr/jobdescriptionshr.module#JobdescriptionshrPageModule' },
            { path: 'humanresources/filinghr', loadChildren: '../filinghr/filinghr.module#FilinghrPageModule' },
            {
                path: 'humanresources',
                loadChildren: '../humanresources/humanresources.module#HumanresourcesPageModule'
            },
            { path: 'timesheetsleave/myemploymentcontract', loadChildren: '../myemploymentcontract/myemploymentcontract.module#MyemploymentcontractPageModule' },
            { path: 'timesheetsleave/mytimesheet', loadChildren: '../mytimesheet/mytimesheet.module#MytimesheetPageModule' },
            { path: 'timesheetsleave/myleavehistory', loadChildren: '../myleavehistory/myleavehistory.module#MyleavehistoryPageModule' },
            { path: 'timesheetsleave/applyforleave', loadChildren: '../applyforleave/applyforleave.module#ApplyforleavePageModule' }, { path: 'timesheetsleave/salarypackfringebenefits', loadChildren: '../salarypacksfringebenefits/salarypacksfringebenefits.module#SalarypacksfringebenefitsPageModule' },
            { path: 'timesheetsleave/salescommission', loadChildren: '../salescommission/salescommission.module#SalescommissionPageModule' },
            { path: 'timesheetsleave/myperformance', loadChildren: '../myperformance/myperformance.module#MyperformancePageModule' },
            { path: 'timesheetsleave/employeecomplaintbyemployee', loadChildren: '../employeecomplaintbyemployee/employeecomplaintbyemployee.module#EmployeecomplaintbyemployeePageModule' },
            { path: 'timesheetsleave/tenderresignation', loadChildren: '../tenderresignation/tenderresignation.module#TenderresignationPageModule' },
            { path: 'timesheetsleave/myjobdescription', loadChildren: '../myjobdescription/myjobdescription.module#MyjobdescriptionPageModule' },
            { path: 'timesheetsleave/filingtsheets', loadChildren: '../filingtsheets/filingtsheets.module#FilingtsheetsPageModule' },
            {
                path: 'timesheetsleave',
                loadChildren: '../timesheetsleave/timesheetsleave.module#TimesheetsleavePageModule'
            },
            { path: 'payroll/regemployee', loadChildren: '../regemployee/regemployee.module#RegemployeePageModule' },
            { path: 'payroll/regsalesagent', loadChildren: '../regsalesagent/regsalesagent.module#RegsalesagentPageModule' },
            { path: 'payroll/searchemployees', loadChildren: '../searchemployees/searchemployees.module#SearchemployeesPageModule' },
            { path: 'payroll/searchemplandagentstxes', loadChildren: '../searchemplandagentstxes/searchemplandagentstxes.module#SearchemplandagentstxesPageModule' },
            { path: 'payroll/searchsalesagents', loadChildren: '../searchsalesagents/searchsalesagents.module#SearchsalesagentsPageModule' },
            { path: 'payroll/wages', loadChildren: '../wages/wages.module#WagesPageModule' },
            { path: 'payroll/salarypacksfringebenefits', loadChildren: '../salarypacksfringebenefits/salarypacksfringebenefits.module#SalarypacksfringebenefitsPageModule' },
            { path: 'payroll/salescommission', loadChildren: '../salescommission/salescommission.module#SalescommissionPageModule' },
            { path: 'payroll/leave', loadChildren: '../leave/leave.module#LeavePageModule' },
            { path: 'payroll/searchdocsbyemply', loadChildren: '../searchdocsbyemply/searchdocsbyemply.module#SearchdocsbyemplyPageModule' },
            { path: 'payroll/searchdocsbysalesagent', loadChildren: '../searchdocsbysalesagent/searchdocsbysalesagent.module#SearchdocsbysalesagentPageModule' },
            { path: 'payroll/simplifiedtaxsystem', loadChildren: '../simplifiedtaxsystem/simplifiedtaxsystem.module#SimplifiedtaxsystemPageModule' },
            { path: 'payroll/superannuation', loadChildren: '../superstream/superstream.module#SuperstreamPageModule' },
            { path: 'payroll/terminateagentoremployee', loadChildren: '../terminateagentoremployee/terminateagentoremployee.module#TerminateagentoremployeePageModule' },
            { path: 'payroll/filingpay', loadChildren: '../filingpay/filingpay.module#FilingpayPageModule' },
            {
                path: 'payroll',
                loadChildren: '../payroll/payroll.module#PayrollPageModule'
            },
            { path: 'administration/receiveshequmortgepayment', loadChildren: '../receiveshequmortgepayment/receiveshequmortgepayment.module#ReceiveshequmortgepaymentPageModule' },
            { path: 'administration/issuereceiptmtgepaymntshequ', loadChildren: '../issuereceiptmtgepaymntshequ/issuereceiptmtgepaymntshequ.module#IssuereceiptmtgepaymntshequPageModule' },
            { path: 'administration/refinanceshequmtge', loadChildren: '../refinanceshequmtge/refinanceshequmtge.module#RefinanceshequmtgePageModule' },
            { path: 'administration/closemtgeagrmntshequ', loadChildren: '../closemtgeagrmntshequ/closemtgeagrmntshequ.module#ClosemtgeagrmntshequPageModule' },
            { path: 'administration/sharedequownercomplaint', loadChildren: '../sharedequownercomplaint/sharedequownercomplaint.module#SharedequownercomplaintPageModule' },
            { path: 'administration/sharedequcomplaintagainstowner', loadChildren: '../sharedequcomplaintagainstowner/sharedequcomplaintagainstowner.module#SharedequcomplaintagainstownerPageModule' },
            { path: 'administration/notifypropertyinspection', loadChildren: '../notifypropertyinspection/notifypropertyinspection.module#NotifypropertyinspectionPageModule' },
            { path: 'administration/correspondence', loadChildren: '../correspondence/correspondence.module#CorrespondencePageModule' },
            { path: 'administration/employeeorsalesagentcontact', loadChildren: '../employeeorsalesagentcontact/employeeorsalesagentcontact.module#EmployeeorsalesagentcontactPageModule' },
            { path: 'administration/ownercontact', loadChildren: '../ownercontact/ownercontact.module#OwnercontactPageModule' },
            { path: 'administration/ownerheader', loadChildren: '../ownerheader/ownerheader.module#OwnerheaderPageModule' },
            { path: 'administration/ownertxes', loadChildren: '../ownertxes/ownertxes.module#OwnertxesPageModule' },
            { path: 'administration/partnerheaders', loadChildren: '../partnerheaders/partnerheaders.module#PartnerheadersPageModule' },
            { path: 'administration/partnertxes', loadChildren: '../partnertxes/partnertxes.module#PartnertxesPageModule' },
            { path: 'administration/suppliertxes', loadChildren: '../suppliertxes/suppliertxes.module#SuppliertxesPageModule' },
            { path: 'administration/supplierheaders', loadChildren: '../supplierheaders/supplierheaders.module#SupplierheadersPageModule' },
            { path: 'administration/servicereq', loadChildren: '../servicereq/servicereq.module#ServicereqPageModule' },
            { path: 'administration/maintreq', loadChildren: '../maintreq/maintreq.module#MaintreqPageModule' },
            { path: 'administration/propertyheaders', loadChildren: '../propertyheaders/propertyheaders.module#PropertyheadersPageModule' },
            { path: 'administration/propertytx', loadChildren: '../propertytx/propertytx.module#PropertytxPageModule' },
            { path: 'administration/salescontact', loadChildren: '../salescontact/salescontact.module#SalescontactPageModule' },
            { path: 'administration/employeeheaders', loadChildren: '../employeeheaders/employeeheaders.module#EmployeeheadersPageModule' },
            { path: 'administration/employeetransax', loadChildren: '../employeetransax/employeetransax.module#EmployeetransaxPageModule' },
            { path: 'administration/customerheaders', loadChildren: '../customerheaders/customerheaders.module#CustomerheadersPageModule' },
            { path: 'administration/custtransax', loadChildren: '../custtransax/custtransax.module#CusttransaxPageModule' },
            { path: 'administration/employapplicantcontact', loadChildren: '../employapplicantcontact/employapplicantcontact.module#EmployapplicantcontactPageModule' },
            { path: 'administration/tenantcontact', loadChildren: '../tenantcontact/tenantcontact.module#TenantcontactPageModule' },
            { path: 'administration/leaseapplicantcontact', loadChildren: '../leaseapplicantcontact/leaseapplicantcontact.module#LeaseapplicantcontactPageModule' },
            { path: 'administration/suppliercontact', loadChildren: '../suppliercontact/suppliercontact.module#SuppliercontactPageModule' },
            { path: 'administration/auditorcontact', loadChildren: '../auditorcontact/auditorcontact.module#AuditorcontactPageModule' },
            { path: 'administration/partnercontact', loadChildren: '../partnercontact/partnercontact.module#PartnercontactPageModule' },
            { path: 'administration/communitycontact', loadChildren: '../communitycontact/communitycontact.module#CommunitycontactPageModule' },
            { path: 'administration/communityheaders', loadChildren: '../communityheaders/communityheaders.module#CommunityheadersPageModule' },
            { path: 'administration/communitytxes', loadChildren: '../communitytxes/communitytxes.module#CommunitytxesPageModule' },
            { path: 'administration/mediacontact', loadChildren: '../mediacontact/mediacontact.module#MediacontactPageModule' },
            { path: 'administration/mediaheaders', loadChildren: '../mediaheaders/mediaheaders.module#MediaheadersPageModule' },
            { path: 'administration/mediatxes', loadChildren: '../mediatxes/mediatxes.module#MediatxesPageModule' },
            { path: 'administration/govcontact', loadChildren: '../govcontact/govcontact.module#GovcontactPageModule' },
            { path: 'administration/govheaders', loadChildren: '../govheaders/govheaders.module#GovheadersPageModule' },
            { path: 'administration/govtxes', loadChildren: '../govtxes/govtxes.module#GovtxesPageModule' },
            { path: 'administration/customercomplaint', loadChildren: '../customercomplaint/customercomplaint.module#CustomercomplaintPageModule' },
            { path: 'administration/llordinvestorcomplaint', loadChildren: '../llordinvestorcomplaint/llordinvestorcomplaint.module#LlordinvestorcomplaintPageModule' },
            { path: 'administration/leaseapplicantcomplaint', loadChildren: '../leaseapplicantcomplaint/leaseapplicantcomplaint.module#LeaseapplicantcomplaintPageModule' },
            { path: 'administration/employmentapplicantcomplaint', loadChildren: '../employmentapplicantcomplaint/employmentapplicantcomplaint.module#EmploymentapplicantcomplaintPageModule' },
            { path: 'administration/tenantcomplaint', loadChildren: '../tenantcomplaint/tenantcomplaint.module#TenantcomplaintPageModule' },
            { path: 'administration/suppliercomplaint', loadChildren: '../suppliercomplaint/suppliercomplaint.module#SuppliercomplaintPageModule' },
            { path: 'administration/supportpartnercomplaint', loadChildren: '../supportpartnercomplaint/supportpartnercomplaint.module#SupportpartnercomplaintPageModule' },
            { path: 'administration/governmentcomplaint', loadChildren: '../governmentcomplaint/governmentcomplaint.module#GovernmentcomplaintPageModule' },
            { path: 'administration/communitycomplaint', loadChildren: '../communitycomplaint/communitycomplaint.module#CommunitycomplaintPageModule' },
            { path: 'administration/mediacomplaint', loadChildren: '../mediacomplaint/mediacomplaint.module#MediacomplaintPageModule' },
            { path: 'administration/employeecomplaint', loadChildren: '../employeecomplaint/employeecomplaint.module#EmployeecomplaintPageModule' },
            { path: 'administration/maintenancecomplaint', loadChildren: '../maintenancecomplaint/maintenancecomplaint.module#MaintenancecomplaintPageModule' },
            { path: 'administration/firstaidadmin', loadChildren: '../firstaidadmin/firstaidadmin.module#FirstaidadminPageModule' },
            { path: 'administration/filingadmin', loadChildren: '../filingadmin/filingadmin.module#FilingadminPageModule' },
            { path: 'administration/issuerentreceiptsadmin', loadChildren: '../issuerentreceiptsadmin/issuerentreceiptsadmin.module#IssuerentreceiptsadminPageModule' },
            {
                path: 'administration',
                loadChildren: '../administration/administration.module#AdministrationPageModule'
            },
            {
                path: 'administration',
                loadChildren: '../administration/administration.module#AdministrationPageModule'
            },
            { path: 'finance/financialbudgets', loadChildren: '../financialbudgets/financialbudgets.module#FinancialbudgetsPageModule' },
            { path: 'finance/trustaccounts', loadChildren: '../trustaccounts/trustaccounts.module#TrustaccountsPageModule' },
            { path: 'finance/accountsreceivable', loadChildren: '../accountsreceivable/accountsreceivable.module#AccountsreceivablePageModule' },
            { path: 'finance/accountspayable', loadChildren: '../accountspayable/accountspayable.module#AccountspayablePageModule' },
            { path: 'finance/purchaserequest', loadChildren: '../purchaserequest/purchaserequest.module#PurchaserequestPageModule' },
            { path: 'finance/purchaseorder', loadChildren: '../purchaseorder/purchaseorder.module#PurchaseorderPageModule' },
            { path: 'finance/pendingorders', loadChildren: '../pendingorders/pendingorders.module#PendingordersPageModule' },
            { path: 'finance/overdueorders', loadChildren: '../overdueorders/overdueorders.module#OverdueordersPageModule' },
            { path: 'finance/invoicesreceived', loadChildren: '../invoicesreceived/invoicesreceived.module#InvoicesreceivedPageModule' },
            { path: 'finance/overdueinvoicesrecd', loadChildren: '../overdueinvoicesrecd/overdueinvoicesrecd.module#OverdueinvoicesrecdPageModule' },
            { path: 'finance/chargesinvoicesout', loadChildren: '../chargesinvoicesout/chargesinvoicesout.module#ChargesinvoicesoutPageModule' },
            { path: 'finance/overduechargesinvoicessent', loadChildren: '../overduechargesinvoicessent/overduechargesinvoicessent.module#OverduechargesinvoicessentPageModule' },
            { path: 'finance/returnsout', loadChildren: '../returnsout/returnsout.module#ReturnsoutPageModule' },
            { path: 'finance/returnsin', loadChildren: '../returnsin/returnsin.module#ReturnsinPageModule' },
            { path: 'finance/newaccount', loadChildren: '../newaccount/newaccount.module#NewaccountPageModule' },
            { path: 'finance/payroll', loadChildren: '../payroll/payroll.module#PayrollPageModule' },
            { path: 'finance/salarypacksfringebenefits', loadChildren: '../salarypacksfringebenefits/salarypacksfringebenefits.module#SalarypacksfringebenefitsPageModule' },
            { path: 'finance/superstream', loadChildren: '../superstream/superstream.module#SuperstreamPageModule' },
            { path: 'finance/simplifiedtaxsystem', loadChildren: '../simplifiedtaxsystem/simplifiedtaxsystem.module#SimplifiedtaxsystemPageModule' },
            { path: 'finance/financialtxjournal', loadChildren: '../financialtxjournal/financialtxjournal.module#FinancialtxjournalPageModule' },
            { path: 'finance/masterledger', loadChildren: '../masterledger/masterledger.module#MasterledgerPageModule' },
            { path: 'finance/financialreports', loadChildren: '../financialreports/financialreports.module#FinancialreportsPageModule' },
            { path: 'finance/trialbalance', loadChildren: '../trialbalance/trialbalance.module#TrialbalancePageModule' },
            { path: 'finance/allliabilities', loadChildren: '../allliabilities/allliabilities.module#AllliabilitiesPageModule' },
            { path: 'finance/allassets', loadChildren: '../allassets/allassets.module#AllassetsPageModule' },
            { path: 'finance/allcustomers', loadChildren: '../allcustomers/allcustomers.module#AllcustomersPageModule' },
            { path: 'finance/allsuppliers', loadChildren: '../allsuppliers/allsuppliers.module#AllsuppliersPageModule' },
            { path: 'finance/financeworkshop', loadChildren: '../financeworkshop/financeworkshop.module#FinanceworkshopPageModule' },
            { path: 'finance/infiniflexreports', loadChildren: '../infiniflexreports/infiniflexreports.module#InfiniflexreportsPageModule' },
            { path: 'finance/internalfinancialaudits', loadChildren: '../internalfinancialaudits/internalfinancialaudits.module#InternalfinancialauditsPageModule' },
            { path: 'finance/externalfinancialaudits', loadChildren: '../externalfinancialaudits/externalfinancialaudits.module#ExternalfinancialauditsPageModule' },
            { path: 'finance/purchaserequest', loadChildren: '../purchaserequest/purchaserequest.module#PurchaserequestPageModule' },
            { path: 'finance/purchaseorder', loadChildren: '../purchaseorder/purchaseorder.module#PurchaseorderPageModule' },
            { path: 'finance/pendingorders', loadChildren: '../pendingorders/pendingorders.module#PendingordersPageModule' },
            { path: 'finance/overdueorders', loadChildren: '../overdueorders/overdueorders.module#OverdueordersPageModule' },
            { path: 'finance/invoicesreceived', loadChildren: '../invoicesreceived/invoicesreceived.module#InvoicesreceivedPageModule' },
            { path: 'finance/overdueinvoicesrecd', loadChildren: '../overdueinvoicesrecd/overdueinvoicesrecd.module#OverdueinvoicesrecdPageModule' },
            { path: 'finance/chargesinvoicesout', loadChildren: '../chargesinvoicesout/chargesinvoicesout.module#ChargesinvoicesoutPageModule' },
            { path: 'finance/overduechargesinvoicessent', loadChildren: '../overduechargesinvoicessent/overduechargesinvoicessent.module#OverduechargesinvoicessentPageModule' },
            { path: 'finance/returnsout', loadChildren: '../returnsout/returnsout.module#ReturnsoutPageModule' },
            { path: 'finance/returnsin', loadChildren: '../returnsin/returnsin.module#ReturnsinPageModule' },
            { path: 'finance/filingfinance', loadChildren: '../filingfinance/filingfinance.module#FilingfinancePageModule' },
            {
                path: 'finance',
                loadChildren: '../finance/finance.module#FinancePageModule'
            },
            { path: 'reporting/reportsinfiniflex', loadChildren: '../reportsinfiniflex/reportsinfiniflex.module#ReportsinfiniflexPageModule' },
            { path: 'reporting/datasecurityanalysis', loadChildren: '../datasecurityanalysis/datasecurityanalysis.module#DatasecurityanalysisPageModule' },
            { path: 'reporting/profitlossreport', loadChildren: '../profitlossreport/profitlossreport.module#ProfitlossreportPageModule' },
            { path: 'reporting/cashflowanalysisandreport', loadChildren: '../cashflowanalysisandreport/cashflowanalysisandreport.module#CashflowanalysisandreportPageModule' },
            { path: 'reporting/balancesheet', loadChildren: '../balancesheet/balancesheet.module#BalancesheetPageModule' },
            { path: 'reporting/budgets', loadChildren: '../budgets/budgets.module#BudgetsPageModule' },
            { path: 'reporting/trialbalancereporting', loadChildren: '../trialbalancereporting/trialbalancereporting.module#TrialbalancereportingPageModule' },
            { path: 'reporting/tenantsledger', loadChildren: '../tenantsledger/tenantsledger.module#TenantsledgerPageModule' },
            { path: 'reporting/arrearsbyaddressandtenant', loadChildren: '../arrearsbyaddressandtenant/arrearsbyaddressandtenant.module#ArrearsbyaddressandtenantPageModule' },
            { path: 'reporting/arrearsbyportfolio', loadChildren: '../arrearsbyportfolio/arrearsbyportfolio.module#ArrearsbyportfolioPageModule' },
            { path: 'reporting/cyclicalrepairsbyproperty', loadChildren: '../cyclicalrepairsbyproperty/cyclicalrepairsbyproperty.module#CyclicalrepairsbypropertyPageModule' },
            { path: 'reporting/responsiverepairsbyproperty', loadChildren: '../responsiverepairsbyproperty/responsiverepairsbyproperty.module#ResponsiverepairsbypropertyPageModule' },
            { path: 'reporting/propertyinspbyhousingmanager', loadChildren: '../propertyinspbyhousingmanager/propertyinspbyhousingmanager.module#PropertyinspbyhousingmanagerPageModule' },
            { path: 'reporting/leavetakenandowingperemployee', loadChildren: '../leavetakenandowingperemployee/leavetakenandowingperemployee.module#LeavetakenandowingperemployeePageModule' },
            { path: 'reporting/reportstrategicplan', loadChildren: '../reportstrategicplan/reportstrategicplan.module#ReportstrategicplanPageModule' },
            { path: 'reporting/reportbusinessplan', loadChildren: '../reportbusinessplan/reportbusinessplan.module#ReportbusinessplanPageModule' },
            { path: 'reporting/reportoperationalplan', loadChildren: '../reportoperationalplan/reportoperationalplan.module#ReportoperationalplanPageModule' },
            { path: 'reporting/reporting/riskmanagementplanreport', loadChildren: '../riskmanagementplanreport/riskmanagementplanreport.module#RiskmanagementplanreportPageModule' },
            { path: 'reporting/emergingrisksreport', loadChildren: '../emergingrisksreport/emergingrisksreport.module#EmergingrisksreportPageModule' },
            { path: 'reporting/propertiesbycategory', loadChildren: '../propertiesbycategory/propertiesbycategory.module#PropertiesbycategoryPageModule' },
            { path: 'reporting/safetyincidents', loadChildren: '../safetyincidents/safetyincidents.module#SafetyincidentsPageModule' },
            { path: 'reporting/incomeexpensebybranch', loadChildren: '../incomeexpensebybranch/incomeexpensebybranch.module#IncomeexpensebybranchPageModule' },
            { path: 'reporting/incomeexpensebypropprogram', loadChildren: '../incomeexpensebypropprogram/incomeexpensebypropprogram.module#IncomeexpensebypropprogramPageModule' },
            { path: 'reporting/incomeexpensebypropclass', loadChildren: '../incomeexpensebypropclass/incomeexpensebypropclass.module#IncomeexpensebypropclassPageModule' },
            { path: 'reporting/vacantsvoidsreport', loadChildren: '../vacantsvoidsreport/vacantsvoidsreport.module#VacantsvoidsreportPageModule' },
            { path: 'reporting/reportceomultiflex', loadChildren: '../reportceomultiflex/reportceomultiflex.module#ReportceomultiflexPageModule' },
            { path: 'reporting/reportcfomultiflex', loadChildren: '../reportcfomultiflex/reportcfomultiflex.module#ReportcfomultiflexPageModule' },
            { path: 'reporting/reportingwhsauditing', loadChildren: '../reportingwhsauditing/reportingwhsauditing.module#ReportingwhsauditingPageModule' },
            { path: 'reporting/reportingacctspayableauditing', loadChildren: '../reportingacctspayableauditing/reportingacctspayableauditing.module#ReportingacctspayableauditingPageModule' },
            { path: 'reporting/reportingacctsrecvableauditing', loadChildren: '../reportingacctsrecvableauditing/reportingacctsrecvableauditing.module#ReportingacctsrecvableauditingPageModule' },
            {
                path: 'reporting',
                loadChildren: '../reporting/reporting.module#ReportingPageModule'
            },
            {
                path: 'settings/notifications',
                loadChildren: '../settings/notifications/notifications.module#NotificationsPageModule'
            },
            {
                path: 'talk/invitereply',
                loadChildren: '../talk/invitereply/invitereply.module#InvitereplyPageModule'
            },
        ]
    }
];
var MenuPageModule = /** @class */ (function () {
    function MenuPageModule() {
    }
    MenuPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: [_menu_page__WEBPACK_IMPORTED_MODULE_6__["MenuPage"]]
        })
    ], MenuPageModule);
    return MenuPageModule;
}());



/***/ }),

/***/ "./src/app/pages/menu/menu.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/menu/menu.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".active-item {\n  border-left: 8px solid var(--ion-color-warning); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvaG9tZS9wb3N0Z3Jlcy9QdWJsaWMvYXUuY29tLml0Y3NvbHV0aW9ucy5jaGVpcnJzLjAuMDEvc3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQStDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW51L21lbnUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjdGl2ZS1pdGVtIHtcbiAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci13YXJuaW5nKTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/menu/menu.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/menu/menu.page.ts ***!
  \*****************************************/
/*! exports provided: MenuPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuPage", function() { return MenuPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var MenuPage = /** @class */ (function () {
    function MenuPage(router) {
        var _this = this;
        this.router = router;
        this.selectedPath = '';
        this.pages = [
            {
                title: 'Home',
                url: '/menu/main',
                icon: 'home'
            },
            {
                title: 'Contracts & Processes',
                url: '/menu/bpdi',
                icon: 'cog'
            },
            {
                title: 'Strategic Planning',
                url: '/menu/strategicplanning',
                icon: 'locate'
            },
            {
                title: 'Management of Risk',
                url: '/menu/riskmngmnt',
                icon: 'umbrella'
            },
            {
                title: 'Property',
                url: '/menu/property',
                icon: 'business'
            },
            {
                title: '(Re)Development',
                url: '/menu/rdevelop',
                icon: 'hammer'
            },
            {
                title: 'Sales incl Shared Equity',
                url: '/menu/sales',
                icon: 'gift'
            },
            {
                title: 'Customer Relations',
                url: '/menu/crm',
                icon: 'ribbon'
            },
            {
                title: 'Landlords & Investors',
                url: '/menu/llordsinvstrs',
                icon: 'thumbs-up'
            },
            {
                title: 'Shared Equity',
                url: '/menu/sharedequity',
                icon: 'hand'
            },
            {
                title: 'Leasing',
                url: '/menu/letting',
                icon: 'key'
            },
            {
                title: 'Tenancy Management',
                url: '/menu/tenancymngmnt',
                icon: 'tablet-portrait'
            },
            {
                title: 'Asset Management',
                url: '/menu/assetmngmnt',
                icon: 'clipboard'
            },
            {
                title: 'Workshop',
                url: '/menu/workshop',
                icon: 'construct'
            },
            {
                title: 'Human Resources',
                url: '/menu/humanresources',
                icon: 'contacts'
            },
            {
                title: 'Timesheets & Leave',
                url: '/menu/timesheetsleave',
                icon: 'logo-usd'
            },
            {
                title: 'Payroll',
                url: '/menu/payroll',
                icon: 'list-box'
            },
            {
                title: 'Administration',
                url: '/menu/administration',
                icon: 'filing'
            },
            {
                title: 'Finance',
                url: '/menu/finance',
                icon: 'wallet'
            },
            {
                title: 'Reporting',
                url: '/menu/reporting',
                icon: 'calendar'
            }
        ];
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
    }
    MenuPage.prototype.ngOnInit = function () {
    };
    MenuPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    MenuPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __importDefault(__webpack_require__(/*! raw-loader!./menu.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/menu/menu.page.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./menu.page.scss */ "./src/app/pages/menu/menu.page.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuPage);
    return MenuPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-menu-menu-module.js.map