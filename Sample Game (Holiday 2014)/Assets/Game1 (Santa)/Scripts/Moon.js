#pragma strict

public var speed: float = 0;
public var gameoverpic: GameObject;

function Start (){
	yield WaitForSeconds(1);
	speed = 0.04f;
}

function Update () {

	transform.Translate(Vector2(-speed, 0)*Time.deltaTime);
	
	if (transform.position.x < -3){
		gameOver();
	}
}

function gameOver () {
	Instantiate (gameoverpic, Vector3(0, 0, -2), Quaternion.identity);
}