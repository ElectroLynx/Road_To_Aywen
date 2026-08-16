
if (typeof gdjs.evtsExt__PanelSpriteButton__IsInGameEdition !== "undefined") {
  gdjs.evtsExt__PanelSpriteButton__IsInGameEdition.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__PanelSpriteButton__IsInGameEdition = {};
gdjs.evtsExt__PanelSpriteButton__IsInGameEdition.idToCallbackMap = new Map();


gdjs.evtsExt__PanelSpriteButton__IsInGameEdition.userFunc0x11e0530 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const game = runtimeScene.getGame();
eventsFunctionContext.returnValue = game.isInGameEdition && game.isInGameEdition();
};
gdjs.evtsExt__PanelSpriteButton__IsInGameEdition.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PanelSpriteButton__IsInGameEdition.userFunc0x11e0530(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__PanelSpriteButton__IsInGameEdition.func = function(runtimeScene, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PanelSpriteButton"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PanelSpriteButton"),
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


gdjs.evtsExt__PanelSpriteButton__IsInGameEdition.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PanelSpriteButton__IsInGameEdition.registeredGdjsCallbacks = [];