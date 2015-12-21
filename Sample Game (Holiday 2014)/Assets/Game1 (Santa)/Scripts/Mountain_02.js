#pragma strict

public var speed: float;

function Update () {
	transform.Translate(Vector2(-speed, 0)*Time.deltaTime);

	if (transform.position.x < -4.6){
		transform.position.x = 4.6;
	}
}