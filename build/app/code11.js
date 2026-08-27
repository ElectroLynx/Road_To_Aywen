gdjs.devCode = {};
gdjs.devCode.localVariables = [];
gdjs.devCode.idToCallbackMap = new Map();
gdjs.devCode.GDdevObjects1= [];
gdjs.devCode.GDdevObjects2= [];
gdjs.devCode.GDGO_9595MENUObjects1= [];
gdjs.devCode.GDGO_9595MENUObjects2= [];
gdjs.devCode.GDRootObjects1= [];
gdjs.devCode.GDRootObjects2= [];
gdjs.devCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.devCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.devCode.GDPlatformLongObjects1= [];
gdjs.devCode.GDPlatformLongObjects2= [];
gdjs.devCode.GDPlatformObjects1= [];
gdjs.devCode.GDPlatformObjects2= [];


gdjs.devCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GO_MENU"), gdjs.devCode.GDGO_9595MENUObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.devCode.GDGO_9595MENUObjects1.length;i<l;++i) {
    if ( gdjs.devCode.GDGO_9595MENUObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.devCode.GDGO_9595MENUObjects1[k] = gdjs.devCode.GDGO_9595MENUObjects1[i];
        ++k;
    }
}
gdjs.devCode.GDGO_9595MENUObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


};

gdjs.devCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.devCode.GDdevObjects1.length = 0;
gdjs.devCode.GDdevObjects2.length = 0;
gdjs.devCode.GDGO_9595MENUObjects1.length = 0;
gdjs.devCode.GDGO_9595MENUObjects2.length = 0;
gdjs.devCode.GDRootObjects1.length = 0;
gdjs.devCode.GDRootObjects2.length = 0;
gdjs.devCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.devCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.devCode.GDPlatformLongObjects1.length = 0;
gdjs.devCode.GDPlatformLongObjects2.length = 0;
gdjs.devCode.GDPlatformObjects1.length = 0;
gdjs.devCode.GDPlatformObjects2.length = 0;

gdjs.devCode.eventsList0(runtimeScene);
gdjs.devCode.GDdevObjects1.length = 0;
gdjs.devCode.GDdevObjects2.length = 0;
gdjs.devCode.GDGO_9595MENUObjects1.length = 0;
gdjs.devCode.GDGO_9595MENUObjects2.length = 0;
gdjs.devCode.GDRootObjects1.length = 0;
gdjs.devCode.GDRootObjects2.length = 0;
gdjs.devCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.devCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.devCode.GDPlatformLongObjects1.length = 0;
gdjs.devCode.GDPlatformLongObjects2.length = 0;
gdjs.devCode.GDPlatformObjects1.length = 0;
gdjs.devCode.GDPlatformObjects2.length = 0;


return;

}

gdjs['devCode'] = gdjs.devCode;
