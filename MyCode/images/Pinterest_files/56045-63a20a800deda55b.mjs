(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[56045],{951866:(e,t,i)=>{i.d(t,{Z:()=>S});var o=i(667294),n=i(40142),l=i(568594),r=i(710159),s=i(123686),a=i(883119),u=i(785893);const d=({followText:e,followerCount:t,userFollowed:i})=>{const o=(0,r.ZP)();return(0,s.nk)(o._("{{ followCount }} {{ followText }}"," - "," -- "),{followCount:(0,u.jsx)(a.xu,{"data-test-id":"followCount",paddingX:1,opacity:i?void 0:.8,children:(0,u.jsx)(a.xv,{color:i?"gray":"white",children:(0,u.jsx)(l.Z,{value:t,shortform:!0,shortformMaximumFractionDigits:0})})},"followCount"),followText:(0,u.jsx)(a.xu,{"data-test-id":"followText",paddingX:1,children:(0,u.jsx)(a.xv,{color:i?"darkGray":"white",weight:"bold",children:e})},"followText")})};function c({ideaPinImages:e}){const t={1:28,2:40,3:48},i=e.map(((e,t)=>{var i,o,n;return(0,u.jsx)(a.xu,{height:48,width:28,color:"white",borderStyle:"sm",overflow:"hidden",rounding:2,dangerouslySetInlineStyle:{__style:{borderColor:"white",marginInlineEnd:"-17px",WebkitMaskImage:"-webkit-radial-gradient(white, black)",zIndex:t}},children:(0,u.jsx)(a.Ee,{alt:"",src:null!==(i=null==e?void 0:e.url)&&void 0!==i?i:"",color:"#696969",fit:"cover",naturalHeight:null!==(o=null==e?void 0:e.height)&&void 0!==o?o:1,naturalWidth:null!==(n=null==e?void 0:e.width)&&void 0!==n?n:1})},t)}));return(0,u.jsx)(a.kC,{justifyContent:"center",children:(0,u.jsx)(a.kC,{justifyContent:"start",width:t[e.length],children:i})})}var h=i(647136),f=i(379771);function p({href:e,id:t,imageUrl:i,onHide:o,text:n}){const l=(0,f.Z)({name:"UserStoryPinsFeedResource",options:{data:{filter_version:2,public_only:!0},field_set_key:"follow_grid_item",user_id:t}});if(!l.data)return null;if(0===l.data.length)return(0,u.jsx)(h.ZP,{duration:5e3,onHide:o,text:n,href:e,imageUrl:i,thumbnailShape:"circle"});const r=l.data.slice(0,3).map((e=>{var t;return null===(t=e.images)||void 0===t?void 0:t["236x"]})),s=(0,u.jsx)(c,{ideaPinImages:r});return(0,u.jsx)(h.ZP,{duration:5e3,href:e,iconThumbnail:s,onHide:o,text:n,thumbnailShape:"square"})}var _=i(20814),x=i(914861),g=i(400850),w=i(735767),m=i(539195),v=i(167544),E=i(321762),I=i(786654),y=i(358142),C=i(708206),R=i(461694);function j(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class P extends o.PureComponent{constructor(...e){super(...e),j(this,"handleButtonClick",this.props.requireAuth((({event:e})=>{this.props.shouldStopEventPropagation&&(e.preventDefault(),e.stopPropagation());const{loggingData:t}=this.props;this.props.logContextEvent({event_type:101,component:13672,element:11951,object_id_str:this.props.id,view_type:this.props.viewType,view_parameter:this.props.viewParameter,...t||Object.freeze({})}),this.toggleFollowUnfollow()}),(0,g.N4)({i18n:this.props.i18n,toFollow:!this.props.userFollowed}))),j(this,"handleClick",this.props.requireAuth((({event:e})=>{this.props.shouldStopEventPropagation&&e.stopPropagation(),this.toggleFollowUnfollow()}))),j(this,"toggleFollowUnfollow",(()=>{const{id:e,mostRecentPinId:t,loggingData:i,userFollowed:o,viewType:n,viewParameter:l}=this.props;o?(this.props.logContextEvent({event_type:46,object_id_str:e,view_type:n,view_parameter:l,aux_data:{pin_id:t},...i||Object.freeze({})}),this.unfollow()):(this.props.logContextEvent({event_type:45,object_id_str:e,view_type:n,view_parameter:l,aux_data:{pin_id:t},...i||Object.freeze({})}),this.follow())})),j(this,"follow",(()=>{const{follow:e,id:t,onUserFollow:i,mostRecentPinId:o,setMostRecentPinId:n}=this.props;e(t,o,this.showConfirmation,this.showError),i&&i(!0),n(null)})),j(this,"showToast",(e=>{const{id:t,imageUrl:i,profileUrl:o,toastManagerContext:n,suppressToasts:l}=this.props;l||n.showOneToast((({onHide:n})=>(0,u.jsx)(p,{href:o,id:t,imageUrl:i,onHide:n,text:e})))})),j(this,"showConfirmation",(()=>{const e=(0,u.jsx)(o.Fragment,{children:(0,u.jsx)(a.xv,{children:this.props.i18n._("Following! Their created Pins will show up in your home feed!","userFollowButton.informationalToastText2","Text explaining that a creator's Pins will show up in home feed after follow")})});this.showToast(e)})),j(this,"showError",(e=>{const{fullName:t,userFollowed:i,showEmailVerificationReminderModal:n}=this.props,l=i?this.props.i18n._("Error unfollowing {{ usernameComponent }}.","UserFollowButton.error.unfollowing","When there is an API error when unfollowing a user"):this.props.i18n._("Error following {{ usernameComponent }}.","UserFollowButton.error.following","When there is an API error when following a user");if(e&&e.api_error_code===w.H9)return void n();const r=(0,u.jsx)(o.Fragment,{children:(0,u.jsx)(a.xv,{children:(0,s.nk)(l,{usernameComponent:(0,u.jsx)(a.xv,{weight:"bold",inline:!0,children:t})})})});this.showToast(r)})),j(this,"unfollow",(()=>{const{id:e,onUserFollow:t,unfollow:i,mostRecentPinId:o,setMostRecentPinId:n}=this.props;i(e,o,(()=>{}),this.showError),t&&t(!1),n(null)}))}renderButton(){const{button:e,followerCount:t,inline:i=!1,isOwnProfile:o,invertButtonColor:n,isSecondaryButton:l,size:r,showFollowerCount:s,userFollowed:c}=this.props,h=c?this.props.i18n._("Following","User follow button","User follow button"):this.props.i18n._("Follow","User follow button","User follow button");if(e)return e({followText:h,onClick:this.handleButtonClick,userFollowed:c});if(o)return(0,u.jsx)(a.zx,{fullWidth:!0,disabled:!0,text:this.props.i18n._("This is you","Button label to note that this is your Profile","Button label to note that this is your Profile")});if(s){const e="number"==typeof t?(0,u.jsx)(d,{followerCount:t,userFollowed:c,followText:h}):h;return(0,u.jsx)(a.iP,{onTap:this.handleClick,children:(0,u.jsx)(a.xu,{color:c?"lightGray":"red",rounding:2,paddingX:3,paddingY:3,children:(0,u.jsx)(a.kC,{alignItems:"center",justifyContent:"start",children:e})})})}return(0,u.jsx)(a.xu,{display:"inlineBlock","data-test-id":`user-${c?"unfollow":"follow"}-button`,children:(0,u.jsx)(a.zx,{accessibilityLabel:c?this.props.i18n._("Unfollow","userUnfollowButton.button.accessibilityLabel","Accessibility label for the unfollow button"):this.props.i18n._("Follow","userFollowButton.button.accessibilityLabel","Accessibility label for the follow button"),color:l||c?"gray":"red",selected:n?!c:!!c,fullWidth:i,onClick:this.handleButtonClick,size:null!=r?r:void 0,text:h})})}render(){const{showPulsar:e,userFollowed:t}=this.props;return(0,u.jsxs)(a.xu,{position:"relative",display:"flex",children:[this.renderButton(),e&&(0,u.jsx)(a.iP,{onTap:this.handleClick,children:(0,u.jsx)(a.xu,{position:"absolute",display:"inlineBlock",dangerouslySetInlineStyle:{__style:{marginLeft:-86,marginTop:-28}},children:(0,u.jsx)(a.o3,{paused:t||!1})})})]})}}const S=(0,C.compose)((0,n.connect)((function({users:e},{id:t,userFollowed:i}){const o=(e||{})[t];return{followerCount:o?o.follower_count:null,userFollowed:o?o.explicitly_followed_by_me:i}}),(function(e){return{follow:(t,i,o,n)=>{e((0,R.yA)(t,i)).then(o).catch((e=>{n(e)}))},unfollow:(t,i,o,n)=>{e((0,R.KF)(t,i)).then(o,n)}}})),y.Cl)((function(e){const{logContextEvent:t}=(0,m.v)(),i=(0,r.ZP)(),{id:o,setMostRecentPinId:l}=(0,E.f)(),s=(0,I.Z)(),a=(0,n.useDispatch)(),{showEmailVerificationReminderModal:d}=(0,v.y9)();return(0,x.Z)((()=>{const{id:t}=e,i=_.ZP.localStorage.getItem("unauthDesktopFollowId")||"";i&&i===t&&(_.ZP.localStorage.removeItem("unauthDesktopFollowId"),a((0,R.ZN)(i)))})),(0,u.jsx)(P,{...e,requireAuth:s,i18n:i,mostRecentPinId:o,setMostRecentPinId:l,showEmailVerificationReminderModal:d,logContextEvent:t})}))},667851:(e,t,i)=>{i.d(t,{Z:()=>s});var o=i(667294),n=i(151479),l=i(883119),r=i(785893);const s=function({badgeSize:e,badgeSpacing:t,fullName:i,identityIsVerified:s,isVerifiedMerchant:a,truncate:u=!1}){const d=i.split(" "),c=d.slice(0,d.length-1).join(" "),h=" ".concat(d[d.length-1]);return u?(0,r.jsxs)(l.kC,{alignItems:"stretch",justifyContent:"start",children:[(0,r.jsx)(l.xv,{lineClamp:1,weight:"bold",children:i}),(0,r.jsx)(l.xu,{flex:"none",position:"relative",dangerouslySetInlineStyle:{__style:{top:t}},paddingX:1,children:(0,r.jsx)(n.Z,{size:e,hasVerifiedIdentity:s,isVerifiedMerchant:a})})]}):(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)("span",{children:c}),(0,r.jsxs)("span",{style:{whiteSpace:"nowrap"},children:[h," ",(0,r.jsx)(l.xu,{display:"inlineBlock",flex:"none",position:"relative",dangerouslySetInlineStyle:{__style:{top:t}},children:(0,r.jsx)(n.Z,{size:e,hasVerifiedIdentity:s,isVerifiedMerchant:a})})]})]})}},462377:(e,t,i)=>{i.d(t,{Z:()=>v});var o=i(156575),n=i(502493),l=i(568594),r=i(144977),s=i(710159),a=i(951866),u=i(667851),d=i(456168),c=i(51805),h=i(123686),f=i(539195),p=i(883119),_=i(785893);const x={__style:{backgroundColor:"rgba(0, 0, 0, 0.04)"}},g=(c.xf-2)/2,w=1.6*c.xf;function m({height:e,image:t,width:i}){var o,n,l,r,a;const u=(0,s.ZP)();return(0,_.jsx)(p.xu,{dangerouslySetInlineStyle:{__style:{borderRight:"1px solid white"}},children:t?(0,_.jsxs)(p.xu,{position:"relative",children:[(0,_.jsx)(p.GH,{contentAspectRatio:(null!==(o=t.width)&&void 0!==o?o:1)/(null!==(n=t.height)&&void 0!==n?n:1),height:e,width:i,children:(0,_.jsx)(p.Ee,{alt:u._("contextual pin image","UserContent.PinImage","alt text for pin image"),color:t.dominant_color||void 0,naturalHeight:null!==(l=t.height)&&void 0!==l?l:1,naturalWidth:null!==(r=t.width)&&void 0!==r?r:1,src:null!==(a=t.url)&&void 0!==a?a:""})}),(0,_.jsx)(p.xu,{dangerouslySetInlineStyle:x,height:e,left:!0,position:"absolute",top:!0,width:i})]}):(0,_.jsx)(p.xu,{color:"lightGray",height:e,width:i})})}function v({action:e,auxData:t,avatarSize:i,avatarUrl:x,contextualPinImages:v,followedByMe:E,followersCount:I,fullName:y,identityIsVerified:C,invertButtonColor:R,isVerifiedMerchant:j,onActionClick:P,recentPinImages:S,suppressToasts:b,truncateName:O=!1,userId:A,username:T,userPins:N,userSearchRepStyle:D,viewParameter:F,viewType:U}){const{logContextEvent:L}=(0,f.v)(),k=(0,s.ZP)(),B=(0,d.Z)(),M=(null==N?void 0:N.map((e=>{var t;return null===(t=e.images)||void 0===t?void 0:t["236x"]})))||[],V=(null==S?void 0:S["222x"])||(null==S?void 0:S["192x"])||[],Z=(null==v?void 0:v["222x"])||(null==v?void 0:v["192x"])||[],z=D&&Z.length<=0;let W=D?Z.concat(V).slice(0,4):M.concat(V).slice(0,2);0===W.length&&(W=[void 0,void 0]);const G=D?197:157,K=D?(H=W.length,(w-2*(H-1))/H):g;var H;const q=!z&&(0,_.jsx)(p.zd,{rounding:4,children:(0,_.jsx)(p.kC,{children:W.map(((e,t)=>(0,_.jsx)(m,{height:G,image:W[t],width:K},`pinImage-${t}`)))})});let X="";"number"==typeof I&&(X=(0,_.jsx)(l.Z,{shortform:!0,shortformMaximumFractionDigits:1,value:I},"followersCount"));const Y=i?void 0:80,$=e=>(0,_.jsx)(p.xu,{marginTop:e,height:Y,width:Y,children:(0,_.jsx)(o.Z,{outline:!0,name:null!=y?y:"",src:null!=x?x:"",size:i||"fit"})}),Q=e=>(0,_.jsxs)(p.kC,{direction:"column",gap:1,alignItems:e,children:[(0,_.jsx)(p.xu,{maxWidth:c.xf,"data-test-id":"user-rep-name",children:(0,_.jsx)(p.xv,{align:e,weight:"bold",lineClamp:O?1:void 0,children:j||C?(0,_.jsx)(u.Z,{badgeSize:"sm",badgeSpacing:2,fullName:null!=y?y:"",identityIsVerified:C,isVerifiedMerchant:j,truncate:O}):y})}),(0,_.jsx)(r.Z,{id:"user-rep-followers",children:(0,_.jsx)(p.xv,{align:e,size:"sm",children:(0,h.nk)(k.ngettext("{{ formattedFollowersCount }} follower","{{ formattedFollowersCount }} followers",I,"Label for the number of people following a user","Label for the number of people following a user"),{formattedFollowersCount:X})})})]}),J=(0,_.jsx)(p.kC,{height:48,children:e&&e.url?(0,_.jsx)("object",{children:(0,_.jsx)(p.zx,{href:e.url,text:e.text,size:"lg",role:"link",onClick:({event:e,dangerouslyDisableOnNavigation:i})=>{i(),e.stopPropagation(),L({event_type:9029,object_id_str:A,view_type:U,view_parameter:F,aux_data:{...t}}),null==P||P()}})}):(0,_.jsx)(a.Z,{fullName:y,id:A,imageUrl:x,isOwnProfile:B.isAuth&&B.id===A,profileUrl:`/${T}/`,userFollowed:E,onUserFollow:P,invertButtonColor:R,isSecondaryButton:!0,size:"lg",shouldStopEventPropagation:!0,suppressToasts:b,viewType:U,viewParameter:F})});return(0,_.jsx)(n.Z,{impressionType:"User",viewType:U,viewParameter:F,loggingId:A,children:(0,_.jsx)(p.xu,{width:D?w:c.xf,children:(0,_.jsx)(r.Z,{id:"user-rep",children:(0,_.jsx)(p.iP,{role:"link",href:`/${T}/`,onTap:()=>{L({event_type:43,object_id_str:A,view_type:U,view_parameter:F})},rounding:4,children:(0,_.jsxs)(p.kC,{direction:"column",gap:2,alignItems:"center",children:[q,D?(0,_.jsx)(p.xu,{width:w,children:(0,_.jsxs)(p.kC,{justifyContent:"between",alignItems:"center",children:[(0,_.jsxs)(p.kC,{alignItems:"center",gap:2,children:[$(),Q("start")]}),J]})}):(0,_.jsxs)(p.kC,{direction:"column",gap:2,alignItems:"center",children:[$(-10),Q("center"),J]})]})})})})})}},256045:(e,t,i)=>{i.d(t,{Z:()=>r});var o=i(462377),n=i(883119),l=i(785893);function r({action:e,auxData:t,avatarSize:i,avatarUrl:r,contextualPinImages:s,followedByMe:a,followersCount:u,fullName:d,identityIsVerified:c,invertButtonColor:h,isVerifiedMerchant:f,onActionClick:p,recentPinImages:_,suppressToasts:x,truncateName:g=!1,userId:w,username:m,userPins:v,userSearchRepStyle:E,viewParameter:I,viewType:y}){return(0,l.jsx)(n.xu,{marginTop:3,marginBottom:3,children:(0,l.jsx)(n.Zb,{children:(0,l.jsx)(o.Z,{action:e,auxData:t,avatarSize:i,avatarUrl:r,contextualPinImages:s,followedByMe:a,followersCount:u,fullName:d,identityIsVerified:c,invertButtonColor:h,isVerifiedMerchant:f,onActionClick:p,recentPinImages:_,suppressToasts:x,truncateName:g,userId:w,username:m,userPins:v,userSearchRepStyle:E,viewParameter:I,viewType:y})})})}},796112:(e,t,i)=>{i.d(t,{F:()=>o,j:()=>n});const o={USER_FOLLOW:"USER_FOLLOW"},n={USER_BLOCK:"USER_BLOCK"}},461694:(e,t,i)=>{i.d(t,{ZN:()=>s,yA:()=>a,fv:()=>u,KF:()=>d});var o=i(724207),n=i(796112);function l(e,t){return o.ZP.create("UserFollowResource",{user_id:e,aux_data:t?{pin_id:t}:void 0})}function r(e,t){return{type:n.F.USER_FOLLOW,payload:{id:e,value:t}}}function s(e,t=null){return i=>{l(e,t).callCreate().catch((()=>i(r(e,!1)))),i(r(e,!0))}}function a(e,t=null){return async i=>{i(r(e,!0)),await l(e,t).callCreate().catch((t=>{throw i(r(e,!1)),t}))}}function u(e,t=null){return i=>{l(e,t).callDelete().catch((()=>i(r(e,!0)))),i(r(e,!1))}}function d(e,t=null){return async i=>{i(r(e,!1)),await l(e,t).callDelete().catch((t=>{throw i(r(e,!0)),t}))}}},167544:(e,t,i)=>{i.d(t,{CB:()=>f,y9:()=>h});var o=i(667294),n=i(916389),l=i(724207),r=i(710159),s=i(883119),a=i(785893);const u=({onConfirm:e})=>{const t=(0,r.ZP)(),[i,u]=(0,o.useState)(!1),d=()=>{u(!0),l.ZP.create("ApiResource",{url:"/v3/users/email/verify/resend/"}).callCreate()};return(0,a.jsx)(n.ZP,{accessibilityModalLabel:t._("Verify your email","Accessible label for email verification being required","Accessible label for email verification being required"),onDismiss:e,heading:t._("Verify your email","Accessible label for email verification being required","Accessible label for email verification being required"),footer:(0,a.jsxs)(s.kC,{justifyContent:"end",gap:2,children:[i?(0,a.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"gray",text:t._("Email sent","Button text for verification email being sent","Button text for verification email being sent"),disabled:i,onClick:d}):(0,a.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"gray",text:t._("Resend email","Button text for resending email verification email","Button text for resending email verification email"),disabled:i,onClick:d}),(0,a.jsx)(s.zx,{fullWidth:!0,size:"lg",color:"red",text:t._("Got it","Button text for acknowledging email verificaiton is required","Button text for acknowledging email verificaiton is required"),onClick:e})]}),role:"alertdialog",children:(0,a.jsx)(s.xu,{padding:8,children:(0,a.jsx)(s.xv,{align:"center",size:"lg",children:t._("Keep your account secure by verifying your email address. Check the inbox associated with this account for an email from us to continue using Pinterest.","Inform users that they need to verify their email to keep their account secure and continue using Pinterest","Inform users that they need to verify their email to keep their account secure and continue using Pinterest")})})})};var d=i(487889);const{Provider:c,useHook:h}=(0,d.Z)("EmailVerificationReminderModal");function f({children:e}){const[t,i]=(0,o.useState)(!1);return(0,a.jsxs)(o.Fragment,{children:[(0,a.jsx)(c,{value:{showEmailVerificationReminderModal:()=>{i(!0)}},children:e}),t&&(0,a.jsx)(u,{onConfirm:()=>{i(!1)}})]})}},735767:(e,t,i)=>{i.d(t,{pH:()=>o,tz:()=>n,Jw:()=>l,tL:()=>r,NF:()=>s,bd:()=>a,OW:()=>u,cZ:()=>d,dO:()=>c,aG:()=>h,_K:()=>f,lg:()=>p,hU:()=>_,oP:()=>x,nY:()=>g,iK:()=>w,nf:()=>m,RL:()=>v,V4:()=>E,yV:()=>I,Zn:()=>y,Bb:()=>C,xN:()=>R,E6:()=>j,an:()=>P,rm:()=>S,D4:()=>b,rM:()=>O,iZ:()=>A,$j:()=>T,Pv:()=>N,at:()=>D,Jt:()=>F,H9:()=>U,Cx:()=>L,qF:()=>k,ZP:()=>B});const o=101,n=93,l=117,r=116,s=111,a=9,u=8,d=16,c=12,h=3,f=18,p=105,_=79,x=78,g=77,w=76,m=1402,v=85,E=82,I=88,y=1201,C=86,R=30,j=84,P=83,S=2901,b=2904,O=2905,A=95,T=19,N=113,D=91,F=2501,U=3050,L=[u,a],k=new Map([[1,"INVALID_PARAMETERS"],[100,"INVALID_NETWORK_ACCESS_TOKEN"],[p,"FACEBOOK_ACCOUNT_NOT_LINKED"],[c,"API_SERVER_ERROR"],[1202,"LOGIN_MFA_TOKEN_INVALID"],[1203,"MFA_CONNECTION_ERROR"],[13,"API_DOWN"],[181,"GPLUS_CONNECTION_ERROR"],[14,"API_SERVER_SPAM_CONTENT"],[d,"API_REQUEST_TIMEOUT"],[50,"API_ERROR_PIN_NOT_FOUND"],[g,"INVALID_PASSWORD_FB_USER"],[x,"INVALID_PASSWORD_ERROR_CODE"],[_,"INVALID_EMAIL_ERROR_CODE"],[80,"INVALID_EMAIL_OR_PASSWORD"],[E,"LOGIN_DEACTIVATED_USER"],[P,"LOGIN_POLICY_VIOLATION_USER"],[v,"AUTO_PASSWORD_RESET_ERROR_CODE"],[C,"LOGIN_PANICKED_USER"],[87,"LOGIN_SOFT_BANNED_USER"],[n,"API_ERROR_UNDERAGE_REGISTER_ATTEMPT"],[r,"API_ERROR_OVERAGE_REGISTER_ATTEMPT"],[99,"LOGIN_PASSWORD_NOT_CREATED"],[u,"API_LIMIT_EXCEEDED_ERROR"],[a,"API_EVENT_BLOCKED_ERROR"],[T,"USER_IN_SAFE_MODE"],[j,"LOGIN_VOLUNTARILY_DEACTIVATED_USER"],[v,"LOGIN_BAD_PASSWORD_ASK_RESET"],[y,"LOGIN_MFA_REQUIRED"],[R,"LOGIN_USER_NOT_FOUND"],[I,"LOGIN_HARD_BANNED_USER"],[429,"RESPONSE_CODE_TOO_MANY_REQUESTS"],[S,"SAR_DOWNLOAD_LIMIT"],[b,"SAR_EMAIL_UNVERIFIED"],[O,"SAR_EMAIL_MISSING"]]),B=[u,a,T,P,v,I]}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/56045-63a20a800deda55b.mjs.map