/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2015 Adobe Systems Incorporated
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe Systems Incorporated and its suppliers,
* if any.  The intellectual and technical concepts contained
* herein are proprietary to Adobe Systems Incorporated and its
* suppliers and are protected by all applicable intellectual property laws,
* including trade secret and or copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe Systems Incorporated.
**************************************************************************/
const OptionPageActions={OPTIONS_UPDATE_TOGGLE:"OPTIONS_UPDATE_TOGGLE"};$((function(){"use strict";const e=acom_analytics.e,t="analyticsOptinTitle",s="web2pdfOptOut",n="LearnMoreURL",i="web2pdfPrivacy",a="web2pdfShowPDFTools",r="web2pdfFrictionlessToggleDescription",o="pdfOwnershipExploreOptionsTitle",l="pdfOwnershipExploreOptionsDescription",c="web2pdfOpenConvertedPDFTitle",d="web2pdfOpenConvertedPDFDescription",p="web2pdfShowPersistentOpen",h="web2pdfShowPersistentOpenDescription",u="optionsSuccessPrompt",S="optionsFailurePrompt";let T=[],I={},E=null;class f{constructor(){this.ID="#web2pdfSaveButton",this.closePromptID="#prompt-close",this.enableState=!1,this.optionStates=new Set,this.timeoutId=null,$(this.ID).click(e=>this.SavePreferences(e)),$(this.closePromptID).click(e=>this.HideSavedPrompt(e))}Reset(){this.enableState=!1,this.optionStates.clear(),$(this.ID).prop("disabled",!0)}setEnabled(e){this.optionStates.add(e),$(this.ID).prop("disabled",!1),this.enableState=!0}setDisabled(e){this.optionStates.has(e)&&(this.optionStates.delete(e),0===this.optionStates.size&&($(this.ID).prop("disabled",!0),this.enableState=!1))}GetState(){return this.enableState}SavePreferences(){const e={analytics:[]};for(const t in I)I[t].hasUpdated&&(e[t]=I[t].GetCurrentState());T.filter(e=>e.hasUpdated).map(e=>e.SavePreferences()).filter(e=>e).forEach(t=>e.analytics.push(t)),function(e,t){util.messageToMain({main_op:"save-preferences",...e},t)}(e,e=>{e.success?this.ShowSavedPrompt(!0):this.ShowSavedPrompt(!1),this.Reset(),C(e=>{m(e.settings),b(e),D()})})}ShowSavedPrompt(e){const t=$("#savePrompt"),s=$(".prompt"),n=$("#optionsSuccessPrompt");e?(n.text(util.getTranslation(u)),s.removeClass("failure")):(n.text(util.getTranslation(S)),s.addClass("failure")),t.show(),this.timeoutId&&clearTimeout(this.timeoutId),this.timeoutId=setTimeout(e=>this.HideSavedPrompt(),5e3)}HideSavedPrompt(){$("#savePrompt").hide()}}class g{constructor(e,t,s,n){this.titleId=e,this.descriptionId=t,this.defaultState=util.getCookie(this.storageKey)||s,this.storageKey=n,this.currentState=this.defaultState,this.hasUpdated=!1,this.savePreferencesButton=null}AttachEventHandler(e){this.savePreferencesButton=e}RenderInputItem(){return $("<div/>")}Render(){const e=$("<div/>",{class:"option"}),t=$("<label/>",{class:"label",for:this.titleId}),s=$("<span/>",{class:"label-title",text:util.getTranslation(this.titleId)||this.titleId,id:this.titleId}),n=$("<span/>",{class:"label-description",text:util.getTranslation(this.descriptionId)||this.descriptionId,id:this.descriptionId});t.append(s),t.append(n),e.append(t);const i=this.RenderInputItem();return e.append(i),e}GetCurrentState(){return this.currentState}SavePreferences(){this.hasUpdated&&(this.storageKey&&(console.log("Updating Preference for ",this.storageKey,"from",util.getCookie(this.storageKey,this.defaultState),"to",this.currentState),util.setCookie(this.storageKey,this.currentState)),this.hasUpdated=!1,this.defaultState=this.currentState)}}class _ extends g{constructor(e,t,s,n,i,a){super(e,t,s,n),this.defaultState=function(e,t=!1){const s=util.getCookie(e);return s&&""!==s?"true"===s:t}(this.storageKey,s),this.currentState=this.defaultState,this.analyticsId={enabled:i,disabled:a}}onToggleChange(e){const t=$(e.currentTarget);this.currentState=!t.hasClass("checked"),this.hasUpdated=!this.hasUpdated,t.toggleClass("checked"),this.savePreferencesButton&&this.currentState===this.defaultState?this.savePreferencesButton.setDisabled(this.titleId):this.savePreferencesButton.setEnabled(this.titleId)}RenderInputItem(){const e=$("<span/>"),t=$("<button/>",{class:"option-toggle"});return t.click(e=>this.onToggleChange(e)),this.currentState&&t.addClass("checked"),e.append(t),e}GetAnalytics(){return this.currentState?this.analyticsId.enabled:this.analyticsId.disabled}SavePreferences(){return super.SavePreferences(),this.GetAnalytics()}}class v extends g{constructor(e,t,s,n,i,a){super(e,t,n,i),this.valuesMap=s,this.onSavePreferences=a}onSelectionChange(e){this.currentState=$(e.currentTarget).val(),this.currentState===this.defaultState?(this.hasUpdated=!1,this.savePreferencesButton&&this.savePreferencesButton.setDisabled(this.titleId)):(this.hasUpdated=!0,this.savePreferencesButton&&this.savePreferencesButton.setEnabled(this.titleId))}RenderInputItem(){const e=$("<span/>"),t=$("<select/>",{class:"option-select"});for(const e in this.valuesMap){const s=$("<option/>",{value:e,text:this.valuesMap[e]});t.append(s)}return t.change(e=>this.onSelectionChange(e)),this.currentState&&t.val(this.currentState),e.append(t),e}SavePreferences(){super.SavePreferences(),this.onSavePreferences&&this.onSavePreferences(this.currentState)}}class O extends _{constructor(){super(t,s,!0,"logAnalytics",e.OPTIONS_ENABLED_ANALYTICS,e.OPTIONS_DISABLED_ANALYTICS),this.learnMoreLink=n,this.learnMoreTitle=i}Render(){const t=$("<div/>",{class:"option"}),s=$("<label/>",{class:"label",for:this.titleId}),n=$("<span/>",{class:"label-title",text:util.getTranslation(this.titleId),id:this.titleId}),i=$("<span/>",{class:"label-description",text:util.getTranslation(this.descriptionId)+" ",id:this.descriptionId}),a=$("<a/>",{class:"learn-more",href:util.getTranslation(this.learnMoreLink),text:util.getTranslation(this.learnMoreTitle),target:"_blank",onclick:util.messageToMain({main_op:"analytics",analytics:[[e.OPTIONS_ABOUT_ADOBE_ACROBAT_CLICKED]]})});i.append(a),s.append(n),s.append(i),t.append(s);const r=this.RenderInputItem();return t.append(r),t}SavePreferences(){if(this.hasUpdated)return this.hasUpdated=!1,this.defaultState=this.currentState,this.GetAnalytics()}}function P(e){return e.version>13}function N(e){return 13==e.version}function A(){const e=util.getCookie("fteDenied")||"0",t="false"===util.getCookie("pdfViewer");return SETTINGS.USE_ACROBAT&&SETTINGS.VIEWER_SHOW_OPEN_IN_ACRO&&(10===parseInt(e)||t)}function m(e){if(e&&e.settings){for(const t in e.settings)SETTINGS[t]=e.settings[t];(function(e){return null===e.locale})(e)&&(SETTINGS.FRICTIONLESS_ENABLED=!1)}}function D(){null==E&&(E=new f);const e=$("#toggles");e.empty(),T.forEach(t=>{t.AttachEventHandler(E);const s=t.Render();e.append(s)})}function b(t){T=[],I={};const s=new O,n=new _(a,r,!0,"always-show-pdftools",e.FRICTIONLESS_AUTO_SUGGESTION_ENABLED,e.FRICTIONLESS_AUTO_SUGGESTION_DISABLED),i=new _(o,l,!1,"pdfViewer",e.USE_ACROBAT_IN_CHROME_ENABLED,e.USE_ACROBAT_IN_CHROME_DISABLED),u=new _(c,d,!0,"ViewResultsPref",e.TREFOIL_HTML_OPENPDF_PREF_ON,e.TREFOIL_HTML_OPENPDF_PREF_OFF),S=new _(p,h,!0,"always-show-pdf-menu",e.OPTIONS_ENABLED_OPEN_IN_ACROBAT,e.OPTIONS_DISABLED_OPEN_IN_ACROBAT);P(t)?(T.push(u),SETTINGS.VIEWER_ENABLED&&SETTINGS.VIEWER_ENABLED_FOR_ACROBAT?(T.push(i),A()&&T.push(S)):T.push(S)):N(t)?SETTINGS.VIEWER_ENABLED?(T.push(i),SETTINGS.FRICTIONLESS_ENABLED&&!util.isEdge()&&T.push(n),A()&&T.push(S)):(SETTINGS.FRICTIONLESS_ENABLED&&!util.isEdge()&&T.push(n),T.push(S)):(SETTINGS.VIEWER_ENABLED&&T.push(i),SETTINGS.FRICTIONLESS_ENABLED&&!util.isEdge()&&T.push(n)),T.push(s),I.analytics_on=s,function(e){if(SETTINGS.USE_ACROBAT&&SETTINGS.DEBUG_MODE){const t=new v("Development Environment","Select the target environment for the extension.",{prod:"Production",stage:"Stage",test:"Test",dev:"Dev","local-dev":"Local Dev"},e.environment||"prod","env",(function(e){util.messageToMain({panel_op:"common",requestType:"update_env",env:e})})),s=P(e)?"acrobat":N(e)?"reader":"no-app",n=new v("Connected Application","Select the target connected application for the extension functionalities. This settings only mock the views, the functionality may be broken.",{acrobat:"Acrobat",reader:"Reader","no-app":"No App"},s||"acrobat");T.push(t,n),I.environment=t,I.product=n}}(t)}function C(e){util.messageToMain({main_op:"fetch-preferences"},e)}function R(e){const t=T.filter(t=>t.titleId===e);return t.length>0?t[0]:null}function B(e,t,s){if(SETTINGS.TEST_MODE)return;const n=e.toggleId,i=R(n),a=e.requestType;let r=void 0,o=void 0;switch(a){case OptionPageActions.OPTIONS_UPDATE_TOGGLE:{const t="true"===e.toggleVal;i?(i.currentState=t,i.hasUpdated=!0,i.savePreferencesButton.SavePreferences(),r=i.currentState):o="Toggle not visible."}}s({requestType:a,toggleId:n,response:r,error:o})}$(document).ready((function(){util.translateElements(".translate"),C(e=>{m(e),b(e),D(),util.addMainListener(B),function(){if(!SETTINGS.TEST_MODE)return;const e="check_toggle_state",t="update_toggle_state";chrome.runtime.onMessage.addListener((function(s,n,i){if(!s.panel_op||"test"!==s.panel_op)return;const a=s.test_extension,r=s.toggleId,o=R(r);let l=void 0,c=void 0;switch(a){case e:o?l=o.currentState:c="Toggle not visible.";break;case t:const n="true"===s.toggleVal;o?(o.currentState=n,o.hasUpdated=!0,o.savePreferencesButton.SavePreferences(),l=o.currentState):c="Toggle not visible.";break;default:c="Invalid request type."}i({requestType:a,toggleId:r,response:l,error:c})}))}()})}))}));