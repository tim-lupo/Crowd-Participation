#pragma strict

public var gradient: GameObject;
public var pongTitle: GameObject;
public var player1: GameObject;
public var player2: GameObject;
public var snowflake: GameObject;
public var black: GameObject;
var fade: float = 0;
var blackfade: float = 0;
var isFade: boolean = false;
var blackFade: boolean = false;

function Start () {
	Spawn();
	gradient.GetComponent.<Renderer>().material.color.a = 0.2f;
	pongTitle.GetComponent.<Renderer>().material.color.a = 0;
	black.GetComponent.<Renderer>().material.color.a = 0;
	yield WaitForSeconds(5);
}

function Update(){
	if (Input.GetKeyDown(KeyCode.L)){
		isFade = true;
		player1.SetActive(false);
		player2.SetActive(false);
		LoadGame();
	}

	if (isFade == true && fade < 1f){
		fade += .005f;
	}

	if (blackFade == true && blackfade < 1f){
		blackfade += .05f;
	}

	pongTitle.GetComponent.<Renderer>().material.color.a = fade;
	black.GetComponent.<Renderer>().material.color.a = blackfade;
}

function LoadGame(){
	yield WaitForSeconds(9);
	Debug.Log("fade to black");
	blackFade = true;
	yield WaitForSeconds(1);
	Debug.Log("Loading Pong");
	Application.LoadLevel("Game2");
}

function Repeat(){
	Spawn();
}

function Spawn(){
	if (isFade == true){
		Debug.Log("true");
		Snow1();
		yield WaitForSeconds(.5);
		Snow2();
		yield WaitForSeconds(.5);
		Repeat();
	}
	else {
		Instantiate (snowflake, Vector3(0, 5f, -1.5f), Quaternion.identity);
		yield WaitForSeconds(.5f);
		Repeat();
	}
}

function Snow1(){
	Instantiate (snowflake, Vector3(Random.Range(11f, 5.5f), 5f, -3.5f), Quaternion.identity);
	Instantiate (snowflake, Vector3(Random.Range(5.5f, 0), 5f, -3.5f), Quaternion.identity);
}

function Snow2(){
	Instantiate (snowflake, Vector3(Random.Range(0f, -5.5f), 5f, -3.5f), Quaternion.identity);
	Instantiate (snowflake, Vector3(Random.Range(-5.5f, -11f), 5f, -3.5f), Quaternion.identity);
}