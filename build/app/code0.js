gdjs.INTROCode = {};
gdjs.INTROCode.localVariables = [];
gdjs.INTROCode.idToCallbackMap = new Map();
gdjs.INTROCode.GDFondObjects1= [];
gdjs.INTROCode.GDFondObjects2= [];
gdjs.INTROCode.GDTextObjects1= [];
gdjs.INTROCode.GDTextObjects2= [];
gdjs.INTROCode.GDFond_9595textObjects1= [];
gdjs.INTROCode.GDFond_9595textObjects2= [];
gdjs.INTROCode.GDContinueObjects1= [];
gdjs.INTROCode.GDContinueObjects2= [];
gdjs.INTROCode.GDEffectObjects1= [];
gdjs.INTROCode.GDEffectObjects2= [];
gdjs.INTROCode.GDRootObjects1= [];
gdjs.INTROCode.GDRootObjects2= [];
gdjs.INTROCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.INTROCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.INTROCode.GDPlatformLongObjects1= [];
gdjs.INTROCode.GDPlatformLongObjects2= [];
gdjs.INTROCode.GDPlatformObjects1= [];
gdjs.INTROCode.GDPlatformObjects2= [];


gdjs.INTROCode.asyncCallback14840796 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.INTROCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene_loading", false);
}
{gdjs.evtTools.storage.writeNumberInJSONFile("VIEW-INTRO", "INTRO", 1);
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("MENU");
}
gdjs.INTROCode.localVariables.length = 0;
}
gdjs.INTROCode.idToCallbackMap.set(14840796, gdjs.INTROCode.asyncCallback14840796);
gdjs.INTROCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.INTROCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.INTROCode.asyncCallback14840796(runtimeScene, asyncObjectsList)), 14840796, asyncObjectsList);
}
}

}


};gdjs.INTROCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fond"), gdjs.INTROCode.GDFondObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.INTROCode.GDTextObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}
{for(var i = 0, len = gdjs.INTROCode.GDFondObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDFondObjects1[i].setTexture("assets/images/aywen_setup_intro.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.INTROCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTextObjects1[i].getBehavior("Text").setText("Aywen - " + "Allez c'est parti pour une nouvelle vidéo !");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "c");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14831660);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.INTROCode.GDTextObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTextObjects1[i].getBehavior("Text").setText("Root - " + "Oui mais avant tu me fait prendre l'air par la fenêtre ?");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.INTROCode.GDTextObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTextObjects1[i].getBehavior("Text").setText("Aywen - " + "D'accord. On va sur le balcon ?");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fond"), gdjs.INTROCode.GDFondObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.INTROCode.GDTextObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDFondObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDFondObjects1[i].setTexture("assets/images/root_barriere.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.INTROCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTextObjects1[i].getBehavior("Text").setText("Root - " + "Il y a beaucoup de vents n'est ce pas ?");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.INTROCode.GDTextObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTextObjects1[i].getBehavior("Text").setText("Root - " + "Aywen ?");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.INTROCode.GDTextObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTextObjects1[i].getBehavior("Text").setText("Root - " + "Tu es où Aywen ?");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.INTROCode.GDTextObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTextObjects1[i].getBehavior("Text").setText("Root - " + "Il m'a oublié.");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 7);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.INTROCode.GDTextObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTextObjects1[i].getBehavior("Text").setText("Root - " + "En plus j'ai froid et il y a du vent");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 8);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fond"), gdjs.INTROCode.GDFondObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fond_text"), gdjs.INTROCode.GDFond_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.INTROCode.GDTextObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDFondObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDFondObjects1[i].setTexture("assets/images/root_tombe.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.INTROCode.GDFond_9595textObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDFond_9595textObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.INTROCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTextObjects1[i].hide();
}
}
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets/audio/chute.wav", 5, false, 100, 1.5);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 9);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fond"), gdjs.INTROCode.GDFondObjects1);
gdjs.copyArray(runtimeScene.getObjects("Fond_text"), gdjs.INTROCode.GDFond_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("Text"), gdjs.INTROCode.GDTextObjects1);
{for(var i = 0, len = gdjs.INTROCode.GDFondObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDFondObjects1[i].setTexture("assets/images/root_trotoir.png", runtimeScene);
}
}
{for(var i = 0, len = gdjs.INTROCode.GDFond_9595textObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDFond_9595textObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.INTROCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTextObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.INTROCode.GDTextObjects1.length ;i < len;++i) {
    gdjs.INTROCode.GDTextObjects1[i].getBehavior("Text").setText("Root - " + "Aywen m'a oublié mais je vais me venger ...");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 10);
}
if (isConditionTrue_0) {
{gdjs.saveState.createGameSaveStateInStorage(runtimeScene, "VIEW-INTRO", "1");
}

{ //Subevents
gdjs.INTROCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.INTROCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.INTROCode.GDFondObjects1.length = 0;
gdjs.INTROCode.GDFondObjects2.length = 0;
gdjs.INTROCode.GDTextObjects1.length = 0;
gdjs.INTROCode.GDTextObjects2.length = 0;
gdjs.INTROCode.GDFond_9595textObjects1.length = 0;
gdjs.INTROCode.GDFond_9595textObjects2.length = 0;
gdjs.INTROCode.GDContinueObjects1.length = 0;
gdjs.INTROCode.GDContinueObjects2.length = 0;
gdjs.INTROCode.GDEffectObjects1.length = 0;
gdjs.INTROCode.GDEffectObjects2.length = 0;
gdjs.INTROCode.GDRootObjects1.length = 0;
gdjs.INTROCode.GDRootObjects2.length = 0;
gdjs.INTROCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.INTROCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.INTROCode.GDPlatformLongObjects1.length = 0;
gdjs.INTROCode.GDPlatformLongObjects2.length = 0;
gdjs.INTROCode.GDPlatformObjects1.length = 0;
gdjs.INTROCode.GDPlatformObjects2.length = 0;

gdjs.INTROCode.eventsList1(runtimeScene);
gdjs.INTROCode.GDFondObjects1.length = 0;
gdjs.INTROCode.GDFondObjects2.length = 0;
gdjs.INTROCode.GDTextObjects1.length = 0;
gdjs.INTROCode.GDTextObjects2.length = 0;
gdjs.INTROCode.GDFond_9595textObjects1.length = 0;
gdjs.INTROCode.GDFond_9595textObjects2.length = 0;
gdjs.INTROCode.GDContinueObjects1.length = 0;
gdjs.INTROCode.GDContinueObjects2.length = 0;
gdjs.INTROCode.GDEffectObjects1.length = 0;
gdjs.INTROCode.GDEffectObjects2.length = 0;
gdjs.INTROCode.GDRootObjects1.length = 0;
gdjs.INTROCode.GDRootObjects2.length = 0;
gdjs.INTROCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.INTROCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.INTROCode.GDPlatformLongObjects1.length = 0;
gdjs.INTROCode.GDPlatformLongObjects2.length = 0;
gdjs.INTROCode.GDPlatformObjects1.length = 0;
gdjs.INTROCode.GDPlatformObjects2.length = 0;


return;

}

gdjs['INTROCode'] = gdjs.INTROCode;
