gdjs.NIVEAU_454Code = {};
gdjs.NIVEAU_454Code.localVariables = [];
gdjs.NIVEAU_454Code.idToCallbackMap = new Map();
gdjs.NIVEAU_454Code.GDCHINEObjects1= [];
gdjs.NIVEAU_454Code.GDCHINEObjects2= [];
gdjs.NIVEAU_454Code.GDLAVAObjects1= [];
gdjs.NIVEAU_454Code.GDLAVAObjects2= [];
gdjs.NIVEAU_454Code.GDPlatformActivationFlagObjects1= [];
gdjs.NIVEAU_454Code.GDPlatformActivationFlagObjects2= [];
gdjs.NIVEAU_454Code.GDINDICATIONObjects1= [];
gdjs.NIVEAU_454Code.GDINDICATIONObjects2= [];
gdjs.NIVEAU_454Code.GDFlagObjects1= [];
gdjs.NIVEAU_454Code.GDFlagObjects2= [];
gdjs.NIVEAU_454Code.GDEffectObjects1= [];
gdjs.NIVEAU_454Code.GDEffectObjects2= [];
gdjs.NIVEAU_454Code.GDNiveauObjects1= [];
gdjs.NIVEAU_454Code.GDNiveauObjects2= [];
gdjs.NIVEAU_454Code.GDRootObjects1= [];
gdjs.NIVEAU_454Code.GDRootObjects2= [];
gdjs.NIVEAU_454Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.NIVEAU_454Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.NIVEAU_454Code.GDPlatformLongObjects1= [];
gdjs.NIVEAU_454Code.GDPlatformLongObjects2= [];
gdjs.NIVEAU_454Code.GDPlatformObjects1= [];
gdjs.NIVEAU_454Code.GDPlatformObjects2= [];


gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_454Code.GDRootObjects1});
gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDLAVAObjects1Objects = Hashtable.newFrom({"LAVA": gdjs.NIVEAU_454Code.GDLAVAObjects1});
gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_454Code.GDRootObjects1});
gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDPlatformActivationFlagObjects1Objects = Hashtable.newFrom({"PlatformActivationFlag": gdjs.NIVEAU_454Code.GDPlatformActivationFlagObjects1});
gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_454Code.GDRootObjects1});
gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDFlagObjects1Objects = Hashtable.newFrom({"Flag": gdjs.NIVEAU_454Code.GDFlagObjects1});
gdjs.NIVEAU_454Code.asyncCallback14764764 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NIVEAU_454Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fin_NIVEAUX", false);
}
gdjs.NIVEAU_454Code.localVariables.length = 0;
}
gdjs.NIVEAU_454Code.idToCallbackMap.set(14764764, gdjs.NIVEAU_454Code.asyncCallback14764764);
gdjs.NIVEAU_454Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NIVEAU_454Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.NIVEAU_454Code.asyncCallback14764764(runtimeScene, asyncObjectsList)), 14764764, asyncObjectsList);
}
}

}


};gdjs.NIVEAU_454Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("CHINE"), gdjs.NIVEAU_454Code.GDCHINEObjects1);
gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.NIVEAU_454Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("INDICATION"), gdjs.NIVEAU_454Code.GDINDICATIONObjects1);
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDCHINEObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDCHINEObjects1[i].play();
}
}
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDINDICATIONObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDINDICATIONObjects1[i].getBehavior("Text").setText("VIENS ICI");
}
}
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDFlagObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDFlagObjects1[i].hide();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CHRONO-TEMPS");
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.NIVEAU_454Code.GDLAVAObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_454Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDRootObjects1Objects, gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDLAVAObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NIVEAU-4", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlatformActivationFlag"), gdjs.NIVEAU_454Code.GDPlatformActivationFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_454Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDRootObjects1Objects, "PlatformerObject", gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDPlatformActivationFlagObjects1Objects, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.NIVEAU_454Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("INDICATION"), gdjs.NIVEAU_454Code.GDINDICATIONObjects1);
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDFlagObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDFlagObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDINDICATIONObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDINDICATIONObjects1[i].getBehavior("Text").setText("Allez reviens sur tes pas");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_454Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_454Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_454Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_454Code.GDRootObjects1[k] = gdjs.NIVEAU_454Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_454Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_454Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_GAUCHE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_454Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_454Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_454Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_454Code.GDRootObjects1[k] = gdjs.NIVEAU_454Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_454Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_454Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_DROITE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_454Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_454Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_454Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_454Code.GDRootObjects1[k] = gdjs.NIVEAU_454Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_454Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_454Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDRootObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_454Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_454Code.GDRootObjects1.length;i<l;++i) {
    if ( !(gdjs.NIVEAU_454Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_454Code.GDRootObjects1[k] = gdjs.NIVEAU_454Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_454Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_454Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDRootObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDRootObjects1[i].setAnimationFrame(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.NIVEAU_454Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_454Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDRootObjects1Objects, gdjs.NIVEAU_454Code.mapOfGDgdjs_9546NIVEAU_9595454Code_9546GDFlagObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_454Code.GDFlagObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_454Code.GDFlagObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_454Code.GDFlagObjects1[k] = gdjs.NIVEAU_454Code.GDFlagObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_454Code.GDFlagObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14761508);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Effect"), gdjs.NIVEAU_454Code.GDEffectObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "CHRONO-TEMPS"));
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "CHRONO-TEMPS");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("NIVEAU-5");
}
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDEffectObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.6, "Circular", "Forward", 0, null);
}
}
{gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "NIVEAU-ACTUEL", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}

{ //Subevents
gdjs.NIVEAU_454Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10943228);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_454Code.GDRootObjects1);
{for(var i = 0, len = gdjs.NIVEAU_454Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_454Code.GDRootObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


};

gdjs.NIVEAU_454Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NIVEAU_454Code.GDCHINEObjects1.length = 0;
gdjs.NIVEAU_454Code.GDCHINEObjects2.length = 0;
gdjs.NIVEAU_454Code.GDLAVAObjects1.length = 0;
gdjs.NIVEAU_454Code.GDLAVAObjects2.length = 0;
gdjs.NIVEAU_454Code.GDPlatformActivationFlagObjects1.length = 0;
gdjs.NIVEAU_454Code.GDPlatformActivationFlagObjects2.length = 0;
gdjs.NIVEAU_454Code.GDINDICATIONObjects1.length = 0;
gdjs.NIVEAU_454Code.GDINDICATIONObjects2.length = 0;
gdjs.NIVEAU_454Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_454Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_454Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_454Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_454Code.GDNiveauObjects1.length = 0;
gdjs.NIVEAU_454Code.GDNiveauObjects2.length = 0;
gdjs.NIVEAU_454Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_454Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_454Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_454Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_454Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_454Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_454Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_454Code.GDPlatformObjects2.length = 0;

gdjs.NIVEAU_454Code.eventsList1(runtimeScene);
gdjs.NIVEAU_454Code.GDCHINEObjects1.length = 0;
gdjs.NIVEAU_454Code.GDCHINEObjects2.length = 0;
gdjs.NIVEAU_454Code.GDLAVAObjects1.length = 0;
gdjs.NIVEAU_454Code.GDLAVAObjects2.length = 0;
gdjs.NIVEAU_454Code.GDPlatformActivationFlagObjects1.length = 0;
gdjs.NIVEAU_454Code.GDPlatformActivationFlagObjects2.length = 0;
gdjs.NIVEAU_454Code.GDINDICATIONObjects1.length = 0;
gdjs.NIVEAU_454Code.GDINDICATIONObjects2.length = 0;
gdjs.NIVEAU_454Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_454Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_454Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_454Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_454Code.GDNiveauObjects1.length = 0;
gdjs.NIVEAU_454Code.GDNiveauObjects2.length = 0;
gdjs.NIVEAU_454Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_454Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_454Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_454Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_454Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_454Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_454Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_454Code.GDPlatformObjects2.length = 0;


return;

}

gdjs['NIVEAU_454Code'] = gdjs.NIVEAU_454Code;
