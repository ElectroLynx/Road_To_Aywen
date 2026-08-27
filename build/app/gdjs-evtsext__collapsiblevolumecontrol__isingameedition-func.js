
if (typeof gdjs.evtsExt__CollapsibleVolumeControl__IsInGameEdition !== "undefined") {
  gdjs.evtsExt__CollapsibleVolumeControl__IsInGameEdition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CollapsibleVolumeControl__IsInGameEdition = {};
gdjs.evtsExt__CollapsibleVolumeControl__IsInGameEdition.idToCallbackMap = new Map();


gdjs.evtsExt__CollapsibleVolumeControl__IsInGameEdition.userFunc0x11e0860 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
eventsFunctionContext.returnValue = game.isInGameEdition && game.isInGameEdition();
};
gdjs.evtsExt__CollapsibleVolumeControl__IsInGameEdition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CollapsibleVolumeControl__IsInGameEdition.userFunc0x11e0860(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__CollapsibleVolumeControl__IsInGameEdition.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CollapsibleVolumeControl"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CollapsibleVolumeControl"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CollapsibleVolumeControl__IsInGameEdition.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__CollapsibleVolumeControl__IsInGameEdition.registeredGdjsCallbacks = [];