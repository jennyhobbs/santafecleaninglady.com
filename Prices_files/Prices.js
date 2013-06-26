// Created by iWeb 3.0.4 local-build-20130626

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({shadow_0:new IWShadow({blurRadius:4,offset:new IWPoint(1.4142,1.4142),color:'#000000',opacity:0.500000}),stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,192),url:'Prices_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Prices_files/stroke_1.png'},{rect:new IWRect(1,-1,640,2),url:'Prices_files/stroke_2.png'},{rect:new IWRect(641,-1,2,2),url:'Prices_files/stroke_3.png'},{rect:new IWRect(641,1,2,192),url:'Prices_files/stroke_4.png'},{rect:new IWRect(641,193,2,3),url:'Prices_files/stroke_5.png'},{rect:new IWRect(1,193,640,3),url:'Prices_files/stroke_6.png'},{rect:new IWRect(-1,193,2,3),url:'Prices_files/stroke_7.png'}],new IWSize(642,194))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Prices_files/PricesMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');Widget.onload();applyEffects()}
function onPageUnload()
{Widget.onunload();}
