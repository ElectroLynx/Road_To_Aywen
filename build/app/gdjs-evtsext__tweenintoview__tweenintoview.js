
gdjs.evtsExt__TweenIntoView__TweenIntoView = gdjs.evtsExt__TweenIntoView__TweenIntoView || {};

/**
 * Behavior generated from Tween into view
 */
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView = class TweenIntoView extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Angle = behaviorData.Angle !== undefined ? behaviorData.Angle : Number("90") || 0;
    this._behaviorData.Duration = behaviorData.Duration !== undefined ? behaviorData.Duration : Number("0.5") || 0;
    this._behaviorData.Distance = behaviorData.Distance !== undefined ? behaviorData.Distance : Number("0") || 0;
    this._behaviorData.ShouldPlayAtCreation = behaviorData.ShouldPlayAtCreation !== undefined ? behaviorData.ShouldPlayAtCreation : true;
    this._behaviorData.PositionEasingIn = behaviorData.PositionEasingIn !== undefined ? behaviorData.PositionEasingIn : "easeFromTo";
    this._behaviorData.PositionEasingOut = behaviorData.PositionEasingOut !== undefined ? behaviorData.PositionEasingOut : "easeOutQuad";
    this._behaviorData.ShouldBeDeleted = behaviorData.ShouldBeDeleted !== undefined ? behaviorData.ShouldBeDeleted : true;
    this._behaviorData.ShouldFade = behaviorData.ShouldFade !== undefined ? behaviorData.ShouldFade : true;
    this._behaviorData.TargetX = Number("0") || 0;
    this._behaviorData.TargetY = Number("0") || 0;
    this._behaviorData.Opacity = behaviorData.Opacity !== undefined ? behaviorData.Opacity : "";
    this._behaviorData.Tween = behaviorData.Tween !== undefined ? behaviorData.Tween : "";
    this._behaviorData.ShouldMove = behaviorData.ShouldMove !== undefined ? behaviorData.ShouldMove : true;
    this._behaviorData.Delay = behaviorData.Delay !== undefined ? behaviorData.Delay : Number("0") || 0;
    this._behaviorData.OpacityEasingIn = behaviorData.OpacityEasingIn !== undefined ? behaviorData.OpacityEasingIn : "easeInQuad";
    this._behaviorData.OpacityEasingOut = behaviorData.OpacityEasingOut !== undefined ? behaviorData.OpacityEasingOut : "easeOutQuad";
    this._behaviorData.TargetOpacity = Number("255") || 0;
    this._behaviorData.OriginX = Number("0") || 0;
    this._behaviorData.OriginY = Number("0") || 0;
    this._behaviorData.State = "JustCreated";
  }

  // Hot-reload:
  applyBehaviorOverriding(behaviorOverriding) {
    
    if (behaviorOverriding.Angle !== undefined)
      this._behaviorData.Angle = behaviorOverriding.Angle;
    if (behaviorOverriding.Duration !== undefined)
      this._behaviorData.Duration = behaviorOverriding.Duration;
    if (behaviorOverriding.Distance !== undefined)
      this._behaviorData.Distance = behaviorOverriding.Distance;
    if (behaviorOverriding.ShouldPlayAtCreation !== undefined)
      this._behaviorData.ShouldPlayAtCreation = behaviorOverriding.ShouldPlayAtCreation;
    if (behaviorOverriding.PositionEasingIn !== undefined)
      this._behaviorData.PositionEasingIn = behaviorOverriding.PositionEasingIn;
    if (behaviorOverriding.PositionEasingOut !== undefined)
      this._behaviorData.PositionEasingOut = behaviorOverriding.PositionEasingOut;
    if (behaviorOverriding.ShouldBeDeleted !== undefined)
      this._behaviorData.ShouldBeDeleted = behaviorOverriding.ShouldBeDeleted;
    if (behaviorOverriding.ShouldFade !== undefined)
      this._behaviorData.ShouldFade = behaviorOverriding.ShouldFade;
    if (behaviorOverriding.TargetX !== undefined)
      this._behaviorData.TargetX = behaviorOverriding.TargetX;
    if (behaviorOverriding.TargetY !== undefined)
      this._behaviorData.TargetY = behaviorOverriding.TargetY;
    if (behaviorOverriding.Opacity !== undefined)
      this._behaviorData.Opacity = behaviorOverriding.Opacity;
    if (behaviorOverriding.Tween !== undefined)
      this._behaviorData.Tween = behaviorOverriding.Tween;
    if (behaviorOverriding.ShouldMove !== undefined)
      this._behaviorData.ShouldMove = behaviorOverriding.ShouldMove;
    if (behaviorOverriding.Delay !== undefined)
      this._behaviorData.Delay = behaviorOverriding.Delay;
    if (behaviorOverriding.OpacityEasingIn !== undefined)
      this._behaviorData.OpacityEasingIn = behaviorOverriding.OpacityEasingIn;
    if (behaviorOverriding.OpacityEasingOut !== undefined)
      this._behaviorData.OpacityEasingOut = behaviorOverriding.OpacityEasingOut;
    if (behaviorOverriding.TargetOpacity !== undefined)
      this._behaviorData.TargetOpacity = behaviorOverriding.TargetOpacity;
    if (behaviorOverriding.OriginX !== undefined)
      this._behaviorData.OriginX = behaviorOverriding.OriginX;
    if (behaviorOverriding.OriginY !== undefined)
      this._behaviorData.OriginY = behaviorOverriding.OriginY;
    if (behaviorOverriding.State !== undefined)
      this._behaviorData.State = behaviorOverriding.State;

    return true;
  }

  // Network sync:
  getNetworkSyncData(syncOptions) {
    return {
      ...super.getNetworkSyncData(syncOptions),
      props: {
        
    Angle: this._behaviorData.Angle,
    Duration: this._behaviorData.Duration,
    Distance: this._behaviorData.Distance,
    ShouldPlayAtCreation: this._behaviorData.ShouldPlayAtCreation,
    PositionEasingIn: this._behaviorData.PositionEasingIn,
    PositionEasingOut: this._behaviorData.PositionEasingOut,
    ShouldBeDeleted: this._behaviorData.ShouldBeDeleted,
    ShouldFade: this._behaviorData.ShouldFade,
    TargetX: this._behaviorData.TargetX,
    TargetY: this._behaviorData.TargetY,
    Opacity: this._behaviorData.Opacity,
    Tween: this._behaviorData.Tween,
    ShouldMove: this._behaviorData.ShouldMove,
    Delay: this._behaviorData.Delay,
    OpacityEasingIn: this._behaviorData.OpacityEasingIn,
    OpacityEasingOut: this._behaviorData.OpacityEasingOut,
    TargetOpacity: this._behaviorData.TargetOpacity,
    OriginX: this._behaviorData.OriginX,
    OriginY: this._behaviorData.OriginY,
    State: this._behaviorData.State,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData, options) {
    super.updateFromNetworkSyncData(networkSyncData, options);
    
    if (networkSyncData.props.Angle !== undefined)
      this._behaviorData.Angle = networkSyncData.props.Angle;
    if (networkSyncData.props.Duration !== undefined)
      this._behaviorData.Duration = networkSyncData.props.Duration;
    if (networkSyncData.props.Distance !== undefined)
      this._behaviorData.Distance = networkSyncData.props.Distance;
    if (networkSyncData.props.ShouldPlayAtCreation !== undefined)
      this._behaviorData.ShouldPlayAtCreation = networkSyncData.props.ShouldPlayAtCreation;
    if (networkSyncData.props.PositionEasingIn !== undefined)
      this._behaviorData.PositionEasingIn = networkSyncData.props.PositionEasingIn;
    if (networkSyncData.props.PositionEasingOut !== undefined)
      this._behaviorData.PositionEasingOut = networkSyncData.props.PositionEasingOut;
    if (networkSyncData.props.ShouldBeDeleted !== undefined)
      this._behaviorData.ShouldBeDeleted = networkSyncData.props.ShouldBeDeleted;
    if (networkSyncData.props.ShouldFade !== undefined)
      this._behaviorData.ShouldFade = networkSyncData.props.ShouldFade;
    if (networkSyncData.props.TargetX !== undefined)
      this._behaviorData.TargetX = networkSyncData.props.TargetX;
    if (networkSyncData.props.TargetY !== undefined)
      this._behaviorData.TargetY = networkSyncData.props.TargetY;
    if (networkSyncData.props.Opacity !== undefined)
      this._behaviorData.Opacity = networkSyncData.props.Opacity;
    if (networkSyncData.props.Tween !== undefined)
      this._behaviorData.Tween = networkSyncData.props.Tween;
    if (networkSyncData.props.ShouldMove !== undefined)
      this._behaviorData.ShouldMove = networkSyncData.props.ShouldMove;
    if (networkSyncData.props.Delay !== undefined)
      this._behaviorData.Delay = networkSyncData.props.Delay;
    if (networkSyncData.props.OpacityEasingIn !== undefined)
      this._behaviorData.OpacityEasingIn = networkSyncData.props.OpacityEasingIn;
    if (networkSyncData.props.OpacityEasingOut !== undefined)
      this._behaviorData.OpacityEasingOut = networkSyncData.props.OpacityEasingOut;
    if (networkSyncData.props.TargetOpacity !== undefined)
      this._behaviorData.TargetOpacity = networkSyncData.props.TargetOpacity;
    if (networkSyncData.props.OriginX !== undefined)
      this._behaviorData.OriginX = networkSyncData.props.OriginX;
    if (networkSyncData.props.OriginY !== undefined)
      this._behaviorData.OriginY = networkSyncData.props.OriginY;
    if (networkSyncData.props.State !== undefined)
      this._behaviorData.State = networkSyncData.props.State;
  }

  // Properties:
  
  _getAngle() {
    return this._behaviorData.Angle !== undefined ? this._behaviorData.Angle : Number("90") || 0;
  }
  _setAngle(newValue) {
    this._behaviorData.Angle = newValue;
  }
  _getDuration() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("0.5") || 0;
  }
  _setDuration(newValue) {
    this._behaviorData.Duration = newValue;
  }
  _getDistance() {
    return this._behaviorData.Distance !== undefined ? this._behaviorData.Distance : Number("0") || 0;
  }
  _setDistance(newValue) {
    this._behaviorData.Distance = newValue;
  }
  _getShouldPlayAtCreation() {
    return this._behaviorData.ShouldPlayAtCreation !== undefined ? this._behaviorData.ShouldPlayAtCreation : true;
  }
  _setShouldPlayAtCreation(newValue) {
    this._behaviorData.ShouldPlayAtCreation = newValue;
  }
  _toggleShouldPlayAtCreation() {
    this._setShouldPlayAtCreation(!this._getShouldPlayAtCreation());
  }
  _getPositionEasingIn() {
    return this._behaviorData.PositionEasingIn !== undefined ? this._behaviorData.PositionEasingIn : "easeFromTo";
  }
  _setPositionEasingIn(newValue) {
    this._behaviorData.PositionEasingIn = newValue;
  }
  _getPositionEasingOut() {
    return this._behaviorData.PositionEasingOut !== undefined ? this._behaviorData.PositionEasingOut : "easeOutQuad";
  }
  _setPositionEasingOut(newValue) {
    this._behaviorData.PositionEasingOut = newValue;
  }
  _getShouldBeDeleted() {
    return this._behaviorData.ShouldBeDeleted !== undefined ? this._behaviorData.ShouldBeDeleted : true;
  }
  _setShouldBeDeleted(newValue) {
    this._behaviorData.ShouldBeDeleted = newValue;
  }
  _toggleShouldBeDeleted() {
    this._setShouldBeDeleted(!this._getShouldBeDeleted());
  }
  _getShouldFade() {
    return this._behaviorData.ShouldFade !== undefined ? this._behaviorData.ShouldFade : true;
  }
  _setShouldFade(newValue) {
    this._behaviorData.ShouldFade = newValue;
  }
  _toggleShouldFade() {
    this._setShouldFade(!this._getShouldFade());
  }
  _getTargetX() {
    return this._behaviorData.TargetX !== undefined ? this._behaviorData.TargetX : Number("0") || 0;
  }
  _setTargetX(newValue) {
    this._behaviorData.TargetX = newValue;
  }
  _getTargetY() {
    return this._behaviorData.TargetY !== undefined ? this._behaviorData.TargetY : Number("0") || 0;
  }
  _setTargetY(newValue) {
    this._behaviorData.TargetY = newValue;
  }
  _getOpacity() {
    return this._behaviorData.Opacity !== undefined ? this._behaviorData.Opacity : "";
  }
  _setOpacity(newValue) {
    this._behaviorData.Opacity = newValue;
  }
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
  _getShouldMove() {
    return this._behaviorData.ShouldMove !== undefined ? this._behaviorData.ShouldMove : true;
  }
  _setShouldMove(newValue) {
    this._behaviorData.ShouldMove = newValue;
  }
  _toggleShouldMove() {
    this._setShouldMove(!this._getShouldMove());
  }
  _getDelay() {
    return this._behaviorData.Delay !== undefined ? this._behaviorData.Delay : Number("0") || 0;
  }
  _setDelay(newValue) {
    this._behaviorData.Delay = newValue;
  }
  _getOpacityEasingIn() {
    return this._behaviorData.OpacityEasingIn !== undefined ? this._behaviorData.OpacityEasingIn : "easeInQuad";
  }
  _setOpacityEasingIn(newValue) {
    this._behaviorData.OpacityEasingIn = newValue;
  }
  _getOpacityEasingOut() {
    return this._behaviorData.OpacityEasingOut !== undefined ? this._behaviorData.OpacityEasingOut : "easeOutQuad";
  }
  _setOpacityEasingOut(newValue) {
    this._behaviorData.OpacityEasingOut = newValue;
  }
  _getTargetOpacity() {
    return this._behaviorData.TargetOpacity !== undefined ? this._behaviorData.TargetOpacity : Number("255") || 0;
  }
  _setTargetOpacity(newValue) {
    this._behaviorData.TargetOpacity = newValue;
  }
  _getOriginX() {
    return this._behaviorData.OriginX !== undefined ? this._behaviorData.OriginX : Number("0") || 0;
  }
  _setOriginX(newValue) {
    this._behaviorData.OriginX = newValue;
  }
  _getOriginY() {
    return this._behaviorData.OriginY !== undefined ? this._behaviorData.OriginY : Number("0") || 0;
  }
  _setOriginY(newValue) {
    this._behaviorData.OriginY = newValue;
  }
  _getState() {
    return this._behaviorData.State !== undefined ? this._behaviorData.State : "JustCreated";
  }
  _setState(newValue) {
    this._behaviorData.State = newValue;
  }
}

/**
 * Shared data generated from Tween into view
 */
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.SharedData = class TweenIntoViewSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TweenIntoView_TweenIntoViewSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TweenIntoView_TweenIntoViewSharedData = new gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.SharedData(
      initialData
    );
  }
  return instanceContainer._TweenIntoView_TweenIntoViewSharedData;
}

// Methods:
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldPlayAtCreation();
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).TweenIn(eventsFunctionContext);
}
}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldMove();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionTween2("TweenIntoView_Move", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPositionEasingIn(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration(), false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldFade();
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween2("TweenIntoView_Fade", eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetOpacity(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOpacityEasingIn(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration() * 0.8, false);
}
}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldMove();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1, gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionTween2("TweenIntoView_Move", (gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).OriginX(eventsFunctionContext)), (gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).OriginY(eventsFunctionContext)), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPositionEasingOut(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration(), false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldFade();
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectOpacityTween2("TweenIntoView_Fade", 0, eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOpacityEasingOut(), eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration() * 0.8, false);
}
}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldBeDeleted();
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "JustCreated");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("Ready")
}

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("TweenIntoView_FadeInDelay") >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDelay() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].removeTimer("TweenIntoView_FadeInDelay");
}
}
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].resetTimer("TweenIntoView_FadeIn");
}
}

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("TweenIntoView_FadeIn") >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("FadedIn")
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("TweenIntoView_FadeOutDelay") >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDelay() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].removeTimer("TweenIntoView_FadeOutDelay");
}
}
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].resetTimer("TweenIntoView_FadeOut");
}
}

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("TweenIntoView_FadeOut") >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("FadedOut")
}

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TweenIntoView"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TweenIntoView"),
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

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.eventsList4(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext = {};
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.idToCallbackMap = new Map();
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects2= [];


gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = gdjs.evtTools.camera.getCameraBorderLeft(runtimeScene, (( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1[0].getLayer()), 0) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX() - (( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1[0].getAABBRight());}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = gdjs.evtTools.camera.getCameraBorderRight(runtimeScene, (( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1[0].getLayer()), 0) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX() - (( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1[0].getAABBLeft());}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX();}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() == 0);
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance();}

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() == 180);
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance();}

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginX = function(parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TweenIntoView"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TweenIntoView"),
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

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext = {};
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.idToCallbackMap = new Map();
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects1= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects2= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects3= [];


gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects2);
{eventsFunctionContext.returnValue = gdjs.evtTools.camera.getCameraBorderTop(runtimeScene, (( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects2[0].getLayer()), 0) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY() - (( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects2[0].getAABBBottom());}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance() == 0);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects1);
{eventsFunctionContext.returnValue = gdjs.evtTools.camera.getCameraBorderBottom(runtimeScene, (( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects1.length === 0 ) ? "" :gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects1[0].getLayer()), 0) + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY() - (( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects1[0].getAABBTop());}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() == 90);
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY() - eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance();}

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAngle() == 270);
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY() + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDistance();}

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY();}

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginY = function(parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TweenIntoView"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TweenIntoView"),
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

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.OriginYContext.GDObjectObjects3.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext = {};
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.idToCallbackMap = new Map();
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects3= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects4= [];


gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldMove();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1, gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects3[i].setX((gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).OriginX(eventsFunctionContext)));
}
}
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects3[i].setY((gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).OriginY(eventsFunctionContext)));
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldFade();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1, gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(0);
}
}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "JustStarted");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Ready");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1, gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2);

{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetX((( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2[0].getX()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetY((( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2[0].getY()))
}
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTargetOpacity((( gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).getOpacity()))
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "JustStarted");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "Ready");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "FadedIn");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("FadingIn")
}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() != "FadingIn");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1[i].resetTimer("TweenIntoView_FadeInDelay");
}
}
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).stopTween("TweenIntoView_Move", false);
}
}
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).stopTween("TweenIntoView_Fade", false);
}
}
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1[i].removeTimer("TweenIntoView_FadeOut");
}
}

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenIn = function(parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TweenIntoView"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TweenIntoView"),
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

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenInContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext = {};
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.idToCallbackMap = new Map();
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects2= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects3= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects4= [];


gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldMove();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1, gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects3[i].setX(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetX());
}
}
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects3[i].setY(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetY());
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getShouldFade();
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1, gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Opacity")).setOpacity(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTargetOpacity());
}
}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "FadedOut");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setState("FadingOut")
}
}

}


};gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() != "FadingOut");
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1[i].resetTimer("TweenIntoView_FadeOutDelay");
}
}
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).stopTween("TweenIntoView_Move", false);
}
}
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).stopTween("TweenIntoView_Fade", false);
}
}
{for(var i = 0, len = gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1[i].removeTimer("TweenIntoView_FadeIn");
}
}

{ //Subevents
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOut = function(parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TweenIntoView"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TweenIntoView"),
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

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.TweenOutContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedInContext = {};
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedInContext.idToCallbackMap = new Map();
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedInContext.GDObjectObjects1= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedInContext.GDObjectObjects2= [];


gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedInContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "FadedIn");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedIn = function(parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TweenIntoView"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TweenIntoView"),
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

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedInContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedInContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedInContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedInContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedOutContext = {};
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedOutContext.idToCallbackMap = new Map();
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedOutContext.GDObjectObjects1= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedOutContext.GDObjectObjects2= [];


gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedOutContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getState() == "FadedOut");
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedOut = function(parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TweenIntoView"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TweenIntoView"),
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

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedOutContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedOutContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedOutContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.IsTweenedOutContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.SetShouldBeDeletedContext = {};
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.SetShouldBeDeletedContext.idToCallbackMap = new Map();
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.SetShouldBeDeletedContext.GDObjectObjects1= [];
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.SetShouldBeDeletedContext.GDObjectObjects2= [];


gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.SetShouldBeDeletedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldBeDeleted(false)
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setShouldBeDeleted(true)
}
}

}


};

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.SetShouldBeDeleted = function(Value, parentEventsFunctionContext) {

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
, "Opacity": this._getOpacity()
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TweenIntoView"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TweenIntoView"),
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

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.SetShouldBeDeletedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.SetShouldBeDeletedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.SetShouldBeDeletedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.SetShouldBeDeletedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.SetShouldBeDeletedContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("TweenIntoView::TweenIntoView", gdjs.evtsExt__TweenIntoView__TweenIntoView.TweenIntoView);
