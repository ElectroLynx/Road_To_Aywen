
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl || {};

/**
 * Object generated from Volume settings
 */
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl = class CollapsibleVolumeControl extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.IsOpen = false;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.IsOpen !== newObjectData.content.IsOpen)
      this._objectData.IsOpen = newObjectData.content.IsOpen;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getIsOpen() {
    return this._objectData.IsOpen !== undefined ? this._objectData.IsOpen : false;
  }
  _setIsOpen(newValue) {
    this._objectData.IsOpen = newValue;
  }
  _toggleIsOpen() {
    this._setIsOpen(!this._getIsOpen());
  }

  

  
}

// Methods:
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext = {};
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDOpeningButtonObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDOpeningButtonObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDBackgroundObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects2= [];


gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__CollapsibleVolumeControl__IsInGameEdition.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("MuteButton"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("VolumeSlider"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects1);
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects1[i].hide();
}
for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects1[i].hide();
}
for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDBackgroundObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("MuteButton"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("VolumeSlider"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects1);
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects1[i].Activate(false, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM"), false);
}
}
}

}


};

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDOpeningButtonObjectsList = [...runtimeScene.getObjects("OpeningButton")];
var GDOpeningButtonObjects = Hashtable.newFrom({"OpeningButton": thisGDOpeningButtonObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDVolumeSliderObjectsList = [...runtimeScene.getObjects("VolumeSlider")];
var GDVolumeSliderObjects = Hashtable.newFrom({"VolumeSlider": thisGDVolumeSliderObjectsList});
var thisGDMuteButtonObjectsList = [...runtimeScene.getObjects("MuteButton")];
var GDMuteButtonObjects = Hashtable.newFrom({"MuteButton": thisGDMuteButtonObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "OpeningButton": GDOpeningButtonObjects
, "Background": GDBackgroundObjects
, "VolumeSlider": GDVolumeSliderObjects
, "MuteButton": GDMuteButtonObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "OpeningButton": thisGDOpeningButtonObjectsList
, "Background": thisGDBackgroundObjectsList
, "VolumeSlider": thisGDVolumeSliderObjectsList
, "MuteButton": thisGDMuteButtonObjectsList
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

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDOpeningButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDOpeningButtonObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects2.length = 0;

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDOpeningButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDOpeningButtonObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDVolumeSliderObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.onCreatedContext.GDMuteButtonObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects3= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDBackgroundObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDBackgroundObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDBackgroundObjects3= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects3= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects3= [];


gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getIsOpen();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects2[i].TweenOpen(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getObjects("Object")[0]._getIsOpen();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects1[i].TweenClose(eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1, gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects2);

{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 0);
}
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("Off");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1 */
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsNumber());
}
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("On");
}
}
}

}


};gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsNumber());
}
}

}


};gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("OpeningButton"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects1[k] = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0]._setIsOpen(!eventsFunctionContext.getObjects("Object")[0]._getIsOpen())
}

{ //Subevents
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("MuteButton"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1[k] = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.variable.toggleVariableBoolean(eventsFunctionContext.globalVariablesForExtension.getFromIndex(1));
}

{ //Subevents
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("VolumeSlider"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1[i].IsBeingDragged(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1[k] = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1 */
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setNumber((( gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1.length === 0 ) ? 0 :gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1[0].Value(eventsFunctionContext)));
}

{ //Subevents
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) > 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("MuteButton"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1);
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).setBoolean(false);
}
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("On");
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.globalVariablesForExtension.getFromIndex(1).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.sound.getGlobalVolume(runtimeScene) != eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsNumber();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("VolumeSlider"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1);
{eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).setNumber(gdjs.evtTools.sound.getGlobalVolume(runtimeScene));
}
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1[i].SetValue(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsNumber(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDOpeningButtonObjectsList = [...runtimeScene.getObjects("OpeningButton")];
var GDOpeningButtonObjects = Hashtable.newFrom({"OpeningButton": thisGDOpeningButtonObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDVolumeSliderObjectsList = [...runtimeScene.getObjects("VolumeSlider")];
var GDVolumeSliderObjects = Hashtable.newFrom({"VolumeSlider": thisGDVolumeSliderObjectsList});
var thisGDMuteButtonObjectsList = [...runtimeScene.getObjects("MuteButton")];
var GDMuteButtonObjects = Hashtable.newFrom({"MuteButton": thisGDMuteButtonObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "OpeningButton": GDOpeningButtonObjects
, "Background": GDBackgroundObjects
, "VolumeSlider": GDVolumeSliderObjects
, "MuteButton": GDMuteButtonObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "OpeningButton": thisGDOpeningButtonObjectsList
, "Background": thisGDBackgroundObjectsList
, "VolumeSlider": thisGDVolumeSliderObjectsList
, "MuteButton": thisGDMuteButtonObjectsList
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

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects3.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects3.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects3.length = 0;

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDOpeningButtonObjects3.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDVolumeSliderObjects3.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPostEventsContext.GDMuteButtonObjects3.length = 0;


return;
}
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext = {};
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.idToCallbackMap = new Map();
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDObjectObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDObjectObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDOpeningButtonObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDOpeningButtonObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDBackgroundObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDBackgroundObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects2= [];


gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("MuteButton"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("VolumeSlider"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1);
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects1[i].hide(false);
}
for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDBackgroundObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenIntoView")).TweenIn(eventsFunctionContext);
}
for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenIntoView")).TweenIn(eventsFunctionContext);
}
for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDBackgroundObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenIntoView")).TweenIn(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1[i].Activate(true, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1[i].SetValue(eventsFunctionContext.globalVariablesForExtension.getFromIndex(0).getAsNumber(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM"), true);
}
}
}

}


};

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpen = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDOpeningButtonObjectsList = [...runtimeScene.getObjects("OpeningButton")];
var GDOpeningButtonObjects = Hashtable.newFrom({"OpeningButton": thisGDOpeningButtonObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDVolumeSliderObjectsList = [...runtimeScene.getObjects("VolumeSlider")];
var GDVolumeSliderObjects = Hashtable.newFrom({"VolumeSlider": thisGDVolumeSliderObjectsList});
var thisGDMuteButtonObjectsList = [...runtimeScene.getObjects("MuteButton")];
var GDMuteButtonObjects = Hashtable.newFrom({"MuteButton": thisGDMuteButtonObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "OpeningButton": GDOpeningButtonObjects
, "Background": GDBackgroundObjects
, "VolumeSlider": GDVolumeSliderObjects
, "MuteButton": GDMuteButtonObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "OpeningButton": thisGDOpeningButtonObjectsList
, "Background": thisGDBackgroundObjectsList
, "VolumeSlider": thisGDVolumeSliderObjectsList
, "MuteButton": thisGDMuteButtonObjectsList
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

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDOpeningButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDOpeningButtonObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects2.length = 0;

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDOpeningButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDOpeningButtonObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDVolumeSliderObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenOpenContext.GDMuteButtonObjects2.length = 0;


return;
}
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext = {};
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.idToCallbackMap = new Map();
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDObjectObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDObjectObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDOpeningButtonObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDOpeningButtonObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDBackgroundObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDBackgroundObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDVolumeSliderObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDVolumeSliderObjects2= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDMuteButtonObjects1= [];
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDMuteButtonObjects2= [];


gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("MuteButton"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDMuteButtonObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("VolumeSlider"), gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDVolumeSliderObjects1);
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDVolumeSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDVolumeSliderObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenIntoView")).TweenOut(eventsFunctionContext);
}
for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDMuteButtonObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenIntoView")).TweenOut(eventsFunctionContext);
}
for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDBackgroundObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TweenIntoView")).TweenOut(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDVolumeSliderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDVolumeSliderObjects1[i].Activate(false, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDMuteButtonObjects1.length ;i < len;++i) {
    gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDMuteButtonObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM"), false);
}
}
}

}


};

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenClose = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDOpeningButtonObjectsList = [...runtimeScene.getObjects("OpeningButton")];
var GDOpeningButtonObjects = Hashtable.newFrom({"OpeningButton": thisGDOpeningButtonObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var thisGDVolumeSliderObjectsList = [...runtimeScene.getObjects("VolumeSlider")];
var GDVolumeSliderObjects = Hashtable.newFrom({"VolumeSlider": thisGDVolumeSliderObjectsList});
var thisGDMuteButtonObjectsList = [...runtimeScene.getObjects("MuteButton")];
var GDMuteButtonObjects = Hashtable.newFrom({"MuteButton": thisGDMuteButtonObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "OpeningButton": GDOpeningButtonObjects
, "Background": GDBackgroundObjects
, "VolumeSlider": GDVolumeSliderObjects
, "MuteButton": GDMuteButtonObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "OpeningButton": thisGDOpeningButtonObjectsList
, "Background": thisGDBackgroundObjectsList
, "VolumeSlider": thisGDVolumeSliderObjectsList
, "MuteButton": thisGDMuteButtonObjectsList
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

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDOpeningButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDOpeningButtonObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDVolumeSliderObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDVolumeSliderObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDMuteButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDMuteButtonObjects2.length = 0;

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDOpeningButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDOpeningButtonObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDVolumeSliderObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDVolumeSliderObjects2.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDMuteButtonObjects1.length = 0;
gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.TweenCloseContext.GDMuteButtonObjects2.length = 0;


return;
}

gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("CollapsibleVolumeControl::CollapsibleVolumeControl", gdjs.evtsExt__CollapsibleVolumeControl__CollapsibleVolumeControl.CollapsibleVolumeControl);
