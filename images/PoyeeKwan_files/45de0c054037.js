__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t={copy:r(d[0]).default,delete:r(d[1]).default,directShare:r(d[2]).default,embed:r(d[3]).default,options:r(d[4]).default,report:r(d[5]).default,share:r(d[6]).default,tagged:r(d[7]).default,unfollow:r(d[8]).default};var o=r(d[10]).withRouter(function({location:o,onClose:l,openModal:u,postId:n}){const f=t[u];return a(d[9]).createElement(f,{location:o,onClose:l,postId:n})});e.default=o},12976128,[12976129,12976130,12976131,12976133,12976134,12976146,12976147,12976148,12976149,3,6]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:o}){const n=r(d[0]).usePost(t,r(d[1]).getCopyUrl);return a(d[2]).createElement(i(d[3]),{onClose:o,postUrl:n})}},12976129,[19530509,19530514,3,19530706]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(3617);e.default=function({location:o,onClose:l,postId:n}){const c=r(d[1]).useDispatch(),s=r(d[1]).useSelector(t=>r(d[2]).getViewer(t));return a(d[9]).createElement(r(d[10]).Dialog,{body:r(d[0])(3453),title:t},a(d[9]).createElement(r(d[10]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{let t;if(null!=o&&r(d[3]).isDesktop()&&i(d[4])._("ig_web_h1_2021_creation","724faf7fc10c41433915c7cb70a22d8c")){var u;o.pathname!==r(d[5]).FEED_PATH&&(t=o.pathname),(null===(u=t)||void 0===u?void 0:u.startsWith('/p/'))&&(t=r(d[6]).buildUserLink(i(d[7])(null===s||void 0===s?void 0:s.username)))}c(r(d[8]).deletePost(n,t)),l()}},r(d[11]).DELETE_TEXT),a(d[9]).createElement(r(d[10]).DialogItem,{onClick:l},r(d[11]).CANCEL_TEXT))}},12976130,[19726396,5,19726715,19726343,19726495,19726578,19726626,19791900,10223645,3,19791919,19726728]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),r(d[0]),e.default=function({onClose:t,postId:n}){const s=r(d[1]).useDispatch(),o=i(d[2])(),_=r(d[3]).usePost(n,r(d[4]).getPostType);r(d[5]).useEffect(()=>{r(d[6]).startFunnel(),r(d[6]).logFunnelAction(r(d[6]).SHARE_FUNNEL_BUTTON_CLICK),i(d[7])._("ig_web_h1_2020_p0_logging_deprecation_direct")||r(d[8]).logAction_DEPRECATED('shareClick',{source:o,type:_}),r(d[6]).logFunnelAction(r(d[6]).SHARE_FUNNEL_SHARE_SHEET),s(r(d[9]).loadPostShareIds(n))},[o,s,n,_]);const l=()=>{r(d[6]).endFunnel(),t()},c=r(d[14]).getMqttInstance()&&r(d[15]).hasDirect(),E=!0===i(d[12])._("ig_web_h1_2021_direct","6d0b2dea043ba852c49579e9935f4424");return c&&null!=n&&n.length>0&&a(d[5]).createElement(r(d[16]).Modal,{"aria-label":r(d[17]).SHARE_TITLE,dangerouslySetClassName:{__className:E?"-gEQ-":""},fixedHeight:!0!==E,onClose:l,size:"large"},a(d[5]).createElement(i(d[18]),{backAction:l,forwardAction:(t,_)=>{l();const c=o;r(d[10]).DirectLogger.logDirectEvent(r(d[11]).PAGE_ID,'share_sheet_send',{referral:c}),null!=_&&''!==_&&!0===i(d[12])._("ig_web_h1_2021_direct","6d0b2dea043ba852c49579e9935f4424")?s(r(d[13]).sendPostToUsers(String(n),t,_)):s(r(d[13]).sendPostToUsers(String(n),t))},forwardText:r(d[17]).SEND_BUTTON_STRING,includeGroup:!0,isModal:!0,isShareSheet:!0,pageId:r(d[11]).PAGE_ID,title:r(d[17]).SHARE_TITLE}))}},12976131,[12976132,5,19727078,19530509,19530515,3,19530705,19726393,19726437,10223645,19726444,10223840,19726495,19727002,19727007,19726498,19791919,19726947,10223842]);
__d(function() {},12976132,[]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});var o=function({onClose:o,postId:t}){const n=i(d[0])(),s=r(d[1]).usePost(t,o=>o.code)||'',u=r(d[1]).usePost(t,o=>o.productType),c=r(d[1]).usePost(t,o=>{var t;return i(d[2])(null===(t=o.owner)||void 0===t?void 0:t.id)});return a(d[3]).createElement(i(d[4]),{analyticsContext:n,code:s,id:t,onClose:o,ownerId:c,productType:u})};e.default=o},12976133,[19727078,19530509,19791900,3,19530686]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:o}){return a(d[0]).createElement(r(d[1]).Dialog,{onModalClose:t},a(d[0]).createElement(i(d[2]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[3]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[4]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[5]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[6]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[7]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[8]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[9]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[10]),{onClose:t,postId:o}),a(d[0]).createElement(i(d[11]),{onClose:t,postId:o}),a(d[0]).createElement(r(d[1]).DialogItem,{onClick:t},r(d[12]).CANCEL_TEXT))}},12976134,[3,19791919,12976135,12976137,12976138,12976139,12976140,12976141,12976142,12976143,12976144,12976145,19726728]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:o}){const s=r(d[0]).usePost(o,r(d[1]).getPostOwnedByViewer),c=r(d[0]).usePost(o,r(d[2]).getPostType),l=i(d[3])(),n=r(d[0]).usePost(o,r(d[4]).isIGTVPost),u=r(d[5]).useSetPostModal();let _=r(d[6]).isMobile()||n;return r(d[6]).isDesktop()&&!0===i(d[7])._("ig_web_h1_2021_creation","724faf7fc10c41433915c7cb70a22d8c")&&(_=!0),s&&_?a(d[9]).createElement(r(d[10]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[8]).logAction_DEPRECATED('delete_post_click',{source:l,type:c}),u('delete')}},r(d[11])(2536)):null}},12976135,[19530509,12976136,19530515,19727078,19726610,19530506,19726343,19726495,19726437,3,19791919,19726396]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.getPostOwnedByViewer=function(t){var n;return(null===(n=t.owner)||void 0===n?void 0:n.id)===r(d[0]).getViewerId()}},12976136,[19726341]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const o=r(d[0])(448);e.default=function({onClose:t,postId:n}){const s=r(d[1]).usePost(n,r(d[2]).getPostOwnedByViewer),c=r(d[3]).useSetPostModal();return s?null:a(d[7]).createElement(r(d[8]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[4]).isUserLoggedIn()?c('report'):r(d[5]).redirect(r(d[6]).buildLoginLink(window.location.href,{source:'logged_out_post_report_redirect'}))}},o)}},12976137,[19726396,19530509,12976136,19530506,19726439,19726753,19726626,3,19791919]);
__d(function(g,r,i,a,m,e,d){"use strict";function n(n){return u[n]}function t(n,t){const o=l[n];return r(d[2]).buildLegalReportLink(o,t)}function o(){const n=r(d[3]).getCountryCode();return i(d[4])._("ig_frx_logged_out_users")?'DE'!==n&&'AT'!==n?null:n:null}Object.defineProperty(e,'__esModule',{value:!0});const u={DE:r(d[0])(794),AT:r(d[0])(3605)},l={DE:r(d[1]).NETZDG_REPORT_CONTACT_FORM_PATH,AT:r(d[1]).CPA_REPORT_CONTACT_FORM_PATH};e.default=function({onClose:u,postId:l}){const c=o();if(r(d[5]).isUserLoggedIn()||null==c)return null;const _=t(c,l),s=n(c);return a(d[7]).createElement(r(d[8]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[6]).redirect(_)}},s)}},12976138,[19726396,19726578,19726626,19726341,19726393,19726439,19726753,3,19791919]);
__d(function(g,r,i,a,m,e,d){"use strict";function o(o,t){const n=r(d[1]).getPostById(o,t),{owner:l}=n;if(!l)return!1;const u=r(d[2]).getRelationship(o.relationships,l.id);return r(d[2]).followedByViewer(u)}Object.defineProperty(e,'__esModule',{value:!0});const t=r(d[0])(1905);e.default=function({postId:n,onClose:l}){const u=r(d[3]).useSelector(t=>o(t,n)),s=r(d[4]).useSetPostModal(),c=r(d[5]).usePost(n,o=>{var t;return null===(t=o.owner)||void 0===t?void 0:t.id}),f=i(d[6])();return u?a(d[8]).createElement(r(d[9]).DialogItem,{color:"ig-error-or-destructive",onClick:()=>{r(d[7]).logConnectionAction({eventName:'unfollow_button_tapped',containerModule:f,targetId:c}),s('unfollow')}},t):null}},12976139,[19726396,10223655,19726501,5,19530506,19530509,19727078,19727010,3,19791919]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:n}){const o=i(d[0])(),l=r(d[1]).useSelector(t=>r(d[2]).getPostById(t,n)),s=()=>{r(d[3]).nominateClipsMedia(n,l).then(t=>{o({text:"Thank you! We'll consider your nomination."})},t=>{o({text:"Request can't be completed. Try again later."})})};return i(d[4])._("ig_reels_enable_curation_nomination")&&r(d[5]).isClipsPost(l)?a(d[6]).createElement(r(d[7]).DialogItem,{onClick:s},r(d[8])(1078)):null}},12976140,[11141260,5,10223655,19726521,19726393,19726610,3,19791919,19726396]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function(){const t=r(d[0]).useDispatch();return s=>{t(r(d[1]).showToast(s))}}},11141260,[5,19726726]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:o}){const s=r(d[0]).useSelector(r(d[1]).selectPageIdentifier),n=r(d[2]).usePost(o,t=>{var o;return!!(null===(o=t.code)||void 0===o?void 0:o.length)})&&s!==i(d[3]).postPage,l=r(d[2]).usePost(o,r(d[4]).getShareURL);return n?a(d[6]).createElement(r(d[7]).DialogItem,{onClick:()=>{r(d[5]).browserHistory.push(l)}},r(d[8])(882)):null}},12976141,[5,19726761,19530509,19726575,19530514,19726753,3,19791919,19726396]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:s}){const o=r(d[0]).usePost(s,t=>t.usertags),l=null!=o&&o.length>0,n=r(d[1]).useSetPostModal(),u=r(d[0]).usePost(s,t=>r(d[2]).isIGTVPost);return l&&u?a(d[3]).createElement(r(d[4]).DialogItem,{onClick:()=>{n('tagged')}},r(d[5])(3385)):null}},12976142,[19530509,19530506,19726610,3,19791919,19726396]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:n}){const o=r(d[0]).usePostAndOwner(n,r(d[1]).getIsShareable),s=r(d[2]).useSetPostModal();return o?a(d[3]).createElement(r(d[4]).DialogItem,{onClick:()=>s('share')},r(d[5])(1071)):null}},12976143,[19530509,19530514,19530506,3,19791919,19726396]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0});const o=r(d[0])(3254),t=r(d[0])(2796);e.default=function({onClose:n,postId:s}){const _=r(d[1]).usePostAndOwner(s,r(d[2]).getIsShareable),p=r(d[3]).useSetPostModal(),c=i(d[4])(),l=i(d[5])(),u=r(d[1]).usePost(s,r(d[6]).getPostType),P=r(d[1]).usePost(s,r(d[2]).getCopyUrl);return _?a(d[11]).createElement(r(d[12]).DialogItem,{onClick:()=>{if(!r(d[7]).canCopy())return void p('copy');const t=r(d[7]).copy(P);i(d[8])._("ig_web_h2_2020_p0_logging_migration_postoptions")||r(d[9]).logAction_DEPRECATED('postLinkCopy',{source:l,type:u}),i(d[10]).incr('web.post_options.post_link_copy'),t?(c({text:o}),n()):p('copy')}},t):null},e.LINK_COPIED_PROMPT=o,e.COPY_LINK_TEXT=t},12976144,[19726396,19530509,19530514,19530506,11141260,19727078,19530515,19726978,19726393,19726437,19726419,3,19791919]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:o,onClose:t}){const n=r(d[0]).usePostAndOwner(o,r(d[1]).getIsShareable),s=r(d[2]).useSetPostModal(),l=i(d[3])(),u=r(d[0]).usePost(o,r(d[4]).getPostType),c=r(d[0]).usePost(o,o=>{var t;return null===(t=o.owner)||void 0===t?void 0:t.id});return n?a(d[6]).createElement(r(d[7]).DialogItem,{onClick:()=>{r(d[5]).logAction_DEPRECATED('embedCodeClick',{mediaId:o,ownerId:c,source:l,type:u}),s('embed')}},r(d[8])(914)):null}},12976145,[19530509,19530514,19530506,19727078,19530515,19726437,3,19791919,19726396]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:n,postId:o}){const t=r(d[0]).usePostAndOwner(o,(n,o)=>o.id),s=r(d[0]).usePostAndOwner(o,(n,o)=>o.username),u=r(d[0]).usePostAndOwner(o,(n,o)=>o.profilePictureUrl),l=i(d[1])();return a(d[2]).createElement(i(d[3]),{analyticsContext:l,onClose:n,ownerID:t,ownerProfilePicURL:u,ownerUsername:s,postID:o})}},12976146,[19530509,19727078,3,19530682]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:n}){const o=r(d[0]).useDispatch(),s=i(d[1])(),_=r(d[2]).usePost(n,r(d[3]).getPostType),u=r(d[2]).usePost(n,t=>{var n;const o=(null===(n=t.owner)||void 0===n?void 0:n.username)||'';return r(d[4]).getShareDescription(o,_)}),l=r(d[2]).usePostAndOwner(n,r(d[5]).getIsShareable),c=r(d[2]).usePost(n,t=>t.shareIds),h=r(d[2]).usePost(n,r(d[5]).getShareURL);return r(d[6]).useEffect(()=>{r(d[7]).startFunnel(),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_BUTTON_CLICK),i(d[8])._("ig_web_h1_2020_p0_logging_deprecation_direct")||r(d[9]).logAction_DEPRECATED('shareClick',{source:s,type:_}),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_SHARE_SHEET),o(r(d[10]).loadPostShareIds(n))},[s,o,n,_]),a(d[6]).createElement(i(d[11]),{analyticsContext:s,description:u,onClose:()=>{r(d[7]).endFunnel(),t()},onNativeShare:()=>{i(d[8])._("ig_web_h1_2020_p0_logging_deprecation_direct")||r(d[9]).logAction_DEPRECATED('nativeShareClick',{source:s,type:_}),r(d[7]).logFunnelAction(r(d[7]).SHARE_FUNNEL_NATIVE),t(),r(d[4]).shareWithNative(u,h,'ig_web_button_native_share').then(r(d[7]).endFunnel)},postId:n,postType:_,shareEnabled:l,shareIds:c,url:h,utmSource:"ig_web_button_share_sheet"})}},12976147,[5,19727078,19530509,19530515,19530516,19530514,3,19530705,19726393,19726437,10223645,19530697]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({onClose:t,postId:s}){const o=r(d[0]).usePost(s,t=>i(d[1])(t.usertags));return a(d[2]).createElement(i(d[3]),{mediaId:s,onClose:t,title:r(d[4])(3023),usertags:o})}},12976148,[19530509,19791900,3,19530180,19726396]);
__d(function(g,r,i,a,m,e,d){"use strict";Object.defineProperty(e,'__esModule',{value:!0}),e.default=function({postId:t,onClose:n}){const o=i(d[0])(),s=r(d[1]).usePost(t,t=>{var n;return null===(n=t.owner)||void 0===n?void 0:n.id});return a(d[2]).createElement(i(d[3]),{analyticsContext:o,analyticsExtra:{},onClose:n,userId:s})}},12976149,[19727078,19530509,3,19792366]);