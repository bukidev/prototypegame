gdjs.Level01Code = {};
gdjs.Level01Code.GDgroundObjects1= [];
gdjs.Level01Code.GDgroundObjects2= [];
gdjs.Level01Code.GDgroundObjects3= [];
gdjs.Level01Code.GDgroundObjects4= [];
gdjs.Level01Code.GDplayerCollisObjects1= [];
gdjs.Level01Code.GDplayerCollisObjects2= [];
gdjs.Level01Code.GDplayerCollisObjects3= [];
gdjs.Level01Code.GDplayerCollisObjects4= [];
gdjs.Level01Code.GDladderObjects1= [];
gdjs.Level01Code.GDladderObjects2= [];
gdjs.Level01Code.GDladderObjects3= [];
gdjs.Level01Code.GDladderObjects4= [];
gdjs.Level01Code.GDthroughObjects1= [];
gdjs.Level01Code.GDthroughObjects2= [];
gdjs.Level01Code.GDthroughObjects3= [];
gdjs.Level01Code.GDthroughObjects4= [];
gdjs.Level01Code.GDplayerObjects1= [];
gdjs.Level01Code.GDplayerObjects2= [];
gdjs.Level01Code.GDplayerObjects3= [];
gdjs.Level01Code.GDplayerObjects4= [];
gdjs.Level01Code.GDbg1Objects1= [];
gdjs.Level01Code.GDbg1Objects2= [];
gdjs.Level01Code.GDbg1Objects3= [];
gdjs.Level01Code.GDbg1Objects4= [];
gdjs.Level01Code.GDbg2Objects1= [];
gdjs.Level01Code.GDbg2Objects2= [];
gdjs.Level01Code.GDbg2Objects3= [];
gdjs.Level01Code.GDbg2Objects4= [];
gdjs.Level01Code.GDNewObjectObjects1= [];
gdjs.Level01Code.GDNewObjectObjects2= [];
gdjs.Level01Code.GDNewObjectObjects3= [];
gdjs.Level01Code.GDNewObjectObjects4= [];
gdjs.Level01Code.GDstarObjects1= [];
gdjs.Level01Code.GDstarObjects2= [];
gdjs.Level01Code.GDstarObjects3= [];
gdjs.Level01Code.GDstarObjects4= [];
gdjs.Level01Code.GDstarPointObjects1= [];
gdjs.Level01Code.GDstarPointObjects2= [];
gdjs.Level01Code.GDstarPointObjects3= [];
gdjs.Level01Code.GDstarPointObjects4= [];
gdjs.Level01Code.GDholeCollisObjects1= [];
gdjs.Level01Code.GDholeCollisObjects2= [];
gdjs.Level01Code.GDholeCollisObjects3= [];
gdjs.Level01Code.GDholeCollisObjects4= [];

gdjs.Level01Code.conditionTrue_0 = {val:false};
gdjs.Level01Code.condition0IsTrue_0 = {val:false};
gdjs.Level01Code.condition1IsTrue_0 = {val:false};


gdjs.Level01Code.eventsList0x6829c0 = function(runtimeScene) {

{


gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
gdjs.Level01Code.GDplayerObjects3.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.Level01Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.Level01Code.GDplayerObjects3[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.Level01Code.GDplayerObjects3.length ;i < len;++i) {
    gdjs.Level01Code.GDplayerObjects3[i].flipX(false);
}
}}

}


{


gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
gdjs.Level01Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.Level01Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDplayerObjects2[i].setAnimationName("run");
}
}{for(var i = 0, len = gdjs.Level01Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDplayerObjects2[i].flipX(true);
}
}}

}


}; //End of gdjs.Level01Code.eventsList0x6829c0
gdjs.Level01Code.eventsList0x682840 = function(runtimeScene) {

{

gdjs.Level01Code.GDplayerCollisObjects2.createFrom(gdjs.Level01Code.GDplayerCollisObjects1);


gdjs.Level01Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level01Code.GDplayerCollisObjects2.length;i<l;++i) {
    if ( gdjs.Level01Code.GDplayerCollisObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Level01Code.condition0IsTrue_0.val = true;
        gdjs.Level01Code.GDplayerCollisObjects2[k] = gdjs.Level01Code.GDplayerCollisObjects2[i];
        ++k;
    }
}
gdjs.Level01Code.GDplayerCollisObjects2.length = k;}if (gdjs.Level01Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level01Code.eventsList0x6829c0(runtimeScene);} //End of subevents
}

}


{

gdjs.Level01Code.GDplayerCollisObjects2.createFrom(gdjs.Level01Code.GDplayerCollisObjects1);


gdjs.Level01Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level01Code.GDplayerCollisObjects2.length;i<l;++i) {
    if ( !(gdjs.Level01Code.GDplayerCollisObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Level01Code.condition0IsTrue_0.val = true;
        gdjs.Level01Code.GDplayerCollisObjects2[k] = gdjs.Level01Code.GDplayerCollisObjects2[i];
        ++k;
    }
}
gdjs.Level01Code.GDplayerCollisObjects2.length = k;}if (gdjs.Level01Code.condition0IsTrue_0.val) {
gdjs.Level01Code.GDplayerObjects2.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.Level01Code.GDplayerObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDplayerObjects2[i].setAnimationName("idle");
}
}}

}


{

/* Reuse gdjs.Level01Code.GDplayerCollisObjects1 */

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level01Code.GDplayerCollisObjects1.length;i<l;++i) {
    if ( gdjs.Level01Code.GDplayerCollisObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Level01Code.condition0IsTrue_0.val = true;
        gdjs.Level01Code.GDplayerCollisObjects1[k] = gdjs.Level01Code.GDplayerCollisObjects1[i];
        ++k;
    }
}
gdjs.Level01Code.GDplayerCollisObjects1.length = k;}if (gdjs.Level01Code.condition0IsTrue_0.val) {
gdjs.Level01Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.Level01Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDplayerObjects1[i].setAnimationName("jump");
}
}}

}


}; //End of gdjs.Level01Code.eventsList0x682840
gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDplayerCollisObjects1Objects = Hashtable.newFrom({"playerCollis": gdjs.Level01Code.GDplayerCollisObjects1});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDstarObjects1Objects = Hashtable.newFrom({"star": gdjs.Level01Code.GDstarObjects1});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDplayerCollisObjects1Objects = Hashtable.newFrom({"playerCollis": gdjs.Level01Code.GDplayerCollisObjects1});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDholeCollisObjects1Objects = Hashtable.newFrom({"holeCollis": gdjs.Level01Code.GDholeCollisObjects1});gdjs.Level01Code.eventsList0xb0b28 = function(runtimeScene) {

{


gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sound\\Patriotic_March.ogg", true, 25, 1);
}}

}


{



}


{


{
gdjs.Level01Code.GDplayerCollisObjects1.createFrom(runtimeScene.getObjects("playerCollis"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level01Code.GDplayerCollisObjects1.length === 0 ) ? 0 :gdjs.Level01Code.GDplayerCollisObjects1[0].getPointX("")), "", 0);
}}

}


{


{
gdjs.Level01Code.GDplayerCollisObjects1.createFrom(runtimeScene.getObjects("playerCollis"));
{gdjs.evtTools.camera.setCameraY(runtimeScene, (( gdjs.Level01Code.GDplayerCollisObjects1.length === 0 ) ? 0 :gdjs.Level01Code.GDplayerCollisObjects1[0].getPointY("")), "", 0);
}}

}


{


{
gdjs.Level01Code.GDplayerCollisObjects1.createFrom(runtimeScene.getObjects("playerCollis"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level01Code.GDplayerCollisObjects1.length === 0 ) ? 0 :gdjs.Level01Code.GDplayerCollisObjects1[0].getPointX(""))*0.1, "bg1", 0);
}}

}


{


{
}

}


{


{
gdjs.Level01Code.GDplayerCollisObjects1.createFrom(runtimeScene.getObjects("playerCollis"));
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.Level01Code.GDplayerCollisObjects1.length === 0 ) ? 0 :gdjs.Level01Code.GDplayerCollisObjects1[0].getPointX(""))*0.5, "bg2", 0);
}}

}


{


{
}

}


{



}


{


{
gdjs.Level01Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
gdjs.Level01Code.GDplayerCollisObjects1.createFrom(runtimeScene.getObjects("playerCollis"));
{for(var i = 0, len = gdjs.Level01Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDplayerObjects1[i].setPosition((( gdjs.Level01Code.GDplayerCollisObjects1.length === 0 ) ? 0 :gdjs.Level01Code.GDplayerCollisObjects1[0].getPointX(""))-10,(( gdjs.Level01Code.GDplayerCollisObjects1.length === 0 ) ? 0 :gdjs.Level01Code.GDplayerCollisObjects1[0].getPointY(""))-8);
}
}}

}


{

gdjs.Level01Code.GDplayerCollisObjects1.createFrom(runtimeScene.getObjects("playerCollis"));

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level01Code.GDplayerCollisObjects1.length;i<l;++i) {
    if ( gdjs.Level01Code.GDplayerCollisObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Level01Code.condition0IsTrue_0.val = true;
        gdjs.Level01Code.GDplayerCollisObjects1[k] = gdjs.Level01Code.GDplayerCollisObjects1[i];
        ++k;
    }
}
gdjs.Level01Code.GDplayerCollisObjects1.length = k;}if (gdjs.Level01Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Level01Code.eventsList0x682840(runtimeScene);} //End of subevents
}

}


{

gdjs.Level01Code.GDplayerCollisObjects1.createFrom(runtimeScene.getObjects("playerCollis"));

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level01Code.GDplayerCollisObjects1.length;i<l;++i) {
    if ( gdjs.Level01Code.GDplayerCollisObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Level01Code.condition0IsTrue_0.val = true;
        gdjs.Level01Code.GDplayerCollisObjects1[k] = gdjs.Level01Code.GDplayerCollisObjects1[i];
        ++k;
    }
}
gdjs.Level01Code.GDplayerCollisObjects1.length = k;}if (gdjs.Level01Code.condition0IsTrue_0.val) {
gdjs.Level01Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.Level01Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDplayerObjects1[i].setAnimationName("falling");
}
}}

}


{

gdjs.Level01Code.GDplayerCollisObjects1.createFrom(runtimeScene.getObjects("playerCollis"));

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Level01Code.GDplayerCollisObjects1.length;i<l;++i) {
    if ( gdjs.Level01Code.GDplayerCollisObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        gdjs.Level01Code.condition0IsTrue_0.val = true;
        gdjs.Level01Code.GDplayerCollisObjects1[k] = gdjs.Level01Code.GDplayerCollisObjects1[i];
        ++k;
    }
}
gdjs.Level01Code.GDplayerCollisObjects1.length = k;}if (gdjs.Level01Code.condition0IsTrue_0.val) {
gdjs.Level01Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.Level01Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDplayerObjects1[i].setAnimationName("climbing");
}
}}

}


{


{
}

}


{


{
}

}


{



}


{

gdjs.Level01Code.GDplayerCollisObjects1.createFrom(runtimeScene.getObjects("playerCollis"));
gdjs.Level01Code.GDstarObjects1.createFrom(runtimeScene.getObjects("star"));

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDplayerCollisObjects1Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDstarObjects1Objects, false, runtimeScene);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDstarObjects1 */
gdjs.Level01Code.GDstarPointObjects1.createFrom(runtimeScene.getObjects("starPoint"));
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Level01Code.GDstarPointObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDstarPointObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Level01Code.GDstarObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDstarObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{



}


{

gdjs.Level01Code.GDholeCollisObjects1.createFrom(runtimeScene.getObjects("holeCollis"));
gdjs.Level01Code.GDplayerCollisObjects1.createFrom(runtimeScene.getObjects("playerCollis"));

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDplayerCollisObjects1Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDholeCollisObjects1Objects, false, runtimeScene);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
gdjs.Level01Code.GDplayerObjects1.createFrom(runtimeScene.getObjects("player"));
{for(var i = 0, len = gdjs.Level01Code.GDplayerObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDplayerObjects1[i].setAnimationName("hurt");
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level01");
}}

}


}; //End of gdjs.Level01Code.eventsList0xb0b28


gdjs.Level01Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.Level01Code.GDgroundObjects1.length = 0;
gdjs.Level01Code.GDgroundObjects2.length = 0;
gdjs.Level01Code.GDgroundObjects3.length = 0;
gdjs.Level01Code.GDgroundObjects4.length = 0;
gdjs.Level01Code.GDplayerCollisObjects1.length = 0;
gdjs.Level01Code.GDplayerCollisObjects2.length = 0;
gdjs.Level01Code.GDplayerCollisObjects3.length = 0;
gdjs.Level01Code.GDplayerCollisObjects4.length = 0;
gdjs.Level01Code.GDladderObjects1.length = 0;
gdjs.Level01Code.GDladderObjects2.length = 0;
gdjs.Level01Code.GDladderObjects3.length = 0;
gdjs.Level01Code.GDladderObjects4.length = 0;
gdjs.Level01Code.GDthroughObjects1.length = 0;
gdjs.Level01Code.GDthroughObjects2.length = 0;
gdjs.Level01Code.GDthroughObjects3.length = 0;
gdjs.Level01Code.GDthroughObjects4.length = 0;
gdjs.Level01Code.GDplayerObjects1.length = 0;
gdjs.Level01Code.GDplayerObjects2.length = 0;
gdjs.Level01Code.GDplayerObjects3.length = 0;
gdjs.Level01Code.GDplayerObjects4.length = 0;
gdjs.Level01Code.GDbg1Objects1.length = 0;
gdjs.Level01Code.GDbg1Objects2.length = 0;
gdjs.Level01Code.GDbg1Objects3.length = 0;
gdjs.Level01Code.GDbg1Objects4.length = 0;
gdjs.Level01Code.GDbg2Objects1.length = 0;
gdjs.Level01Code.GDbg2Objects2.length = 0;
gdjs.Level01Code.GDbg2Objects3.length = 0;
gdjs.Level01Code.GDbg2Objects4.length = 0;
gdjs.Level01Code.GDNewObjectObjects1.length = 0;
gdjs.Level01Code.GDNewObjectObjects2.length = 0;
gdjs.Level01Code.GDNewObjectObjects3.length = 0;
gdjs.Level01Code.GDNewObjectObjects4.length = 0;
gdjs.Level01Code.GDstarObjects1.length = 0;
gdjs.Level01Code.GDstarObjects2.length = 0;
gdjs.Level01Code.GDstarObjects3.length = 0;
gdjs.Level01Code.GDstarObjects4.length = 0;
gdjs.Level01Code.GDstarPointObjects1.length = 0;
gdjs.Level01Code.GDstarPointObjects2.length = 0;
gdjs.Level01Code.GDstarPointObjects3.length = 0;
gdjs.Level01Code.GDstarPointObjects4.length = 0;
gdjs.Level01Code.GDholeCollisObjects1.length = 0;
gdjs.Level01Code.GDholeCollisObjects2.length = 0;
gdjs.Level01Code.GDholeCollisObjects3.length = 0;
gdjs.Level01Code.GDholeCollisObjects4.length = 0;

gdjs.Level01Code.eventsList0xb0b28(runtimeScene);
return;
}
gdjs['Level01Code'] = gdjs.Level01Code;
