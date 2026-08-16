gdjs.Scene_95loadingCode = {};
gdjs.Scene_95loadingCode.localVariables = [];
gdjs.Scene_95loadingCode.idToCallbackMap = new Map();
gdjs.Scene_95loadingCode.GDfondObjects1= [];
gdjs.Scene_95loadingCode.GDfondObjects2= [];
gdjs.Scene_95loadingCode.GDTextObjects1= [];
gdjs.Scene_95loadingCode.GDTextObjects2= [];
gdjs.Scene_95loadingCode.GDEffectTransitionObjects1= [];
gdjs.Scene_95loadingCode.GDEffectTransitionObjects2= [];
gdjs.Scene_95loadingCode.GDRoot2Objects1= [];
gdjs.Scene_95loadingCode.GDRoot2Objects2= [];
gdjs.Scene_95loadingCode.GDRootObjects1= [];
gdjs.Scene_95loadingCode.GDRootObjects2= [];
gdjs.Scene_95loadingCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.Scene_95loadingCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.Scene_95loadingCode.GDPlatformLongObjects1= [];
gdjs.Scene_95loadingCode.GDPlatformLongObjects2= [];
gdjs.Scene_95loadingCode.GDPlatformObjects1= [];
gdjs.Scene_95loadingCode.GDPlatformObjects2= [];


gdjs.Scene_95loadingCode.asyncCallback14600508 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Scene_95loadingCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), false);
}
gdjs.Scene_95loadingCode.localVariables.length = 0;
}
gdjs.Scene_95loadingCode.idToCallbackMap.set(14600508, gdjs.Scene_95loadingCode.asyncCallback14600508);
gdjs.Scene_95loadingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Scene_95loadingCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.6), (runtimeScene) => (gdjs.Scene_95loadingCode.asyncCallback14600508(runtimeScene, asyncObjectsList)), 14600508, asyncObjectsList);
}
}

}


};gdjs.Scene_95loadingCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EffectTransition"), gdjs.Scene_95loadingCode.GDEffectTransitionObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "TEMPS-CHARGEMENT");
}
{for(var i = 0, len = gdjs.Scene_95loadingCode.GDEffectTransitionObjects1.length ;i < len;++i) {
    gdjs.Scene_95loadingCode.GDEffectTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("212;109;57", 0.4, "Circular", "Backward", 0, null);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "TEMPS-CHARGEMENT") > gdjs.randomInRange(2, 10);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("EffectTransition"), gdjs.Scene_95loadingCode.GDEffectTransitionObjects1);
{gdjs.evtTools.runtimeScene.removeTimer(runtimeScene, "TEMPS-CHARGEMENT");
}
{for(var i = 0, len = gdjs.Scene_95loadingCode.GDEffectTransitionObjects1.length ;i < len;++i) {
    gdjs.Scene_95loadingCode.GDEffectTransitionObjects1[i].getBehavior("FlashTransitionPainter").PaintEffect("212; 109; 57", 0.4, "Circular", "Forward", 0, null);
}
}

{ //Subevents
gdjs.Scene_95loadingCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.Scene_95loadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene_95loadingCode.GDfondObjects1.length = 0;
gdjs.Scene_95loadingCode.GDfondObjects2.length = 0;
gdjs.Scene_95loadingCode.GDTextObjects1.length = 0;
gdjs.Scene_95loadingCode.GDTextObjects2.length = 0;
gdjs.Scene_95loadingCode.GDEffectTransitionObjects1.length = 0;
gdjs.Scene_95loadingCode.GDEffectTransitionObjects2.length = 0;
gdjs.Scene_95loadingCode.GDRoot2Objects1.length = 0;
gdjs.Scene_95loadingCode.GDRoot2Objects2.length = 0;
gdjs.Scene_95loadingCode.GDRootObjects1.length = 0;
gdjs.Scene_95loadingCode.GDRootObjects2.length = 0;
gdjs.Scene_95loadingCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.Scene_95loadingCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.Scene_95loadingCode.GDPlatformLongObjects1.length = 0;
gdjs.Scene_95loadingCode.GDPlatformLongObjects2.length = 0;
gdjs.Scene_95loadingCode.GDPlatformObjects1.length = 0;
gdjs.Scene_95loadingCode.GDPlatformObjects2.length = 0;

gdjs.Scene_95loadingCode.eventsList1(runtimeScene);
gdjs.Scene_95loadingCode.GDfondObjects1.length = 0;
gdjs.Scene_95loadingCode.GDfondObjects2.length = 0;
gdjs.Scene_95loadingCode.GDTextObjects1.length = 0;
gdjs.Scene_95loadingCode.GDTextObjects2.length = 0;
gdjs.Scene_95loadingCode.GDEffectTransitionObjects1.length = 0;
gdjs.Scene_95loadingCode.GDEffectTransitionObjects2.length = 0;
gdjs.Scene_95loadingCode.GDRoot2Objects1.length = 0;
gdjs.Scene_95loadingCode.GDRoot2Objects2.length = 0;
gdjs.Scene_95loadingCode.GDRootObjects1.length = 0;
gdjs.Scene_95loadingCode.GDRootObjects2.length = 0;
gdjs.Scene_95loadingCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.Scene_95loadingCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.Scene_95loadingCode.GDPlatformLongObjects1.length = 0;
gdjs.Scene_95loadingCode.GDPlatformLongObjects2.length = 0;
gdjs.Scene_95loadingCode.GDPlatformObjects1.length = 0;
gdjs.Scene_95loadingCode.GDPlatformObjects2.length = 0;


return;

}

gdjs['Scene_95loadingCode'] = gdjs.Scene_95loadingCode;
