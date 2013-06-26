// Created by iWeb 3.0.4 local-build-20130626

setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWStrokeParts([{rect:new IWRect(-1,1,2,350),url:'Welcome_files/stroke.png'},{rect:new IWRect(-1,-1,2,2),url:'Welcome_files/stroke_1.png'},{rect:new IWRect(1,-1,651,2),url:'Welcome_files/stroke_2.png'},{rect:new IWRect(652,-1,2,2),url:'Welcome_files/stroke_3.png'},{rect:new IWRect(652,1,2,350),url:'Welcome_files/stroke_4.png'},{rect:new IWRect(652,351,2,3),url:'Welcome_files/stroke_5.png'},{rect:new IWRect(1,351,651,3),url:'Welcome_files/stroke_6.png'},{rect:new IWRect(-1,351,2,3),url:'Welcome_files/stroke_7.png'}],new IWSize(653,353))});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('Welcome_files/WelcomeMoz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');Widget.onload();fixupAllIEPNGBGs();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
