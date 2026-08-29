
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton || {};

/**
 * Object generated from Labeled button
 */
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton = class PanelSpriteButton extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.LabelText = objectData.content.LabelText !== undefined ? objectData.content.LabelText : "";
    this._objectData.HoveredFadeOutDuration = objectData.content.HoveredFadeOutDuration !== undefined ? objectData.content.HoveredFadeOutDuration : Number("0.25") || 0;
    this._objectData.PressedLabelOffsetY = objectData.content.PressedLabelOffsetY !== undefined ? objectData.content.PressedLabelOffsetY : Number("0") || 0;
    this._objectData.LabelOffset = Number("0") || 0;
    this._objectData._PropertyMapping = "";
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.LabelText !== newObjectData.content.LabelText)
      this._objectData.LabelText = newObjectData.content.LabelText;
    if (oldObjectData.content.HoveredFadeOutDuration !== newObjectData.content.HoveredFadeOutDuration)
      this._objectData.HoveredFadeOutDuration = newObjectData.content.HoveredFadeOutDuration;
    if (oldObjectData.content.PressedLabelOffsetY !== newObjectData.content.PressedLabelOffsetY)
      this._objectData.PressedLabelOffsetY = newObjectData.content.PressedLabelOffsetY;
    if (oldObjectData.content.LabelOffset !== newObjectData.content.LabelOffset)
      this._objectData.LabelOffset = newObjectData.content.LabelOffset;
    if (oldObjectData.content._PropertyMapping !== newObjectData.content._PropertyMapping)
      this._objectData._PropertyMapping = newObjectData.content._PropertyMapping;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getLabelText() {
    return this._objectData.LabelText !== undefined ? this._objectData.LabelText : "";
  }
  _setLabelText(newValue) {
    this._objectData.LabelText = newValue;
  }
  _getHoveredFadeOutDuration() {
    return this._objectData.HoveredFadeOutDuration !== undefined ? this._objectData.HoveredFadeOutDuration : Number("0.25") || 0;
  }
  _setHoveredFadeOutDuration(newValue) {
    this._objectData.HoveredFadeOutDuration = newValue;
  }
  _getPressedLabelOffsetY() {
    return this._objectData.PressedLabelOffsetY !== undefined ? this._objectData.PressedLabelOffsetY : Number("0") || 0;
  }
  _setPressedLabelOffsetY(newValue) {
    this._objectData.PressedLabelOffsetY = newValue;
  }
  _getLabelOffset() {
    return this._objectData.LabelOffset !== undefined ? this._objectData.LabelOffset : Number("0") || 0;
  }
  _setLabelOffset(newValue) {
    this._objectData.LabelOffset = newValue;
  }
  _get_PropertyMapping() {
    return this._objectData._PropertyMapping !== undefined ? this._objectData._PropertyMapping : "";
  }
  _set_PropertyMapping(newValue) {
    this._objectData._PropertyMapping = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteButton_9595_9595PanelSpriteButton_9546PanelSpriteButton_9546prototype_9546onCreatedContext_9546GDHoveredObjects1Objects = Hashtable.newFrom({"Hovered": gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1});
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteButton_9595_9595PanelSpriteButton_9546PanelSpriteButton_9546prototype_9546onCreatedContext_9546GDPressedObjects1Objects = Hashtable.newFrom({"Pressed": gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1});
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapLabel"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDBitmapLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteButton_9595_9595PanelSpriteButton_9546PanelSpriteButton_9546prototype_9546onCreatedContext_9546GDHoveredObjects1Objects, 0, 0, "");
}
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteButton_9595_9595PanelSpriteButton_9546PanelSpriteButton_9546prototype_9546onCreatedContext_9546GDPressedObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1[0].getWidth()), (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1[0].getHeight()));
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize((( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1[0].getWidth()), (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1[0].getHeight()));
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1[i].setZOrder(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1[i].setZOrder(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getLabelText());
}
for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDBitmapLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDBitmapLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getLabelText());
}
}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onCreatedContext.GDBitmapLabelObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1[i].IsPressed(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1[i].SetLabelOffset(eventsFunctionContext.getObjects("Object")[0]._getPressedLabelOffsetY(), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapLabel"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDBitmapLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getLabelText());
}
for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDBitmapLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDBitmapLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getObjects("Object")[0]._getLabelText());
}
}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.onHotReloadingContext.GDBitmapLabelObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects4= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects3= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects4= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects4= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects4= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects3= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects4= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects3= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects4= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0]._getHoveredFadeOutDuration() > 0);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween2("Fadeout", 0, "linear", eventsFunctionContext.getObjects("Object")[0]._getHoveredFadeOutDuration(), false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0]._getHoveredFadeOutDuration() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i].hide();
}
}
}

}


};gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0]._getHoveredFadeOutDuration() > 0);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).removeTween("Fadeout");
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(255);
}
}
}

}


};gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[i].IsIdle(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14284148);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapLabel"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2);
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("Pressed"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TextStyleState")).SetIsHovered(false, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("BitmapTextStyleState")).SetIsHovered(false, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetLabelOffset(0, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2[i].hide();
}
}

{ //Subevents
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).getOpacity() == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(255);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[i].IsHovered(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14291228);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapLabel"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2);
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("Pressed"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TextStyleState")).SetIsHovered(true, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("BitmapTextStyleState")).SetIsHovered(true, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetLabelOffset(0, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2[i].hide();
}
}

{ //Subevents
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[i].IsPressed(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14295532);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapLabel"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2);
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("Pressed"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("TextStyleState")).SetIsHovered(false, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("BitmapTextStyleState")).SetIsHovered(false, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetLabelOffset(eventsFunctionContext.getObjects("Object")[0]._getPressedLabelOffsetY(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2[i].hide(false);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].IsFocused(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(14299244);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapLabel"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Hovered"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1);
/* Reuse gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("Pressed"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("TextStyleState")).SetIsHovered(true, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("BitmapTextStyleState")).SetIsHovered(true, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1[i].SetLabelOffset(0, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1[i].hide();
}
}
}

}


};gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects4.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDLabelObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDIdleObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDHoveredObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDPressedObjects4.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects3.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPostEventsContext.GDBitmapLabelObjects4.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsIdle(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdle = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsIdleContext.GDBitmapLabelObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsClicked(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClicked = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsClickedContext.GDBitmapLabelObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsHovered(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHovered = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsHoveredContext.GDBitmapLabelObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsFocused(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocused = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsFocusedContext.GDBitmapLabelObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressed(eventsFunctionContext) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsPressedContext.GDBitmapLabelObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapLabel"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDBitmapLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("Value"));
}
for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDBitmapLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDBitmapLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("Value"));
}
}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelText = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextContext.GDBitmapLabelObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapLabel"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDBitmapLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDLabelObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("Value"));
}
for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDBitmapLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDBitmapLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(eventsFunctionContext.getArgument("Value"));
}
}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOp = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelTextOpContext.GDBitmapLabelObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapLabel"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDBitmapLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDBitmapLabelObjects1.length === 0 ) ? (( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects1.length === 0 ) ? "" :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText()) :gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDBitmapLabelObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Text")).getText());}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelText = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelTextContext.GDBitmapLabelObjects2.length = 0;


return "" + eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("ShouldActivate");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM"), true);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("ShouldActivate");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM"), false);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.Activate = function(ShouldActivate, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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
if (argName === "ShouldActivate") return ShouldActivate;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.ActivateContext.GDBitmapLabelObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Idle"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects1[i].behaviorActivated(eventsFunctionContext.getBehaviorName("ButtonFSM")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects1[k] = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.IsActivatedContext.GDBitmapLabelObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0]._getLabelOffset();}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffset = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.LabelOffsetContext.GDBitmapLabelObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext = {};
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDIdleObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDIdleObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDHoveredObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDHoveredObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDPressedObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDPressedObjects2= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDBitmapLabelObjects1= [];
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDBitmapLabelObjects2= [];


gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("BitmapLabel"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDBitmapLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDLabelObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDLabelObjects1[i].setCenterYInScene(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDLabelObjects1[i].getCenterYInScene() + (eventsFunctionContext.getArgument("Value") - eventsFunctionContext.getObjects("Object")[0]._getLabelOffset()));
}
for(var i = 0, len = gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDBitmapLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDBitmapLabelObjects1[i].setCenterYInScene(gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDBitmapLabelObjects1[i].getCenterYInScene() + (eventsFunctionContext.getArgument("Value") - eventsFunctionContext.getObjects("Object")[0]._getLabelOffset()));
}
}
{eventsFunctionContext.getObjects("Object")[0]._setLabelOffset(eventsFunctionContext.getArgument("Value"))
}
}

}


};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffset = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDIdleObjectsList = [...runtimeScene.getObjects("Idle")];
var GDIdleObjects = Hashtable.newFrom({"Idle": thisGDIdleObjectsList});
var thisGDHoveredObjectsList = [...runtimeScene.getObjects("Hovered")];
var GDHoveredObjects = Hashtable.newFrom({"Hovered": thisGDHoveredObjectsList});
var thisGDPressedObjectsList = [...runtimeScene.getObjects("Pressed")];
var GDPressedObjects = Hashtable.newFrom({"Pressed": thisGDPressedObjectsList});
var thisGDBitmapLabelObjectsList = [...runtimeScene.getObjects("BitmapLabel")];
var GDBitmapLabelObjects = Hashtable.newFrom({"BitmapLabel": thisGDBitmapLabelObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Idle": GDIdleObjects
, "Hovered": GDHoveredObjects
, "Pressed": GDPressedObjects
, "BitmapLabel": GDBitmapLabelObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Idle": thisGDIdleObjectsList
, "Hovered": thisGDHoveredObjectsList
, "Pressed": thisGDPressedObjectsList
, "BitmapLabel": thisGDBitmapLabelObjectsList
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDBitmapLabelObjects2.length = 0;

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDIdleObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDIdleObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDHoveredObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDHoveredObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDPressedObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDPressedObjects2.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDBitmapLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.SetLabelOffsetContext.GDBitmapLabelObjects2.length = 0;


return;
}

gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("PanelSpriteButton::PanelSpriteButton", gdjs.evtsExt__PanelSpriteButton__PanelSpriteButton.PanelSpriteButton);
