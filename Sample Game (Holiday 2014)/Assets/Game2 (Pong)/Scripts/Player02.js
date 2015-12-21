#pragma strict

var fastSpeed: float=10f;
var slowSpeed: float=5f;

function Update () {
	if ( Input.GetKey(KeyCode.W) ) {
		transform.Translate(Vector2(0,fastSpeed) * Time.deltaTime);
	}
	if ( Input.GetKey(KeyCode.S) ) {
		transform.Translate(Vector2(0,-fastSpeed) * Time.deltaTime);
	}
	if ( Input.GetKey(KeyCode.Q) ) {
		transform.Translate(Vector2(0,slowSpeed) * Time.deltaTime);
	}
	if ( Input.GetKey(KeyCode.A) ) {
		transform.Translate(Vector2(0,-slowSpeed) * Time.deltaTime);
	}
			
	//Check top bounds
	if(transform.position.y > 3.15) {
		transform.position.y = 3.15;
	}
	
	//Check bottom bounds
	if(transform.position.y < -3.15) {
		transform.position.y = -3.15;
	}
}