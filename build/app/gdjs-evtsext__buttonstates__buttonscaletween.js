
gdjs.evtsExt__ButtonStates__ButtonScaleTween = gdjs.evtsExt__ButtonStates__ButtonScaleTween || {};

/**
 * Behavior generated from Button scale tween
 */
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween = class ButtonScaleTween extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Scale = behaviorData.Scale !== undefined ? behaviorData.Scale : "";
    this._behaviorData.ButtonFSM = behaviorData.ButtonFSM !== undefined ? behaviorData.ButtonFSM : "";
    this._behaviorData.Tween = behaviorData.Tween !== undefined ? behaviorData.Tween : "";
    this._behaviorData.IdleScale = behaviorData.IdleScale !== undefined ? behaviorData.IdleScale : Number("1") || 0;
    this._behaviorData.FocusedScale = behaviorData.FocusedScale !== undefined ? behaviorData.FocusedScale : Number("1") || 0;
    this._behaviorData.FadeInDuration = behaviorData.FadeInDuration !== undefined ? behaviorData.FadeInDuration : Number("0.1") || 0;
    this._behaviorData.FadeOutDuration = behaviorData.FadeOutDuration !== undefined ? behaviorData.FadeOutDuration : Number("0.2") || 0;
    this._behaviorData.PressedScale = behaviorData.PressedScale !== undefined ? behaviorData.PressedScale : Number("0.95") || 0;
    this._behaviorData.FadeInEasing = behaviorData.FadeInEasing !== undefined ? behaviorData.FadeInEasing : "easeInOutQuad";
    this._behaviorData.FadeOutEasing = behaviorData.FadeOutEasing !== undefined ? behaviorData.FadeOutEasing : "easeInOutQuad";
    this._behaviorData.PreviousState = "Idle";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Scale !== undefined)
      this._behaviorData.Scale = behaviorOverriding.Scale;
    if (behaviorOverriding.ButtonFSM !== undefined)
      this._behaviorData.ButtonFSM = behaviorOverriding.ButtonFSM;
    if (behaviorOverriding.Tween !== undefined)
      this._behaviorData.Tween = behaviorOverriding.Tween;
    if (behaviorOverriding.IdleScale !== undefined)
      this._behaviorData.IdleScale = behaviorOverriding.IdleScale;
    if (behaviorOverriding.FocusedScale !== undefined)
      this._behaviorData.FocusedScale = behaviorOverriding.FocusedScale;
    if (behaviorOverriding.FadeInDuration !== undefined)
      this._behaviorData.FadeInDuration = behaviorOverriding.FadeInDuration;
    if (behaviorOverriding.FadeOutDuration !== undefined)
      this._behaviorData.FadeOutDuration = behaviorOverriding.FadeOutDuration;
    if (behaviorOverriding.PressedScale !== undefined)
      this._behaviorData.PressedScale = behaviorOverriding.PressedScale;
    if (behaviorOverriding.FadeInEasing !== undefined)
      this._behaviorData.FadeInEasing = behaviorOverriding.FadeInEasing;
    if (behaviorOverriding.FadeOutEasing !== undefined)
      this._behaviorData.FadeOutEasing = behaviorOverriding.FadeOutEasing;
    if (behaviorOverriding.PreviousState !== undefined)
      this._behaviorData.PreviousState = behaviorOverriding.PreviousState;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Scale: this._behaviorData.Scale,
    ButtonFSM: this._behaviorData.ButtonFSM,
    Tween: this._behaviorData.Tween,
    IdleScale: this._behaviorData.IdleScale,
    FocusedScale: this._behaviorData.FocusedScale,
    FadeInDuration: this._behaviorData.FadeInDuration,
    FadeOutDuration: this._behaviorData.FadeOutDuration,
    PressedScale: this._behaviorData.PressedScale,
    FadeInEasing: this._behaviorData.FadeInEasing,
    FadeOutEasing: this._behaviorData.FadeOutEasing,
    PreviousState: this._behaviorData.PreviousState,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Scale !== undefined)
      this._behaviorData.Scale = networkSyncData.props.Scale;
    if (networkSyncData.props.ButtonFSM !== undefined)
      this._behaviorData.ButtonFSM = networkSyncData.props.ButtonFSM;
    if (networkSyncData.props.Tween !== undefined)
      this._behaviorData.Tween = networkSyncData.props.Tween;
    if (networkSyncData.props.IdleScale !== undefined)
      this._behaviorData.IdleScale = networkSyncData.props.IdleScale;
    if (networkSyncData.props.FocusedScale !== undefined)
      this._behaviorData.FocusedScale = networkSyncData.props.FocusedScale;
    if (networkSyncData.props.FadeInDuration !== undefined)
      this._behaviorData.FadeInDuration = networkSyncData.props.FadeInDuration;
    if (networkSyncData.props.FadeOutDuration !== undefined)
      this._behaviorData.FadeOutDuration = networkSyncData.props.FadeOutDuration;
    if (networkSyncData.props.PressedScale !== undefined)
      this._behaviorData.PressedScale = networkSyncData.props.PressedScale;
    if (networkSyncData.props.FadeInEasing !== undefined)
      this._behaviorData.FadeInEasing = networkSyncData.props.FadeInEasing;
    if (networkSyncData.props.FadeOutEasing !== undefined)
      this._behaviorData.FadeOutEasing = networkSyncData.props.FadeOutEasing;
    if (networkSyncData.props.PreviousState !== undefined)
      this._behaviorData.PreviousState = networkSyncData.props.PreviousState;
  }

  // Properties:
  
  _getScale() {
    return this._behaviorData.Scale !== undefined ? this._behaviorData.Scale : "";
  }
  _setScale(newValue) {
    this._behaviorData.Scale = newValue;
  }
  _getButtonFSM() {
    return this._behaviorData.ButtonFSM !== undefined ? this._behaviorData.ButtonFSM : "";
  }
  _setButtonFSM(newValue) {
    this._behaviorData.ButtonFSM = newValue;
  }
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
  _getIdleScale() {
    return this._behaviorData.IdleScale !== undefined ? this._behaviorData.IdleScale : Number("1") || 0;
  }
  _setIdleScale(newValue) {
    this._behaviorData.IdleScale = newValue;
  }
  _getFocusedScale() {
    return this._behaviorData.FocusedScale !== undefined ? this._behaviorData.FocusedScale : Number("1") || 0;
  }
  _setFocusedScale(newValue) {
    this._behaviorData.FocusedScale = newValue;
  }
  _getFadeInDuration() {
    return this._behaviorData.FadeInDuration !== undefined ? this._behaviorData.FadeInDuration : Number("0.1") || 0;
  }
  _setFadeInDuration(newValue) {
    this._behaviorData.FadeInDuration = newValue;
  }
  _getFadeOutDuration() {
    return this._behaviorData.FadeOutDuration !== undefined ? this._behaviorData.FadeOutDuration : Number("0.2") || 0;
  }
  _setFadeOutDuration(newValue) {
    this._behaviorData.FadeOutDuration = newValue;
  }
  _getPressedScale() {
    return this._behaviorData.PressedScale !== undefined ? this._behaviorData.PressedScale : Number("0.95") || 0;
  }
  _setPressedScale(newValue) {
    this._behaviorData.PressedScale = newValue;
  }
  _getFadeInEasing() {
    return this._behaviorData.FadeInEasing !== undefined ? this._behaviorData.FadeInEasing : "easeInOutQuad";
  }
  _setFadeInEasing(newValue) {
    this._behaviorData.FadeInEasing = newValue;
  }
  _getFadeOutEasing() {
    return this._behaviorData.FadeOutEasing !== undefined ? this._behaviorData.FadeOutEasing : "easeInOutQuad";
  }
  _setFadeOutEasing(newValue) {
    this._behaviorData.FadeOutEasing = newValue;
  }
  _getPreviousState() {
    return this._behaviorData.PreviousState !== undefined ? this._behaviorData.PreviousState : "Idle";
  }
  _setPreviousState(newValue) {
    this._behaviorData.PreviousState = newValue;
  }
}

/**
 * Shared data generated from Button scale tween
 */
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.SharedData = class ButtonScaleTweenSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._ButtonStates_ButtonScaleTweenSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._ButtonStates_ButtonScaleTweenSharedData = new gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.SharedData(
      initialData
    );
  }
  return instanceContainer._ButtonStates_ButtonScaleTweenSharedData;
}

// Methods:
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Scale")).setScale(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleScale());
}
}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousState() == "Idle");
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects3);

{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousState("Focused")
}
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FadeIn(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedScale(), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousState() == "Pressed");
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousState("Focused")
}
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FadeOut(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedScale(), eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsIdle(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousState() != "Idle");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousState("Idle")
}
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FadeOut(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleScale(), eventsFunctionContext);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsFocused(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressed(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPreviousState() != "Pressed");
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPreviousState("Pressed")
}
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).FadeIn(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPressedScale(), eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__ButtonScaleTween.Fade", eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeInEasing(), 1000 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeInDuration(), false, true);
}
}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeIn = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__ButtonScaleTween.Fade", eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeOutEasing(), 1000 * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeOutDuration(), false, true);
}
}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOut = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.IdleScaleContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.IdleScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.IdleScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.IdleScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.IdleScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getIdleScale();}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.IdleScale = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.IdleScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.IdleScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.IdleScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.IdleScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.IdleScaleContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetIdleScaleContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetIdleScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetIdleScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetIdleScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetIdleScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setIdleScale(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetIdleScale = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetIdleScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetIdleScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetIdleScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetIdleScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetIdleScaleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FocusedScaleContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FocusedScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FocusedScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FocusedScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FocusedScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFocusedScale();}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FocusedScale = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FocusedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FocusedScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FocusedScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FocusedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FocusedScaleContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFocusedScaleContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFocusedScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFocusedScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFocusedScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFocusedScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFocusedScale(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFocusedScale = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFocusedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFocusedScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFocusedScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFocusedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFocusedScaleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.PressedScaleContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.PressedScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.PressedScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.PressedScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.PressedScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPressedScale();}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.PressedScale = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.PressedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.PressedScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.PressedScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.PressedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.PressedScaleContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetPressedScaleContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetPressedScaleContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetPressedScaleContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetPressedScaleContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetPressedScaleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPressedScale(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetPressedScale = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetPressedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetPressedScaleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetPressedScaleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetPressedScaleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetPressedScaleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInDurationContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeInDuration();}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInDurationContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFadeInDuration(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInDuration = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutDurationContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeOutDuration();}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutDuration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutDurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutDurationContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutDurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFadeOutDuration(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutDuration = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutDurationContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInEasingContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInEasingContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInEasingContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInEasingContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInEasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeInEasing();}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInEasing = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInEasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInEasingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeInEasingContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInEasingContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInEasingContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInEasingContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInEasingContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInEasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFadeInEasing(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInEasing = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInEasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInEasingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeInEasingContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutEasingContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutEasingContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutEasingContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutEasingContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutEasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getFadeOutEasing();}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutEasing = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutEasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutEasingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.FadeOutEasingContext.GDObjectObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutEasingContext = {};
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutEasingContext.idToCallbackMap = new Map();
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutEasingContext.GDObjectObjects1= [];
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutEasingContext.GDObjectObjects2= [];


gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutEasingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setFadeOutEasing(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutEasing = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Scale": this._getScale()
, "ButtonFSM": this._getButtonFSM()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ButtonStates"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ButtonStates"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutEasingContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutEasingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutEasingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween.prototype.SetFadeOutEasingContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("ButtonStates::ButtonScaleTween", gdjs.evtsExt__ButtonStates__ButtonScaleTween.ButtonScaleTween);
