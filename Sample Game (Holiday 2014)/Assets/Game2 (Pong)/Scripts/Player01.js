#pragma strict

var fastSpeed: float=6f;
var slowSpeed: float=4f;

function Update () 
{
	
	//Player1 Internal Controller (D and E to move Up and Down)
	if ( Input.GetKey(KeyCode.E) ) {
		transform.Translate(Vector2(0,fastSpeed) * Time.deltaTime);
	}
	if ( Input.GetKey(KeyCode.D) ) {
		transform.Translate(Vector2(0,-fastSpeed) * Time.deltaTime);
	}
	if ( Input.GetKey(KeyCode.R) ) {
		transform.Translate(Vector2(0,slowSpeed) * Time.deltaTime);
	}
	if ( Input.GetKey(KeyCode.F) ) {
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