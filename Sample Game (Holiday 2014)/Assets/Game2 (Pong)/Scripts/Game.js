#pragma strict

public var snowflake: GameObject;
public var black: GameObject;
var blackfade: float = 1;
var blackFade: boolean = false;

function Start(){
	Spawn();
	blackFade = true;
}

function Repeat(){
	Spawn();
}

function Spawn(){
	Snow1();
	yield WaitForSeconds(.5);
	Snow2();
	yield WaitForSeconds(.5);
	Repeat();
}

function Snow1(){
	Instantiate (snowflake, Vector3(Random.Range(11f, 5.5f), 5f, .5f), Quaternion.identity);
	Instantiate (snowflake, Vector3(Random.Range(5.5f, 0), 5f, .5f), Quaternion.identity);
}

function Snow2(){
	Instantiate (snowflake, Vector3(Random.Range(0f, -5.5f), 5f, .5f), Quaternion.identity);
	Instantiate (snowflake, Vector3(Random.Range(-5.5f, -11f), 5f, .5f), Quaternion.identity);
}

function Update () {
	if ( Input.GetKey(KeyCode.P)) {
		Application.LoadLevel ("Game2");
	}

	if (blackFade == true && blackfade > 0f){
		blackfade -= .05f;
	}
	black.GetComponent.<Renderer>().material.color.a = blackfade;
	// if (blackfade <= 0){
	// 	Destroy(black);
	// }
}