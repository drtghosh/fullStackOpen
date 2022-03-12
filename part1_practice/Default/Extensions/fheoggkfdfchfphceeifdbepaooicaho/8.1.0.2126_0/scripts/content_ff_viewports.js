/*!
 * 
 *     MCAFEE RESTRICTED CONFIDENTIAL
 *     Copyright (c) 2022 McAfee, LLC
 *     
 *     The source code contained or described herein and all documents related
 *     to the source code ("Material") are owned by McAfee or its
 *     suppliers or licensors. Title to the Material remains with McAfee
 *     or its suppliers and licensors. The Material contains trade
 *     secrets and proprietary and confidential information of McAfee or its
 *     suppliers and licensors. The Material is protected by worldwide copyright
 *     and trade secret laws and treaty provisions. No part of the Material may
 *     be used, copied, reproduced, modified, published, uploaded, posted,
 *     transmitted, distributed, or disclosed in any way without McAfee's prior
 *     express written permission.
 *     
 *     No license under any patent, copyright, trade secret or other intellectual
 *     property right is granted to or conferred upon you by disclosure or
 *     delivery of the Materials, either expressly, by implication, inducement,
 *     estoppel or otherwise. Any license under such intellectual property rights
 *     must be expressed and approved by McAfee in writing.
 *     
 */!function(e){var t={};function n(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(s,o,function(t){return e[t]}.bind(null,o));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=93)}({1:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"g",(function(){return a})),n.d(t,"b",(function(){return E})),n.d(t,"h",(function(){return _})),n.d(t,"f",(function(){return c})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return r}));const s={CACHE_STORE:"CACHE_STORE",CONTENT_HANDLER:"CONTENT_HANDLER",EXECUTE_COMMAND:"EXECUTE_COMMAND",FOCUS_OR_CREATE_TAB:"FOCUS_OR_CREATE_TAB",GET_BK_GLOBALS:"GET_BK_GLOBALS",GET_EXTENSION_STATUS:"GET_EXTENSION_STATUS",GET_TAB_DATA:"GET_TAB_DATA",GTI_REQUEST:"GTI_REQUEST",INSTALL_EXTENSION:"INSTALL_EXTENSION",LOGGER:"LOGGER",PLACEHOLDER_TEXT:"PLACEHOLDER_TEXT",REMOVE_TAB:"REMOVE_TAB",SEND_TELEMETRY:"SEND_TELEMETRY",SET_VIEWPORT:"SET_VIEWPORT",WHITELIST:"WHITELIST",RESET_NATIVE_SETTING:"RESET_NATIVE_SETTING",UPDATE_BK_NATIVE_SETTINGS:"UPDATE_BK_NATIVE_SETTINGS",PAGE_MID_SCROLL:"PAGE_MID_SCROLL",SHOW_SIDEBAR_MAIN:"SHOW_SIDEBAR_MAIN",GET_POPUP_DATA:"GET_POPUP_DATA",GET_SETTINGS_DATA:"GET_SETTINGS_DATA",RESET_SETTINGS:"RESET_SETTINGS",AUTO_RUN_VIDEO_SITE:"AUTO_RUN_VIDEO_SITE",GET_CLICK_EVENT_TIME:"GET_CLICK_EVENT_TIME",SAVE_CLICK_EVENT_TIME:"SAVE_CLICK_EVENT_TIME",GET_TYPOSQUATTING_DATA:"GET_TYPOSQUATTING_DATA",IS_FRAME_BLOCKED:"IS_FRAME_BLOCKED",IS_WHITELISTED:"IS_WHITELISTED",ANY_BLOCKED_IFRAMES:"ANY_BLOCKED_IFRAMES",ANY_BLOCKED_CRYPTOSCRIPTS:"ANY_BLOCKED_CRYPTOSCRIPTS",UNBLOCK_ALL_IFRAMES:"UNBLOCK_ALL_IFRAMES",VIEW_SITE_REPORT:"VIEW_SITE_REPORT",SEARCH_ANNOTATION:"SEARCH_ANNOTATION",UPDATE_ENGINE_STATS:"UPDATE_ENGINE_STATS",GET_FINAL_URL:"GET_FINAL_URL",SOCIAL_MEDIA_ANNOTATION:"SOCIAL_MEDIA_ANNOTATION",UPDATE_RAT_DETECTION_SHOWING_FLAG:"UPDATE_RAT_DETECTION_SHOWING_FLAG",SEARCH_SUGGEST:"SEARCH_SUGGEST",GET_WEIGHTS:"GET_WEIGHTS",SAVE_FORM_INFO:"SAVE_FORM_INFO",GET_FORM_INFO_CACHE:"GET_FORM_INFO_CACHE",CLEAR_FORM_INFO_CACHE:"CLEAR_FORM_INFO_CACHE",SAVE_MULTISTEP_LOGIN:"SAVE_MULTISTEP_LOGIN",CLEAR_CACHED_DWS_INFO:"CLEAR_DWS_INFO",GET_CACHED_DWS_INFO:"GET_CACHED_DWS_INFO",UPDATE_DWS_WHITELIST:"UPDATE_DWS_WHITELIST",LAUNCH_IDPS_LOGIN:"LAUNCH_IDPS_LOGIN",UPDATE_DWS_SHOWN:"UPDATE_DWS_SHOWN",SAVE_FORM_INFO_FOR_WD:"SAVE_FORM_INFO_FOR_WD",GET_APS_DETAILS:"GET_APS_DETAILS",SIGN_UP_FORM_DETECTED:"SIGN_UP_FORM_DETECTED",SET_FF_POLICY_COLLECTION:"SET_FF_POLICY_COLLECTION",SET_FF_POLICY_LAST_SHOWN:"SET_FF_POLICY_LAST_SHOWN"},o={UNBLOCK_IFRAME:"UNBLOCK_IFRAME",BALLOON_MESSAGE:"BALLOON_MESSAGE",PAGE_OVERLAY:"PAGE_OVERLAY",SIDEBAR:"SIDEBAR",TOPBAR:"TOPBAR",PING_CONTENT_ANNOTATION:"PING_CONTENT_ANNOTATION",PING_CONTENT_RAT_DETECTION:"PING_CONTENT_RAT_DETECTION",PING_CONTENT_IFRAME_BANNER:"PING_CONTENT_IFRAME_BANNER",PING_CONTENT_AUTOPLAY_DETECTION:"PING_CONTENT_AUTOPLAY_DETECTION",PING_CONTENT_SIDEBAR_MAIN:"PING_CONTENT_SIDEBAR_MAIN",PING_CONTENT_FF_DL_OVERLAY:"PING_CONTENT_FF_DL_OVERLAY",PING_CONTENT_CRYPTO_BLOCK:"PING_CONTENT_CRYPTO_BLOCK",PING_CONTENT_FF_VIEWPORTS:"PING_CONTENT_FF_VIEWPORTS",PING_CONTENT_FSP:"PING_CONTENT_FSP",PING_CONTENT_IDPS:"PING_CONTENT_IDPS",PING_CONTENT_APS_TOAST:"PING_CONTENT_APS_TOAST",PING_CONTENT_APS_BALLOON:"PING_CONTENT_APS_BALLOON",PING_CONTENT_APS_OBSERVER:"PING_CONTENT_APS_OBSERVER",PING_CONTENT_SCROLL_MID_DETECTION:"PING_CONTENT_SCROLL_MID_DETECTION",PING_CONTENT_SITE_LISTENER:"PING_CONTENT_SITE_LISTENER",PING_IFRAME_FORM_DETECTION:"PING_IFRAME_FORM_DETECTION",PING_IFRAME_BLOCK:"PING_IFRAME_BLOCK",APS_REGISTRATION_PAGE:"APS_REGISTRATION_PAGE",BROADCAST_TO_FOREGROUND:"BROADCAST_TO_FOREGROUND"},a={MAIN:"MAIN",RELOAD:"RELOAD",SMA:"SMA",RAT_DETECTION:"RAT_DETECTION"},E={ADVANCED_PROTECTION_SIGNAL:"ADVANCED_PROTECTION_SIGNAL",ADVANCED_PROTECTION_SIGNAL_TOAST:"ADVANCED_PROTECTION_SIGNAL_TOAST",DWS:"DWS",FIND_SIMILAR_PAGES:"FIND_SIMILAR_PAGES"},_={CRYPTO_BLOCK:"CRYPTO_BLOCK",IFRAME_BLOCK:"IFRAME_BLOCK",TRIGGER_ALLOW:"TRIGGER_ALLOW"},c={SEARCH_EXTENSION_OVERLAY:"SEARCH_EXTENSION_OVERLAY",FINISH_DOWNLOAD:"FINISH_DOWNLOAD"},i={PING:0,DISCONNECT_NATIVE:1,SET_PROPERTY_EX:2,SET_PROPERTY:3,GET_PROPERTY:4,CLEAR_GTI_CACHE:5,RESET_CRYPTO:6,CLEAN_TYPOSQUATING_WHITELIST:7,CLEAR_TYPOSQUATING_CACHE:8,CLEAN_CRYPTO_WHITELIST:10,CLEAN_RAT_WHITELIST:12,CLEAN_RAT_CACHE:13,REPLACE_TRUSTED_DOMAIN:15,VERIFY_GTI_REQUEST:17,VERIFY_TYPOSQUAT_SERVER:18,GET_ALL_WA_SETTINGS:19,SET_STORAGE_PROPERTY:20,GET_STORAGE_PROPERTY:21,REINIT_SCHEDULED_TASKS:22,OPEN_SETTINGS:23,OPEN_ACTION_PANEL:24,GET_MEMORY_FOOTPRINT:26,ENDURANCE_TEST_RESET:27,FORM_DETECTION_RESULT:28,SHOW_UNUSED_SELECTORS:29},r={PONG:0}},11:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return E})),n.d(t,"b",(function(){return _}));const s={GET:"GET",SET:"SET"},o={NONE:"NONE",ONLY_SECURE_SEARCH:"ONLY_SECURE_SEARCH",ALL:"ALL",*[Symbol.iterator](){for(const e of Object.keys(this))yield e}},a={UNKNOWN:0,GOOGLE:1,YAHOO:2,AOL:3,ASK:4,UOL:5,GOO:6,MYWAY:7,TERRA:8,WEB:9,BIGLOBE:10,GMX:11,EXCITE:12,SKY:13,NAVER:14,NIFTY:15,RAKUTEN:16,IXQUICK:17,XFINITY:18,SOGOU:19,DOGPILE:20,SEARCH:21,WEBCRAWLER:22,BING:23,INFO:24,YANDEX:25,YIPPY:26,WOW:27,HAOSO:28,DUCKDUCKGO:30,ONESEARCH:31,LINKEDIN:100,FACEBOOK:101,YOUTUBE:102,INSTAGRAM:103,REDDIT:104,TWITTER:105},E={SHOPPING:{name:"shopping",variants:3},NEWS:{name:"news",variants:2},SEARCH:{name:"search",variants:1},COOKING:{name:"cooking",variants:1},STREAMING:{name:"streaming",variants:1},TRAVEL:{name:"travel",variants:1}},_={SEARCH:0,SOCIALMEDIA:1,FSP:2}},12:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return a}));const s={NONE:0,LINKEDIN:1,INSTAGRAM:2,YOUTUBE:4,FACEBOOK:8,TWITTER:16,REDDIT:32},o=Object.values(s).reduce((e,t)=>e+t),a={TOGGLE_ON:"TOGGLE_ON",TOGGLE_OFF:"TOGGLE_OFF",ANNOTATION_ENABLE_ALL:"ANNOTATION_ENABLE_ALL",ANNOTATION_DISABLE_ALL:"ANNOTATION_DISABLE_ALL",ANNOTATION_ENABLE:"ANNOTATION_ENABLE",ANNOTATION_DISABLE:"ANNOTATION_DISABLE",GET:"GET"}},15:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return T}));var s=n(3);class o{static PreprocessSecureSearchRegEx(e){return e.trim().split("\n")}static getBrowserSuffix(){const{CH:e,FF:t,EDGE:n}={CH:"_ch",FF:"_ff",IE:"_ie",EDGE:"_ed"},o={};return o[s.c.EDGE]=n,o[s.c.FIREFOX]=t,o[s.c.CHROME]=e,o[s.d.BROWSER_TYPE]}}const a={SYSTEM:0,USER:1},{SYSTEM:E,USER:_}=a,c={NONE:0,INT:1,INT64:2,BOOL:3,STRING:4},i={WEBBOOST_AUTO_PLAY_NOTIFICATION:"AutoPlayNotificationRequired",WEBBOOST_UPSELL_DISABLED:"WBUpsellDisabled",USE_NATIVE_LOGGER:"UseNativeLogger"},r=o.getBrowserSuffix(),T={DEV_MODE:{scope:E,name:"dev_mode",value:!1},AFF_ID:{scope:E,name:"*Affid",value:0},BINARY_VERSION:{scope:E,name:"version",value:null},EXTENSION_VERSION_CH:{scope:E,name:"ChromeExtVersion",value:"",writeOnly:!0},EXTENSION_VERSION_FF:{scope:E,name:"*FirefoxXPIVersion",value:"",writeOnly:!0},EXTENSION_VERSION_ED:{scope:E,name:"EdgeExtVersion",value:"",writeOnly:!0},BROWSER_TYPE:{scope:E,name:"browsertype",value:"",writeOnly:!0},USER_AGENT:{scope:E,name:"useragent",value:"",writeOnly:!0},SUGGESTION_URL:{scope:E,name:"suggestion_url",value:""},SCRIPT_GENERATED_DEFAULT_SS_URL:{scope:_,name:`SCRIPT_GENERATED_DEFAULT_SS_URL${r}`,value:""},SECURE_SEARCH_REGEXES:{scope:_,name:"SECURE_SEARCH_REGEXES",value:"",preprocess:o.PreprocessSecureSearchRegEx},SHOW_SEARCH_SETTINGS:{scope:E,name:"*ShowSearchSettings",value:!0},SECURE_SEARCH_TOAST_STAMP:{scope:_,name:`*SSDateStampShowedToast${r}`,value:0},SECURE_SEARCH_ANNOTATION_ONLY:{scope:E,name:"*OnlyShowAnnotationsOnSecureSearch",value:!0},SECURE_SEARCH_SHOW_ICONS:{scope:_,name:"*Icons",value:!0},SECURE_SEARCH_CHOICE:{scope:_,name:`*SSToastChoice${r}`,value:!1,writeOnly:!0},SS_DEF:{scope:E,name:`*SS_DEF${r}`,value:0},FF_EXTENSION_LAST_TOAST_TIME:{scope:_,name:"ff_extension_last_toast_time",value:0,writeOnly:!0},FF_EXTENSION_TOAST_COUNT:{scope:_,name:"ff_extension_toast_count",value:0,writeOnly:!0},CHECKLIST_START_INGORE_DATE_AV:{scope:E,name:"startIgnoreDateAV",value:"",writeOnly:!0},CHECKLIST_START_IGNORE_DATE_FW:{scope:E,name:"startIgnoreDateFW",value:"",writeOnly:!0},CHECKLIST_IGNORE_DURACTION:{scope:E,name:"ignoreDuration",value:"14",writeOnly:!0},CHECKLIST_GRACE_PERIOD_AV:{scope:E,name:"fixGracePeriodStartDateAV",value:"",writeOnly:!0},CHECKLIST_GRACE_PERIOD_FW:{scope:E,name:"fixGracePeriodStartDateFW",value:"",writeOnly:!0},CHECKLIST_GRACE_PERIOD_DURATION:{scope:E,name:"fixGracePeriodDuration",value:"24",writeOnly:!0},CRYPTOJACKING_DISABLED:{scope:E,name:"CryptojackingDisabled",value:!1},SMA_USER_TOGGLE:{scope:E,name:`sma_user_toggle${r}`,value:!1,writeOnly:!0},SMA_ANNOTATION_OPTIONS:{scope:E,name:`sma_annotation_options${r}`,value:0,writeOnly:!0},PAGES_SCANNED:{scope:E,name:"*CounterPagesScanned",value:0},PAGES_BLOCKED:{scope:E,name:"*CounterPagesBlocked",value:0},DOWNLOADS_SCANNED:{scope:E,name:"*CounterDownloadsScanned",value:0},DOWNLOADS_BLOCKED:{scope:E,name:"*CounterDownloadsBlocked",value:0},CRYPTO_BLOCKED:{scope:E,name:"*CounterCryptoJackingBlocked",value:0},BLOCKPAGE_WHITELIST:{scope:_,name:"*WhiteList",value:""},TS_WHITELIST:{scope:_,name:"*TListWhiteList",value:""},CSP_ID_SETTING:{scope:E,name:"CSPIdValue",value:"__not_available__"},UNINSTALL_SURVEY_ENABLED:{scope:E,name:"uninstall_survey_enabled",value:!1},UNINSTALL_SURVEY_URL:{scope:E,name:"uninstall_survey_url",value:""},RAT_DETECTION_ENABLED:{scope:E,name:"rat_detection_enabled",value:!0},FIND_SIMILAR_PAGES_ENABLED:{scope:E,name:"find_similar_pages_enabled",value:!1},FIND_SIMILAR_PAGES_CADENCE_PER_HOUR:{scope:E,name:"find_similar_pages_cadence_per_hour",value:0},FIND_SIMILAR_PAGES_TIMEOUT:{scope:E,name:"find_similar_pages_timeout",value:15e3},FIND_SIMILAR_PAGES_DELAY:{scope:E,name:"find_similar_pages_delay",value:0},FIND_SIMILAR_PAGES_LIMIT_COUNT_PER_DAY:{scope:E,name:"find_similar_pages_limit_count_per_day",value:0},FIND_SIMILAR_PAGES_USER_TOGGLE:{scope:E,name:`find_similar_pages_user_toggle${r}`,value:0},IDPS_FEATURE_ENABLED:{scope:E,name:"idps_feature_enabled",value:0},APS_COHORT:{scope:E,name:"aps_cohort",value:0},ALT_TRIGGER:{scope:E,name:"alt_triggers_cohort",value:0},ADS_ANNOTATION_TRIGGER:{scope:E,name:"ads_annotation_trigger",value:0}}},2:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));const s=chrome},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return E})),n.d(t,"b",(function(){return _}));var s=n(2);class o{static debounce(e,t,n){let s;return(...o)=>{const a=n&&!s;clearTimeout(s),s=setTimeout(()=>{s=null,n||e(...o)},t),a&&e(...o)}}static isBrowserEN(){return s.a.i18n.getUILanguage().toLowerCase().startsWith("en")}static isChromeBrowser(){const e=window.navigator.userAgent.toLowerCase();return!(!e.includes("chrome")||!1==!!window.chrome)&&(!window.opr&&!e.includes("edg"))}}const a=e=>{"complete"===document.readyState||"loading"!==document.readyState&&!document.documentElement.doScroll?e():document.addEventListener("DOMContentLoaded",e)},E=()=>{const e=window.navigator.userAgent.toLowerCase(),t=/(edge)\/([\w.]+)/.exec(e)||/(edg)\/([\w.]+)/.exec(e)||/(opr)[/]([\w.]+)/.exec(e)||/(chrome)[ /]([\w.]+)/.exec(e)||/(iemobile)[/]([\w.]+)/.exec(e)||/(version)(applewebkit)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(e)||/(webkit)[ /]([\w.]+).*(version)[ /]([\w.]+).*(safari)[ /]([\w.]+)/.exec(e)||/(webkit)[ /]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ /]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[],n=/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[],s={browser:t[5]||t[3]||t[1]||"",version:t[4]||t[2]||"0",platform:n[0]||""};return"mozilla"===s.browser&&(s.browser="firefox"),"edg"===s.browser&&(s.browser="edge"),s};async function _(e){const t=(new TextEncoder).encode(e),n=await crypto.subtle.digest("SHA-256",t);return Array.from(new Uint8Array(n)).map(e=>e.toString(16).padStart(2,"0")).join("")}},25:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var s=n(6);class o{constructor(e){this.pingCommand=e,s.a.logDebug(`File Injection [started]: ${this.pingCommand}`),this.basePingListener()}basePingListener(e=null){chrome.runtime.onMessage.addListener((t,n,o)=>{if(n.id!==chrome.runtime.id)return;const{command:a}=t;a===this.pingCommand&&(s.a.logDebug(`File Injection [pinged]: Received ${a} command`),o({content:!0}),"function"==typeof e&&e())})}}},3:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return a})),n.d(t,"e",(function(){return E})),n.d(t,"f",(function(){return _})),n.d(t,"b",(function(){return c})),n.d(t,"i",(function(){return i})),n.d(t,"j",(function(){return r})),n.d(t,"h",(function(){return T})),n.d(t,"g",(function(){return I}));const s={GREEN:0,YELLOW:1,RED:2,UNKNOWN:3,HACKERSAFE:4,TYPOSQUATTING:5,PHISHING:6,*[Symbol.iterator](){for(const e of Object.keys(this))"GREEN"!==e&&"UNKNOWN"!==e&&(yield this[e])}},o={UNKNOWN:-1,FIREFOX:1,CHROME:2,EDGE:3},a={BROWSER_TYPE:2,DEBUG_MODE:!1,EXTENSION_VERSION:"8.1.0.2126",LOG_LEVEL:0,ENGINES_VERSION:"1.0.0.11",YEAR:2022},E={GREEN:0,YELLOW:1,RED:2,UNKNOWN:3,HACKERSAFE:4,DISABLED:5},_={RAISE_NEW_TAB_EVENT:3,UPDATE_CACHE_STATS:4},c={[E.GREEN]:"GREEN",[E.YELLOW]:"YELLOW",[E.RED]:"RED",[E.UNKNOWN]:"WHITE",[E.DISABLED]:"DISABLED"},i={MINIMAL:15,UNKNOWN:30,MEDIUM:50},r=e=>{const t={};return Object.keys(e).forEach(n=>{t[e[n]]=n}),t},T={CH:"https://chrome.google.com/webstore/detail/mcafee%C2%AE-secure-search/enppghjcblldgigemljohkgpcompnjgh",ED:"https://microsoftedge.microsoft.com/addons/detail/dbghilognjpbmkdcpjgodiieiflmlaeb"},I=(e,t)=>Array.from(Array(t+1).keys()).slice(e)},5:function(e,t,n){"use strict";class s{constructor(){this.tabData=new Map}static getResetValues(){return{blockedIframes:[],cryptoBlockData:null,tabDomainTrusted:!1}}static getDefaultValues(){return s.getResetValues()}reset(e){this.update(e,s.getResetValues())}get(e){return this.tabData.get(e)||s.getDefaultValues()}set(e,t){this.tabData.set(e,t)}delete(e){this.tabData.delete(e)}update(e,t){const n=this.get(e);this.set(e,{...n,...t})}setTabBlockPageData(e,t){const n=this.get(e);this.set(e,{...n,blockPageData:t})}addBlockedFrame(e,t){this.get(e).blockedIframes.push(t)}getBlockedFrames(e){return this.get(e).blockedIframes}resetBlockedFrames(e){this.get(e).blockedIframes=[]}}var o=n(3),a=n(8),E=n(15);n.d(t,"a",(function(){return _}));const _={isTrustCheckRequired:!0,ExtensionTelemetryUrl:null,scheduleManager:null,schedules:null,isNativeConnected:!0,telemetryEngine:null,postInstallationPage:"https://www.mcafee.com/consumer/v/wa-how.html",listenerManager:null,firefoxInternalUUID:"",shadowMode:"closed",browserType:o.d.BROWSER_TYPE,cacheStore:null,ffViewports:null,garbageCollector:null,gtiCache:null,typoCache:null,logger:null,messageDispatcher:null,port:null,tabData:new s,tabIdToLastClickTime:new Map,useNativeLogger:!1,wasm:null,userAgentInBase64:null,gtiServer:a.b.GTI_SERVER,typoSquattingServer:a.b.TYPOSQUATTING_SERVER,tldParser:null,cryptoBlacklist:a.c,trustedDomains:a.e,nativeSettings:E.b,searchSuggest:null,ratBlacklist:a.d,wssMessageDispatcher:null,isWssConnected:null,wssNativeClient:null,WSS_INSTALLED:null,searchEngines:null,enginesVersionUrl:a.b.ENGINE_VERSION_URL,engineCheckInterval:864e5,ENGINES_VERSION:o.d.ENGINES_VERSION,AUTO_PLAY_NOTIFICATION_ENABLED:!1,ALLOW_LOCALHOST:!1,IDPS_AUTH_URL:"https://csptoken.ccs.mcafee.com/auth/token",IDPS_BREACH_COUNT_URL:"https://identity.unifiedapis.mcafee.com/breach/v1/BreachCount",IDPS_CSP_CLIENT_ID:null,IDPS_IS_ENTITLED:!1,IDPS_PROVISION_ID:null,IDPS_LOGIN_DOMAIN:"https://protection.mcafee.com",UA_CLIENT:null,TYPOSQUATTING_MAX_CACHE:100,TYPOSQUATTING_EXPIRY:2592e6,WA_IMAGE_SECRET:null,apsUrlList:a.a}},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return E}));var s=n(2),o=n(1),a=n(9);class E{static handlePromiseMessage(e,t=null){return new Promise((n,o)=>{s.a.runtime.sendMessage(e,e=>{"function"==typeof t?t(n,o,e):((e,t,n)=>{s.a.runtime.lastError&&t(s.a.runtime.lastError.message),e(n)})(n,o,e)})})}static logger(e,t){if(Object(a.f)()!==a.a.NONE){Object(a.e)(e,t,a.d.CONTENT);const n=o.a.LOGGER;s.a.runtime.sendMessage({command:n,message:e,logType:t})}}static logError(e){E.logger(e,a.b.ERROR)}static logInfo(e){E.logger(e,a.b.INFO)}static logWarn(e){E.logger(e,a.b.WARN)}static logDebug(e){E.logger(e,a.b.DEBUG)}static cacheStore(e,t){const n=o.a.CACHE_STORE;return this.handlePromiseMessage({command:n,action:e,data:t})}static saveLastClickedTime(e){const t=o.a.SAVE_CLICK_EVENT_TIME;s.a.runtime.sendMessage({command:t,last_event:e})}static getLastClickedTime(){const e=o.a.GET_CLICK_EVENT_TIME;return this.handlePromiseMessage({command:e})}static autoRunVideo(e){const t=o.a.AUTO_RUN_VIDEO_SITE;s.a.runtime.sendMessage({command:t,url:e})}static isFrameBlocked(e){const t=o.a.IS_FRAME_BLOCKED;return this.handlePromiseMessage({command:t,url:e})}static makeGTIRequest(e,t,n,s){const a={command:o.a.GTI_REQUEST,url:e,isSecureSearch:t,requestData:n,referer:s};return this.handlePromiseMessage(a)}static executeCommand(e,t){const n=o.a.EXECUTE_COMMAND;s.a.runtime.sendMessage({command:n,commandId:e,params:t})}static focusOrCreateTab(e){const t=o.a.FOCUS_OR_CREATE_TAB;s.a.runtime.sendMessage({command:t,url:e})}static closeTab(){const e=o.a.REMOVE_TAB;s.a.runtime.sendMessage({command:e})}static whitelist(e,t,n){const s=o.a.WHITELIST;return this.handlePromiseMessage({action:e,command:s,type:t,data:n})}static getPopupData(){const e=o.a.GET_POPUP_DATA;return this.handlePromiseMessage({command:e})}static getSettingsData(){const e=o.a.GET_SETTINGS_DATA;return this.handlePromiseMessage({command:e})}static searchAnnotation(e,t){const n=o.a.SEARCH_ANNOTATION;return this.handlePromiseMessage({action:e,data:t,command:n})}static socialMediaAnnotation(e,t){const n=o.a.SOCIAL_MEDIA_ANNOTATION;return this.handlePromiseMessage({action:e,data:t,command:n})}static getBkGlobals(){const e=o.a.GET_BK_GLOBALS;return this.handlePromiseMessage({command:e})}static viewSiteReport(e=null,t=!1){const n=o.a.VIEW_SITE_REPORT;s.a.runtime.sendMessage({command:n,url:e,showInNewTab:t})}static getTypoSquattingData(e){const t=o.a.GET_TYPOSQUATTING_DATA;return this.handlePromiseMessage({command:t,domain:e})}static getPlaceholderText(e){const t=o.a.PLACEHOLDER_TEXT;return this.handlePromiseMessage({command:t,id:e})}static getFinalUrl(e){const t=o.a.GET_FINAL_URL;return this.handlePromiseMessage({command:t,middlewareUrl:e})}static setViewPort(e,t){const n=o.a.SET_VIEWPORT;s.a.runtime.sendMessage({command:n,x:e,y:t})}static sendTelemetry(e){const t=o.a.SEND_TELEMETRY;s.a.runtime.sendMessage({command:t,telemetry:e})}static anyBlockedIframes(e){const t=o.a.ANY_BLOCKED_IFRAMES;return this.handlePromiseMessage({command:t,frameUrls:e})}static anyBlockedCryptoScripts(){const e=o.a.ANY_BLOCKED_CRYPTOSCRIPTS;return this.handlePromiseMessage({command:e})}static resetSettings(){const e=o.a.RESET_SETTINGS;s.a.runtime.sendMessage({command:e})}static sendEngineStat(e){s.a.runtime.sendMessage({command:o.a.UPDATE_ENGINE_STATS,engine:e})}static contentHandler(e){const t=o.a.CONTENT_HANDLER;s.a.runtime.sendMessage({command:t,message:e})}static getTabData(e={}){const t={command:o.a.GET_TAB_DATA,...e};return this.handlePromiseMessage(t)}static isWhitelisted(e){const t={command:o.a.IS_WHITELISTED,url:e};return this.handlePromiseMessage(t)}static getExtensionStatus(e){return this.handlePromiseMessage({command:o.a.GET_EXTENSION_STATUS,extension_id:e})}static unblockAllIframes(){const e=o.a.UNBLOCK_ALL_IFRAMES;s.a.runtime.sendMessage({command:e})}static updateRatDetectionShowingFlag(e){const t=o.a.UPDATE_RAT_DETECTION_SHOWING_FLAG;s.a.runtime.sendMessage({command:t,showed:e})}static getSearchSuggest(e){const t={command:o.a.SEARCH_SUGGEST,searchTerm:e};return this.handlePromiseMessage(t)}static resetNativeSetting(e){const t=o.a.RESET_NATIVE_SETTING;s.a.runtime.sendMessage({command:t,setting:e})}static getModelWeights(){const e={command:o.a.GET_WEIGHTS};return this.handlePromiseMessage(e)}static saveFormInfo(e){const t=o.a.SAVE_FORM_INFO;s.a.runtime.sendMessage({command:t,data:e})}static saveFormInfoForWD(e){const t=o.a.SAVE_FORM_INFO_FOR_WD;s.a.runtime.sendMessage({command:t,data:e})}static updateDWSWhitelist(e){const t=o.a.UPDATE_DWS_WHITELIST;s.a.runtime.sendMessage({command:t,email:e})}static saveMultiStepLogin(e,t){const n=o.a.SAVE_MULTISTEP_LOGIN;s.a.runtime.sendMessage({command:n,login:e,completeLogin:t})}static getFormInfoCache(){const e=o.a.GET_FORM_INFO_CACHE;return this.handlePromiseMessage({command:e})}static clearFormInfoCache(){const e=o.a.CLEAR_FORM_INFO_CACHE;s.a.runtime.sendMessage({command:e})}static getCachedDWSInfo(e){const t={command:o.a.GET_CACHED_DWS_INFO,email:e};return this.handlePromiseMessage(t)}static clearCachedDWSInfo(e){const t=o.a.CLEAR_CACHED_DWS_INFO;s.a.runtime.sendMessage({command:t,email:e})}static updateDWSShown(e){const t=o.a.UPDATE_DWS_SHOWN;s.a.runtime.sendMessage({command:t,email:e})}static getAPSDetails(){const e=o.a.GET_APS_DETAILS;return this.handlePromiseMessage({command:e})}static signUpFormDetected(){const e=o.a.SIGN_UP_FORM_DETECTED;s.a.runtime.sendMessage({command:e})}static updateBkNativeSettings(e,t){const n=o.a.UPDATE_BK_NATIVE_SETTINGS;s.a.runtime.sendMessage({command:n,name:e,value:t})}static launchIDPSLogin(){const e=o.a.LAUNCH_IDPS_LOGIN;s.a.runtime.sendMessage({command:e})}static pageMidScrollSendMessage(){const e=o.a.PAGE_MID_SCROLL;s.a.runtime.sendMessage({command:e})}static showSidebarMain(){const e=o.a.SHOW_SIDEBAR_MAIN;s.a.runtime.sendMessage({command:e})}static setFFPolicyCollection({personal:e,activity:t}){const n=o.a.SET_FF_POLICY_COLLECTION;s.a.runtime.sendMessage({command:n,personal:e,activity:t})}static setFFPolicyLastShown(){const e=o.a.SET_FF_POLICY_LAST_SHOWN;s.a.runtime.sendMessage({command:e})}static broadcastToForeground(e){const t=o.c.BROADCAST_TO_FOREGROUND;s.a.runtime.sendMessage({command:t,payload:e})}}},7:function(e,t,n){"use strict";n.d(t,"b",(function(){return _})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return i}));var s=n(12),o=n(11);const{NONE:a,...E}=s.c,_={SET:"SET",GET:"GET",CLEAR:"CLEAR"},c={BLOCK_PAGE_PHISHING_FIRST_VARIANT_COUNT:{name:"BLOCK_PAGE_PHISHING_FIRST_VARIANT_COUNT",type:"number"},BLOCK_PAGE_RED_FIRST_VARIANT_COUNT:{name:"BLOCK_PAGE_RED_FIRST_VARIANT_COUNT",type:"number"},BLOCK_PAGE_WHITELIST:{name:"BLOCK_PAGE_WHITELIST",type:"array"},BLOCK_PAGE_YELLOW_FIRST_VARIANT_COUNT:{name:"BLOCK_PAGE_YELLOW_FIRST_VARIANT_COUNT",type:"number"},CRYPTO_WHITELIST:{name:"CRYPTO_WHITELIST",type:"array"},ENGINE_DOWNLOAD_TASK:{name:"ENGINE_DOWNLOAD_TASK",type:"object"},ENGINES:{name:"ENGINES",type:"object"},ENGINES_FUTURE_TIME:{name:"ENGINES_FUTURE_TIME",type:"object"},ENGINES_VERSION:{name:"ENGINES_VERSION",type:"string"},EXTENSION_LOGGING:{name:"EXTENSION_LOGGING",options:[0,1,2,3,4],type:"number"},EXTN_UUID:{name:"EXTN_UUID",type:"string"},FIND_SIMILAR_PAGES_COUNT:{name:"FIND_SIMILAR_PAGES_COUNT",type:"number"},FIND_SIMILAR_PAGES_FIRST_SHOWN:{name:"FIND_SIMILAR_PAGES_FIRST_SHOWN",type:"date"},FIND_SIMILAR_PAGES_LAST_SHOWN:{name:"FIND_SIMILAR_PAGES_LAST_SHOWN",type:"date"},FIND_SIMILAR_PAGES_NEWS_TEXT_VARIANT:{name:"FIND_SIMILAR_PAGES_NEWS_TEXT_VARIANT",type:"number"},FIND_SIMILAR_PAGES_SHOPPING_TEXT_VARIANT:{name:"FIND_SIMILAR_PAGES_SHOPPING_TEXT_VARIANT",type:"number"},FIND_SIMILAR_PAGES_TOGGLE:{name:"FIND_SIMILAR_PAGES_TOGGLE",type:"boolean"},IFRAME_BLOCK_FIRST_TIME:{name:"IFRAME_BLOCK_FIRST_TIME",type:"boolean"},LAST_HEARTBEAT_SENT:{name:"LAST_HEARTBEAT_SENT",type:"object"},POPUP_STATS:{name:"POPUP_STATS",type:"object"},POST_INSTALLATION_PAGE_SHOWED:{name:"POST_INSTALLATION_PAGE_SHOWED",type:"object"},RAT_DETECTION_WHITELIST:{name:"RAT_DETECTION_WHITELIST",type:"array"},SEARCH_ANNOTATION_OPTION:{name:"SEARCH_ANNOTATION_OPTION",options:[...o.a],type:"string"},SOCIAL_MEDIA_ANNOTATION_OPTION:{name:"SOCIAL_MEDIA_ANNOTATION_OPTION",options:{...E},type:"number"},SOCIAL_MEDIA_ANNOTATION_TOGGLE:{name:"SOCIAL_MEDIA_ANNOTATION_TOGGLE",type:"boolean"},TELEMETRY_HEARTBEAT_TASK:{name:"TELEMETRY_HEARTBEAT_TASK",type:"object"},TYPOSQUATTING_WHITELIST:{name:"TYPOSQUATTING_WHITELIST",type:"array"},CACHE_TYPOSQUATTING:{name:"CACHE_TYPOSQUATTING",type:"object"},USER_NATIVE_STATS:{name:"USER_NATIVE_STATS",type:"boolean"},WHITELIST_FLAG:{name:"WHITELIST_FLAG",type:"boolean"},FORM_DETECTION_WEIGHTS:{name:"FORM_DETECTION_WEIGHTS",type:"object"},DWS_INFO:{name:"DWS_INFO",type:"object"},DWS_WHITELIST:{name:"DWS_WHITELIST",type:"array"},DWS_UNIQUE_EMAILS:{name:"DWS_UNIQUE_EMAILS",type:"array"},APS_TOAST_FIRST_TIME:{name:"APS_TOAST_FIRST_TIME",type:"boolean"},APS_FULL_MSG_SHOWN_ARRAY:{name:"APS_FULL_MSG_SHOWN_ARRAY",type:"array"},FF_POLICY_PERSONAL_COLLECTION:{name:"FF_POLICY_PERSONAL_COLLECTION",type:"boolean"},FF_POLICY_ACTIVITY_COLLECTION:{name:"FF_POLICY_ACTIVITY_COLLECTION",type:"boolean"},FF_POLICY_LAST_SHOWN:{name:"FF_POLICY_LAST_SHOWN",type:"number"}},i={RAT_DETECTION_SHOWING:{name:"RAT_DETECTION_SHOWING",type:"map"},FORM_INFO:{name:"FORM_INFO",type:"object"},SAVE_MULTI_STEP_LOGIN:{name:"SAVE_MULTI_STEP_LOGIN",type:"object"},WD_FD_SCRAPPING_ENABLED:{name:"WD_FD_SCRAPPING_ENABLED",type:"boolean"},WD_FD_SCRAPPING_FORM_INFO:{name:"WD_FD_SCRAPPING_FORM_INFO",type:"map"},APS_EMAIL_LINKS:{name:"APS_EMAIL_LINKS",type:"array"},WSS_EMAIL:{name:"WSS_EMAIL",type:"string"}}},8:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return E})),n.d(t,"a",(function(){return _}));const s={MAX_CACHE_RECORDS:1e3,MAX_RESERVED_CALLBACK_ID:5,PHISHING_CATEGORY:169,SITE_ADVISOR_URL:"www.siteadvisor.com/",GTI_SERVER:"https://webadvisorc.rest.gti.mcafee.com/1",TYPOSQUATTING_SERVER:"https://mip.api.mcafeewebadvisor.com/v1/typosquatting?",ENGINE_VERSION_URL:"https://sadownload.mcafee.com/products/SA/Win/extensions/engines/update.json"},o=new Set(["www.mcafee.com"]),a=["wss://*.gasolina.ml/*","*://kissdoujin.com/Content/js/c-hive.js*","wss://*.sen-to-zdrowie.ml/*","*://cookiescript.info/libs/*","*://rocks.io/assets/*","*://coin-have.com/c/*","*://coinnebula.com/lib/*","wss://*.coin-have.com/","ws://digger.cryptobara.com/*","ws://*.webminepool.tk/*","*://*.lewd.ninja/static/m.js*","*://tokyodrift.ga/dropyoulike/a-o/*","*://*.2giga.link/hive/lib/*","*://papoto.com/lib/*","*://load.jsecoin.com/*","ws://*.1q2w3.fun/*","*://*/*plugins/ajcryptominer/assets/*","*://monerominer.rocks/miner.php*","*://minemytraffic.com/*","*://*.monerise.com/core/*","*://*.cookiescript.info/libs/*","ws://hive.tubetitties.com/*","wss://*.freecontent.racing/*","wss://*.hodling.faith/*","ws://gtg02.bestsecurepractice.com/proxy","*://cryptoloot.pro/lib/*","*://lmodr.biz/*","*://*.webminepool.com/lib/base.js","ws://*.sen-to-zdrowie.ml/*","ws://*.morningdigit.com/*","*://mine.nahnoji.cz/*","*://*.minescripts.info/*","*://jsecoin.com/server*","*://coinhive.com/lib*","wss://*.webminepool.tk/*","ws://*.monerise.com/proxy/*","*://kisshentai.net/Content/js/c-hive.js*","*://mataharirama.xyz/*","*://*.coinpirate.cf/*","ws://*.playerassets.info/*","wss://*.1q2w3.fun/*","*://*.1q2w3.fun/*","*://anime.reactor.cc/js/ch/cryptonight.wasm*","*://webmine.cz/miner*","wss://ws.l33tsite.info/*","*://coinhive.com/captcha*","wss://www.mutuza.win/proxy","*://*.morningdigit.com/*","ws://*.host.d-ns.ga/*","*://*.doubleclick5.xyz/*","*://miner.pr0gramm.com/xmr.min.js*","*://*.freecontent.bid/*","ws://lewd.ninja/comics/*","wss://*.monerise.com:9333/proxy/*","*://*.webminepool.com/lib/captcha.js","*://coinerra.com/lib/*","*://*.playerassets.info/*","wss://*.webmine.pro/*","wss://lewd.ninja/comics/*","*://*.doubleclick1.xyz/*","ws://*.freecontent.racing/*","*://*.googleanalytcs.com/*","wss://*.coinnebula.com/proxy*","ws://*.monerise.com:9333/proxy/*","ws://*.freecontent.loan/*","*://party-nngvitbizn.now.sh/*","wss://api.l33tsite.info/*","*://coinlab.biz/lib/coinlab.js*","wss://*.monerise.com/proxy/*","ws://www.mutuza.win/proxy","*://jscdndel.com/content/vidm.min.js*","*://listat.biz/*","*://minecrunch.co/web/*","ws://*.chainblock.science/*","*://baiduccdn1.com/lib/*","*://*.mutuza.win/worker.js","*://*.load.jsecoin.com/*","*://ppoi.org/lib/*","wss://*.chainblock.science/*","wss://*.crypto-loot.com/proxy*","wss://gtg02.bestsecurepractice.com/proxy","wss://*.coinhive.com/proxy*","*://coin-hive.com/captcha*","*://jsccnn.com/content/vidm.min.js*","*://monerominer.rocks/scripts/miner.js*","*://*.jsecoin.com/server*","*://server.jsecoin.com/*","wss://*.coin-hive.com/proxy*","*://*.doubleclick4.xyz/*","*://miner.cryptobara.com/client/*","*://*.rocks.io/assets/*","*://*.ppoi.org/lib/*","*://you.tubetitties.com/worker.js*","wss://*.googleanalytcs.com/*","wss://hive.tubetitties.com/*","*://static.reasedoper.pw/*","*://*.ppoi.org/token/*","ws://*.webmine.pro/*","*://you.tubetitties.com/hash.wasm*","*://*.doubleclick3.xyz/*","*://*.turnsocial.com/m.js","ws://*.hodling.faith/*","wss://*.morningdigit.com/*","*://*.ad-miner.com/lib/*","wss://*.2giga.link/wproxy*","ws://*.googleanalytcs.com/*","*://*.doubleclick6.xyz/*","ws://turnsocial.now.sh/*","*://cdn.cloudcoins.co/javascript/cloudcoins.min.js*","*://joyreactor.cc/ws/ch/*","*://minero.pw/miner.min.js*","*://*.webmine.pro/*","*://punchsub.net/chm.js","wss://mine.nahnoji.cz/*","wss://mine.torrent.pw/*","*://*.mutuza.win/lib/*","*://*.kickass.cd/power2/m.js","ws://*.cpu2cash.link/*","*://*.server.jsecoin.com/*","*://*.mutuza.win/processor.js","wss://turnsocial.now.sh/*","*://kiwifarms.net/js/Jawsh/xmr/xmr.min.js*","*://*.rocks.io/proxy*","*://crypto-loot.com/lib*","*://*.chmproxy.bid/lib/*","ws://*.gasolina.ml/*","*://*.stackpathdns.com/assets/javascript/cr.js","*://*.coinblind.com/lib/*","*://miner.pr0gramm.com/pm.min.js*","*://*.bewhoyouare.gq/*","wss://*.zlx.com.br/proxy*","*://a-o.ninja/apk-AO/kingofthenorth/*","*://ad-miner.com/lib/*","*://*.webminepool.com/api/*","*://*.cpu2cash.link/*","*://*.hemnes.win/*","wss://*.cpu2cash.link/*","ws://*.coinpirate.cf/*","ws://ws.l33tsite.info/*","*://digger.cryptobara.com/client/*","*://kickass.cd/m.js*","ws://*.zlx.com.br/proxy*","*://*.doubleclick2.xyz/*","*://*.amazonaws.com/doubleclick13/*","wss://*.freecontent.loan/*","*://*.host.d-ns.ga/*","*://*.candid.zone/youtube.com/*","ws://api.l33tsite.info/*","*://gtg2.bestsecurepractice.com/lib/*","wss://*.host.d-ns.ga/*","*://coin-hive.com/lib*","ws://mine.nahnoji.cz/*","wss://*.playerassets.info/*","*://*.afminer.com/code/*","wss://*.coinpirate.cf/*","*://cookiescriptcdn.pro/libs/*","*://*.goredirect.party/assets/*","*://*.ZLX.COM.BR/assets/min.js*","*://*.ZLX.COM.BR/assets/playermon.js*","*://p.hemnes.win/lib/*","*://gtg02.bestsecurepractice.com/proxy2/*","*://gtg02.bestsecurepractice.com/meri.js","*://gtg02.bestsecurepractice.com/lv.js","*://gtg02.bestsecurepractice.com/worker.js","*://gtg02.bestsecurepractice.com/processor.js","*://gtg02.bestsecurepractice.com/demo.html","*://*.turnsocial.com/c.wasm*","*://*.turnsocial.com/m.js*","*://cdn.minescripts.info/c/*","*://tokyodrift.ga/dropyoulike/backup/c.wasm*","*://punchsub.net/chm2.js","*://*.kickass.cd/webmr4.js","*://*.kickass.cd/m.js","wss://*.authedmine.com/proxy"],E=[{domain:"www.beamyourscreen.com",urls:[]},{domain:"www.connectwise.com",urls:["www.connectwise.com/platform/unified-management/control"]},{domain:"get.gotoassist.com",urls:[]},{domain:"fastsupport.gotoassist.com",urls:[]},{domain:"www.join.me",urls:[]},{domain:"www.mikogo.com",urls:[]},{domain:"www.mikogo.de",urls:[]},{domain:"www.securelink.com",urls:[]},{domain:"join.zoho.com",urls:[]}],_={shopping:{"www.amazon.com":{paths:["buy/payselect/handlers","buy/addressselect/handlers"]}},email:{"mail.google.com/mail":{selector:"table[role=presentation] > tr div[data-message-id] a"},"outlook.live.com/mail":{selector:"div[role=complementary][aria-label] a"},"outlook.office.com/mail":{selector:"div[role=complementary][aria-label] a"},"outlook.office365.com/mail":{selector:"div[role=complementary][aria-label] a"},"mail.yahoo.com":{selector:"div[role=main] ul li a"}}}},9:function(e,t,n){"use strict";n.d(t,"a",(function(){return E})),n.d(t,"b",(function(){return _})),n.d(t,"d",(function(){return c})),n.d(t,"c",(function(){return r})),n.d(t,"e",(function(){return T})),n.d(t,"f",(function(){return I}));var s=n(5),o=n(3),a=n(7);const E={NONE:0,INFO:1,ERROR:2,WARN:3,DEBUG:4},_={INFO:1,ERROR:2,WARN:3,DEBUG:4},c={BACKGROUND:"BACKGROUND",CONTENT:"CONTENT",TELEMETRY:"TELEMETRY"},i={DEFAULT:"color: #000000; font-weight: normal; font-style:normal; background: #FFFFFF;",BACKGROUND:"color: #8D0DBA; font-weight: bold; background: #FFFFFF;",CONTENT:"color: #F54A26; font-weight: bold; background: #FFFFFF;",TELEMETRY:"color: #147831; font-weight: bold; background: #FFFFFF;"};class r{constructor(){this.nativeLogging=!1,this.browserType=o.d.BROWSER_TYPE,this.extensionType="wa"}setNativeLogging(e){s.a.useNativeLogger=e,this.nativeLogging=e}processLog(e,t,n,o=null){if(this.nativeLogging){const o={processType:t,browserType:this.browserType,extensionType:this.extensionType,logType:n,message:e};s.a.messageDispatcher&&s.a.messageDispatcher.logger(o)}T(e,n,t,o)}log(e,t=c.BACKGROUND,n=null){this.processLog(e,t,E.INFO,n)}error(e,t=c.BACKGROUND){this.processLog(e,t,E.ERROR)}warn(e,t=c.BACKGROUND,n=null){this.processLog(e,t,E.WARN,n)}debug(e,t=c.BACKGROUND,n=null){this.processLog(e,t,E.DEBUG,n)}}const T=(e,t,n,s=null)=>{const o=I();if(o===E.NONE)return;const a=`%c[${n} - ${(new Date).toLocaleString()}]: %c${e}`,c=i.DEFAULT;let r=i[n];if(r||(r=c),s&&(r=`color: ${s}; font-weight: bold; background: #FFFFFF;`),o>=E.ERROR&&t===_.ERROR&&console.error(a,c,c),o>=E.INFO&&t===_.INFO&&console.log(a,r,c),o>=E.WARN&&t===_.WARN){const e="color: #FFA500; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cWARN - ${a}`,e,r,c)}if(o>=E.DEBUG&&t===_.DEBUG){const e="color: #FF33D7; font-family: sans-serif; font-weight: bolder; text-shadow: #000 1px 1px;";console.log(`%cDEBUG - ${a}`,e,r,c)}},I=()=>{const e=o.d.LOG_LEVEL,t=s.a.cacheStore&&s.a.cacheStore.get(a.c.EXTENSION_LOGGING.name,null);return Number.isInteger(t)&&Object.values(E).includes(t)?t:e}},93:function(e,t,n){"use strict";n.r(t);var s=n(6),o=n(23),a=n(25),E=n(1);class _ extends a.a{constructor(){super(E.c.PING_CONTENT_FF_VIEWPORTS)}main(){Object(o.d)(()=>{if(!window)return;const{devicePixelRatio:e,mozInnerScreenX:t,mozInnerScreenY:n,screenX:o,screenY:a}=window,E=Math.round((t-o)*e),_=Math.round((n-a)*e);s.a.setViewPort(E,_)})}}(new _).main()}});
//# sourceMappingURL=../../sourceMap/chrome/scripts/content_ff_viewports.map