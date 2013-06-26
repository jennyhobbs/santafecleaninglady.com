// Created by iWeb 3.0.4 local-build-20130626

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,181),url:'Pay_online_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Pay_online_files/stroke_1.png'},{rect:new IWRect(1,-1,603,2),url:'Pay_online_files/stroke_2.png'},{rect:new IWRect(604,-1,3,2),url:'Pay_online_files/stroke_3.png'},{rect:new IWRect(604,1,3,181),url:'Pay_online_files/stroke_4.png'},{rect:new IWRect(604,182,3,2),url:'Pay_online_files/stroke_5.png'},{rect:new IWRect(1,182,603,2),url:'Pay_online_files/stroke_6.png'},{rect:new IWRect(-1,182,2,2),url:'Pay_online_files/stroke_7.png'}],new IWSize(605,183))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Pay_online_files/Pay_onlineMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
