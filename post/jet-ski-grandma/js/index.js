!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.SHOW_LOGGING=t.FILLS_ENDPOINT=t.FEEDS_ENDPOINT=t.VAST_ENDPOINT=t.EVENT_LOGGING_ENDPOINT=t.API_ENDPOINT=t.API_ENDPOINT_LEGACY=t.DAILYMAIL=t.LARGE=t.DEDICATED=t.STANDARD=void 0,t.STANDARD=!1,t.DEDICATED=!1,t.LARGE=!1,t.DAILYMAIL=!1,t.API_ENDPOINT_LEGACY="https://api.remixd.com",t.API_ENDPOINT="https://player.remixd.com",t.EVENT_LOGGING_ENDPOINT="https://player-files.remixd.com/ping.gif",t.VAST_ENDPOINT="https://geo.ads.audio.thisisdax.com",t.FEEDS_ENDPOINT="https://feeds.remixd.com",t.FILLS_ENDPOINT="https://player.remixd.com/player/fills.js",t.SHOW_LOGGING=!1},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getArticleTimePublished=t.getArticleTimeModified=t.isFn=t.areTuplesEqual=t.iOS=t.isIE11=t.getRandomNumberInRange=t.createHtmlElementFromHtmlString=t.parsePageFeedMacros=t.getFormatedDateFromTimestamp=t.secondsToHMMSS=t.delay=t.guid=void 0;t.guid=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(e){var t=16*Math.random()|0;return("x"==e?t:3&t|8).toString(16)}))};t.delay=function(e){return new Promise((function(t){setTimeout((function(){return t(!0)}),e)}))};t.secondsToHMMSS=function(e){var t=new Date(1e3*Math.ceil(Number(e))).toISOString().substr(11,8);return t.startsWith("00:")&&(t=t.replace(/00:/,"")),t};t.getFormatedDateFromTimestamp=function(e){return new Date(e).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"})};var r=function(e){var t=e.toString();return 1===t.length?"0"+t:t};t.parsePageFeedMacros=function(e,t){var n=new Date;t&&n.setDate(n.getDate()-1);var i=n.getFullYear(),a=r(n.getMonth()+1),o=r(n.getDate()),l="".concat(i,"-").concat(a,"-").concat(o);return e.replace("<%feedDate%>",l)};t.createHtmlElementFromHtmlString=function(e){var t=document.createElement("div");return t.innerHTML=e.trim(),t.firstElementChild};t.getRandomNumberInRange=function(e,t){return Math.random()*(t-e)+e};t.isIE11=function(){return!!window.MSInputMethodContext&&!!document.documentMode};t.iOS=function(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document};t.areTuplesEqual=function(e,t){return!e.find((function(e,n){return e!==t[n]}))};t.isFn=function(e){return e&&"[object Function]"==={}.toString.call(e)};var i=function(e){return!isNaN(Date.parse(e))},a=function(e,t,n){var r,i='head meta[property="'.concat(t,":").concat(n,'"][content]');return null===(r=e.document.querySelector(i))||void 0===r?void 0:r.getAttribute("content")};t.getArticleTimeModified=function(e){var t,n=a(e,"article","published_time"),r=a(e,"article","modified_time");return i(n)&&i(r)?r:r=null===(t=Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map((function(e){return e.innerHTML})).map((function(e){try{return JSON.parse(e)}catch(e){return null}})).filter((function(e){return!!e})).find((function(e){return(i(e.dateCreated)||i(e.datePublished))&&i(e.dateModified)})))||void 0===t?void 0:t.dateModified};t.getArticleTimePublished=function(e){var t,n,r=a(e,"article","published_time"),o=a(e,"article","published_time");return i(r)?r:(r=null===(t=Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map((function(e){return e.innerHTML})).map((function(e){try{return JSON.parse(e)}catch(e){return null}})).filter((function(e){return!!e})).find((function(e){return i(e.dateCreated)})))||void 0===t?void 0:t.dateCreated,o=null===(n=Array.from(document.querySelectorAll('script[type="application/ld+json"]')).map((function(e){return e.innerHTML})).map((function(e){try{return JSON.parse(e)}catch(e){return null}})).filter((function(e){return!!e})).find((function(e){return i(e.datePublished)})))||void 0===n?void 0:n.datePublished,void 0!==r?r:o)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainFromUrl=t.getFeedUrl=t.getEventLoggingUrl=t.fetchFileAsText=t.onPageTrackInfo=t.getQueryParam=t.stripParams=t.stripUrl=void 0;var r=n(0),i=n(1);t.stripUrl=function(e){var t=encodeURI(e).replace(/^(https?:\/\/)?(www\.)?/,"").split("?")[0];return(0,i.isIE11)()&&(t=t.split(":")[0]),t};t.stripParams=function(e){var t=new URL(e);return"".concat(t.origin).concat(t.pathname)};t.getQueryParam=function(e,t){return new URLSearchParams(e).get(t)};t.onPageTrackInfo=function(e,n,i,a,o,l){var s=i?3:2,c=l?"".concat(r.API_ENDPOINT,"/article/").concat(encodeURIComponent((0,t.stripParams)(e)),"?v=").concat(s):"".concat(r.API_ENDPOINT_LEGACY,"/player/check_url?u=").concat(encodeURIComponent(e),"&v=").concat(s);a&&(c=c+"&tm="+encodeURIComponent(a)),o&&(c=c+"&l="+o);var d=new XMLHttpRequest;d.open("GET",c,!0),d.addEventListener("load",(function(){if(d.readyState===d.DONE&&200===d.status){var e=JSON.parse(d.responseText);n(e)}})),d.send()};t.fetchFileAsText=function(e,t,n){var r=new XMLHttpRequest;r.open("GET",e,!0),r.addEventListener("load",(function(){r.readyState===r.DONE&&200===r.status&&t(r.responseText)})),n&&r.addEventListener("error",n),r.send()};t.getEventLoggingUrl=function(e){var t=Object.keys(e).map((function(t){return encodeURIComponent(t)+"="+encodeURIComponent(e[t])})).join("&");return"".concat(r.EVENT_LOGGING_ENDPOINT,"?").concat(t)};t.getFeedUrl=function(e,n){var i=(0,t.getQueryParam)(n,"playlist");return i?"".concat(r.FEEDS_ENDPOINT,"/").concat((0,t.stripUrl)(e),"/website/").concat(i):null};t.getDomainFromUrl=function(e){return(0,t.stripUrl)(new URL(e).hostname)}},function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),t.FEED_DATE_MACRO=t.FEED_TITLE_MACRO=t.SPEED_MENU_OPTION_ACTIVE=t.SPEED_MENU_OPTION=t.SPEED_MENU_OPTION_LIST_ID=t.SPEED_SELECTION_COMPONENT_ID=t.CLOSE_SPEED_MENU_CONTROL_ID=t.OPEN_SPEED_MENU_CONTROL_ID=t.RELEVANT_AD_ERROR_CODES=t.DEFAULT_JWPLAYER_CONFIG=t.SKIP_AD_DELAY=t.PRE_ROLL_DELAY=t.PROCESSING_CHECK_INTERVAL=t.BUFFERING_STATE_DELAY=t.PROGRESS_BAR_SIZE_MULTIPLIER=t.DEFAULT_JUMP_TIME=t.DEFAULT_VOLUME=t.PLAYER_STATE_CLASSES=t.CONTROL_IDS=t.LISTEN_TEXT_CONTROL_ID=t.PLAYER_MAIN_CONTENT_ID=t.PLAYER_WRAPPER_CONTAINER_ID=t.MUTE_STATE_CLASSNAME=t.FONT_NAME_VAR=t.MAIN_CONTROL_COLOR_VAR=t.TEXT_COLOR_VAR=t.BACKGROUND_COLOR_VAR=t.SECONDARY_COLOR_VAR=t.PRIMARY_COLOR_VAR=t.PLAYER_FLOATING_CLASS=t.GHOST_PLAYER_CONTAINER_ID=t.JWPLAYER_CONTAINER_ID=t.PLAYER_IFRAME_CLASS=t.PLAYER_SCRIPT_ID=t.PLAYER_CONTAINER_CLASS=void 0;var a=n(6);t.PLAYER_CONTAINER_CLASS="remixd-audio-player",t.PLAYER_SCRIPT_ID="remixd-audio-player-script",t.PLAYER_IFRAME_CLASS="remixd-frame",t.JWPLAYER_CONTAINER_ID="rmxd-audio-track",t.GHOST_PLAYER_CONTAINER_ID="rmxd-audio-back-track",t.PLAYER_FLOATING_CLASS="floating",t.PRIMARY_COLOR_VAR="--rmxd-primary",t.SECONDARY_COLOR_VAR="--rmxd-secondary",t.BACKGROUND_COLOR_VAR="--rmxd-bg-color",t.TEXT_COLOR_VAR="--rmxd-text-color",t.MAIN_CONTROL_COLOR_VAR="--rmxd-play-color",t.FONT_NAME_VAR="--rmxd-font",t.MUTE_STATE_CLASSNAME="muted",t.PLAYER_WRAPPER_CONTAINER_ID="playerContentWrapper",t.PLAYER_MAIN_CONTENT_ID="playerMainContent",t.LISTEN_TEXT_CONTROL_ID="listenText",t.CONTROL_IDS=((r={})[a.PlayerControl.PlayPause]="playerPlayPause",r[a.PlayerControl.PlayCTA]="playerCTA",r[a.PlayerControl.MuteUnmute]="playerMuteUnmute",r[a.PlayerControl.Rewind]="playerRewind",r[a.PlayerControl.Forward]="playerForward",r[a.PlayerControl.PreviousSong]="playerPrevious",r[a.PlayerControl.NextSong]="playerNext",r[a.PlayerControl.Volume]="playerVolumeControl",r[a.PlayerControl.VolumeBar]="playerVolumeBar",r[a.PlayerControl.Progress]="playerProgressControl",r[a.PlayerControl.ProgressBar]="playerProgressBar",r[a.PlayerControl.TimeRemaining]="playerRemainingDuration",r[a.PlayerControl.TimePassed]="playerProgressDuration",r[a.PlayerControl.Title]="playerTitleContainer",r[a.PlayerControl.SkipAd]="skipAdBtn",r),t.PLAYER_STATE_CLASSES=((i={})[a.PlayerState.Loading]="loading",i[a.PlayerState.Loaded]="loaded",i[a.PlayerState.Processing]="processing",i[a.PlayerState.Playing]="playing",i[a.PlayerState.Paused]="paused",i[a.PlayerState.AdPlaying]="ad-playing",i[a.PlayerState.AdPaused]="ad-paused",i[a.PlayerState.Buffering]="buffering",i),t.DEFAULT_VOLUME=50,t.DEFAULT_JUMP_TIME=10,t.PROGRESS_BAR_SIZE_MULTIPLIER=1e4,t.BUFFERING_STATE_DELAY=250,t.PROCESSING_CHECK_INTERVAL=5e3,t.PRE_ROLL_DELAY=-.43,t.SKIP_AD_DELAY=5,t.DEFAULT_JWPLAYER_CONFIG={mute:!1,preload:"none",height:0,width:0,volume:t.DEFAULT_VOLUME},t.RELEVANT_AD_ERROR_CODES=[10100,10101,10102,10900,60002,60003,60007,60900],t.OPEN_SPEED_MENU_CONTROL_ID="playerSpeedBtn",t.CLOSE_SPEED_MENU_CONTROL_ID="close-speed-menu-button",t.SPEED_SELECTION_COMPONENT_ID="speed-menu",t.SPEED_MENU_OPTION_LIST_ID="SpeedMenuOptions",t.SPEED_MENU_OPTION="speed-menu-item",t.SPEED_MENU_OPTION_ACTIVE="speed-menu-item--active",t.FEED_TITLE_MACRO="<%feedTitle%>",t.FEED_DATE_MACRO="<%feedDate%>"},function(e,t,n){"use strict";var r,i;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.PlayerImpression="remixd-player-impression",e.PlayerPlay="remixd-player-play",e.PlayerPause="remixd-player-pause",e.Mute="remixd-player-mute",e.Complete="remixd-player-complete"}(r||(r={})),function(e){e.PlayerError="remixd-player-error"}(i||(i={}));var a=[1e5,100001,100011,100012,100013,100014,101100,101101,101102,101103,101104,101105,101120,104100,104151,104152,104153,104154,200001,220001,221e3,224e3,224001,224005],o=[224002,224003,303200,303210,303212,303213,303220,303230],l=function(){function e(e){this.debounceTimeoutHandles={},this.playing=!1,this.jwPlayerInstance=e,this.dispatchMessage(r.PlayerImpression)}return e.prototype.registerEvents=function(){var e=this;this.jwPlayerInstance.on("play",(function(){e.playing||(e.dispatchMessage(r.PlayerPlay),e.playing=!0)})),this.jwPlayerInstance.on("pause",(function(){e.playing&&(e.dispatchMessage(r.PlayerPause),e.playing=!1)})),this.jwPlayerInstance.on("mute",(function(){return e.dispatchMessage(r.Mute)})),this.jwPlayerInstance.on("complete",(function(){return e.dispatchMessage(r.Complete)})),this.jwPlayerInstance.on("error",(function(t){var n=t.code;a.includes(n)?e.dispatchError(i.PlayerError,"Player was unable to instantiate all the components."):o.includes(n)?e.dispatchError(i.PlayerError,"Player was unable to play the audio file."):e.dispatchError(i.PlayerError,"Unknown error occured.")}))},e.informPlayerComponentInstantiationFail=function(){var e={data:{event:i.PlayerError,error:"Player was unable to fetch all the components."},scope:"remixd"};window.top.postMessage(e,"*")},e.prototype.dispatchMessage=function(e){var t={data:{event:e},scope:"remixd"};window.top.postMessage(t,"*")},e.prototype.dispatchError=function(e,t){var n={data:{event:e,error:t},scope:"remixd"};window.top.postMessage(n,"*")},e}();t.default=l},function(module,exports,__webpack_require__){"use strict";var __assign=this&&this.__assign||function(){return __assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},__assign.apply(this,arguments)},__awaiter=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))},__generator=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(6===l[0]&&o.label<i[1]){o.label=i[1],i=l;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(l);break}i[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}},__importDefault=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},_a;Object.defineProperty(exports,"__esModule",{value:!0});var constants_1=__webpack_require__(3),environment_1=__webpack_require__(0),request_helpers_1=__webpack_require__(2),utils_1=__webpack_require__(1),dailymail_event_logger_1=__importDefault(__webpack_require__(4)),player_container_wrapper_1=__webpack_require__(7),config_service_1=__importDefault(__webpack_require__(10)),player_iframe_event_handler_1=__importDefault(__webpack_require__(11)),track_manager_1=__importDefault(__webpack_require__(12)),pageHostUri=location.host,pageLocation=location.href,playerTheme=(null===(_a=window._rmxd)||void 0===_a?void 0:_a.theme)||"light",config,PlayerBuilder=function(){function PlayerBuilder(e){var t=this;this.continueInitialization=function(e,n,r,i){var a="dedicated"!==n.playerType;a&&t.exposePlayerInitializationAPI(),(!a||r||n.initializeOnLoad)&&t.buildPlayer(e,n,i)},this.targetWindow=e}return PlayerBuilder.prototype.initiatePlayerBuildout=function(e){var t=this;!e&&window._rmxd&&window._rmxd.loaded?environment_1.SHOW_LOGGING&&console.warn("Player already loaded!"):(window._rmxd||(window._rmxd={}),window._rmxd.loaded=!0,(0,utils_1.isIE11)()?(0,request_helpers_1.fetchFileAsText)(environment_1.FILLS_ENDPOINT,(function(e){return t.fillWindowAndInitiatePlayer(e)}),(function(){throw dailymail_event_logger_1.default.informPlayerComponentInstantiationFail(),"Player was unable to instantiate all the components"})):this.initiatePlayer(e))},PlayerBuilder.prototype.fillWindowAndInitiatePlayer=function(fillScriptAsText){var _this=this;document.addEventListener("remixd-fills-ready",(function(){_this.initiatePlayer(!1,fillScriptAsText)})),eval(fillScriptAsText)},PlayerBuilder.prototype.initiatePlayer=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n,r,i,a,o,l,s,c,d,u,p=this;return __generator(this,(function(f){return n=!!(null===(d=this.targetWindow._rmxd)||void 0===d?void 0:d.url),r=new URL(n?this.targetWindow._rmxd.url:this.targetWindow.location.href),i=(null===(u=this.targetWindow._rmxd)||void 0===u?void 0:u.gamTargeting)||{},config.referrerUrl=config.iframeBreakout?window.top.location.href:r.href,config.timeModified=(0,utils_1.getArticleTimeModified)(this.targetWindow),config.timePublished=(0,utils_1.getArticleTimePublished)(this.targetWindow),config.isAMP=n,config.theme=playerTheme,config.gamTargeting=i,a=function(e){var t=new Date;return t.setFullYear(t.getFullYear()-1),e<t},environment_1.SHOW_LOGGING&&console.log("config:",config),o=null===config.timePublished,l=void 0!==config.timePublished&&isNaN(Date.parse(config.timePublished)),s=a(new Date(config.timePublished)),c=new Date(config.timePublished)>new Date,o||l||s||c?new track_manager_1.default(config).getPageTrackInfo(!1,(function(n){n||(console.warn("Player hidden, article is older than 1 year or timePublished is invalid"),config.playerType="hidden"),p.continueInitialization(r,config,e,t)})):this.continueInitialization(r,config,e,t),[2]}))}))},PlayerBuilder.prototype.getPageFeed=function(e,t){var n=t.hostname.split(".")[1],r=e.externalFeedDomain||n,i=t.search;return(0,request_helpers_1.getFeedUrl)(r,i)},PlayerBuilder.prototype.buildPlayer=function(e,t,n){if("hidden"!==t.playerType){"dedicated"===t.playerType&&(t.pageFeed=this.getPageFeed(t,e),t.dedicatedPageUrl=pageLocation),t.isMobile=config_service_1.default.isMobileDevice(navigator.userAgent,this.targetWindow.orientation),t.theme=playerTheme;var r=document.getElementById(constants_1.PLAYER_SCRIPT_ID);this.playerContainerWrapper=new player_container_wrapper_1.PlayerContainerWrapper(r,t,n),["standard","dailymail"].includes(t.playerType)&&this.exposePlayerAPI()}},PlayerBuilder.prototype.exposePlayerInitializationAPI=function(){var e=this;window._rmxd||(window._rmxd={});var t=function(){e.playerContainerWrapper&&(e.playerContainerWrapper.removeOldPlayer(),e.playerContainerWrapper=null)},n=function(){t(),e.initiatePlayerBuildout(!0)};window._rmxd=__assign(__assign({},window._rmxd),{removePlayer:t,loadPlayer:function(){0===document.getElementsByClassName(constants_1.PLAYER_CONTAINER_CLASS).length&&n()},reloadPlayer:n}),this.targetWindow.dispatchEvent(new Event("remixdplayerready"))},PlayerBuilder.prototype.exposePlayerAPI=function(){var e=this,t=document.querySelector("."+constants_1.PLAYER_IFRAME_CLASS),n=function(e){if(t){var n={data:{event:e},scope:"remixd"};t.contentWindow.postMessage(n,"*")}};window._rmxd=__assign(__assign({},window._rmxd),{playPlayer:function(){return n("player-play")},pausePlayer:function(){return n("player-pause")},on:function(e,t){return player_iframe_event_handler_1.default.on(e,t)},off:function(e){return player_iframe_event_handler_1.default.off(e)},onAll:function(e){return player_iframe_event_handler_1.default.onAll(e)},offAll:function(){return player_iframe_event_handler_1.default.offAll()},togglePlayerTheme:function(t){!t||["light","dark"].includes(t)?(playerTheme=t||("dark"==playerTheme?"light":"dark"),e.playerContainerWrapper.setIframeTheme(playerTheme)):console.error('Theme named "'.concat(t,'" does not exist!'))}}),this.targetWindow.dispatchEvent(new Event("remixdplayerapiready")),player_iframe_event_handler_1.default.register(t)},PlayerBuilder}(),playerBuilder=new PlayerBuilder(window),isDocumentReady=function(){return"loading"!==document.readyState},waitForDocument=new Promise((function(e){if(isDocumentReady())return e();document.addEventListener("readystatechange",(function(){isDocumentReady()&&e()}))})),init=function(){return __awaiter(void 0,void 0,void 0,(function(){var e,t,n,r,i,a;return __generator(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),e=(null===(a=null===window||void 0===window?void 0:window._rmxd)||void 0===a?void 0:a.url)?new URL(window._rmxd.url).host:pageHostUri,[4,Promise.all([config_service_1.default.getPlayerConfigurations(e),waitForDocument])];case 1:return t=o.sent(),n=t[0],t[1],r=config_service_1.default.getSection(pageLocation,pageHostUri),config=config_service_1.default.getPageConfig(n,r),playerBuilder.initiatePlayerBuildout(),[3,3];case 2:return i=o.sent(),console.error(i),dailymail_event_logger_1.default.informPlayerComponentInstantiationFail(),[3,3];case 3:return[2]}}))}))};"undefined"!=typeof window&&init()},function(e,t,n){"use strict";var r,i,a,o,l;Object.defineProperty(t,"__esModule",{value:!0}),t.CustomEvents=t.JWPlayerState=t.PlayerControl=t.PlayerEvent=t.PlayerState=void 0,function(e){e[e.Loading=0]="Loading",e[e.Loaded=1]="Loaded",e[e.Processing=2]="Processing",e[e.Playing=3]="Playing",e[e.Paused=4]="Paused",e[e.AdPlaying=5]="AdPlaying",e[e.AdPaused=6]="AdPaused",e[e.Buffering=7]="Buffering"}(r||(t.PlayerState=r={})),function(e){e.PlayerImpression="playerImpression",e.Loading="loading",e.Loaded="loaded",e.Engaged="engaged",e.Play="play",e.Played="played",e.LoadingArticleAudio="loadingArticleAudio",e.AdCall="adCall",e.AdImpression="adImpression",e.AdError="adError",e.AdPlayed="adPlayed",e.AdPause="adPause",e.AdSkipped="adSkipped",e.AdComplete="adComplete",e.Pause="pause",e.Paused="paused",e.Seek="seek",e.Mute="mute",e.VolumeChange="volumeChange",e.SpeedChange="speedChange",e.Complete="complete",e.PageClosed="pageClosed",e.ExchangeError="exchangeError",e.ProcessingError="processingError",e.Listen="listen"}(i||(t.PlayerEvent=i={})),function(e){e[e.PlayPause=0]="PlayPause",e[e.PlayCTA=1]="PlayCTA",e[e.MuteUnmute=2]="MuteUnmute",e[e.Volume=3]="Volume",e[e.VolumeBar=4]="VolumeBar",e[e.Rewind=5]="Rewind",e[e.Forward=6]="Forward",e[e.PreviousSong=7]="PreviousSong",e[e.NextSong=8]="NextSong",e[e.Progress=9]="Progress",e[e.ProgressBar=10]="ProgressBar",e[e.TimeRemaining=11]="TimeRemaining",e[e.TimePassed=12]="TimePassed",e[e.Title=13]="Title",e[e.SkipAd=14]="SkipAd"}(a||(t.PlayerControl=a={})),function(e){e.Idle="idle",e.Buffering="buffering",e.Playing="playing",e.Paused="paused",e.Error="error",e.Complete="complete"}(o||(t.JWPlayerState=o={})),function(e){e.PlaylistItemPlay="playlistitemplay",e.PlaylistItemPause="playlistitempause",e.TitleChange="titlechange",e.ResetPlayer="resetplayer"}(l||(t.CustomEvents=l={}))},function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function l(e){try{s(r.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,l)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,i,a,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function l(l){return function(s){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;a&&(a=0,l[0]&&(o=0)),o;)try{if(n=1,r&&(i=2&l[0]?r.return:l[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,l[1])).done)return i;switch(r=0,i&&(l=[2&l[0],i.value]),l[0]){case 0:case 1:i=l;break;case 4:return o.label++,{value:l[1],done:!1};case 5:o.label++,r=l[1],l=[0];continue;case 7:l=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==l[0]&&2!==l[0])){o=0;continue}if(3===l[0]&&(!i||l[1]>i[0]&&l[1]<i[3])){o.label=l[1];break}if(6===l[0]&&o.label<i[1]){o.label=i[1],i=l;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(l);break}i[2]&&o.ops.pop(),o.trys.pop();continue}l=t.call(e,o)}catch(e){l=[6,e],r=0}finally{n=i=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,s])}}},a=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.PlayerContainerWrapper=void 0;var l=n(3),s=n(1),c=o(n(4)),d=o(n(8)),u=n(9),p=n(0),f="remixd-player-style",m=function(){function e(e,t,n){this.temporaryEventTracker=new d.default,this.targetWindow=t.iframeBreakout?window.top:window,this.appendContainerStyle(t),this.appendIframeElement(e,t),this.buildPlayer(t,n),this.setIframeTheme(t.theme)}return Object.defineProperty(e.prototype,"targetDocument",{get:function(){return this.targetWindow.document},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"headElement",{get:function(){return this.targetDocument.head||this.targetDocument.getElementsByTagName("head")[0]},enumerable:!1,configurable:!0}),e.prototype.removeOldPlayer=function(){this.temporaryEventTracker.deregisterAllEvents(),this.temporaryEventTracker.deregisterAllMutationObservers(),this.iframe.contentWindow.document.open(),this.iframe.contentWindow.document.close(),document.getElementsByClassName(l.PLAYER_CONTAINER_CLASS)[0].remove(),document.getElementById(f).remove()},e.prototype.registerIframeEvents=function(e,t,n){var r=this;this.iframe.addEventListener("load",(function(){if(e.serializedPageFeed=t,(0,s.isIE11)())return r.temporaryEventTracker.registerUniqueEvent(r.iframe.contentDocument,"remixd-fills-ready",(function(){return r.forwardConfigAndSetWindowEvents(e)})),void r.iframe.contentWindow.eval(n);r.forwardConfigAndSetWindowEvents(e)})),e.sticky&&this.temporaryEventTracker.registerEvent(this.targetWindow,"scroll",(function(){return r.switchFloatingState()}))},e.prototype.forwardConfigAndSetWindowEvents=function(e){var t=this;this.iframe.contentWindow.dispatchEvent(new CustomEvent("configuration",{detail:e})),e.sticky&&this.switchFloatingState(),this.temporaryEventTracker.registerEvent(this.iframe.contentWindow,"setiframeclass",(function(e){var n=e.detail,r=n[0];n[1]?t.iframe.classList.add(r):t.iframe.classList.remove(r)})),"dedicated"===e.playerType&&(this.temporaryEventTracker.registerEvent(window,"resize",(function(){return t.resizeFn()})),this.temporaryEventTracker.registerMutationObserver(this.iframe.contentDocument.body,(function(){return t.resizeFn()}),!0,!0),this.temporaryEventTracker.registerEvent(this.targetWindow,"scroll",(function(){return t.elementPositionTrackingCb()})))},e.prototype.resizeFn=function(){var e=this.iframe.contentDocument.body.scrollHeight;this.iframe.parentElement.style.height="".concat(e,"px")},e.prototype.elementPositionTrackingCb=function(){var e=this.iframe.contentDocument.getElementById(l.PLAYER_WRAPPER_CONTAINER_ID),t=this.iframe.contentDocument.getElementById(l.PLAYER_MAIN_CONTENT_ID),n=document.scrollingElement.scrollTop,r=this.iframe.offsetTop,i=e.getBoundingClientRect().top,a=t.offsetHeight,o=n-r-i;o<=0?(t.style.top="auto",t.classList.remove("fixed"),e.style.height="auto"):(t.style.top=Math.round(o)+"px",t.classList.add("fixed"),e.style.height=Math.round(a)+"px")},e.prototype.switchFloatingState=function(){if(this.iframe){var e=this.iframe.parentElement.getBoundingClientRect(),t=this.iframe.parentElement.offsetHeight;e.top>=0-t&&e.bottom<=(this.targetWindow.innerHeight||this.targetDocument.documentElement.clientHeight)+t?(this.iframe.classList.remove(l.PLAYER_FLOATING_CLASS),this.iframe.contentWindow.document.body.removeAttribute("data-floating")):(this.iframe.classList.add(l.PLAYER_FLOATING_CLASS),this.iframe.contentWindow.document.body.setAttribute("data-floating",""))}},e.prototype.appendIframeElement=function(e,t){var n=document.createElement("div");n.classList.add(l.PLAYER_CONTAINER_CLASS),"dedicated"!==t.playerType&&(n.style.position="relative"),this.iframe=document.createElement("iframe"),this.iframe.classList.add(l.PLAYER_IFRAME_CLASS),this.iframe.style.border="none",n.appendChild(this.iframe);var r=t.placementSelector?this.targetDocument.querySelector(t.placementSelector):null;if(r)switch(t.placementPosition){case"before":r.parentElement.insertBefore(n,r);break;case"inside":r.prepend(n);break;case"after":r.parentElement.insertBefore(n,r.nextSibling);break;default:e.parentElement.insertBefore(n,e)}else e.parentElement.insertBefore(n,e);this.buildLoadingAnimation(n,t),this.iframe.setAttribute(t.isMobile?"data-mobile":"data-desktop","")},e.prototype.getPrefixedColor=function(e){return e.startsWith("#")?e:"#"+e},e.prototype.appendLoadingDivStyle=function(e){var t=this.getPrefixedColor(e.fg),n=this.getPrefixedColor(e.mainControlColor),r=this.getPrefixedColor(e.textColor),i=this.getPrefixedColor(e.bgColor),a=".remixd-loading{position:absolute;z-index:10;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;padding:0 ".concat("dailymail"===e.playerType?"12.5px":"0",";background:").concat(i,"}.remixd-loading-text{margin:0 0 0 1rem!important;color:").concat(r,';font-size:20px;font-family:"').concat(e.font,'", "Barlow";font-weight:600}.remixd-loading-control{flex:0 0 55px;width:55px;height:55px;display:flex;align-items:center;justify-content:center;background-color:').concat(t,";color:").concat(n,");border-radius:50%}.remixd-dots{display:flex;align-items:flex-start;justify-content:space-between;width:30px;height:12px}.remixd-dot{width:6px;height:6px;border-radius:50%;background:").concat(n,";position:relative;transform:translateY(0);transition:all .33s;animation:loading 1s infinite}.remixd-dot:nth-of-type(2){animation-delay:.125s}.remixd-dot:nth-of-type(3){animation-delay:.25s}@keyframes loading{50%{transform:translateY(100%)}}"),o=this.targetDocument.getElementById(f);o.innerText=o.innerText+a},e.prototype.buildLoadingAnimation=function(e,t){var n;if("dedicated"!==t.playerType&&t.initializeOnLoad&&!(null===(n=this.iframe.contentWindow.document.body)||void 0===n?void 0:n.innerHTML)){this.appendLoadingDivStyle(t),this.loadingAnimationDiv=document.createElement("div"),this.loadingAnimationDiv.classList.add("remixd-loading");var r=document.createElement("div");r.classList.add("remixd-loading-control");var i=document.createElement("div");i.classList.add("remixd-dots"),Array.from(Array(3),(function(){return document.createElement("div")})).forEach((function(e){e.classList.add("remixd-dot"),i.appendChild(e)})),r.appendChild(i);var a=document.createElement("p");a.classList.add("remixd-loading-text");try{a.innerText=(0,u.getLoadingText)(window.top.document)}catch(e){console.warn("Cannot access the top window document!"),a.innerText=(0,u.getLoadingText)()}this.loadingAnimationDiv.appendChild(r),this.loadingAnimationDiv.appendChild(a),e.appendChild(this.loadingAnimationDiv)}},e.prototype.removeLoadingAnimation=function(){this.loadingAnimationTimeoutHandle&&(clearTimeout(this.loadingAnimationTimeoutHandle),this.loadingAnimationTimeoutHandle=null),this.loadingAnimationDiv&&(this.loadingAnimationDiv.parentElement.removeChild(this.loadingAnimationDiv),this.loadingAnimationDiv=null)},e.prototype.appendContainerStyle=function(e){var t=this.targetDocument.createElement("style");t.id=f,this.headElement.appendChild(t),t.type="text/css",t.appendChild(this.targetDocument.createTextNode(e.containerStyle))},e.prototype.buildPlayer=function(e,t){return r(this,void 0,void 0,(function(){var n,r,a;return i(this,(function(i){switch(i.label){case 0:return[4,this.fetchPlayerFiles(e)];case 1:if(n=i.sent(),r=n[0],a=n[1],!r)throw"Failed to load the player template.";return this.registerIframeEvents(e,a,t),this.appendIframeContent(e,r),[2]}}))}))},e.prototype.setIframeTheme=function(e){this.iframe.setAttribute("theme",e),this.iframe.contentWindow.dispatchEvent(new CustomEvent("themechange",{detail:e}))},e.prototype.fetchPlayerFiles=function(e){return r(this,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return t=fetch(e.templateUrl,{mode:"cors"}).then((function(e){return e.text()})),n="dedicated"===e.playerType?this.fetchExternalFeed(e.pageFeed,e.externalFeed):Promise.resolve(null),[4,Promise.all([t,n]).then((function(e){return a([],e,!0)})).catch((function(t){"dailymail"==e.playerType&&c.default.informPlayerComponentInstantiationFail(),console.error(t)}))];case 1:return[2,r.sent()||null]}}))}))},e.prototype.appendIframeContent=function(e,t){var n,r=this;if(n='<script type="application/javascript" src='.concat(e.jwPlayerScriptUrl,"><\/script>"),t=t.replace("</head>",n+"</head>"),this.iframe.contentWindow.document.write(t),this.iframe.contentWindow.document.close(),e.playerInnerStyle&&void 0!==e.playerInnerStyle){var i=document.createElement("style");i.setAttribute("type","text/css"),i.innerText=e.playerInnerStyle,this.iframe.contentDocument.head.append(i)}this.temporaryEventTracker.registerUniqueEvent(this.iframe.contentWindow,"remixdplayerloaded",(function(){return r.removeLoadingAnimation()}))},e.prototype.fetchExternalFeed=function(e,t){return r(this,void 0,void 0,(function(){var n,r,a,o;return i(this,(function(i){switch(i.label){case 0:return r=function(){return!(n&&n.ok)},e?[4,fetch(e,{mode:"cors"})]:[3,2];case 1:n=i.sent(),i.label=2;case 2:return r()?(console.error("Failed to fetch the page feed."),(a=(0,s.parsePageFeedMacros)(t))===e?(p.SHOW_LOGGING&&console.log("Fetching yesterday's feed"),a=(0,s.parsePageFeedMacros)(t,!0)):p.SHOW_LOGGING&&console.log("Fetching today's feed"),[4,fetch(a,{mode:"cors"})]):[3,4];case 3:n=i.sent(),i.label=4;case 4:return r()?(a=(0,s.parsePageFeedMacros)(t,!0),p.SHOW_LOGGING&&console.log("Fetching yesterday's feed"),[4,fetch(a,{mode:"cors"})]):[3,6];case 5:n=i.sent(),i.label=6;case 6:if(r())throw o="Failed to fetch the external feed.",console.error(o),o;return[2,n.text()]}}))}))},e}();t.PlayerContainerWrapper=m},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),i=function(){function e(){this.trackedEventsData=[],this.mutationObservers=[]}return e.prototype.registerEvent=function(e,t,n){e.addEventListener(t,n),this.trackedEventsData.push([e,t,n])},e.prototype.registerUniqueEvent=function(e,t,n){e.addEventListener(t,(function r(){n(),e.removeEventListener(t,r)}))},e.prototype.deregisterEvent=function(e,t,n){var i=this.trackedEventsData.findIndex((function(i){return(0,r.areTuplesEqual)(i,[e,t,n])}));-1!==i&&(e.removeEventListener(t,n),this.trackedEventsData.splice(i,1))},e.prototype.deregisterAllEvents=function(){this.trackedEventsData.forEach((function(e){var t=e[0],n=e[1],r=e[2];t.removeEventListener(n,r)})),this.trackedEventsData=[]},e.prototype.registerMutationObserver=function(e,t,n,r){var i=new MutationObserver(t);i.observe(e,{attributes:n,childList:r}),this.mutationObservers.push(i)},e.prototype.deregisterAllMutationObservers=function(){this.mutationObservers.forEach((function(e){return e.disconnect})),this.mutationObservers=[]},e}();t.default=i},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getLoadingText=void 0;var r="Loading your audio article",i="Chargement de votre article audio",a="Caricamento del tuo articolo audio",o="Laden Sie Ihren Audio-Artikel",l="Carregando seu artigo de áudio",s="Cargando su artículo de audio";t.getLoadingText=function(e){switch(e?e.documentElement.lang.toLowerCase().slice(0,2):null){case"fr":return i;case"it":return a;case"de":return o;case"pt":return l;case"es":return s;default:return r}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(2);t.default={getPlayerConfigurations:function(e){var t="".concat(r.API_ENDPOINT,"/config/").concat((0,i.stripUrl)(e));return fetch(t).then((function(e){return e.json().catch((function(e){return console.error("Failed to fetch the player configuration.",e)}))}))},getSection:function(e,t){return(0,i.stripUrl)(e).split("?")[0].replace((0,i.stripUrl)(t)+"/","")},getPageConfig:function(e,t){var n=e.map((function(e){return e.section})).reduce((function(e,n){return t.startsWith(n)&&n.length>e.length&&(e=n),e}),"");return e.find((function(e){return e.section===n}))},isMobileDevice:function(e,t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(e)||void 0!==t}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=[];t.default={register:function(e){window.addEventListener("message",(function(t){t.source===e.contentWindow&&"remixd"===t.data.scope&&r.filter((function(e){return[null,t.data.event].includes(e.event)})).forEach((function(e){return e.callback(t.data)}))}))},on:function(e,t){var n={event:e,callback:t};return r.push(n),{unsubscribe:function(){r=r.filter((function(e){return e!==n}))}}},off:function(e){r=r.filter((function(t){return t.event!==e}))},onAll:function(e){r.push({event:null,callback:e})},offAll:function(){r=[]}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),i=n(2),a=function(){function e(e){this.referrerUrl=e.referrerUrl,this.timeModified=e.timeModified,this.language="standard"===e.playerType?e.language:null,this.isMigrated=e.isMigrated}return e.prototype.getPageTrackInfo=function(e,t){var n=this.getArticleCheckUrl(e),r=new XMLHttpRequest;r.open("GET",n,!0),r.addEventListener("load",(function(){if(r.readyState===r.DONE&&200===r.status){var e=JSON.parse(r.responseText);t(e)}else t(null)})),r.send()},e.prototype.setReferrerUrl=function(e){this.referrerUrl=e},e.prototype.getArticleCheckUrl=function(e){var t;return this.isMigrated?(t=new URL("".concat(r.API_ENDPOINT,"/article/").concat(encodeURIComponent((0,i.stripParams)(this.referrerUrl)))),e||t.searchParams.append("c","false"),t.href):((t=new URL("".concat(r.API_ENDPOINT_LEGACY,"/player/check_url"))).searchParams.append("u",this.referrerUrl),t.searchParams.append("v",(e?2:3).toString()),this.timeModified&&t.searchParams.append("tm",this.timeModified),this.language&&t.searchParams.append("l",this.language),t.href)},e}();t.default=a}]);