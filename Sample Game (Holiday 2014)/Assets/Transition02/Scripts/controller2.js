#pragma strict

public var gradient: GameObject;
public var santaTitle: GameObject;
public var player: GameObject;
public var black1: GameObject;
public var black2: GameObject;
var fade: float = 0;
var isFade: boolean = false;
var blackfade1: float = 0f;
var blackFade1: boolean = false;
var blackfade2: float = 1f;
var blackFade2: boolean = false;

function Start () {
	player.SetActive(false);
	blackfade2 = 1;
	gradient.GetComponent.<Renderer>().material.color.a = 0.2f;
	santaTitle.GetComponent.<Renderer>().material.color.a = 0f;
	black1.GetComponent.<Renderer>().material.color.a = 0f;
	black2.GetComponent.<Renderer>().material.color.a = 1f;
	blackFade2 = true;
	yield WaitForSeconds(.35);
	player.SetActive(true);
}

function Update(){
	if (Input.GetKeyDown(KeyCode.L)){
		isFade = true;
		player.SetActive(false);
		LoadGame();
	}

	if (isFade == true && fade < 1f){
		fade += .005f;
	}

	if (blackFade1 == true && blackfade1 < 1f){
		blackfade1 += .05f;
		black1.GetComponent.<Renderer>().material.color.a = blackfade1;
	}
	if (blackFade2 == true && blackfade2 > 0f){
		blackfade2 -= .05f;
		Debug.Log(blackfade2);
		black2.GetComponent.<Renderer>().material.color.a = blackfade2;
	}

	santaTitle.GetComponent.<Renderer>().material.color.a = fade;
}

function LoadGame(){
	yield WaitForSeconds(9);
	Debug.Log("fade to black");
	blackFade1 = true;
	yield WaitForSeconds(1);
	Debug.Log("Loading Santa");
	Application.LoadLevel("Game1");
}