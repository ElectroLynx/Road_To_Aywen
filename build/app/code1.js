gdjs.MENUCode = {};
gdjs.MENUCode.localVariables = [];
gdjs.MENUCode.idToCallbackMap = new Map();
gdjs.MENUCode.GDTitreObjects1= [];
gdjs.MENUCode.GDTitreObjects2= [];
gdjs.MENUCode.GDTitre2Objects1= [];
gdjs.MENUCode.GDTitre2Objects2= [];
gdjs.MENUCode.GDJouerObjects1= [];
gdjs.MENUCode.GDJouerObjects2= [];
gdjs.MENUCode.GDVolumeSettingsObjects1= [];
gdjs.MENUCode.GDVolumeSettingsObjects2= [];
gdjs.MENUCode.GDQuitterObjects1= [];
gdjs.MENUCode.GDQuitterObjects2= [];
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypteObjects1= [];
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypteObjects2= [];
gdjs.MENUCode.GDFondObjects1= [];
gdjs.MENUCode.GDFondObjects2= [];
gdjs.MENUCode.GDRoot2Objects1= [];
gdjs.MENUCode.GDRoot2Objects2= [];
gdjs.MENUCode.GDRootObjects1= [];
gdjs.MENUCode.GDRootObjects2= [];
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.MENUCode.GDPlatformLongObjects1= [];
gdjs.MENUCode.GDPlatformLongObjects2= [];
gdjs.MENUCode.GDPlatformObjects1= [];
gdjs.MENUCode.GDPlatformObjects2= [];


gdjs.MENUCode.asyncCallback14869988 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MENUCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene_loading", true);
}
gdjs.MENUCode.localVariables.length = 0;
}
gdjs.MENUCode.idToCallbackMap.set(14869988, gdjs.MENUCode.asyncCallback14869988);
gdjs.MENUCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MENUCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.29), (runtimeScene) => (gdjs.MENUCode.asyncCallback14869988(runtimeScene, asyncObjectsList)), 14869988, asyncObjectsList);
}
}

}


};gdjs.MENUCode.asyncCallback14872900 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.MENUCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene_loading", true);
}
gdjs.MENUCode.localVariables.length = 0;
}
gdjs.MENUCode.idToCallbackMap.set(14872900, gdjs.MENUCode.asyncCallback14872900);
gdjs.MENUCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.MENUCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.29), (runtimeScene) => (gdjs.MENUCode.asyncCallback14872900(runtimeScene, asyncObjectsList)), 14872900, asyncObjectsList);
}
}

}


};gdjs.MENUCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Quitter"), gdjs.MENUCode.GDQuitterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDQuitterObjects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDQuitterObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDQuitterObjects1[k] = gdjs.MENUCode.GDQuitterObjects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDQuitterObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/dragon_studio_button_press_382713.wav", 2, false, 100, 0.8);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rickroll", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 2);
}
{gdjs.evtTools.sound.preloadSound(runtimeScene, "assets/audio/dragon_studio_button_press_382713.wav");
}
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 2, 100);
}
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("NON-DEFINI");
}
{gdjs.evtTools.storage.readNumberFromJSONFile("VIEW-INTRO", "INTRO", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(0));
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets/audio/u_vdwj1c20kz_game_background_sound_3423362.mp3", 6, true, 100, 1);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jouer"), gdjs.MENUCode.GDJouerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDJouerObjects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDJouerObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDJouerObjects1[k] = gdjs.MENUCode.GDJouerObjects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDJouerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopMusicOnChannel(runtimeScene, 6);
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/dragon_studio_button_press_382713.wav", 2, false, 100, 0.8);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("NIVEAU-1");
}

{ //Subevents
gdjs.MENUCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Rickroll", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root2"), gdjs.MENUCode.GDRoot2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDRoot2Objects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDRoot2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDRoot2Objects1[k] = gdjs.MENUCode.GDRoot2Objects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDRoot2Objects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "INTRO", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Jouer"), gdjs.MENUCode.GDJouerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDJouerObjects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDJouerObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDJouerObjects1[k] = gdjs.MENUCode.GDJouerObjects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDJouerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() != 1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/dragon_studio_button_press_382713.wav", 2, false, 100, 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("INTRO");
}

{ //Subevents
gdjs.MENUCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root2"), gdjs.MENUCode.GDRoot2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDRoot2Objects1.length;i<l;++i) {
    if ( gdjs.MENUCode.GDRoot2Objects1[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDRoot2Objects1[k] = gdjs.MENUCode.GDRoot2Objects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDRoot2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.MENUCode.GDRoot2Objects1 */
{for(var i = 0, len = gdjs.MENUCode.GDRoot2Objects1.length ;i < len;++i) {
    gdjs.MENUCode.GDRoot2Objects1[i].getBehavior("Animation").pauseAnimation();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Root2"), gdjs.MENUCode.GDRoot2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MENUCode.GDRoot2Objects1.length;i<l;++i) {
    if ( !(gdjs.MENUCode.GDRoot2Objects1[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.MENUCode.GDRoot2Objects1[k] = gdjs.MENUCode.GDRoot2Objects1[i];
        ++k;
    }
}
gdjs.MENUCode.GDRoot2Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14874524);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.MENUCode.GDRoot2Objects1 */
{for(var i = 0, len = gdjs.MENUCode.GDRoot2Objects1.length ;i < len;++i) {
    gdjs.MENUCode.GDRoot2Objects1[i].getBehavior("Animation").resumeAnimation();
}
}
}

}


};

gdjs.MENUCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MENUCode.GDTitreObjects1.length = 0;
gdjs.MENUCode.GDTitreObjects2.length = 0;
gdjs.MENUCode.GDTitre2Objects1.length = 0;
gdjs.MENUCode.GDTitre2Objects2.length = 0;
gdjs.MENUCode.GDJouerObjects1.length = 0;
gdjs.MENUCode.GDJouerObjects2.length = 0;
gdjs.MENUCode.GDVolumeSettingsObjects1.length = 0;
gdjs.MENUCode.GDVolumeSettingsObjects2.length = 0;
gdjs.MENUCode.GDQuitterObjects1.length = 0;
gdjs.MENUCode.GDQuitterObjects2.length = 0;
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypteObjects1.length = 0;
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypteObjects2.length = 0;
gdjs.MENUCode.GDFondObjects1.length = 0;
gdjs.MENUCode.GDFondObjects2.length = 0;
gdjs.MENUCode.GDRoot2Objects1.length = 0;
gdjs.MENUCode.GDRoot2Objects2.length = 0;
gdjs.MENUCode.GDRootObjects1.length = 0;
gdjs.MENUCode.GDRootObjects2.length = 0;
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.MENUCode.GDPlatformLongObjects1.length = 0;
gdjs.MENUCode.GDPlatformLongObjects2.length = 0;
gdjs.MENUCode.GDPlatformObjects1.length = 0;
gdjs.MENUCode.GDPlatformObjects2.length = 0;

gdjs.MENUCode.eventsList2(runtimeScene);
gdjs.MENUCode.GDTitreObjects1.length = 0;
gdjs.MENUCode.GDTitreObjects2.length = 0;
gdjs.MENUCode.GDTitre2Objects1.length = 0;
gdjs.MENUCode.GDTitre2Objects2.length = 0;
gdjs.MENUCode.GDJouerObjects1.length = 0;
gdjs.MENUCode.GDJouerObjects2.length = 0;
gdjs.MENUCode.GDVolumeSettingsObjects1.length = 0;
gdjs.MENUCode.GDVolumeSettingsObjects2.length = 0;
gdjs.MENUCode.GDQuitterObjects1.length = 0;
gdjs.MENUCode.GDQuitterObjects2.length = 0;
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypteObjects1.length = 0;
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypteObjects2.length = 0;
gdjs.MENUCode.GDFondObjects1.length = 0;
gdjs.MENUCode.GDFondObjects2.length = 0;
gdjs.MENUCode.GDRoot2Objects1.length = 0;
gdjs.MENUCode.GDRoot2Objects2.length = 0;
gdjs.MENUCode.GDRootObjects1.length = 0;
gdjs.MENUCode.GDRootObjects2.length = 0;
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.MENUCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.MENUCode.GDPlatformLongObjects1.length = 0;
gdjs.MENUCode.GDPlatformLongObjects2.length = 0;
gdjs.MENUCode.GDPlatformObjects1.length = 0;
gdjs.MENUCode.GDPlatformObjects2.length = 0;


return;

}

gdjs['MENUCode'] = gdjs.MENUCode;
