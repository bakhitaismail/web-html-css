(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[40803],{448400:(e,t,a)=>{a.d(t,{VS:()=>i,HJ:()=>s,iM:()=>r});const i=2,s="V_HLSV3_MOBILE",r=[0,.01,.02,.03,.04,.05,.06,.07,.08,.09,.1,.11,.12,.13,.14,.15,.16,.17,.18,.19,.2,.21,.22,.23,.24,.25,.26,.27,.28,.29,.3,.31,.32,.33,.34,.35,.36,.37,.38,.39,.4,.41,.42,.43,.44,.45,.46,.47,.48,.49,.5,.51,.52,.53,.54,.55,.56,.57,.58,.59,.6,.61,.62,.63,.64,.65,.66,.67,.68,.69,.7,.71,.72,.73,.74,.75,.76,.77,.78,.79,.8,.81,.82,.83,.84,.85,.86,.87,.88,.89,.9,.91,.92,.93,.94,.95,.96,.97,.98,.99,1]},918335:(e,t,a)=>{a.d(t,{Z:()=>f});var i=a(667294),s=a(867631),r=a.n(s),o=a(597569),l=a(456168),n=a(112978),h=a(727853),d=a(952733),c=a(883119),u=a(978234),p=a(16795),m=a(785893);function y(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}const b=(e,t)=>{if(t){const a="control"===t?"v1.pinimg.com":"v2.pinimg.com";return e.replace("v.pinimg.com",a)}return e},S=(e,t)=>"string"==typeof e?b(e,t):Array.isArray(e)?((e,t)=>e[0].src&&t?[{...e[0],src:b(e[0].src,t)}]:e)(e,t):e;class P extends i.PureComponent{constructor(...e){super(...e),y(this,"state",{canPlayVideo:!1,isManifestParsed:!1,playbackState:p.Cy.DEFAULT}),y(this,"errorRetryCount",1),y(this,"firstFragBuffered",!1),y(this,"hasPlaybackStarted",!1),y(this,"hasVideoSessionStarted",!1),y(this,"hasVideoSessionEnded",!1),y(this,"hls",null),y(this,"fragStartupTime",{}),y(this,"lastLevelSwitchKbps",null),y(this,"lastStallTime",null),y(this,"lastPauseTime",null),y(this,"logSessionStartOnNextPlay",!1),y(this,"playerId",""),y(this,"videoSessionId",""),y(this,"videoVisibleTime",null),y(this,"playbackPerformance",{canPlayTime:null,detailedErrors:"",downloadedKiloBytes:0,errorCode:0,errorName:"",errorReason:"",hasFatalError:!1,loadStartTime:null,numberOfStalls:0,numberOfSeeks:0,playbackStartTimestamp:null,segments:[],srcString:"string"==typeof this.props.src?b(this.props.src,this.props.quicExpGroup):b(this.props.src[0].src,this.props.quicExpGroup),totalStallDurationMs:0,totalPauseDurationMs:0,videoCreatedTime:null}),y(this,"initializeHls",(()=>{this.destroyHls();const{src:e,hlsConfig:t,quicExpGroup:a}=this.props,i=new(r())(t),s=S(e,a);i.loadSource(s),this.videoPlayerRef&&i.attachMedia(this.videoPlayerRef.video),i.on(r().Events.FRAG_BUFFERED,this.handleHlsFragBuffered),i.on(r().Events.FRAG_CHANGED,this.handleHlsFragChanged),i.on(r().Events.FRAG_LOADING,this.handleHlsFragLoading),i.on(r().Events.FRAG_LOADED,this.handleHlsFragLoaded),i.on(r().Events.MANIFEST_PARSED,(()=>{this.setState({isManifestParsed:!0})})),i.on(r().Events.LEVEL_SWITCHED,this.handleHlsLevelSwitched),i.on(r().Events.ERROR,this.handleHlsError),this.hls=i})),y(this,"destroyHls",(()=>{const{hls:e}=this;e&&e.destroy()})),y(this,"addSegment",(e=>{const{segments:t}=this.playbackPerformance,a=t&&t[t.length-1];if(this.hls&&t.length&&a&&a.uri!==e.url){this.updateWatchDurationForCurrentSegment();const a=this.videoPlayerRef&&this.videoPlayerRef.video,i=this.hls&&this.hls.levels||{},s="number"==typeof e.level?i[e.level]:{},r=this.fragStartupTime[e.url];let o=-1;r&&r.startLoadTime&&r.endLoadTime&&(o=r.endLoadTime-r.startLoadTime);const l={indicatedKbps:s.bitrate/p.bR,duration:e.duration,level:e.level,lastStartPlayTime:this.getCurrentVideoTime(),numServerAddressChange:-1,observedKbps:this.hls&&this.hls.bandwidthEstimate/p.bR||-1,playbackStartDate:Date.now(),serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:o,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:a&&a.clientWidth||-1,viewportHeight:a&&a.clientHeight||-1,watchedDurationMs:0};t.push(l)}})),y(this,"initializeSegments",(e=>{const{contextLogData:t={}}=this.props,{is_closeup_video:a=!1}=t,{segments:i}=this.playbackPerformance;if(!i.length)if(this.hls&&this.videoPlayerRef&&this.videoPlayerRef.video&&e){if(!i.length&&"number"==typeof e.level){const t=this.videoPlayerRef&&this.videoPlayerRef.video,a=this.hls.levels,s="number"==typeof e.level?a[e.level]:{},r=this.fragStartupTime[e.url];let o=-1;r&&r.startLoadTime&&r.endLoadTime&&(o=r.endLoadTime-r.startLoadTime),this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/p.bR;const l={indicatedKbps:s.bitrate/p.bR,duration:e.duration,level:e.level,lastStartPlayTime:null,numServerAddressChange:-1,observedKbps:this.hls.bandwidthEstimate/p.bR||-1,playbackStartDate:null,serverAddress:"",sn:e.sn,sourceWidth:s.width,sourceHeight:s.height,startupTimeMs:o,switchBitrateKbps:this.lastLevelSwitchKbps||-1,uri:e.url,viewportWidth:t.clientWidth,viewportHeight:t.clientHeight,watchedDurationMs:0};i.push(l)}}else(0,u.tE)("initializeSegmentsFailed",!0,a)})),y(this,"getCurrentVideoTime",(()=>this.videoPlayerRef&&this.videoPlayerRef.video?this.videoPlayerRef.video.currentTime*p.gJ:null)),y(this,"handleCanPlayVideo",(e=>{const{contextLogData:t={},onReady:a,playing:i}=this.props,{is_closeup_video:s=!1}=t,{canPlayVideo:r}=this.state;(0,u.tE)("handleCanPlayVideo",!0,s,{firstCanPlayEvent:!r,playing:i}),this.playbackPerformance.hasFatalError=!1,r||(this.playbackPerformance.canPlayTime=new Date),this.setState({canPlayVideo:!0}),a&&a(e)})),y(this,"handleEnded",(e=>{const{loop:t,onEnded:a}=this.props,{segments:i}=this.playbackPerformance,s=i&&i[i.length-1];t&&this.videoPlayerRef&&this.videoPlayerRef.video?(this.updateWatchDurationForCurrentSegment(),s&&(s.lastStartPlayTime=0),this.fragStartupTime={}):t||this.logPlaybackPerformance(p.$f,{initiator:"videoEnded",loop:t}),this.setState({playbackState:p.Cy.ENDED}),a&&a(e)})),y(this,"handleHlsError",((e,t)=>{var a;const{contextLogData:i={}}=this.props,{is_closeup_video:s=!1}=i;if(this.playbackPerformance.detailedErrors+=`${this.playbackPerformance.detailedErrors.length>0?", ":""}${t.details}`,t.fatal){var o,l,n,h;this.playbackPerformance.hasFatalError=!0,this.playbackPerformance.errorName=t.type,this.playbackPerformance.errorReason=t.details,this.playbackPerformance.errorCode=t.response&&t.response.code?t.response.code:0;const e={errorName:t.type,errorReason:t.details,errorRetryCount:this.errorRetryCount,errorMessage:(null===(o=t.err)||void 0===o||null===(l=o.message)||void 0===l?void 0:l.slice(0,50))||"unknown",errorResponse:(null===(n=t.response)||void 0===n||null===(h=n.text)||void 0===h?void 0:h.slice(0,50))||"unknown",playbackState:this.state.playbackState};if((0,u.tE)("fatalError",!0,s,e),this.errorRetryCount>0)switch(this.errorRetryCount-=1,t.type){case r().ErrorTypes.NETWORK_ERROR:if(t.details===r().ErrorDetails.MANIFEST_LOAD_ERROR||t.details===r().ErrorDetails.MANIFEST_LOAD_TIMEOUT||t.details===r().ErrorDetails.MANIFEST_LOAD_PARSING_ERROR){var d;const{src:e,quicExpGroup:t}=this.props,a=S(e,t);null===(d=this.hls)||void 0===d||d.loadSource(a)}else{var c;null===(c=this.hls)||void 0===c||c.startLoad()}break;case r().ErrorTypes.MEDIA_ERROR:null===(a=this.hls)||void 0===a||a.recoverMediaError()}}this.updateWatchDurationForCurrentSegment(),this.setState({playbackState:p.Cy.FAILED})})),y(this,"handleHlsFragBuffered",((e,t)=>{this.firstFragBuffered||(this.initializeSegments(t.frag),this.firstFragBuffered=!0)})),y(this,"handleHlsFragChanged",((e,t)=>{this.addSegment(t.frag)})),y(this,"handleHlsFragLoading",((e,t)=>{var a;const i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&!this.fragStartupTime[i]&&(this.fragStartupTime[i]={startLoadTime:new Date})})),y(this,"handleHlsFragLoaded",((e,t)=>{var a;t.frag&&t.frag.loaded&&(this.playbackPerformance.downloadedKiloBytes+=t.frag.loaded/p.Fm);const i=null===(a=t.frag)||void 0===a?void 0:a.url;i&&this.fragStartupTime[i]&&this.fragStartupTime[i].startLoadTime&&(this.fragStartupTime[i].endLoadTime=new Date)})),y(this,"handleHlsLevelSwitched",(()=>{this.hls&&this.hls.bandwidthEstimate&&(this.lastLevelSwitchKbps=this.hls.bandwidthEstimate/p.bR)})),y(this,"handleLoadedMetadata",(()=>{this.setState({playbackState:p.Cy.LOADED_METADATA})})),y(this,"handleLoadStart",(()=>{this.playbackPerformance.loadStartTime=new Date,this.setState({playbackState:p.Cy.LOAD_START})})),y(this,"handleLoadedData",(()=>{this.setState({playbackState:p.Cy.LOADED_DATA})})),y(this,"handlePlaying",(()=>{this.playbackPerformance.hasFatalError=!1,this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.updateStallDuration(),this.updatePauseDuration(),this.setState({playbackState:p.Cy.PLAYING})})),y(this,"handleUserPause",(e=>{const{onPause:t}=this.props;this.lastPauseTime=new Date,t&&t(e)})),y(this,"handleVideoPause",(()=>{this.state.playbackState!==p.Cy.STALLING&&this.state.playbackState!==p.Cy.SEEKING&&(this.updateWatchDurationForCurrentSegment(),this.lastPauseTime||this.updateStallDuration()),this.setState({playbackState:p.Cy.PAUSED})})),y(this,"handleSeeking",(()=>{this.playbackPerformance.numberOfSeeks+=1;const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&(t.lastStartPlayTime=null),this.state.playbackState!==p.Cy.ENDED&&this.setState({playbackState:p.Cy.SEEKING})})),y(this,"handleStalled",(()=>{null===this.lastStallTime&&this.state.playbackState!==p.Cy.ENDED&&(this.lastStallTime=new Date,this.playbackPerformance.numberOfStalls+=1),this.setState({playbackState:p.Cy.STALLING})})),y(this,"handleTimeUpdate",(e=>{const{onTimeChange:t}=this.props;t&&t(e),this.state.playbackState===p.Cy.PLAYING&&(this.updateWatchDurationForCurrentSegment(),this.setLastSegmentStartPlayTime())})),y(this,"resetPlaybackMetrics",(()=>{this.hasPlaybackStarted=!1,this.hasVideoSessionStarted=!1,this.hasVideoSessionEnded=!0,this.lastLevelSwitchKbps=null,this.lastStallTime=null,this.lastPauseTime=null,this.videoSessionId="",this.videoVisibleTime=null,this.logSessionStartOnNextPlay=!1;const e={...this.playbackPerformance.segments[this.playbackPerformance.segments.length-1],lastStartPlayTime:null,playbackStartDate:null,switchBitrateKbps:-1,watchedDurationMs:0};this.playbackPerformance.detailedErrors="",this.playbackPerformance.downloadedKiloBytes=0,this.playbackPerformance.errorCode=0,this.playbackPerformance.errorName="",this.playbackPerformance.errorReason="",this.playbackPerformance.hasFatalError=!1,this.playbackPerformance.numberOfStalls=0,this.playbackPerformance.numberOfSeeks=0,this.playbackPerformance.playbackStartTimestamp=null,this.playbackPerformance.totalStallDurationMs=0,this.playbackPerformance.segments=[e]})),y(this,"setLastSegmentStartPlayTime",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.lastStartPlayTime&&(t.lastStartPlayTime=this.getCurrentVideoTime())})),y(this,"setLastSegmentPlaybackStartDate",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1];t&&null===t.playbackStartDate&&(t.playbackStartDate=Date.now())})),y(this,"setPlaybackStartTime",(()=>{this.hasPlaybackStarted||(this.playbackPerformance.playbackStartTimestamp=Date.now(),this.hasPlaybackStarted=!0)})),y(this,"setVideoPlayerRef",(e=>{const{setVideoRef:t}=this.props;if(e&&(t&&t(e),this.videoPlayerRef=e,this.videoPlayerRef.video)){const e=this.videoPlayerRef.video;e.addEventListener("loadedmetadata",this.handleLoadedMetadata),e.addEventListener("loadeddata",this.handleLoadedData),e.addEventListener("pause",this.handleVideoPause),e.readyState>=3&&(this.setState({canPlayVideo:!0}),this.playbackPerformance.canPlayTime=new Date)}})),y(this,"updateStallDuration",(()=>{null!==this.lastStallTime&&(this.playbackPerformance.totalStallDurationMs+=new Date-this.lastStallTime,this.lastStallTime=null)})),y(this,"updatePauseDuration",(()=>{if(null!==this.lastPauseTime){const e=this.lastPauseTime;this.playbackPerformance.totalPauseDurationMs+=new Date-e,this.lastPauseTime=null}})),y(this,"updateWatchDurationForCurrentSegment",(()=>{const{segments:e}=this.playbackPerformance,t=e&&e[e.length-1],a=t?t.lastStartPlayTime:null,i=this.getCurrentVideoTime();if(t&&null!==a&&"number"==typeof i&&"number"==typeof a){const e=i-a;e>0&&(t.watchedDurationMs+=e,t.lastStartPlayTime=null)}})),y(this,"logPlaybackPerformance",((e,t)=>{const{contextLogData:a={},userId:i,isAutoPlay:s,logContextEvent:r}=this.props,{is_closeup_video:o=!1}=a,{canPlayTime:l,detailedErrors:n,downloadedKiloBytes:h,errorCode:d,errorName:c,errorReason:m,hasFatalError:y,playbackStartTimestamp:b,totalPauseDurationMs:S,totalStallDurationMs:P,segments:f,srcString:g,loadStartTime:v,numberOfStalls:D,numberOfSeeks:E}=this.playbackPerformance,k=this.videoPlayerRef&&this.videoPlayerRef.video,T=e===p.DR,L=T&&!this.hasVideoSessionStarted,R=!T&&!this.hasVideoSessionEnded&&this.hasVideoSessionStarted;if(this.hls&&k&&(L||R)){var w;let L=-1;l&&v&&(L=l>v?l-v:0);let R=-1;l&&this.videoVisibleTime&&(R=l>this.videoVisibleTime?l-this.videoVisibleTime:0),T&&(this.videoSessionId=(0,p.Y7)(i),this.playerId=this.playerId||(0,p.EB)());const _={autoplaying:s,averageVideoKbps:-1,detailedErrors:n,downloadedKiloBytes:h,isCellular:!1,errorCode:d,errorName:c,errorReason:m,fatalError:y,nativeVideoDurationMs:k.duration*p.gJ||-1,numberOfStalls:D,numberOfSeeks:E,overallPausedDurationMs:S,overallBufferDurationMs:P,overallWatchedDurationMs:-1,rebufferRate:-1,playbackSessionId:this.videoSessionId,playbackStartTimestamp:b||-1,segments:[],sessionMark:e,screenPixelScale:null!==(w=window)&&void 0!==w&&w.devicePixelRatio?window.devicePixelRatio:-1,startupPlayerWidth:k.clientWidth,startupPlayerHeight:k.clientHeight,startupTimeMs:L,startupLatencyMs:R,startupVariantKbps:-1,startupVariantWatchedDurationMs:-1,startupVariantWidth:k.videoWidth,startupVariantHeight:k.videoHeight,videoUrl:g};if(!T&&f.length){const e=this.hls.levels,t=f[0];this.updateWatchDurationForCurrentSegment(),this.updateStallDuration();const a=f.reduce(((t,a)=>{if(a&&"number"==typeof a.level&&e&&e.length>0){return t+(e[a.level]||{}).bitrate*(a.watchedDurationMs||0)/p.gJ}return t}),0),i=f.reduce(((e,t)=>e+(t.watchedDurationMs||0)),0);let s=null,r=0,o=0;do{r+=f[o].watchedDurationMs,s=s||f[o].level,o+=1}while(o<f.length&&f[o].level===s);_.startupVariantKbps=t.indicatedKbps,_.startupVariantWatchedDurationMs=r,_.startupVariantWidth=t.sourceWidth,_.startupVariantHeight=t.sourceHeight,_.startupPlayerWidth=t.viewportWidth,_.startupPlayerHeight=t.viewportHeight,_.overallWatchedDurationMs=i,i>0?(_.averageVideoKbps=a/(i/p.gJ),_.rebufferRate=this.playbackPerformance.totalStallDurationMs/i):0===i&&(_.averageVideoKbps=-1,_.rebufferRate=-1,_.errorName="invalid_watch_duration"),_.segments=f}else _.errorName="invalid_watch_duration";(0,u.ZP)(_,!0,o,{playbackState:this.state.playbackState,...t});const{clientTrackingParams:A,component:C,durationNs:M,element:V,objectId:O,pairId:I,viewData:F,view:N,viewParameter:H,...x}=a;r({aux_data:{...x,is_closeup_video:o,playback_session_id:this.videoSessionId},clientTrackingParams:A,component:C,duration_ns:M,element:V,event_data:{videoPerformanceData:_},event_type:3606,object_id_str:O,pair_id:I,view_data:F,view_parameter:H,view_type:N}),T?(this.hasVideoSessionStarted=!0,this.hasVideoSessionEnded=!1):this.resetPlaybackMetrics(),(0,u.tE)(T?"sessionStart":"sessionEnd",!0,o,{playbackState:this.state.playbackState,...t})}}))}componentDidMount(){const{contextLogData:e={},playing:t}=this.props,{is_closeup_video:a=!1}=e;this.playbackPerformance.videoCreatedTime=new Date,this.initializeHls(),(0,u.tE)("videoMounted",!0,a),t&&(this.videoVisibleTime=new Date,this.logPlaybackPerformance(p.DR,{initiator:"mount"}))}componentDidUpdate(e){const{loop:t,playing:a,src:i,visible:s,appInFocus:r}=this.props;var o,l;(typeof(o=e.src)!=typeof(l=i)||(Array.isArray(l)?o.length!==l.length||l.some(((e,t)=>!Array.isArray(o)||e.type!==o[t].type||e.src!==o[t].src)):l!==o))&&this.initializeHls(),e.appInFocus&&!r&&(this.logPlaybackPerformance(p.$f,{initiator:"update",loop:t}),this.logSessionStartOnNextPlay=!0),e.visible&&!1===s&&(this.logSessionStartOnNextPlay=!1,this.updatePauseDuration(),this.logPlaybackPerformance(p.$f,{initiator:"update",loop:t})),!1===e.visible&&!0===s&&(this.videoVisibleTime=this.videoVisibleTime||new Date,a?(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(p.DR,{initiator:"update"})):this.logSessionStartOnNextPlay=!0),a&&r&&this.logSessionStartOnNextPlay&&(this.setPlaybackStartTime(),this.setLastSegmentStartPlayTime(),this.setLastSegmentPlaybackStartDate(),this.logPlaybackPerformance(p.DR,{initiator:"update"}),this.logSessionStartOnNextPlay=!1)}componentWillUnmount(){const{loop:e}=this.props;this.updatePauseDuration(),this.logPlaybackPerformance(p.$f,{initiator:"unmount",loop:e}),this.destroyHls()}render(){const{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityProgressBarLabel:r,accessibilityUnmuteLabel:o,aspectRatio:l,captions:n,controls:h,loop:d,loopOverride:u,onDurationChange:p,onFullscreenChange:y,onLoadedChange:b,onPlay:P,onPlayheadDown:f,onPlayheadUp:g,onSeek:v,onVolumeChange:D,playbackRate:E,playing:k,playsInline:T,poster:L,preload:R,quicExpGroup:w,src:_,volume:A}=this.props,{canPlayVideo:C,isManifestParsed:M}=this.state,V=S(_,w);return(0,m.jsx)(c.nk,{accessibilityMaximizeLabel:e,accessibilityMinimizeLabel:t,accessibilityMuteLabel:a,accessibilityPauseLabel:i,accessibilityPlayLabel:s,accessibilityProgressBarLabel:r,accessibilityUnmuteLabel:o,aspectRatio:l,captions:n,controls:h,loop:void 0===u?d:u,onDurationChange:p,onEnded:this.handleEnded,onFullscreenChange:y,onLoadStart:this.handleLoadStart,onLoadedChange:b,onPause:this.handleUserPause,onPlay:P,onPlaying:this.handlePlaying,onPlayheadDown:f,onPlayheadUp:g,onReady:this.handleCanPlayVideo,onSeek:v,onSeeking:this.handleSeeking,onStalled:this.handleStalled,onTimeChange:this.handleTimeUpdate,onVolumeChange:D,onWaiting:this.handleStalled,playbackRate:E,playing:M&&C&&k,playsInline:T,poster:L,preload:R,ref:this.setVideoPlayerRef,src:V,volume:A})}}const f=(0,i.memo)((function(e){const{country:t,isAuthenticated:a,isBot:i,isSocialBot:s,unauthId:r,userAgent:c}=(0,d.B)(),p=(0,o.Z)(),y=(0,l.Z)(),{browserName:b,browserVersion:S,isMobile:f}=c,{contextLogData:g={}}=e,{is_closeup_video:v=!1,view:D,viewParameter:E}=g,k=(0,n.tc)("web_video_quic"),T=(0,n.tc)("web_video_fail_to_start_fix");let L=null;a&&(L=k().group.length?k().group:null);const{appUI:R}=(0,h.I)(),w=T().anyEnabled?R.appInFocus:e.appInFocus,_={browserName:b,browserVersion:S,country:t,isAuthenticated:a,isBot:i,is_closeup_video:v,isMobile:f,isSocialBot:s,view:D,viewParameter:E};return(0,u.r$)(_),(0,m.jsx)(P,{...e,userId:y.id||r,appInFocus:w,quicExpGroup:L,logContextEvent:p})}))},978234:(e,t,a)=>{a.d(t,{r$:()=>h,tE:()=>d,ZP:()=>c});var i=a(987117),s=a(71445),r=a(16795);const o=["isCellular","videoUrl","sessionMark"];let l={},n="";const h=e=>{const{browserName:t,browserVersion:a,country:s,isAuthenticated:r,isBot:o,isMobile:h,isSocialBot:d,view:c="unknown",viewParameter:u="unknown"}=e;n=(d?"socialBot":o&&"bot")||"nonbot";const p=(0,i.Z)(s);l={browserName:t,browserVersion:(null==a?void 0:a.split(".")[0])||"0",isAuthenticated:r,isMobile:h,region:p,view:c,viewParameter:u}};function d(e,t,a,i={}){const r=a?"closeup":"nonCloseup",o=t?"hls":"nonHls",h={...i,...l},d=`web.video.${o}.${n}.${r}.${e}`;s.Z.increment(d,1,h)}function c(e,t,a,i={}){const h=a?"closeup":"nonCloseup",d=t?"hls":"nonHls",c=e.sessionMark===r.DR?"sessionStart":"sessionEnd",u={...i,...l};if(Object.entries(e).forEach((([t,a])=>{const i=`web.video.${d}.${n}.${h}.${c}.${t}`,r=parseInt(a,10),l="number"==typeof r?r:-1;var p;if(!o.includes(t))if(t.includes("fatalError")&&!0===a){const{errorCode:t,errorName:a,errorReason:r}=e;s.Z.increment(i,1,{errorCode:t,errorName:a,errorReason:r,...u})}else if(t.includes("Width")||t.includes("Height")){const e=(p=l)<0?"negative":0===p?"zero":p<200?"xs":p<400?"s":p<600?"m":p<800?"l":p<1e3?"xl":p<1200?"xxl":"over1200";s.Z.increment(i,1,{dimensionBucket:e,...u})}else if("numberOfStalls"===t){let e=a;l>1e3?e="over1000":l>10?e="over10":l<0&&(e="negative"),s.Z.increment(i,1,{numberOfStalls:e,...u})}else"screenPixelScale"===t?s.Z.increment(i,1,{screenPixelScale:a||-1,...u}):l>=0?(0===l&&s.Z.increment(`${i}.zero`,1,u),s.Z.timing(i,l,1),s.Z.timing(`${i}_with_tags`,l,1,u)):l<0&&s.Z.increment(`${i}.negative`,1,u)})),e.sessionMark!==r.DR){const{rebufferRate:t,screenPixelScale:a,startupLatencyMs:i,startupVariantWidth:r,startupPlayerWidth:o}=e,l=`web.video.${d}.${n}.${h}.${c}`;if("number"==typeof r&&"number"==typeof o&&"number"==typeof a){const e=1.5*r>a*o;s.Z.increment(`${l}.upscaled.${e?"good":"bad"}`,1,u)}"number"==typeof i&&s.Z.increment(`${l}.startupLatency.${i<500?"good":"bad"}`,1,u),"number"==typeof t&&s.Z.increment(`${l}.rebufferRate.${t<.01?"good":"bad"}`,1,u)}}},16795:(e,t,a)=>{a.d(t,{DR:()=>s,$f:()=>r,gJ:()=>o,bR:()=>l,Fm:()=>n,Cy:()=>h,lG:()=>d,Y7:()=>c,EB:()=>u});var i=a(172045);const s=1,r=2,o=1e3,l=1e3,n=1e3,h=Object.freeze({DEFAULT:0,LOAD_START:1,LOADED_METADATA:2,LOADED_DATA:3,PLAYING:4,PAUSED:5,SEEKING:6,STALLING:7,FAILED:8,ENDED:9}),d=Object.freeze({MEDIA_ERR_ABORTED:1,MEDIA_ERR_NETWORK:2,MEDIA_ERR_DECODE:3,MEDIA_ERR_SRC_NOT_SUPPORTED:4});function c(e){return e+"-"+(0,i.Z)()}function u(){return(0,i.Z)()}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/40803-cc1afb02a626a84e.mjs.map