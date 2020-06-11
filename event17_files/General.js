/*   /Admin/Common/Monitoring.js   */

var monitoringString="Monitoring.WA.StaticResources";

/*   /Admin/html_res/js/dataChangeWatcher.js   */

(function(){if(window.DataChangeWatcher==null){window.DataChangeWatcher=new Object();var z="DataChangeWatcherValidationGroup";var A="Cancel your changes?";var B=false;var C=null;var i=false;var n=new Object();var b=false;var h=0;DataChangeWatcher.startWatching=q;DataChangeWatcher.stopWatching=r;DataChangeWatcher.pauseWatching=k;DataChangeWatcher.resumeWatching=m;DataChangeWatcher.changeValidator=s;DataChangeWatcher.changeValidatorSkipLineEndings=y;DataChangeWatcher.changeValidatorCustom=x;DataChangeWatcher.checkIfDataChanged=c;DataChangeWatcher.confirmIfDataChanged=e;DataChangeWatcher.isWatching=j;DataChangeWatcher.setChanged=o;DataChangeWatcher.setNotChanged=p;}if(typeof(B)=="undefined"){var B=null;}function j(){return(B!=null)?B:null;}function r(){if(C){clearTimeout(C);}B=false;}function q(F,E,D){if(D){i=false;B=false;}if(i){B=true;}else{if(F){z=F;}if(E){A=E;}setTimeout(g,100);}}function k(D){if(C){clearTimeout(C);}B=false;}function m(D){if(C){clearTimeout(C);}if(BonaPage.Browser.isWebKit&&!D){C=setTimeout(function(){B=true;},7);}else{B=true;}}function g(){if(i){return;}h++;if(typeof(Page_ValidationActive)=="boolean"&&Page_ValidationActive&&(WA.isWidgetMode||!WA.BonaEditor||WA.BonaEditor.EditorsManager==null||h>10||(WA.BonaEditor.EditorsManager!=null&&WA.BonaEditor.EditorsManager.checkIfAllEditorsReady()))){h=0;B=true;var E=ValidatorUpdateIsValid;var D=ValidatorUpdateDisplay;ValidatorUpdateIsValid=function(){};ValidatorUpdateDisplay=function(){};Page_ClientValidate(z);ValidatorUpdateIsValid=E;ValidatorUpdateDisplay=D;a();i=true;h=0;}else{if(typeof(Page_ValidationActive)!=="undefined"&&WA.BonaEditor&&WA.BonaEditor.EditorsManager!=null&&!WA.BonaEditor.EditorsManager.checkIfAllEditorsReady()){setTimeout(g,100);}}}function s(E,D){x(E.controltovalidate,D.Value,D);}function y(E,D){x(E.controltovalidate,D.Value,D,true);}function x(G,H,D,E){var F=true;if(B){if(b){F=false;}else{if(!i){if(n){n[G]=H;}}else{if(n[G]!=null){F=d(n[G]+"",H,E);}}}}D.IsValid=F;}function d(E,F,D){var G;if(D){G=(WA.String.gtrim(E.replace(/[\n\r\t]+/g,"").replace(/^\s*(.*)\s*$/,"$1"))==WA.String.gtrim(F.replace(/[\n\r\t]+/g,"").replace(/^\s*(.*)\s*$/,"$1")));}else{G=(WA.String.gtrim(E)==WA.String.gtrim(F));}return G;}function c(){if(!B){return false;}var D=(b)?true:false;if(window&&window.Page_ClientValidate){D=!Page_ClientValidate(z)||D;}if(window&&window.BonaValidateIfChanged){D=BonaValidateIfChanged()||D;}return D;}function e(){var D=true;if(c()){D=confirm(A);}if(D){k();}else{if(window.Page_Validators){setTimeout(function(){for(var E=0;E<Page_Validators.length;E++){if(typeof(Page_Validators[E].validationGroup)=="string"&&Page_Validators[E].validationGroup!=z){ValidatorValidate(Page_Validators[E],Page_Validators[E].validationGroup,null);}}},10);}}return D;}function a(){var F=false;try{if(BonaPage.topWindow.adminpanel){F=true;}}catch(D){}if(F){if(document.all){try{BonaPage.topWindow.adminpanel.document.body.onbeforeunload=t;BonaPage.topWindow.adminpanel.document.body.onunload=k;BonaPage.topWindow.contentarea.document.body.onbeforeunload=u;BonaPage.topWindow.contentarea.document.body.onunload=k;BonaPage.topWindow.document.body.onbeforeunload=v;BonaPage.topWindow.document.body.onunload=k;}catch(D){setTimeout(function(){a();},100);}}else{if(window.BonaPage&&BonaPage.Browser.isOnBeforeUnloadEnabled){BonaPage.topWindow.adminpanel.onbeforeunload=t;BonaPage.topWindow.contentarea.onbeforeunload=u;BonaPage.topWindow.onbeforeunload=v;if(BonaPage.Browser.isWebKitSafari){function E(){var G;var H=BonaPage.topWindow.contentarea.document.getElementsByTagName("A");for(G=0;G<H.length;G++){if((!H[G].getAttribute("target",0)||H[G].getAttribute("target",0).toLowerCase()!="_blank")&&!H[G].onclick){H[G].onclick=e;}}}if(BonaPage.topWindow.contentarea.BonaPage){BonaPage.topWindow.contentarea.BonaPage.addPageStateHandler(BonaPage.topWindow.contentarea.BonaPage.PAGE_PARSED,E);}}}BonaPage.topWindow.adminpanel.onunload=k;BonaPage.topWindow.contentarea.onunload=k;BonaPage.topWindow.onunload=k;}}else{if(document.all){window.document.body.onbeforeunload=w;window.document.body.onunload=k;}else{if(window.BonaPage&&BonaPage.Browser.isOnBeforeUnloadEnabled){window.onbeforeunload=w;}window.onunload=k;}}}function l(){}function f(){var D=c();if(D){return A;}}function w(){if(!B){return;}var D=f();k();if(document.all){window.setTimeout(m,100);}else{window.setTimeout(m,100);}return D;}function t(){if(!B){return;}var D=f();k();if(document.all){BonaPage.topWindow.adminpanel.setTimeout(m,100);}else{BonaPage.topWindow.adminpanel.setTimeout(m,100,"admin");}return D;}function u(){if(!B){return;}var D=f();k();if(document.all){setTimeout(m,100);}else{BonaPage.topWindow.contentarea.setTimeout(m,100,"content");}return D;}function v(){if(!B){return;}var E=f();k();if(BonaPage){if(document.all){BonaPage.topWindow.setTimeout(m,100);}else{BonaPage.topWindow.contentarea.setTimeout(m,100,"content");BonaPage.topWindow.adminpanel.setTimeout(m,100,"admin");}}else{try{if(document.all){top.setTimeout(m,100);}else{top.contentarea.setTimeout(m,100,"content");top.adminpanel.setTimeout(m,100,"admin");}}catch(D){}}return E;}function o(){b=true;}function p(){b=false;}})();

/*   /Admin/html_res/js/customFieldsValidation.js   */

if(!window.pictureUploaders){window.pictureUploaders=new Object();}window.registerPictureUploader=function(b,d){var a=document.getElementById(b);if(!a){return;}var c=a.getAttribute("name");initPictureUploaders(c);window.pictureUploaders[c].win=d;hidePleaseWait(c);invokeValidator(c);};function invokeValidator(a){initPictureUploaders(a);var c=window.pictureUploaders[a].validatorId;if(c==null||c==undefined){setTimeout(function(){invokeValidator(a);},100);return;}if(c==""){return;}var b=document.getElementById(c);if(b){ValidatorValidate(b);}}function hidePleaseWait(a){initPictureUploaders(a);var d=window.pictureUploaders[a].win;var c=window.pictureUploaders[a].pleaseWaitId;if(!d||!c){setTimeout(function(){hidePleaseWait(a);},100);return;}if(c==""){return;}var b=document.getElementById(c);if(!b){return;}b.wasHideByFrame="t";b.style.display="none";}function showPleaseWait(c,a){var b=document.getElementById(c);if(!b){return;}var d=b.getAttribute("wasHideByFrame");if(d=="t"){return;}b.style.display="block";}function setControlIds(b,c,a){initPictureUploaders(a);window.pictureUploaders[a].pleaseWaitId=b;window.pictureUploaders[a].validatorId=c;}function initPictureUploaders(a){if(!window.pictureUploaders[a]){window.pictureUploaders[a]=new Object();}}function validatePictureRequired(d,a,c){var b=window.pictureUploaders[c].win;if(!b){setTimeout(function(){validatePictureRequired(d,a,c);},100);return;}a.IsValid=b.isPicturePresent(c);}function syncronizeEmailCheckboxesState(h,e){var g=document.getElementById(h);var d=document.getElementById(e);if(!g||!d){return;}var c=d.getElementsByTagName("input");var f=d.getElementsByTagName("label");var b=c.length;if(g.checked){for(var a=1;a<b;a++){c[a].disabled=false;f[a].className="";}}else{for(var a=1;a<b;a++){c[a].checked=false;c[a].disabled=true;f[a].className="disabled";}}}var MemberPasswordHelper;(function(){if(!a){var a=new Object();var b=7;var d=8;}function c(f,e){e.IsValid=WA.String.gtrim(e.value).length>=b;}})();

/*   /Admin/html_res/js/ResizingTextarea.js   */

var TextareaHashObject=new Array();function TextareaResizer(l,k,a,c,d,e,m,b){var i=this;this.intCurrHeight=50;this.Textarea;this.TextareaContainer;this.objTextareaResizeInterval;if(l){this.Textarea=document.getElementById(l);}if(!this.Textarea){return null;}if(k){this.objContainer=document.getElementById(k);}this.SetAttribute=function(q,p,n){if(!this.Textarea){return false;}var o=this.Textarea[q];if((p!="undefined")&&(p||(p==false))){this.Textarea[q]=p;}else{if(!o){this.Textarea[q]=n;}}return true;};this.SetAttribute("TextareaContainerID",k,null);this.SetAttribute("TextareaContainerPadding",null,10);this.SetAttribute("AutoExpandOnFocus",a,true);this.SetAttribute("CollapsedHeight",c,50);this.SetAttribute("ExpandedHeight",d,200);this.SetAttribute("ExplicitHeight",e,false);this.SetAttribute("WatermarkString",m,"Write your comments here...");this.SetAttribute("CanCollapseWhenNotEmpty",b,false);this.Textarea.style.overflow=(this.Textarea.ExplicitHeight?"auto":"visible");var f=(document.getElementById)?true:false;var h=window.opera&&f;var g=document.all&&document.all.item&&!h;this.intCurrHeight=this.Textarea.CollapsedHeight;this.Textarea.style.height=this.intCurrHeight+"px";if(this.Textarea.value.length==0){this.Textarea.value=this.Textarea.WatermarkString;}var j=" ";j.match(/(((((.)))))/);((this.Textarea.onfocus+"").replace(/\n/g,"")).match(/.*?\{(.*)\}.*?/);this.Textarea.onfocus=new Function(RegExp.$1+'; TextareaHashObject["'+this.Textarea.id+'"].OnFocus()');j.match(/(((((.)))))/);((this.Textarea.onblur+"").replace(/\n/g,"")).match(/.*?\{(.*)\}.*?/);this.Textarea.onblur=new Function(RegExp.$1+'; TextareaHashObject["'+this.Textarea.id+'"].OnBlur()');if(g){this.Textarea.attachEvent("onkeydown",function(){i.OnKeyDown(event);});}else{this.Textarea.addEventListener("keydown",function(n){i.OnKeyDown(n);},false);}this.SetTextareaID=function(o){if(!this.Textarea){return false;}var n=document.getElementById(o);if(n){this.Textarea=n;return true;}return false;};this.SetContainerID=function(o){if(!this.Textarea){return false;}var n=document.getElementById(o);if(n){this.TextareaContainer=n;this.SetAttribute("ContainerID",o);return true;}return false;};this.SetAutoExpandOnFocus=function(n){if(!this.Textarea){return false;}return this.SetAttribute("AutoExpandOnFocus",n);};this.SetCollapsedHeight=function(n){if(!this.Textarea){return false;}if(n<1){return false;}if(this.Textarea.style.height==this.Textarea.CollapsedHeight+"px"){this.Resize(intNewExpandedHeight);}this.SetAttribute("CollapsedHeight",n);return true;};this.SetExpandedHeight=function(n){if(!this.Textarea){return false;}if(n<=this.Textarea.CollapsedHeight){return false;}if(this.Textarea.style.height==this.Textarea.ExpandedHeight+"px"){this.Resize(n);}this.SetAttribute("ExpandedHeight",n);return true;};this.SetExplicitHeight=function(n){if(!this.Textarea){return false;}this.SetAttribute("ExplicitHeight",n);if(this.blnEnableExplicitHeight==false){this.Textarea.style.overflow="visible";}else{this.Textarea.style.overflow="auto";}return true;};this.SetWatermarkString=function(n){if(!this.Textarea){return false;}if(this.Textarea.value==this.Textarea.WatermarkString){this.Textarea.value=n;}this.SetAttribute("WatermarkString",n);};this.SetTextareaContainerPadding=function(n){if(!this.Textarea){return false;}this.SetAttribute("TextareaContainerPadding",n);};this.SetCanCollapseWhenNotEmpty=function(n){if(!this.Textarea){return false;}this.SetAttribute("CanCollapseWhenNotEmpty",n);};this.Expanded=function(){return this.Textarea.style.height==this.Textarea.ExpandedHeight;};this.Collapsed=function(){return this.Textarea.style.height==this.Textarea.CollapsedHeight;};this.Resize=function(o){var p=0;try{window.clearTimeout(this.objTextareaResizeInterval);}catch(n){}if(Math.abs(o-this.intCurrHeight)<2){this.intCurrHeight=o;}else{this.intCurrHeight=(this.intCurrHeight/2)+(o/2);this.objTextareaResizeInterval=window.setTimeout("TextareaHashObject['"+this.Textarea.id+"'].Resize("+o+")",30);}this.Textarea.style.height=this.intCurrHeight+"px";if(this.objContainer){this.objContainer.style.height=(this.intCurrHeight+this.Textarea.TextareaContainerPadding)+"px";}};this.OnFocus=function(){if(this.Textarea.WatermarkString==this.Textarea.value){this.Textarea.value="";}if(this.Textarea.style.height!=this.Textarea.ExpandedHeight+"px"){if(this.Textarea.AutoExpandOnFocus==true){this.Resize(this.Textarea.ExpandedHeight);}}};this.OnBlur=function(){if(this.Textarea.AutoExpandOnFocus==true){if((this.Textarea.value.length==0)||(this.Textarea.CanCollapseWhenNotEmpty)){this.Resize(this.Textarea.CollapsedHeight);}}if(this.Textarea.value.length==0){this.Textarea.value=this.Textarea.WatermarkString;}};this.OnKeyDown=function(n){var o=(g)?n.keyCode:n.which;if(o==27){if(this.Textarea.value.length<10){this.Textarea.value="";this.OnBlur();document.body.focus();}else{return false;}}};this.Expand=function(){this.Resize(this.Textarea.ExpandedHeight);};this.Collapse=function(){this.Resize(this.Textarea.CollapsedHeight);};TextareaHashObject[this.Textarea.id]=this;}

/*   /Content/Members/PictureUploader/PictureUploader.js   */

function validateFile(){var d=document.getElementById("fileUpload"),a=(d&&d.files&&d.files[0])||{},c=a.size||1,f=d&&parseInt(d.getAttribute("data-max-file-size"),10)||Number.MAX_VALUE,b=d&&d.getAttribute("data-file-length-exceeded-message"),e=c<=f;return{isValid:e,message:b};}function startUpload(a){var f=validateFile();if(!f.isValid){alert(f.message);return;}var d=document.getElementById("upload");var c=document.getElementById("process");d.style.display="none";c.style.display="block";try{document.getElementById(a).click();}catch(b){d.style.display="block";c.style.display="none";}}function hideWaitMessage(b){if(!parent){return;}var a=parent.document.getElementById(b);if(!a){return;}a.style.display="none";}function setHeight(a,b){b=b+"px";setFrameHeight(a,b);}function setFrameHeight(b,c){if(!parent){return;}var a=parent.document.getElementById(b);if(!a){return;}a.style.height=c;}window.getState=function(a){if(!parent){return 0;}if(!parent.pictureState){return 0;}if(!parent.pictureState[a]){return 0;}return parent.pictureState[a];};window.isPicturePresent=function(a){return(parent.pictureState[a]==2||parent.pictureState[a]==1);};function stateNoPicture(a){changeState(a,0);}function statePictureDefault(a){changeState(a,1);}function statePictureUploaded(a){changeState(a,2);}function changeState(a,c){if(!parent){return;}var b=parent.document.getElementById(a).getAttribute("name");if(!parent.pictureState){parent.pictureState=new Object();}parent.pictureState[b]=c;}function registerUploader(a){if(!parent||!parent.registerPictureUploader){return;}parent.registerPictureUploader(a,window);}function setDataChangeWatcherChanged(){if(typeof(BonaPage.topWindow.DataChangeWatcher)!="undefined"){BonaPage.topWindow.DataChangeWatcher.setChanged();return;}if(typeof(BonaPage.topWindow.contentarea)!="undefined"&&typeof(BonaPage.topWindow.contentarea.DataChangeWatcher)!="undefined"){BonaPage.topWindow.contentarea.DataChangeWatcher.setChanged();}}

/*   /Content/Events/EventListPreferences.js   */

var EventListPreferences;(function(){if(EventListPreferences==null){EventListPreferences=new Object();}EventListPreferences.tagsTableId="";EventListPreferences.showAllRadioId="";EventListPreferences.selectAll=g;EventListPreferences.clearAll=b;EventListPreferences.preventClick=f;EventListPreferences.disableTagsSelection=d;EventListPreferences.enableTagsSelection=e;EventListPreferences.atLeastOneTagShouldBeSelected=a;EventListPreferences.validateInputsStateChanged=j;function j(m,l){k(l,"preferencesHolder");}function g(l){h(true);if(l.preventDefault){l.preventDefault();}else{l.returnValue=false;}}function b(l){h(false);if(l.preventDefault){l.preventDefault();}else{l.returnValue=false;}}function d(){i(false);var m=WA.$("selectAll",window);var l=WA.$("clearAll",window);c(m);c(l);WA.addHandler(m,"click",f);WA.addHandler(l,"click",f);}function e(){i(true);var m=WA.$("selectAll",window);var l=WA.$("clearAll",window);c(m);c(l);WA.addHandler(m,"click",g);WA.addHandler(l,"click",b);}function c(l){BonaPage.removeHandler(l,"click",f);BonaPage.removeHandler(l,"click",g);BonaPage.removeHandler(l,"click",b);}function a(o,l){var q=document.getElementById(EventListPreferences.tagsTableId);var m=q.getElementsByTagName("input");var p=WA.$(EventListPreferences.showAllRadioId,window);if(p.checked){l.IsValid=true;return;}else{for(var n=0;n<m.length;n++){if(m[n].checked){l.IsValid=true;return;}}}l.IsValid=false;}function k(l,n){var q="";var o=document.getElementById(n);if(!o){return;}var m=o.getElementsByTagName("INPUT");for(var p=0;p<m.length;p++){if(m[p].checked){q+=m[p].value;}}DataChangeWatcher.changeValidatorCustom(n,q,l);}function h(n){var o=document.getElementById(EventListPreferences.tagsTableId);var l=o.getElementsByTagName("input");for(var m=0;m<l.length;m++){l[m].checked=n;}}function i(n){var o=document.getElementById(EventListPreferences.tagsTableId);var l=o.getElementsByTagName("input");for(var m=0;m<l.length;m++){if(n==false){l[m].checked=false;}l[m].disabled=!n;}}function f(l){if(l.preventDefault){l.preventDefault();}else{l.returnValue=false;}}})();

/*   /Content/Events/EventRegistration.js   */

var EventRegistration;(function(){var a=function(q){return document.getElementById(q);};if(EventRegistration==null){EventRegistration=new Object();}var b=0;var j=0;var i=0;var m;var n;var h="";var g="";var p;var l=false;EventRegistration.paymentInstructionsDiv=m;EventRegistration.paymentTypeSelectorTR=n;EventRegistration.currencySymbol=h;EventRegistration.currencyCode=g;EventRegistration.totalPriceLabel=p;EventRegistration.isOnlinePayPalPaymentForEventSupported=l;EventRegistration.initializePrice=k;EventRegistration.calcTotalPrice=c;EventRegistration.clickCustomRadioButton=e;EventRegistration.clickCustomCheckBox=d;EventRegistration.clickRegType=f;function k(q,r,s){j=r?new Number(r):0;if(s){EventRegistration.totalPriceLabel=$get(s);}b=0;i=0;c(q);}function c(q){if(!EventRegistration.totalPriceLabel){return;}b+=q?new Number(q):0;i=b+new Number(j);EventRegistration.totalPriceLabel.innerHTML=EventRegistration.currencySymbol+i+EventRegistration.currencyCode;EventRegistration.totalPriceLabel.style.fontWeight="bold";o();}function e(t,q){var r=q.target;var s=q.previous;c(new Number(r.parentNode.getAttribute("price")));if(s){c(new Number(s.parentNode.getAttribute("price"))*-1);}}function d(s,q){var r=q.target;if(r.checked){c(r.parentNode.getAttribute("price"));}else{c(r.parentNode.getAttribute("price")*-1);}}function f(r){objFakeRadioGroupValue.value="1";for(var q=0;q<Page_Validators.length;q++){ValidatorValidate(Page_Validators[q],"EventRegistrationValidation",null);}ValidatorUpdateIsValid();Page_BlockSubmit=!Page_IsValid;j=new Number(r);c();}function o(){if(EventRegistration.paymentInstructionsDiv){EventRegistration.paymentInstructionsDiv.style.display=i>0?"block":"none";}if(EventRegistration.paymentTypeSelectorTR){if(document.all){EventRegistration.paymentTypeSelectorTR.style.display=i>0?"block":"none";}else{EventRegistration.paymentTypeSelectorTR.style.display=i>0?"table-row":"none";}}}})();

/*   /Content/Members/MemberDirectoryProfile.js   */

var MemberDirectoryProfile;(function(){if(MemberDirectoryProfile==null){MemberDirectoryProfile=new Object();}MemberDirectoryProfile.validateStateChanged=c;var b;function a(d){return document.getElementById(d);}function c(h,d){var j="";var f=a(MemberDirectoryProfile.includeMeInMemberDirectoryContainer);if(f){var e=f.getElementsByTagName("INPUT");for(var g=0;g<e.length;g++){if(e[g].checked){j+=e[g].value;}}DataChangeWatcher.changeValidatorCustom(MemberDirectoryProfile.includeMeInMemberDirectoryContainer,j,d);}}})();

/*   /Content/SubscriptionForm/SubscriptionFormPreferences.js   */

var SubscriptionFormPreferences;(function(){if(SubscriptionFormPreferences==null){SubscriptionFormPreferences=new Object();}SubscriptionFormPreferences.adjustContactFieldsVisibility=a;SubscriptionFormPreferences.optionSelectedFieldsRadioId=c;SubscriptionFormPreferences.contactFieldsContainerId=b;var c;var b;function a(){var e=document.getElementById(SubscriptionFormPreferences.optionSelectedFieldsRadioId);var d=document.getElementById(SubscriptionFormPreferences.contactFieldsContainerId);d.style.display=(e.checked)?"block":"none";}})();
