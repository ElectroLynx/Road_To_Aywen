
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider || {};

/**
 * Object generated from Slider
 */
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider = class PanelSpriteSlider extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    this._objectData.BarLeftPadding = Number("0") || 0;
    this._objectData.BarTopPadding = Number("0") || 0;
    this._objectData.BarRightPadding = Number("0") || 0;
    this._objectData.BarBottomPadding = Number("0") || 0;
    this._objectData.ShowLabelAtChanges = objectData.content.ShowLabelAtChanges !== undefined ? objectData.content.ShowLabelAtChanges : true;
    this._objectData.LabelMargin = objectData.content.LabelMargin !== undefined ? objectData.content.LabelMargin : Number("8") || 0;
    this._objectData.MinValue = objectData.content.MinValue !== undefined ? objectData.content.MinValue : Number("0") || 0;
    this._objectData.MaxValue = objectData.content.MaxValue !== undefined ? objectData.content.MaxValue : Number("100") || 0;
    this._objectData.StepSize = objectData.content.StepSize !== undefined ? objectData.content.StepSize : Number("1") || 0;
    this._objectData.InitialValue = objectData.content.InitialValue !== undefined ? objectData.content.InitialValue : Number("50") || 0;
    this._objectData.PreviousInitialValue = Number("") || 0;
    this._objectData.ThumbAnchorOrigin = "Center-center";
    this._objectData.ThumbAnchorTarget = "Center-right";
    this._objectData.ShowLabel = false;
    this._objectData.BarLeftPlusRightMargin = Number("0") || 0;
    this._objectData.BarTopPlusBottomMargin = Number("0") || 0;
    this._objectData.OldParentWidth = Number("0") || 0;
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);
    if (oldObjectData.content.BarLeftPadding !== newObjectData.content.BarLeftPadding)
      this._objectData.BarLeftPadding = newObjectData.content.BarLeftPadding;
    if (oldObjectData.content.BarTopPadding !== newObjectData.content.BarTopPadding)
      this._objectData.BarTopPadding = newObjectData.content.BarTopPadding;
    if (oldObjectData.content.BarRightPadding !== newObjectData.content.BarRightPadding)
      this._objectData.BarRightPadding = newObjectData.content.BarRightPadding;
    if (oldObjectData.content.BarBottomPadding !== newObjectData.content.BarBottomPadding)
      this._objectData.BarBottomPadding = newObjectData.content.BarBottomPadding;
    if (oldObjectData.content.ShowLabelAtChanges !== newObjectData.content.ShowLabelAtChanges)
      this._objectData.ShowLabelAtChanges = newObjectData.content.ShowLabelAtChanges;
    if (oldObjectData.content.LabelMargin !== newObjectData.content.LabelMargin)
      this._objectData.LabelMargin = newObjectData.content.LabelMargin;
    if (oldObjectData.content.MinValue !== newObjectData.content.MinValue)
      this._objectData.MinValue = newObjectData.content.MinValue;
    if (oldObjectData.content.MaxValue !== newObjectData.content.MaxValue)
      this._objectData.MaxValue = newObjectData.content.MaxValue;
    if (oldObjectData.content.StepSize !== newObjectData.content.StepSize)
      this._objectData.StepSize = newObjectData.content.StepSize;
    if (oldObjectData.content.InitialValue !== newObjectData.content.InitialValue)
      this._objectData.InitialValue = newObjectData.content.InitialValue;
    if (oldObjectData.content.PreviousInitialValue !== newObjectData.content.PreviousInitialValue)
      this._objectData.PreviousInitialValue = newObjectData.content.PreviousInitialValue;
    if (oldObjectData.content.ThumbAnchorOrigin !== newObjectData.content.ThumbAnchorOrigin)
      this._objectData.ThumbAnchorOrigin = newObjectData.content.ThumbAnchorOrigin;
    if (oldObjectData.content.ThumbAnchorTarget !== newObjectData.content.ThumbAnchorTarget)
      this._objectData.ThumbAnchorTarget = newObjectData.content.ThumbAnchorTarget;
    if (oldObjectData.content.ShowLabel !== newObjectData.content.ShowLabel)
      this._objectData.ShowLabel = newObjectData.content.ShowLabel;
    if (oldObjectData.content.BarLeftPlusRightMargin !== newObjectData.content.BarLeftPlusRightMargin)
      this._objectData.BarLeftPlusRightMargin = newObjectData.content.BarLeftPlusRightMargin;
    if (oldObjectData.content.BarTopPlusBottomMargin !== newObjectData.content.BarTopPlusBottomMargin)
      this._objectData.BarTopPlusBottomMargin = newObjectData.content.BarTopPlusBottomMargin;
    if (oldObjectData.content.OldParentWidth !== newObjectData.content.OldParentWidth)
      this._objectData.OldParentWidth = newObjectData.content.OldParentWidth;

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  
  _getBarLeftPadding() {
    return this._objectData.BarLeftPadding !== undefined ? this._objectData.BarLeftPadding : Number("0") || 0;
  }
  _setBarLeftPadding(newValue) {
    this._objectData.BarLeftPadding = newValue;
  }
  _getBarTopPadding() {
    return this._objectData.BarTopPadding !== undefined ? this._objectData.BarTopPadding : Number("0") || 0;
  }
  _setBarTopPadding(newValue) {
    this._objectData.BarTopPadding = newValue;
  }
  _getBarRightPadding() {
    return this._objectData.BarRightPadding !== undefined ? this._objectData.BarRightPadding : Number("0") || 0;
  }
  _setBarRightPadding(newValue) {
    this._objectData.BarRightPadding = newValue;
  }
  _getBarBottomPadding() {
    return this._objectData.BarBottomPadding !== undefined ? this._objectData.BarBottomPadding : Number("0") || 0;
  }
  _setBarBottomPadding(newValue) {
    this._objectData.BarBottomPadding = newValue;
  }
  _getShowLabelAtChanges() {
    return this._objectData.ShowLabelAtChanges !== undefined ? this._objectData.ShowLabelAtChanges : true;
  }
  _setShowLabelAtChanges(newValue) {
    this._objectData.ShowLabelAtChanges = newValue;
  }
  _toggleShowLabelAtChanges() {
    this._setShowLabelAtChanges(!this._getShowLabelAtChanges());
  }
  _getLabelMargin() {
    return this._objectData.LabelMargin !== undefined ? this._objectData.LabelMargin : Number("8") || 0;
  }
  _setLabelMargin(newValue) {
    this._objectData.LabelMargin = newValue;
  }
  _getMinValue() {
    return this._objectData.MinValue !== undefined ? this._objectData.MinValue : Number("0") || 0;
  }
  _setMinValue(newValue) {
    this._objectData.MinValue = newValue;
  }
  _getMaxValue() {
    return this._objectData.MaxValue !== undefined ? this._objectData.MaxValue : Number("100") || 0;
  }
  _setMaxValue(newValue) {
    this._objectData.MaxValue = newValue;
  }
  _getStepSize() {
    return this._objectData.StepSize !== undefined ? this._objectData.StepSize : Number("1") || 0;
  }
  _setStepSize(newValue) {
    this._objectData.StepSize = newValue;
  }
  _getInitialValue() {
    return this._objectData.InitialValue !== undefined ? this._objectData.InitialValue : Number("50") || 0;
  }
  _setInitialValue(newValue) {
    this._objectData.InitialValue = newValue;
  }
  _getPreviousInitialValue() {
    return this._objectData.PreviousInitialValue !== undefined ? this._objectData.PreviousInitialValue : Number("") || 0;
  }
  _setPreviousInitialValue(newValue) {
    this._objectData.PreviousInitialValue = newValue;
  }
  _getThumbAnchorOrigin() {
    return this._objectData.ThumbAnchorOrigin !== undefined ? this._objectData.ThumbAnchorOrigin : "Center-center";
  }
  _setThumbAnchorOrigin(newValue) {
    this._objectData.ThumbAnchorOrigin = newValue;
  }
  _getThumbAnchorTarget() {
    return this._objectData.ThumbAnchorTarget !== undefined ? this._objectData.ThumbAnchorTarget : "Center-right";
  }
  _setThumbAnchorTarget(newValue) {
    this._objectData.ThumbAnchorTarget = newValue;
  }
  _getShowLabel() {
    return this._objectData.ShowLabel !== undefined ? this._objectData.ShowLabel : false;
  }
  _setShowLabel(newValue) {
    this._objectData.ShowLabel = newValue;
  }
  _toggleShowLabel() {
    this._setShowLabel(!this._getShowLabel());
  }
  _getBarLeftPlusRightMargin() {
    return this._objectData.BarLeftPlusRightMargin !== undefined ? this._objectData.BarLeftPlusRightMargin : Number("0") || 0;
  }
  _setBarLeftPlusRightMargin(newValue) {
    this._objectData.BarLeftPlusRightMargin = newValue;
  }
  _getBarTopPlusBottomMargin() {
    return this._objectData.BarTopPlusBottomMargin !== undefined ? this._objectData.BarTopPlusBottomMargin : Number("0") || 0;
  }
  _setBarTopPlusBottomMargin(newValue) {
    this._objectData.BarTopPlusBottomMargin = newValue;
  }
  _getOldParentWidth() {
    return this._objectData.OldParentWidth !== undefined ? this._objectData.OldParentWidth : Number("0") || 0;
  }
  _setOldParentWidth(newValue) {
    this._objectData.OldParentWidth = newValue;
  }

  

  
}

// Methods:
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteSlider_9595_9595PanelSpriteSlider_9546PanelSpriteSlider_9546prototype_9546onCreatedContext_9546GDLabelObjects1Objects = Hashtable.newFrom({"Label": gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1});
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__PanelSpriteSlider__IsInGameEdition.func(runtimeScene, eventsFunctionContext);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Draggable"), false);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Anchor"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Anchor"), false);
}
}
{eventsFunctionContext.getObjects("Object")[0]._setBarLeftPlusRightMargin((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1[0].getWidth()) - (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1[0].getWidth()))
}
{eventsFunctionContext.getObjects("Object")[0]._setBarTopPlusBottomMargin((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1[0].getHeight()) - (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1[0].getHeight()))
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0]._setPreviousInitialValue(eventsFunctionContext.getObjects("Object")[0]._getInitialValue())
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.mapOfGDgdjs_9546evtsExt_9595_9595PanelSpriteSlider_9595_9595PanelSpriteSlider_9546PanelSpriteSlider_9546prototype_9546onCreatedContext_9546GDLabelObjects1Objects, 0, 0, "");
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1[i].UpdateSliderConfiguration(eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1[i].SetValue(eventsFunctionContext.getObjects("Object")[0]._getInitialValue(), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1[i].setIncludedInParentCollisionMask(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1[i].setIncludedInParentCollisionMask(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1[i].setIncludedInParentCollisionMask(false);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onCreatedContext.GDBackgroundObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[i].UpdateSliderConfiguration(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0]._getInitialValue() != eventsFunctionContext.getObjects("Object")[0]._getPreviousInitialValue());
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setPreviousInitialValue(eventsFunctionContext.getObjects("Object")[0]._getInitialValue())
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1[i].SetValue(eventsFunctionContext.getObjects("Object")[0]._getInitialValue(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloading = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.onHotReloadingContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final = [];

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getShowLabelAtChanges();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].resetTimer("HideBack");
}
}
}

}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getShowLabelAtChanges();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].hide(false);
}
}
}

}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2);
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).wasJustDropped()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressed(eventsFunctionContext) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3);

for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressedOutside(eventsFunctionContext) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2_1final, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2);
}
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetValue((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).MinValue(eventsFunctionContext)) + (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Size(eventsFunctionContext)) * (gdjs.evtTools.input.getTouchX(runtimeScene, (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).TouchId(eventsFunctionContext)), (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].getLayer()), 0) - (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2[0].getX())) / (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].FullBarWidth(eventsFunctionContext)), eventsFunctionContext);
}
}

{ //Subevents
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2);
/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].SetValue((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).MinValue(eventsFunctionContext)) + (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Size(eventsFunctionContext)) * ((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[0].getCenterXInScene()) - (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2[0].getX())) / (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[i].FullBarWidth(eventsFunctionContext)), eventsFunctionContext);
}
}

{ //Subevents
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).wasJustDropped() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].resetTimer("HideBack");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getShowLabelAtChanges();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].isCollidingWithPoint(gdjs.evtTools.input.getMouseOnlyCursorX(runtimeScene, (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2[0].getLayer()), 0), gdjs.evtTools.input.getMouseOnlyCursorY(runtimeScene, (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i].getLayer()), 0)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = k;
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].hide(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2[i].resetTimer("HideBack");
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[i].getTimerElapsedTimeInSecondsOrNaN("HideBack") > 0.5 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1 */
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[i].hide();
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[i].removeTimer("HideBack");
}
}
}

}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i].behaviorActivated(eventsFunctionContext.getBehaviorName("ButtonFSM")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);
}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0]._getOldParentWidth() != (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1[0].getWidth()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1 */
{eventsFunctionContext.getObjects("Object")[0]._setOldParentWidth((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1[0].getWidth()))
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1[i].UpdateThumbPosition(eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1[0].getHeight()) - eventsFunctionContext.getObjects("Object")[0]._getBarTopPlusBottomMargin());
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1[i].setCenterYInScene((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects1[0].getCenterYInScene()));
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[i].setY((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1[0].getY()) - (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1[i].getHeight()) - eventsFunctionContext.getObjects("Object")[0]._getLabelMargin());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__PanelSpriteSlider__IsInGameEdition.func(runtimeScene, eventsFunctionContext));
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.eventsList5(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDLabelObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDThumbObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDFillBarObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPostEventsContext.GDBackgroundObjects3.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final = [];

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1_1final = [];

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Draggable")).isDragged() ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressed(eventsFunctionContext) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[j]);
    }
}
}
{
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2);
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM")).IsPressedOutside(eventsFunctionContext) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length; j < jLen ; ++j) {
        if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final.indexOf(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[j]) === -1 )
            gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final.push(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1_1final, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1);
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1_1final, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1);
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDragged = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsBeingDraggedContext.GDBackgroundObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Value(eventsFunctionContext));}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.Value = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ValueContext.GDBackgroundObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).SetValue(eventsFunctionContext.getArgument("Value"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects1[i].UpdateThumbPosition(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetValueContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).MinValue(eventsFunctionContext));}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MinValueContext.GDBackgroundObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).SetMinValue(eventsFunctionContext.getArgument("Value"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1[i].UpdateThumbPosition(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMinValueContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).MaxValue(eventsFunctionContext));}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValue = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.MaxValueContext.GDBackgroundObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).SetMaxValue(eventsFunctionContext.getArgument("Value"), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1[i].UpdateThumbPosition(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValue = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetMaxValueContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).StepSize(eventsFunctionContext));}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSize = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.StepSizeContext.GDBackgroundObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).SetStepSize(eventsFunctionContext.getArgument("Value"), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSize = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetStepSizeContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0]._getShowLabelAtChanges();
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShown = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsLabelShownContext.GDBackgroundObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setShowLabelAtChanges(false)
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1);
{eventsFunctionContext.getObjects("Object")[0]._setShowLabelAtChanges(true)
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1[i].hide(false);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShown = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.SetLabelShownContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects3= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects3= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2);

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2[0].FullBarWidth(eventsFunctionContext)) * ((gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Value(eventsFunctionContext)) - (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).MinValue(eventsFunctionContext))) / (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Size(eventsFunctionContext)));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1, gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2);

gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2[i].setCenterXInScene((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[0].getX()) + (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[0].getWidth()));
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2[i].setCenterYInScene((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2[0].getCenterYInScene()));
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Text")).setText(gdjs.evtTools.common.toString((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1[0].Value(eventsFunctionContext))));
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1[i].setCenterXInScene((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1[0].getCenterXInScene()));
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1[i].setY((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1[0].getY()) - (gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1[i].getHeight()) - eventsFunctionContext.getObjects("Object")[0]._getLabelMargin());
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1[i].setAngle(-((( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1[0].getAngle())));
}
}
}

}


};gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("FillBar"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Slider")).Size(eventsFunctionContext) > 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPosition = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects3.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDLabelObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDThumbObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDFillBarObjects3.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateThumbPositionContext.GDBackgroundObjects3.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = (( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1[0].getWidth()) - eventsFunctionContext.getObjects("Object")[0]._getBarLeftPlusRightMargin();}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidth = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.FullBarWidthContext.GDBackgroundObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1[i].SetMinValue(eventsFunctionContext.getObjects("Object")[0]._getMinValue(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1[i].SetMaxValue(eventsFunctionContext.getObjects("Object")[0]._getMaxValue(), eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1[i].SetStepSize(eventsFunctionContext.getObjects("Object")[0]._getStepSize(), eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfiguration = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.UpdateSliderConfigurationContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("ShouldActivate");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Draggable"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM"), true);
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
gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Label"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Thumb"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1);
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("Draggable"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1[i].activateBehavior(eventsFunctionContext.getBehaviorName("ButtonFSM"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects1.length ;i < len;++i) {
    gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects1[i].hide();
}
}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.Activate = function(ShouldActivate, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
if (argName === "ShouldActivate") return ShouldActivate;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.ActivateContext.GDBackgroundObjects2.length = 0;


return;
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext = {};
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDObjectObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDObjectObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDLabelObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDLabelObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDThumbObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDThumbObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDFillBarObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDFillBarObjects2= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1= [];
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects2= [];


gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Background"), gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1[i].behaviorActivated(eventsFunctionContext.getBehaviorName("ButtonFSM")) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1[k] = gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDLabelObjectsList = [...runtimeScene.getObjects("Label")];
var GDLabelObjects = Hashtable.newFrom({"Label": thisGDLabelObjectsList});
var thisGDThumbObjectsList = [...runtimeScene.getObjects("Thumb")];
var GDThumbObjects = Hashtable.newFrom({"Thumb": thisGDThumbObjectsList});
var thisGDFillBarObjectsList = [...runtimeScene.getObjects("FillBar")];
var GDFillBarObjects = Hashtable.newFrom({"FillBar": thisGDFillBarObjectsList});
var thisGDBackgroundObjectsList = [...runtimeScene.getObjects("Background")];
var GDBackgroundObjects = Hashtable.newFrom({"Background": thisGDBackgroundObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Label": GDLabelObjects
, "Thumb": GDThumbObjects
, "FillBar": GDFillBarObjects
, "Background": GDBackgroundObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "Label": thisGDLabelObjectsList
, "Thumb": thisGDThumbObjectsList
, "FillBar": thisGDFillBarObjectsList
, "Background": thisGDBackgroundObjectsList
},
  _behaviorNamesMap: {
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
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects2.length = 0;

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDLabelObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDLabelObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDThumbObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDThumbObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDFillBarObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDFillBarObjects2.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects1.length = 0;
gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.IsActivatedContext.GDBackgroundObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("PanelSpriteSlider::PanelSpriteSlider", gdjs.evtsExt__PanelSpriteSlider__PanelSpriteSlider.PanelSpriteSlider);
