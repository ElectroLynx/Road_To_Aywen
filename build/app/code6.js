gdjs.NIVEAU_453Code = {};
gdjs.NIVEAU_453Code.localVariables = [];
gdjs.NIVEAU_453Code.idToCallbackMap = new Map();
gdjs.NIVEAU_453Code.GDBackgroundObjects1= [];
gdjs.NIVEAU_453Code.GDBackgroundObjects2= [];
gdjs.NIVEAU_453Code.GDAPPELEZ_9595LE_9595AYWENObjects1= [];
gdjs.NIVEAU_453Code.GDAPPELEZ_9595LE_9595AYWENObjects2= [];
gdjs.NIVEAU_453Code.GDTROLLObjects1= [];
gdjs.NIVEAU_453Code.GDTROLLObjects2= [];
gdjs.NIVEAU_453Code.GDLavaObjects1= [];
gdjs.NIVEAU_453Code.GDLavaObjects2= [];
gdjs.NIVEAU_453Code.GDFlagObjects1= [];
gdjs.NIVEAU_453Code.GDFlagObjects2= [];
gdjs.NIVEAU_453Code.GDEffectObjects1= [];
gdjs.NIVEAU_453Code.GDEffectObjects2= [];
gdjs.NIVEAU_453Code.GDNiveauObjects1= [];
gdjs.NIVEAU_453Code.GDNiveauObjects2= [];
gdjs.NIVEAU_453Code.GDRootObjects1= [];
gdjs.NIVEAU_453Code.GDRootObjects2= [];
gdjs.NIVEAU_453Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.NIVEAU_453Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.NIVEAU_453Code.GDPlatformLongObjects1= [];
gdjs.NIVEAU_453Code.GDPlatformLongObjects2= [];
gdjs.NIVEAU_453Code.GDPlatformObjects1= [];
gdjs.NIVEAU_453Code.GDPlatformObjects2= [];


gdjs.NIVEAU_453Code.mapOfGDgdjs_9546NIVEAU_9595453Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_453Code.GDRootObjects1});
gdjs.NIVEAU_453Code.mapOfGDgdjs_9546NIVEAU_9595453Code_9546GDLavaObjects1Objects = Hashtable.newFrom({"Lava": gdjs.NIVEAU_453Code.GDLavaObjects1});
gdjs.NIVEAU_453Code.mapOfGDgdjs_9546NIVEAU_9595453Code_9546GDRootObjects1Objects = Hashtable.newFrom({"Root": gdjs.NIVEAU_453Code.GDRootObjects1});
gdjs.NIVEAU_453Code.mapOfGDgdjs_9546NIVEAU_9595453Code_9546GDFlagObjects1Objects = Hashtable.newFrom({"Flag": gdjs.NIVEAU_453Code.GDFlagObjects1});
gdjs.NIVEAU_453Code.asyncCallback14706356 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.NIVEAU_453Code.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Fin_NIVEAUX", false);
}
gdjs.NIVEAU_453Code.localVariables.length = 0;
}
gdjs.NIVEAU_453Code.idToCallbackMap.set(14706356, gdjs.NIVEAU_453Code.asyncCallback14706356);
gdjs.NIVEAU_453Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.NIVEAU_453Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.NIVEAU_453Code.asyncCallback14706356(runtimeScene, asyncObjectsList)), 14706356, asyncObjectsList);
}
}

}


};gdjs.NIVEAU_453Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TROLL"), gdjs.NIVEAU_453Code.GDTROLLObjects1);
{for(var i = 0, len = gdjs.NIVEAU_453Code.GDTROLLObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_453Code.GDTROLLObjects1[i].play();
}
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "CHRONO-TEMPS");
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Lava"), gdjs.NIVEAU_453Code.GDLavaObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_453Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_453Code.mapOfGDgdjs_9546NIVEAU_9595453Code_9546GDRootObjects1Objects, gdjs.NIVEAU_453Code.mapOfGDgdjs_9546NIVEAU_9595453Code_9546GDLavaObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "NIVEAU-3", false);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_453Code.GDRootObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.NIVEAU_453Code.GDRootObjects1.length !== 0 ? gdjs.NIVEAU_453Code.GDRootObjects1[0] : null), false, "", 5);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_453Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_453Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_453Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Right") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_453Code.GDRootObjects1[k] = gdjs.NIVEAU_453Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_453Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_453Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_453Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_453Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_GAUCHE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_453Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_453Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_453Code.GDRootObjects1[i].getBehavior("PlatformerObject").isUsingControl("Left") ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_453Code.GDRootObjects1[k] = gdjs.NIVEAU_453Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_453Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_453Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_453Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_453Code.GDRootObjects1[i].getBehavior("Animation").setAnimationName("Marche_DROITE");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_453Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_453Code.GDRootObjects1.length;i<l;++i) {
    if ( gdjs.NIVEAU_453Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_453Code.GDRootObjects1[k] = gdjs.NIVEAU_453Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_453Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_453Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_453Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_453Code.GDRootObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_453Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.NIVEAU_453Code.GDRootObjects1.length;i<l;++i) {
    if ( !(gdjs.NIVEAU_453Code.GDRootObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.NIVEAU_453Code.GDRootObjects1[k] = gdjs.NIVEAU_453Code.GDRootObjects1[i];
        ++k;
    }
}
gdjs.NIVEAU_453Code.GDRootObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.NIVEAU_453Code.GDRootObjects1 */
{for(var i = 0, len = gdjs.NIVEAU_453Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_453Code.GDRootObjects1[i].getBehavior("Animation").pauseAnimation();
}
}
{for(var i = 0, len = gdjs.NIVEAU_453Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_453Code.GDRootObjects1[i].setAnimationFrame(1);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flag"), gdjs.NIVEAU_453Code.GDFlagObjects1);
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_453Code.GDRootObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.NIVEAU_453Code.mapOfGDgdjs_9546NIVEAU_9595453Code_9546GDRootObjects1Objects, gdjs.NIVEAU_453Code.mapOfGDgdjs_9546NIVEAU_9595453Code_9546GDFlagObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14705012);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Effect"), gdjs.NIVEAU_453Code.GDEffectObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "CHRONO-TEMPS"));
}
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "CHRONO-TEMPS");
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("NIVEAU-4");
}
{for(var i = 0, len = gdjs.NIVEAU_453Code.GDEffectObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_453Code.GDEffectObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("0;0;0", 0.6, "Circular", "Forward", 0, null);
}
}
{gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "NIVEAU-ACTUEL", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene));
}

{ //Subevents
gdjs.NIVEAU_453Code.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(16818196);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Root"), gdjs.NIVEAU_453Code.GDRootObjects1);
{for(var i = 0, len = gdjs.NIVEAU_453Code.GDRootObjects1.length ;i < len;++i) {
    gdjs.NIVEAU_453Code.GDRootObjects1[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}
}

}


};

gdjs.NIVEAU_453Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NIVEAU_453Code.GDBackgroundObjects1.length = 0;
gdjs.NIVEAU_453Code.GDBackgroundObjects2.length = 0;
gdjs.NIVEAU_453Code.GDAPPELEZ_9595LE_9595AYWENObjects1.length = 0;
gdjs.NIVEAU_453Code.GDAPPELEZ_9595LE_9595AYWENObjects2.length = 0;
gdjs.NIVEAU_453Code.GDTROLLObjects1.length = 0;
gdjs.NIVEAU_453Code.GDTROLLObjects2.length = 0;
gdjs.NIVEAU_453Code.GDLavaObjects1.length = 0;
gdjs.NIVEAU_453Code.GDLavaObjects2.length = 0;
gdjs.NIVEAU_453Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_453Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_453Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_453Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_453Code.GDNiveauObjects1.length = 0;
gdjs.NIVEAU_453Code.GDNiveauObjects2.length = 0;
gdjs.NIVEAU_453Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_453Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_453Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_453Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_453Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_453Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_453Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_453Code.GDPlatformObjects2.length = 0;

gdjs.NIVEAU_453Code.eventsList1(runtimeScene);
gdjs.NIVEAU_453Code.GDBackgroundObjects1.length = 0;
gdjs.NIVEAU_453Code.GDBackgroundObjects2.length = 0;
gdjs.NIVEAU_453Code.GDAPPELEZ_9595LE_9595AYWENObjects1.length = 0;
gdjs.NIVEAU_453Code.GDAPPELEZ_9595LE_9595AYWENObjects2.length = 0;
gdjs.NIVEAU_453Code.GDTROLLObjects1.length = 0;
gdjs.NIVEAU_453Code.GDTROLLObjects2.length = 0;
gdjs.NIVEAU_453Code.GDLavaObjects1.length = 0;
gdjs.NIVEAU_453Code.GDLavaObjects2.length = 0;
gdjs.NIVEAU_453Code.GDFlagObjects1.length = 0;
gdjs.NIVEAU_453Code.GDFlagObjects2.length = 0;
gdjs.NIVEAU_453Code.GDEffectObjects1.length = 0;
gdjs.NIVEAU_453Code.GDEffectObjects2.length = 0;
gdjs.NIVEAU_453Code.GDNiveauObjects1.length = 0;
gdjs.NIVEAU_453Code.GDNiveauObjects2.length = 0;
gdjs.NIVEAU_453Code.GDRootObjects1.length = 0;
gdjs.NIVEAU_453Code.GDRootObjects2.length = 0;
gdjs.NIVEAU_453Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.NIVEAU_453Code.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.NIVEAU_453Code.GDPlatformLongObjects1.length = 0;
gdjs.NIVEAU_453Code.GDPlatformLongObjects2.length = 0;
gdjs.NIVEAU_453Code.GDPlatformObjects1.length = 0;
gdjs.NIVEAU_453Code.GDPlatformObjects2.length = 0;


return;

}

gdjs['NIVEAU_453Code'] = gdjs.NIVEAU_453Code;
