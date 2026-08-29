gdjs.NIVEAU_456Code = {};
gdjs.NIVEAU_456Code.localVariables = [];
gdjs.NIVEAU_456Code.idToCallbackMap = new Map();
gdjs.NIVEAU_456Code.GDPlatformLongObjects1_1final = [];

gdjs.NIVEAU_456Code.GDPlatformObjects1_1final = [];

gdjs.NIVEAU_456Code.GDRootObjects1_1final = [];

gdjs.NIVEAU_456Code.GDFlagObjects1= [];
gdjs.NIVEAU_456Code.GDFlagObjects2= [];
gdjs.NIVEAU_456Code.GDEffectObjects1= [];
gdjs.NIVEAU_456Code.GDEffectObjects2= [];
gdjs.NIVEAU_456Code.GDLAVAObjects1= [];
gdjs.NIVEAU_456Code.GDLAVAObjects2= [];
gdjs.NIVEAU_456Code.GDNIVEAUObjects1= [];
gdjs.NIVEAU_456Code.GDNIVEAUObjects2= [];
gdjs.NIVEAU_456Code.GDRootObjects1= [];
gdjs.NIVEAU_456Code.GDRootObjects2= [];
gdjs.NIVEAU_456Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.NIVEAU_456Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.NIVEAU_456Code.GDPlatformLongObjects1= [];
gdjs.NIVEAU_456Code.GDPlatformLongObjects2= [];
gdjs.NIVEAU_456Code.GDPlatformObjects1= [];
gdjs.NIVEAU_456Code.GDPlatformObjects2= [];


gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_456Code.GDRootObjects1});
gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDLAVAObjects1Objects = Hashtable.newFrom({"LAVA": gdjs.NIVEAU_456Code.GDLAVAObjects1});
gdjs.NIVEAU_456Code.asyncCallback15189892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NIVEAU_456Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NIVEAU-6", false);
}
gdjs.NIVEAU_456Code.localVariables.length = 0;
}
gdjs.NIVEAU_456Code.idToCallbackMap.set(15189892, gdjs.NIVEAU_456Code.asyncCallback15189892);
gdjs.NIVEAU_456Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NIVEAU_456Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.NIVEAU_456Code.asyncCallback15189892(runtimeScene, asyncObjectsList)), 15189892, asyncObjectsList);
}
}

}


};gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDRootObjects2Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_456Code.GDRootObjects2});
gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDPlatformLongObjects2Objects = Hashtable.newFrom({"PlatformLong": gdjs.NIVEAU_456Code.GDPlatformLongObjects2});
gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDRootObjects2Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_456Code.GDRootObjects2});
gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDPlatformObjects2Objects = Hashtable.newFrom({"Platform": gdjs.NIVEAU_456Code.GDPlatformObjects2});
gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_456Code.GDRootObjects1});
gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDFlagObjects1Objects = Hashtable.newFrom({"Flag": gdjs.NIVEAU_456Code.GDFlagObjects1});
gdjs.NIVEAU_456Code.asyncCallback15197788 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NIVEAU_456Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fin_NIVEAUX", false);
}
gdjs.NIVEAU_456Code.localVariables.length = 0;
}
gdjs.NIVEAU_456Code.idToCallbackMap.set(15197788, gdjs.NIVEAU_456Code.asyncCallback15197788);
gdjs.NIVEAU_456Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NIVEAU_456Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.NIVEAU_456Code.asyncCallback15197788(runtimeScene, asyncObjectsList)), 15197788, asyncObjectsList);
}
}

}


};gdjs.NIVEAU_456Code.eventsList2 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_456Code.GDRootObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NIVEAU_456Code.GDRootObjects1.length !== 0 ? gdjs.NIVEAU_456Code.GDRootObjects1[0] : null), false, "", 5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("LAVA"), gdjs.NIVEAU_456Code.GDLAVAObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_456Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDRootObjects1Objects, gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDLAVAObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15189428);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/dead.wav", 1, false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}

{ //Subevents
gdjs.NIVEAU_456Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_456Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_456Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_456Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_456Code.GDRootObjects1[k] = gdjs.NIVEAU_456Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_456Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_456Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_456Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_456Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_GAUCHE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_456Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_456Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_456Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_456Code.GDRootObjects1[k] = gdjs.NIVEAU_456Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_456Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_456Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_456Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_456Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_DROITE");
}
}
}

}


{

gdjs.NIVEAU_456Code.GDPlatformObjects1.length = 0;

gdjs.NIVEAU_456Code.GDPlatformLongObjects1.length = 0;

gdjs.NIVEAU_456Code.GDRootObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.NIVEAU_456Code.GDPlatformObjects1_1final.length = 0;
gdjs.NIVEAU_456Code.GDPlatformLongObjects1_1final.length = 0;
gdjs.NIVEAU_456Code.GDRootObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("PlatformLong"), gdjs.NIVEAU_456Code.GDPlatformLongObjects2);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_456Code.GDRootObjects2);
isConditionTrue_1 = gdjs.evtTools.platform.isOnPlatform(gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDRootObjects2Objects, "PlatformerObject", gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDPlatformLongObjects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.NIVEAU_456Code.GDPlatformLongObjects2.length; j < jLen ; ++j) {
        if ( gdjs.NIVEAU_456Code.GDPlatformLongObjects1_1final.indexOf(gdjs.NIVEAU_456Code.GDPlatformLongObjects2[j]) === -1 )
            gdjs.NIVEAU_456Code.GDPlatformLongObjects1_1final.push(gdjs.NIVEAU_456Code.GDPlatformLongObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.NIVEAU_456Code.GDRootObjects2.length; j < jLen ; ++j) {
        if ( gdjs.NIVEAU_456Code.GDRootObjects1_1final.indexOf(gdjs.NIVEAU_456Code.GDRootObjects2[j]) === -1 )
            gdjs.NIVEAU_456Code.GDRootObjects1_1final.push(gdjs.NIVEAU_456Code.GDRootObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Platform"), gdjs.NIVEAU_456Code.GDPlatformObjects2);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_456Code.GDRootObjects2);
isConditionTrue_1 = gdjs.evtTools.platform.isOnPlatform(gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDRootObjects2Objects, "PlatformerObject", gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDPlatformObjects2Objects, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.NIVEAU_456Code.GDPlatformObjects2.length; j < jLen ; ++j) {
        if ( gdjs.NIVEAU_456Code.GDPlatformObjects1_1final.indexOf(gdjs.NIVEAU_456Code.GDPlatformObjects2[j]) === -1 )
            gdjs.NIVEAU_456Code.GDPlatformObjects1_1final.push(gdjs.NIVEAU_456Code.GDPlatformObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.NIVEAU_456Code.GDRootObjects2.length; j < jLen ; ++j) {
        if ( gdjs.NIVEAU_456Code.GDRootObjects1_1final.indexOf(gdjs.NIVEAU_456Code.GDRootObjects2[j]) === -1 )
            gdjs.NIVEAU_456Code.GDRootObjects1_1final.push(gdjs.NIVEAU_456Code.GDRootObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.NIVEAU_456Code.GDPlatformObjects1_1final, gdjs.NIVEAU_456Code.GDPlatformObjects1);
gdjs.copyArray(gdjs.NIVEAU_456Code.GDPlatformLongObjects1_1final, gdjs.NIVEAU_456Code.GDPlatformLongObjects1);
gdjs.copyArray(gdjs.NIVEAU_456Code.GDRootObjects1_1final, gdjs.NIVEAU_456Code.GDRootObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_456Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_456Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_456Code.GDRootObjects1[k] = gdjs.NIVEAU_456Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_456Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15193140);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_456Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_456Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_456Code.GDRootObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/bruit-de-pas-dans-l_herbe.wav", 2, false, 100, 1.5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_456Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_456Code.GDRootObjects1.length;i<l;++i) {
    if ( !(gdjs.NIVEAU_456Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_456Code.GDRootObjects1[k] = gdjs.NIVEAU_456Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_456Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_456Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_456Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_456Code.GDRootObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.NIVEAU_456Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_456Code.GDRootObjects1[i].setAnimationFrame(1);
}
}
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.NIVEAU_456Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_456Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDRootObjects1Objects, gdjs.NIVEAU_456Code.mapOfGDgdjs_9546NIVEAU_9595456Code_9546GDFlagObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15195932);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Effect"), gdjs.NIVEAU_456Code.GDEffectObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "CHRONO-TEMPS"));
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "CHRONO-TEMPS");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("NIVEAU-7");
}
{for(var i = 0, len = gdjs.NIVEAU_456Code.GDEffectObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_456Code.GDEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.6, "Circular", "Forward", 0, null);
}
}
{gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "NIVEAU-ACTUEL", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}

{ //Subevents
gdjs.NIVEAU_456Code.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_456Code.GDRootObjects1);
{for(var i = 0, len = gdjs.NIVEAU_456Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_456Code.GDRootObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_456Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_456Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_456Code.GDRootObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_456Code.GDRootObjects1[k] = gdjs.NIVEAU_456Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_456Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15199244);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/sfx_jump-high.ogg", false, 100, 1);
}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.NIVEAU_456Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NIVEAU_456Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_456Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_456Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_456Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_456Code.GDLAVAObjects1.length = 0;
gdjs.NIVEAU_456Code.GDLAVAObjects2.length = 0;
gdjs.NIVEAU_456Code.GDNIVEAUObjects1.length = 0;
gdjs.NIVEAU_456Code.GDNIVEAUObjects2.length = 0;
gdjs.NIVEAU_456Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_456Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_456Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_456Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_456Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_456Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_456Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_456Code.GDPlatformObjects2.length = 0;

gdjs.NIVEAU_456Code.eventsList2(runtimeScene);
gdjs.NIVEAU_456Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_456Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_456Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_456Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_456Code.GDLAVAObjects1.length = 0;
gdjs.NIVEAU_456Code.GDLAVAObjects2.length = 0;
gdjs.NIVEAU_456Code.GDNIVEAUObjects1.length = 0;
gdjs.NIVEAU_456Code.GDNIVEAUObjects2.length = 0;
gdjs.NIVEAU_456Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_456Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_456Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_456Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_456Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_456Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_456Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_456Code.GDPlatformObjects2.length = 0;


return;

}

gdjs['NIVEAU_456Code'] = gdjs.NIVEAU_456Code;
