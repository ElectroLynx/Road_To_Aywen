gdjs.Fin_95NIVEAUXCode = {};
gdjs.Fin_95NIVEAUXCode.localVariables = [];
gdjs.Fin_95NIVEAUXCode.idToCallbackMap = new Map();
gdjs.Fin_95NIVEAUXCode.GDFinObjects1= [];
gdjs.Fin_95NIVEAUXCode.GDFinObjects2= [];
gdjs.Fin_95NIVEAUXCode.GDTitreObjects1= [];
gdjs.Fin_95NIVEAUXCode.GDTitreObjects2= [];
gdjs.Fin_95NIVEAUXCode.GDNombreMortObjects1= [];
gdjs.Fin_95NIVEAUXCode.GDNombreMortObjects2= [];
gdjs.Fin_95NIVEAUXCode.GDTemps_9595MinuteurObjects1= [];
gdjs.Fin_95NIVEAUXCode.GDTemps_9595MinuteurObjects2= [];
gdjs.Fin_95NIVEAUXCode.GDNEXTObjects1= [];
gdjs.Fin_95NIVEAUXCode.GDNEXTObjects2= [];
gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects1= [];
gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects2= [];
gdjs.Fin_95NIVEAUXCode.GDRootObjects1= [];
gdjs.Fin_95NIVEAUXCode.GDRootObjects2= [];
gdjs.Fin_95NIVEAUXCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.Fin_95NIVEAUXCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.Fin_95NIVEAUXCode.GDPlatformLongObjects1= [];
gdjs.Fin_95NIVEAUXCode.GDPlatformLongObjects2= [];
gdjs.Fin_95NIVEAUXCode.GDPlatformObjects1= [];
gdjs.Fin_95NIVEAUXCode.GDPlatformObjects2= [];


gdjs.Fin_95NIVEAUXCode.asyncCallback16610780 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Fin_95NIVEAUXCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene_loading", false);
}
gdjs.Fin_95NIVEAUXCode.localVariables.length = 0;
}
gdjs.Fin_95NIVEAUXCode.idToCallbackMap.set(16610780, gdjs.Fin_95NIVEAUXCode.asyncCallback16610780);
gdjs.Fin_95NIVEAUXCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Fin_95NIVEAUXCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.29), (runtimeScene) => (gdjs.Fin_95NIVEAUXCode.asyncCallback16610780(runtimeScene, asyncObjectsList)), 16610780, asyncObjectsList);
}
}

}


};gdjs.Fin_95NIVEAUXCode.asyncCallback15591420 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Fin_95NIVEAUXCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene_loading", false);
}
gdjs.Fin_95NIVEAUXCode.localVariables.length = 0;
}
gdjs.Fin_95NIVEAUXCode.idToCallbackMap.set(15591420, gdjs.Fin_95NIVEAUXCode.asyncCallback15591420);
gdjs.Fin_95NIVEAUXCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Fin_95NIVEAUXCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.29), (runtimeScene) => (gdjs.Fin_95NIVEAUXCode.asyncCallback15591420(runtimeScene, asyncObjectsList)), 15591420, asyncObjectsList);
}
}

}


};gdjs.Fin_95NIVEAUXCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NombreMort"), gdjs.Fin_95NIVEAUXCode.GDNombreMortObjects1);
gdjs.copyArray(runtimeScene.getObjects("Temps_Minuteur"), gdjs.Fin_95NIVEAUXCode.GDTemps_9595MinuteurObjects1);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets/audio/Coins 9.aac", false, 100, 1);
}
{for(var i = 0, len = gdjs.Fin_95NIVEAUXCode.GDNombreMortObjects1.length ;i < len;++i) {
    gdjs.Fin_95NIVEAUXCode.GDNombreMortObjects1[i].getBehavior("Text").setText("Nombre de fois mort : " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2))));
}
}
{for(var i = 0, len = gdjs.Fin_95NIVEAUXCode.GDTemps_9595MinuteurObjects1.length ;i < len;++i) {
    gdjs.Fin_95NIVEAUXCode.GDTemps_9595MinuteurObjects1[i].getBehavior("Text").setText("Temps : " + gdjs.evtTools.common.toString(Math.round(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)))) + " secondes");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NEXT"), gdjs.Fin_95NIVEAUXCode.GDNEXTObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fin_95NIVEAUXCode.GDNEXTObjects1.length;i<l;++i) {
    if ( gdjs.Fin_95NIVEAUXCode.GDNEXTObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Fin_95NIVEAUXCode.GDNEXTObjects1[k] = gdjs.Fin_95NIVEAUXCode.GDNEXTObjects1[i];
        ++k;
    }
}
gdjs.Fin_95NIVEAUXCode.GDNEXTObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/dragon_studio_button_press_382713.wav", 2, false, 100, 0.8);
}

{ //Subevents
gdjs.Fin_95NIVEAUXCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GO_MENU"), gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects1.length;i<l;++i) {
    if ( gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects1[k] = gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects1[i];
        ++k;
    }
}
gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/dragon_studio_button_press_382713.wav", 2, false, 100, 0.8);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("MENU");
}

{ //Subevents
gdjs.Fin_95NIVEAUXCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.Fin_95NIVEAUXCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Fin_95NIVEAUXCode.GDFinObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDFinObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDTitreObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDTitreObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDNombreMortObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDNombreMortObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDTemps_9595MinuteurObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDTemps_9595MinuteurObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDNEXTObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDNEXTObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDRootObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDRootObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDPlatformLongObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDPlatformLongObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDPlatformObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDPlatformObjects2.length = 0;

gdjs.Fin_95NIVEAUXCode.eventsList2(runtimeScene);
gdjs.Fin_95NIVEAUXCode.GDFinObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDFinObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDTitreObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDTitreObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDNombreMortObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDNombreMortObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDTemps_9595MinuteurObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDTemps_9595MinuteurObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDNEXTObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDNEXTObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDGO_9595MENUObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDRootObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDRootObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDPlatformLongObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDPlatformLongObjects2.length = 0;
gdjs.Fin_95NIVEAUXCode.GDPlatformObjects1.length = 0;
gdjs.Fin_95NIVEAUXCode.GDPlatformObjects2.length = 0;


return;

}

gdjs['Fin_95NIVEAUXCode'] = gdjs.Fin_95NIVEAUXCode;
