#pragma strict

var speed: float = 2;
var snowflake: GameObject;

function Update () {
	transform.Translate(Vector2(0f, -speed)*Time.deltaTime);

	if (transform.position.y < -5.2){
		Destroy(snowflake);
	}
}