gdjs.NIVEAU_452Code = {};
gdjs.NIVEAU_452Code.localVariables = [];
gdjs.NIVEAU_452Code.idToCallbackMap = new Map();
gdjs.NIVEAU_452Code.GDPlatform2Objects1_1final = [];

gdjs.NIVEAU_452Code.GDPlatformLongObjects1_1final = [];

gdjs.NIVEAU_452Code.GDRootObjects1_1final = [];

gdjs.NIVEAU_452Code.GDBackgroundObjects1= [];
gdjs.NIVEAU_452Code.GDBackgroundObjects2= [];
gdjs.NIVEAU_452Code.GDPlatformLongObjects1= [];
gdjs.NIVEAU_452Code.GDPlatformLongObjects2= [];
gdjs.NIVEAU_452Code.GDPlatform2Objects1= [];
gdjs.NIVEAU_452Code.GDPlatform2Objects2= [];
gdjs.NIVEAU_452Code.GDNiveauObjects1= [];
gdjs.NIVEAU_452Code.GDNiveauObjects2= [];
gdjs.NIVEAU_452Code.GDLAVAObjects1= [];
gdjs.NIVEAU_452Code.GDLAVAObjects2= [];
gdjs.NIVEAU_452Code.GDFlagObjects1= [];
gdjs.NIVEAU_452Code.GDFlagObjects2= [];
gdjs.NIVEAU_452Code.GDEffectObjects1= [];
gdjs.NIVEAU_452Code.GDEffectObjects2= [];
gdjs.NIVEAU_452Code.GDTextObjects1= [];
gdjs.NIVEAU_452Code.GDTextObjects2= [];
gdjs.NIVEAU_452Code.GDFl_95234cheObjects1= [];
gdjs.NIVEAU_452Code.GDFl_95234cheObjects2= [];
gdjs.NIVEAU_452Code.GDRootObjects1= [];
gdjs.NIVEAU_452Code.GDRootObjects2= [];
gdjs.NIVEAU_452Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.NIVEAU_452Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.NIVEAU_452Code.GDPlatformLongObjects1= [];
gdjs.NIVEAU_452Code.GDPlatformLongObjects2= [];
gdjs.NIVEAU_452Code.GDPlatformObjects1= [];
gdjs.NIVEAU_452Code.GDPlatformObjects2= [];


gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_452Code.GDRootObjects1});
gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDLAVAObjects1Objects = Hashtable.newFrom({"LAVA": gdjs.NIVEAU_452Code.GDLAVAObjects1});
gdjs.NIVEAU_452Code.asyncCallback14796524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NIVEAU_452Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NIVEAU-2", false);
}
gdjs.NIVEAU_452Code.localVariables.length = 0;
}
gdjs.NIVEAU_452Code.idToCallbackMap.set(14796524, gdjs.NIVEAU_452Code.asyncCallback14796524);
gdjs.NIVEAU_452Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NIVEAU_452Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.NIVEAU_452Code.asyncCallback14796524(runtimeScene, asyncObjectsList)), 14796524, asyncObjectsList);
}
}

}


};gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDRootObjects2Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_452Code.GDRootObjects2});
gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDPlatformLongObjects2Objects = Hashtable.newFrom({"PlatformLong": gdjs.NIVEAU_452Code.GDPlatformLongObjects2});
gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDRootObjects2Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_452Code.GDRootObjects2});
gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDPlatform2Objects2Objects = Hashtable.newFrom({"Platform2": gdjs.NIVEAU_452Code.GDPlatform2Objects2});
gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_452Code.GDRootObjects1});
gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDFlagObjects1Objects = Hashtable.newFrom({"Flag": gdjs.NIVEAU_452Code.GDFlagObjects1});
gdjs.NIVEAU_452Code.asyncCallback14803716 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NIVEAU_452Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fin_NIVEAUX", false);
}
gdjs.NIVEAU_452Code.localVariables.length = 0;
}
gdjs.NIVEAU_452Code.idToCallbackMap.set(14803716, gdjs.NIVEAU_452Code.asyncCallback14803716);
gdjs.NIVEAU_452Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NIVEAU_452Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.NIVEAU_452Code.asyncCallback14803716(runtimeScene, asyncObjectsList)), 14803716, asyncObjectsList);
}
}

}


};gdjs.NIVEAU_452Code.eventsList2 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_452Code.GDRootObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NIVEAU_452Code.GDRootObjects1.length !== 0 ? gdjs.NIVEAU_452Code.GDRootObjects1[0] : null), false, "", 5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.NIVEAU_452Code.GDLAVAObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_452Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDRootObjects1Objects, gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDLAVAObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14796004);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/dead.wav", 1, false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}

{ //Subevents
gdjs.NIVEAU_452Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_452Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_452Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_452Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_452Code.GDRootObjects1[k] = gdjs.NIVEAU_452Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_452Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_452Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_452Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_452Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_GAUCHE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_452Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_452Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_452Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_452Code.GDRootObjects1[k] = gdjs.NIVEAU_452Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_452Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_452Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_452Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_452Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_DROITE");
}
}
}

}


{

gdjs.NIVEAU_452Code.GDPlatform2Objects1.length = 0;

gdjs.NIVEAU_452Code.GDPlatformLongObjects1.length = 0;

gdjs.NIVEAU_452Code.GDRootObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.NIVEAU_452Code.GDPlatform2Objects1_1final.length = 0;
gdjs.NIVEAU_452Code.GDPlatformLongObjects1_1final.length = 0;
gdjs.NIVEAU_452Code.GDRootObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlatformLong"), gdjs.NIVEAU_452Code.GDPlatformLongObjects2);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_452Code.GDRootObjects2);
isConditionTrue_1 = gdjs.evtTools.platform.isOnPlatform(gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDRootObjects2Objects, "PlatformerObject", gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDPlatformLongObjects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.NIVEAU_452Code.GDPlatformLongObjects2.length; j < jLen ; ++j) {
        if ( gdjs.NIVEAU_452Code.GDPlatformLongObjects1_1final.indexOf(gdjs.NIVEAU_452Code.GDPlatformLongObjects2[j]) === -1 )
            gdjs.NIVEAU_452Code.GDPlatformLongObjects1_1final.push(gdjs.NIVEAU_452Code.GDPlatformLongObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.NIVEAU_452Code.GDRootObjects2.length; j < jLen ; ++j) {
        if ( gdjs.NIVEAU_452Code.GDRootObjects1_1final.indexOf(gdjs.NIVEAU_452Code.GDRootObjects2[j]) === -1 )
            gdjs.NIVEAU_452Code.GDRootObjects1_1final.push(gdjs.NIVEAU_452Code.GDRootObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Platform2"), gdjs.NIVEAU_452Code.GDPlatform2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_452Code.GDRootObjects2);
isConditionTrue_1 = gdjs.evtTools.platform.isOnPlatform(gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDRootObjects2Objects, "PlatformerObject", gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDPlatform2Objects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.NIVEAU_452Code.GDPlatform2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.NIVEAU_452Code.GDPlatform2Objects1_1final.indexOf(gdjs.NIVEAU_452Code.GDPlatform2Objects2[j]) === -1 )
            gdjs.NIVEAU_452Code.GDPlatform2Objects1_1final.push(gdjs.NIVEAU_452Code.GDPlatform2Objects2[j]);
    }
    for (let j = 0, jLen = gdjs.NIVEAU_452Code.GDRootObjects2.length; j < jLen ; ++j) {
        if ( gdjs.NIVEAU_452Code.GDRootObjects1_1final.indexOf(gdjs.NIVEAU_452Code.GDRootObjects2[j]) === -1 )
            gdjs.NIVEAU_452Code.GDRootObjects1_1final.push(gdjs.NIVEAU_452Code.GDRootObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.NIVEAU_452Code.GDPlatform2Objects1_1final, gdjs.NIVEAU_452Code.GDPlatform2Objects1);
gdjs.copyArray(gdjs.NIVEAU_452Code.GDPlatformLongObjects1_1final, gdjs.NIVEAU_452Code.GDPlatformLongObjects1);
gdjs.copyArray(gdjs.NIVEAU_452Code.GDRootObjects1_1final, gdjs.NIVEAU_452Code.GDRootObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_452Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_452Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_452Code.GDRootObjects1[k] = gdjs.NIVEAU_452Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_452Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14799684);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_452Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_452Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_452Code.GDRootObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/bruit-de-pas-dans-l_herbe.wav", 2, false, 100, 1.5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_452Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_452Code.GDRootObjects1.length;i<l;++i) {
    if ( !(gdjs.NIVEAU_452Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_452Code.GDRootObjects1[k] = gdjs.NIVEAU_452Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_452Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_452Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_452Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_452Code.GDRootObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.NIVEAU_452Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_452Code.GDRootObjects1[i].setAnimationFrame(1);
}
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.NIVEAU_452Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_452Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDRootObjects1Objects, gdjs.NIVEAU_452Code.mapOfGDgdjs_9546NIVEAU_9595452Code_9546GDFlagObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14802636);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Effect"), gdjs.NIVEAU_452Code.GDEffectObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "CHRONO-TEMPS"));
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "CHRONO-TEMPS");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("NIVEAU-3");
}
{for(var i = 0, len = gdjs.NIVEAU_452Code.GDEffectObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_452Code.GDEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.6, "Circular", "Forward", 0, null);
}
}
{gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "NIVEAU-ACTUEL", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}

{ //Subevents
gdjs.NIVEAU_452Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14805204);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_452Code.GDRootObjects1);
{for(var i = 0, len = gdjs.NIVEAU_452Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_452Code.GDRootObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_452Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_452Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_452Code.GDRootObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_452Code.GDRootObjects1[k] = gdjs.NIVEAU_452Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_452Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(8227588);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_jump-high.ogg", false, 100, 1);
}
}

}


};

gdjs.NIVEAU_452Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NIVEAU_452Code.GDBackgroundObjects1.length = 0;
gdjs.NIVEAU_452Code.GDBackgroundObjects2.length = 0;
gdjs.NIVEAU_452Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_452Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_452Code.GDPlatform2Objects1.length = 0;
gdjs.NIVEAU_452Code.GDPlatform2Objects2.length = 0;
gdjs.NIVEAU_452Code.GDNiveauObjects1.length = 0;
gdjs.NIVEAU_452Code.GDNiveauObjects2.length = 0;
gdjs.NIVEAU_452Code.GDLAVAObjects1.length = 0;
gdjs.NIVEAU_452Code.GDLAVAObjects2.length = 0;
gdjs.NIVEAU_452Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_452Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_452Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_452Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_452Code.GDTextObjects1.length = 0;
gdjs.NIVEAU_452Code.GDTextObjects2.length = 0;
gdjs.NIVEAU_452Code.GDFl_95234cheObjects1.length = 0;
gdjs.NIVEAU_452Code.GDFl_95234cheObjects2.length = 0;
gdjs.NIVEAU_452Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_452Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_452Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_452Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_452Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_452Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_452Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_452Code.GDPlatformObjects2.length = 0;

gdjs.NIVEAU_452Code.eventsList2(runtimeScene);
gdjs.NIVEAU_452Code.GDBackgroundObjects1.length = 0;
gdjs.NIVEAU_452Code.GDBackgroundObjects2.length = 0;
gdjs.NIVEAU_452Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_452Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_452Code.GDPlatform2Objects1.length = 0;
gdjs.NIVEAU_452Code.GDPlatform2Objects2.length = 0;
gdjs.NIVEAU_452Code.GDNiveauObjects1.length = 0;
gdjs.NIVEAU_452Code.GDNiveauObjects2.length = 0;
gdjs.NIVEAU_452Code.GDLAVAObjects1.length = 0;
gdjs.NIVEAU_452Code.GDLAVAObjects2.length = 0;
gdjs.NIVEAU_452Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_452Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_452Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_452Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_452Code.GDTextObjects1.length = 0;
gdjs.NIVEAU_452Code.GDTextObjects2.length = 0;
gdjs.NIVEAU_452Code.GDFl_95234cheObjects1.length = 0;
gdjs.NIVEAU_452Code.GDFl_95234cheObjects2.length = 0;
gdjs.NIVEAU_452Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_452Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_452Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_452Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_452Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_452Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_452Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_452Code.GDPlatformObjects2.length = 0;


return;

}

gdjs['NIVEAU_452Code'] = gdjs.NIVEAU_452Code;
