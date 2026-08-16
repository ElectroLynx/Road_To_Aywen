gdjs.RickrollCode = {};
gdjs.RickrollCode.localVariables = [];
gdjs.RickrollCode.idToCallbackMap = new Map();
gdjs.RickrollCode.GDRickrollObjects1= [];
gdjs.RickrollCode.GDRickrollObjects2= [];
gdjs.RickrollCode.GDTextObjects1= [];
gdjs.RickrollCode.GDTextObjects2= [];
gdjs.RickrollCode.GDRootObjects1= [];
gdjs.RickrollCode.GDRootObjects2= [];
gdjs.RickrollCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1= [];
gdjs.RickrollCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2= [];
gdjs.RickrollCode.GDPlatformLongObjects1= [];
gdjs.RickrollCode.GDPlatformLongObjects2= [];
gdjs.RickrollCode.GDPlatformObjects1= [];
gdjs.RickrollCode.GDPlatformObjects2= [];


gdjs.RickrollCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rickroll"), gdjs.RickrollCode.GDRickrollObjects1);
{for(var i = 0, len = gdjs.RickrollCode.GDRickrollObjects1.length ;i < len;++i) {
    gdjs.RickrollCode.GDRickrollObjects1[i].play();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "MENU", false);
}
}

}


};

gdjs.RickrollCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RickrollCode.GDRickrollObjects1.length = 0;
gdjs.RickrollCode.GDRickrollObjects2.length = 0;
gdjs.RickrollCode.GDTextObjects1.length = 0;
gdjs.RickrollCode.GDTextObjects2.length = 0;
gdjs.RickrollCode.GDRootObjects1.length = 0;
gdjs.RickrollCode.GDRootObjects2.length = 0;
gdjs.RickrollCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.RickrollCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.RickrollCode.GDPlatformLongObjects1.length = 0;
gdjs.RickrollCode.GDPlatformLongObjects2.length = 0;
gdjs.RickrollCode.GDPlatformObjects1.length = 0;
gdjs.RickrollCode.GDPlatformObjects2.length = 0;

gdjs.RickrollCode.eventsList0(runtimeScene);
gdjs.RickrollCode.GDRickrollObjects1.length = 0;
gdjs.RickrollCode.GDRickrollObjects2.length = 0;
gdjs.RickrollCode.GDTextObjects1.length = 0;
gdjs.RickrollCode.GDTextObjects2.length = 0;
gdjs.RickrollCode.GDRootObjects1.length = 0;
gdjs.RickrollCode.GDRootObjects2.length = 0;
gdjs.RickrollCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects1.length = 0;
gdjs.RickrollCode.GDMicode_9595Aywen_9595HugoD_95233crypte2Objects2.length = 0;
gdjs.RickrollCode.GDPlatformLongObjects1.length = 0;
gdjs.RickrollCode.GDPlatformLongObjects2.length = 0;
gdjs.RickrollCode.GDPlatformObjects1.length = 0;
gdjs.RickrollCode.GDPlatformObjects2.length = 0;


return;

}

gdjs['RickrollCode'] = gdjs.RickrollCode;
