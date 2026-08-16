
gdjs.evtsExt__PanelSpriteSlider__Slider = gdjs.evtsExt__PanelSpriteSlider__Slider || {};

/**
 * Behavior generated from Slider
 */
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider = class Slider extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.CurrentValue = behaviorData.CurrentValue !== undefined ? behaviorData.CurrentValue : Number("0") || 0;
    this._behaviorData.MinValue = behaviorData.MinValue !== undefined ? behaviorData.MinValue : Number("0") || 0;
    this._behaviorData.MaxValue = behaviorData.MaxValue !== undefined ? behaviorData.MaxValue : Number("1") || 0;
    this._behaviorData.StepSize = behaviorData.StepSize !== undefined ? behaviorData.StepSize : Number("0") || 0;
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.CurrentValue !== undefined)
      this._behaviorData.CurrentValue = behaviorOverriding.CurrentValue;
    if (behaviorOverriding.MinValue !== undefined)
      this._behaviorData.MinValue = behaviorOverriding.MinValue;
    if (behaviorOverriding.MaxValue !== undefined)
      this._behaviorData.MaxValue = behaviorOverriding.MaxValue;
    if (behaviorOverriding.StepSize !== undefined)
      this._behaviorData.StepSize = behaviorOverriding.StepSize;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    CurrentValue: this._behaviorData.CurrentValue,
    MinValue: this._behaviorData.MinValue,
    MaxValue: this._behaviorData.MaxValue,
    StepSize: this._behaviorData.StepSize,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.CurrentValue !== undefined)
      this._behaviorData.CurrentValue = networkSyncData.props.CurrentValue;
    if (networkSyncData.props.MinValue !== undefined)
      this._behaviorData.MinValue = networkSyncData.props.MinValue;
    if (networkSyncData.props.MaxValue !== undefined)
      this._behaviorData.MaxValue = networkSyncData.props.MaxValue;
    if (networkSyncData.props.StepSize !== undefined)
      this._behaviorData.StepSize = networkSyncData.props.StepSize;
  }

  // Properties:
  
  _getCurrentValue() {
    return this._behaviorData.CurrentValue !== undefined ? this._behaviorData.CurrentValue : Number("0") || 0;
  }
  _setCurrentValue(newValue) {
    this._behaviorData.CurrentValue = newValue;
  }
  _getMinValue() {
    return this._behaviorData.MinValue !== undefined ? this._behaviorData.MinValue : Number("0") || 0;
  }
  _setMinValue(newValue) {
    this._behaviorData.MinValue = newValue;
  }
  _getMaxValue() {
    return this._behaviorData.MaxValue !== undefined ? this._behaviorData.MaxValue : Number("1") || 0;
  }
  _setMaxValue(newValue) {
    this._behaviorData.MaxValue = newValue;
  }
  _getStepSize() {
    return this._behaviorData.StepSize !== undefined ? this._behaviorData.StepSize : Number("0") || 0;
  }
  _setStepSize(newValue) {
    this._behaviorData.StepSize = newValue;
  }
}

/**
 * Shared data generated from Slider
 */
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.SharedData = class SliderSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._PanelSpriteSlider_SliderSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._PanelSpriteSlider_SliderSharedData = new gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.SharedData(
      initialData
    );
  }
  return instanceContainer._PanelSpriteSlider_SliderSharedData;
}

// Methods:
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentValue();}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.Value = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PanelSpriteSlider"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PanelSpriteSlider"),
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

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.ValueContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepSize() == 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentValue(gdjs.evtTools.common.clamp(eventsFunctionContext.getArgument("Value"), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMinValue(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxValue()))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepSize() != 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentValue(gdjs.evtTools.common.clamp(Math.round(eventsFunctionContext.getArgument("Value") / eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepSize()) * eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepSize(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMinValue(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxValue()))
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValue = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PanelSpriteSlider"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PanelSpriteSlider"),
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

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetValueContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMinValue();}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValue = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PanelSpriteSlider"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PanelSpriteSlider"),
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

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MinValueContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMinValue(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue((gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Value(eventsFunctionContext)), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValue = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PanelSpriteSlider"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PanelSpriteSlider"),
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

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMinValueContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getMaxValue();}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValue = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PanelSpriteSlider"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PanelSpriteSlider"),
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

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.MaxValueContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setMaxValue(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue((gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Value(eventsFunctionContext)), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValue = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PanelSpriteSlider"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PanelSpriteSlider"),
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

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetMaxValueContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MaxValue(eventsFunctionContext)) - (( gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).MinValue(eventsFunctionContext));}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.Size = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PanelSpriteSlider"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PanelSpriteSlider"),
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

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SizeContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStepSize();}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSize = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PanelSpriteSlider"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PanelSpriteSlider"),
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

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.StepSizeContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext = {};
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStepSize(eventsFunctionContext.getArgument("Value"))
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).SetValue((gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).Value(eventsFunctionContext)), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSize = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("PanelSpriteSlider"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("PanelSpriteSlider"),
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

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.SetStepSizeContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__PanelSpriteSlider__Slider.Slider.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("PanelSpriteSlider::Slider", gdjs.evtsExt__PanelSpriteSlider__Slider.Slider);
