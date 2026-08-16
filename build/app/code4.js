gdjs.NIVEAU_451Code = {};
gdjs.NIVEAU_451Code.localVariables = [];
gdjs.NIVEAU_451Code.idToCallbackMap = new Map();
gdjs.NIVEAU_451Code.GDlaveObjects1= [];
gdjs.NIVEAU_451Code.GDlaveObjects2= [];
gdjs.NIVEAU_451Code.GDFlagObjects1= [];
gdjs.NIVEAU_451Code.GDFlagObjects2= [];
gdjs.NIVEAU_451Code.GDEffectObjects1= [];
gdjs.NIVEAU_451Code.GDEffectObjects2= [];
gdjs.NIVEAU_451Code.GDInfoObjects1= [];
gdjs.NIVEAU_451Code.GDInfoObjects2= [];
gdjs.NIVEAU_451Code.GDKey_9595LEFTObjects1= [];
gdjs.NIVEAU_451Code.GDKey_9595LEFTObjects2= [];
gdjs.NIVEAU_451Code.GDKey_9595RIGHTObjects1= [];
gdjs.NIVEAU_451Code.GDKey_9595RIGHTObjects2= [];
gdjs.NIVEAU_451Code.GDPlatform3Objects1= [];
gdjs.NIVEAU_451Code.GDPlatform3Objects2= [];
gdjs.NIVEAU_451Code.GDPlatformLongObjects1= [];
gdjs.NIVEAU_451Code.GDPlatformLongObjects2= [];
gdjs.NIVEAU_451Code.GDKey_9595UPObjects1= [];
gdjs.NIVEAU_451Code.GDKey_9595UPObjects2= [];
gdjs.NIVEAU_451Code.GDRootObjects1= [];
gdjs.NIVEAU_451Code.GDRootObjects2= [];
gdjs.NIVEAU_451Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.NIVEAU_451Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.NIVEAU_451Code.GDPlatformLongObjects1= [];
gdjs.NIVEAU_451Code.GDPlatformLongObjects2= [];
gdjs.NIVEAU_451Code.GDPlatformObjects1= [];
gdjs.NIVEAU_451Code.GDPlatformObjects2= [];


gdjs.NIVEAU_451Code.mapOfGDgdjs_9546NIVEAU_9595451Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_451Code.GDRootObjects1});
gdjs.NIVEAU_451Code.mapOfGDgdjs_9546NIVEAU_9595451Code_9546GDlaveObjects1Objects = Hashtable.newFrom({"lave": gdjs.NIVEAU_451Code.GDlaveObjects1});
gdjs.NIVEAU_451Code.mapOfGDgdjs_9546NIVEAU_9595451Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_451Code.GDRootObjects1});
gdjs.NIVEAU_451Code.mapOfGDgdjs_9546NIVEAU_9595451Code_9546GDFlagObjects1Objects = Hashtable.newFrom({"Flag": gdjs.NIVEAU_451Code.GDFlagObjects1});
gdjs.NIVEAU_451Code.asyncCallback14595068 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NIVEAU_451Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fin_NIVEAUX", false);
}
gdjs.NIVEAU_451Code.localVariables.length = 0;
}
gdjs.NIVEAU_451Code.idToCallbackMap.set(14595068, gdjs.NIVEAU_451Code.asyncCallback14595068);
gdjs.NIVEAU_451Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NIVEAU_451Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.NIVEAU_451Code.asyncCallback14595068(runtimeScene, asyncObjectsList)), 14595068, asyncObjectsList);
}
}

}


};gdjs.NIVEAU_451Code.eventsList1 = function(runtimeScene) {

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


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_451Code.GDRootObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NIVEAU_451Code.GDRootObjects1.length !== 0 ? gdjs.NIVEAU_451Code.GDRootObjects1[0] : null), false, "", 5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_451Code.GDRootObjects1);
gdjs.copyArray(runtimeScene.getObjects("lave"), gdjs.NIVEAU_451Code.GDlaveObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_451Code.mapOfGDgdjs_9546NIVEAU_9595451Code_9546GDRootObjects1Objects, gdjs.NIVEAU_451Code.mapOfGDgdjs_9546NIVEAU_9595451Code_9546GDlaveObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NIVEAU-1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_451Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_451Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_451Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_451Code.GDRootObjects1[k] = gdjs.NIVEAU_451Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_451Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_451Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_451Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_451Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_GAUCHE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_451Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_451Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_451Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_451Code.GDRootObjects1[k] = gdjs.NIVEAU_451Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_451Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_451Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_451Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_451Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_DROITE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_451Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_451Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_451Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_451Code.GDRootObjects1[k] = gdjs.NIVEAU_451Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_451Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_451Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_451Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_451Code.GDRootObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_451Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_451Code.GDRootObjects1.length;i<l;++i) {
    if ( !(gdjs.NIVEAU_451Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_451Code.GDRootObjects1[k] = gdjs.NIVEAU_451Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_451Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_451Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_451Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_451Code.GDRootObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.NIVEAU_451Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_451Code.GDRootObjects1[i].setAnimationFrame(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.NIVEAU_451Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_451Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_451Code.mapOfGDgdjs_9546NIVEAU_9595451Code_9546GDRootObjects1Objects, gdjs.NIVEAU_451Code.mapOfGDgdjs_9546NIVEAU_9595451Code_9546GDFlagObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14562556);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Effect"), gdjs.NIVEAU_451Code.GDEffectObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "CHRONO-TEMPS"));
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "CHRONO-TEMPS");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("NIVEAU-2");
}
{for(var i = 0, len = gdjs.NIVEAU_451Code.GDEffectObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_451Code.GDEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.6, "Circular", "Forward", 0, null);
}
}
{gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "NIVEAU-ACTUEL", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}

{ //Subevents
gdjs.NIVEAU_451Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9392652);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_451Code.GDRootObjects1);
{for(var i = 0, len = gdjs.NIVEAU_451Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_451Code.GDRootObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


};

gdjs.NIVEAU_451Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NIVEAU_451Code.GDlaveObjects1.length = 0;
gdjs.NIVEAU_451Code.GDlaveObjects2.length = 0;
gdjs.NIVEAU_451Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_451Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_451Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_451Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_451Code.GDInfoObjects1.length = 0;
gdjs.NIVEAU_451Code.GDInfoObjects2.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595LEFTObjects1.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595LEFTObjects2.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595RIGHTObjects1.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595RIGHTObjects2.length = 0;
gdjs.NIVEAU_451Code.GDPlatform3Objects1.length = 0;
gdjs.NIVEAU_451Code.GDPlatform3Objects2.length = 0;
gdjs.NIVEAU_451Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_451Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595UPObjects1.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595UPObjects2.length = 0;
gdjs.NIVEAU_451Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_451Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_451Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_451Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_451Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_451Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_451Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_451Code.GDPlatformObjects2.length = 0;

gdjs.NIVEAU_451Code.eventsList1(runtimeScene);
gdjs.NIVEAU_451Code.GDlaveObjects1.length = 0;
gdjs.NIVEAU_451Code.GDlaveObjects2.length = 0;
gdjs.NIVEAU_451Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_451Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_451Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_451Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_451Code.GDInfoObjects1.length = 0;
gdjs.NIVEAU_451Code.GDInfoObjects2.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595LEFTObjects1.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595LEFTObjects2.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595RIGHTObjects1.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595RIGHTObjects2.length = 0;
gdjs.NIVEAU_451Code.GDPlatform3Objects1.length = 0;
gdjs.NIVEAU_451Code.GDPlatform3Objects2.length = 0;
gdjs.NIVEAU_451Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_451Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595UPObjects1.length = 0;
gdjs.NIVEAU_451Code.GDKey_9595UPObjects2.length = 0;
gdjs.NIVEAU_451Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_451Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_451Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_451Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_451Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_451Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_451Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_451Code.GDPlatformObjects2.length = 0;


return;

}

gdjs['NIVEAU_451Code'] = gdjs.NIVEAU_451Code;
