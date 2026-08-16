gdjs.NIVEAU_455Code = {};
gdjs.NIVEAU_455Code.localVariables = [];
gdjs.NIVEAU_455Code.idToCallbackMap = new Map();
gdjs.NIVEAU_455Code.GDAYWENObjects1= [];
gdjs.NIVEAU_455Code.GDAYWENObjects2= [];
gdjs.NIVEAU_455Code.GDAYWENObjects3= [];
gdjs.NIVEAU_455Code.GDLAVAObjects1= [];
gdjs.NIVEAU_455Code.GDLAVAObjects2= [];
gdjs.NIVEAU_455Code.GDLAVAObjects3= [];
gdjs.NIVEAU_455Code.GDNiveauObjects1= [];
gdjs.NIVEAU_455Code.GDNiveauObjects2= [];
gdjs.NIVEAU_455Code.GDNiveauObjects3= [];
gdjs.NIVEAU_455Code.GDFlagObjects1= [];
gdjs.NIVEAU_455Code.GDFlagObjects2= [];
gdjs.NIVEAU_455Code.GDFlagObjects3= [];
gdjs.NIVEAU_455Code.GDEffectObjects1= [];
gdjs.NIVEAU_455Code.GDEffectObjects2= [];
gdjs.NIVEAU_455Code.GDEffectObjects3= [];
gdjs.NIVEAU_455Code.GDRootObjects1= [];
gdjs.NIVEAU_455Code.GDRootObjects2= [];
gdjs.NIVEAU_455Code.GDRootObjects3= [];
gdjs.NIVEAU_455Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.NIVEAU_455Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.NIVEAU_455Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects3= [];
gdjs.NIVEAU_455Code.GDPlatformLongObjects1= [];
gdjs.NIVEAU_455Code.GDPlatformLongObjects2= [];
gdjs.NIVEAU_455Code.GDPlatformLongObjects3= [];
gdjs.NIVEAU_455Code.GDPlatformObjects1= [];
gdjs.NIVEAU_455Code.GDPlatformObjects2= [];
gdjs.NIVEAU_455Code.GDPlatformObjects3= [];


gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_455Code.GDRootObjects1});
gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDPlatformObjects1Objects = Hashtable.newFrom({"Platform": gdjs.NIVEAU_455Code.GDPlatformObjects1});
gdjs.NIVEAU_455Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "1");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Trool_Aywen\\Déconnage.ogg", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "2");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Trool_Aywen\\LA_CHINE.ogg", false, 40, 1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "3");
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\Trool_Aywen\\Pipe.ogg", false, 100, 1);
}
}

}


};gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_455Code.GDRootObjects1});
gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDLAVAObjects1Objects = Hashtable.newFrom({"LAVA": gdjs.NIVEAU_455Code.GDLAVAObjects1});
gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_455Code.GDRootObjects1});
gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDFlagObjects1Objects = Hashtable.newFrom({"Flag": gdjs.NIVEAU_455Code.GDFlagObjects1});
gdjs.NIVEAU_455Code.asyncCallback14794028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NIVEAU_455Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fin_NIVEAUX", false);
}
gdjs.NIVEAU_455Code.localVariables.length = 0;
}
gdjs.NIVEAU_455Code.idToCallbackMap.set(14794028, gdjs.NIVEAU_455Code.asyncCallback14794028);
gdjs.NIVEAU_455Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NIVEAU_455Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.NIVEAU_455Code.asyncCallback14794028(runtimeScene, asyncObjectsList)), 14794028, asyncObjectsList);
}
}

}


};gdjs.NIVEAU_455Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.NIVEAU_455Code.GDPlatformObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_455Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDRootObjects1Objects, "PlatformerObject", gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDPlatformObjects1Objects, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14782756);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setString(gdjs.evtTools.common.toString(gdjs.randomInRange(1, 3)));
}

{ //Subevents
gdjs.NIVEAU_455Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_455Code.GDRootObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NIVEAU_455Code.GDRootObjects1.length !== 0 ? gdjs.NIVEAU_455Code.GDRootObjects1[0] : null), true, "", 0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.NIVEAU_455Code.GDLAVAObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_455Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDRootObjects1Objects, gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDLAVAObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NIVEAU-5", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CHRONO-TEMPS");
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_455Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_455Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_455Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_455Code.GDRootObjects1[k] = gdjs.NIVEAU_455Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_455Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_455Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_455Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_455Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_GAUCHE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_455Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_455Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_455Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_455Code.GDRootObjects1[k] = gdjs.NIVEAU_455Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_455Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_455Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_455Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_455Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_DROITE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_455Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_455Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_455Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_455Code.GDRootObjects1[k] = gdjs.NIVEAU_455Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_455Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_455Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_455Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_455Code.GDRootObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_455Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_455Code.GDRootObjects1.length;i<l;++i) {
    if ( !(gdjs.NIVEAU_455Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_455Code.GDRootObjects1[k] = gdjs.NIVEAU_455Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_455Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_455Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_455Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_455Code.GDRootObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.NIVEAU_455Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_455Code.GDRootObjects1[i].setAnimationFrame(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.NIVEAU_455Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_455Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDRootObjects1Objects, gdjs.NIVEAU_455Code.mapOfGDgdjs_9546NIVEAU_9595455Code_9546GDFlagObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14792204);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Effect"), gdjs.NIVEAU_455Code.GDEffectObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "CHRONO-TEMPS"));
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "CHRONO-TEMPS");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("NIVEAU-5");
}
{for(var i = 0, len = gdjs.NIVEAU_455Code.GDEffectObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_455Code.GDEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.6, "Circular", "Forward", 0, null);
}
}
{gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "NIVEAU-ACTUEL", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}

{ //Subevents
gdjs.NIVEAU_455Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16702796);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_455Code.GDRootObjects1);
{for(var i = 0, len = gdjs.NIVEAU_455Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_455Code.GDRootObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


};

gdjs.NIVEAU_455Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NIVEAU_455Code.GDAYWENObjects1.length = 0;
gdjs.NIVEAU_455Code.GDAYWENObjects2.length = 0;
gdjs.NIVEAU_455Code.GDAYWENObjects3.length = 0;
gdjs.NIVEAU_455Code.GDLAVAObjects1.length = 0;
gdjs.NIVEAU_455Code.GDLAVAObjects2.length = 0;
gdjs.NIVEAU_455Code.GDLAVAObjects3.length = 0;
gdjs.NIVEAU_455Code.GDNiveauObjects1.length = 0;
gdjs.NIVEAU_455Code.GDNiveauObjects2.length = 0;
gdjs.NIVEAU_455Code.GDNiveauObjects3.length = 0;
gdjs.NIVEAU_455Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_455Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_455Code.GDFlagObjects3.length = 0;
gdjs.NIVEAU_455Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_455Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_455Code.GDEffectObjects3.length = 0;
gdjs.NIVEAU_455Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_455Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_455Code.GDRootObjects3.length = 0;
gdjs.NIVEAU_455Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_455Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_455Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects3.length = 0;
gdjs.NIVEAU_455Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_455Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_455Code.GDPlatformLongObjects3.length = 0;
gdjs.NIVEAU_455Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_455Code.GDPlatformObjects2.length = 0;
gdjs.NIVEAU_455Code.GDPlatformObjects3.length = 0;

gdjs.NIVEAU_455Code.eventsList2(runtimeScene);
gdjs.NIVEAU_455Code.GDAYWENObjects1.length = 0;
gdjs.NIVEAU_455Code.GDAYWENObjects2.length = 0;
gdjs.NIVEAU_455Code.GDAYWENObjects3.length = 0;
gdjs.NIVEAU_455Code.GDLAVAObjects1.length = 0;
gdjs.NIVEAU_455Code.GDLAVAObjects2.length = 0;
gdjs.NIVEAU_455Code.GDLAVAObjects3.length = 0;
gdjs.NIVEAU_455Code.GDNiveauObjects1.length = 0;
gdjs.NIVEAU_455Code.GDNiveauObjects2.length = 0;
gdjs.NIVEAU_455Code.GDNiveauObjects3.length = 0;
gdjs.NIVEAU_455Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_455Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_455Code.GDFlagObjects3.length = 0;
gdjs.NIVEAU_455Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_455Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_455Code.GDEffectObjects3.length = 0;
gdjs.NIVEAU_455Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_455Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_455Code.GDRootObjects3.length = 0;
gdjs.NIVEAU_455Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_455Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_455Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects3.length = 0;
gdjs.NIVEAU_455Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_455Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_455Code.GDPlatformLongObjects3.length = 0;
gdjs.NIVEAU_455Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_455Code.GDPlatformObjects2.length = 0;
gdjs.NIVEAU_455Code.GDPlatformObjects3.length = 0;


return;

}

gdjs['NIVEAU_455Code'] = gdjs.NIVEAU_455Code;
