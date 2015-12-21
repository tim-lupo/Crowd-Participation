#pragma strict

public var coal: GameObject;
public var gift: GameObject;
public var black: GameObject;
var blackFade: boolean = false;
var blackfade: float = 1;

function Start () {
	Spawn();
	spawnGift();
	black.GetComponent.<Renderer>().material.color.a = blackfade;
	blackFade = true;
}

function Update(){
	if (blackFade == true && blackfade > 0f){
		blackfade -= .05f;
		Debug.Log(blackfade);
		black.GetComponent.<Renderer>().material.color.a = blackfade;
	}
}

function Time() {
	Spawn();
}

function Spawn() {
	yield WaitForSeconds(4);
	spawnCoal();
	yield WaitForSeconds(4);
	spawnGift();
	Time();
}

function spawnCoal () {
	Instantiate (coal, Vector3(3f, Random.Range(-1.25f, 1.25f), -1.5f), Quaternion.identity);
	Debug.Log("coal spawned");
}

function spawnGift () {
	Instantiate (gift, Vector3(3f, Random.Range(-1.25f, 1.25f), -1.5f), Quaternion.identity);
	Debug.Log("gift spawned");
}