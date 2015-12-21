#pragma strict

var speed: float;
var health: int = 5;
var fallspeed: float = 0;
var score: int = 0;
public var heart1: GameObject;
public var heart2: GameObject;
public var heart3: GameObject;
public var heart4: GameObject;
public var heart5: GameObject;
public var player: GameObject;
public var gameoverpic: GameObject;
public var scoreboard: GUIText;

function Start() {
	speed = 1.15f;
}

function OnTriggerEnter2D (other: Collider2D){
	if (other.gameObject.tag == "coal"){
		Debug.Log("death");
		health -= 1;
		lowerHealth();
	}
	if (other.gameObject.tag == "gift"){
		score += 1;
		Debug.Log(score);
		OnGUI();
	}
}

function Update () {

	if ( Input.GetKey(KeyCode.N) ) {
		transform.Translate(Vector2(0f, speed) * Time.deltaTime);
	}
	if ( Input.GetKey(KeyCode.M) ) {
		transform.Translate(Vector2(0f, -speed) * Time.deltaTime);
	}

	if (transform.position.y > 1.25f){
		transform.position.y = 1.25f;
	}
	if (transform.position.y < -1.25f){
		transform.position.y = -1.25f;
	}
	if ( Input.GetKey(KeyCode.P) ) {
		gameOver();
	}

	transform.Translate(Vector2(-fallspeed, 0f) * Time.deltaTime);
	if (transform.position.x < -3.5f) {
		Destroy(player);
		Instantiate (gameoverpic, Vector3(0, 0, -3), Quaternion.identity);
	}
}

function lowerHealth () {
	if (health == 4){
		Destroy(heart5);
	}
	if (health == 3){
		Destroy(heart4);
	}
	if (health == 2){
		Destroy(heart3);
	}
	if (health == 1){
		Destroy(heart2);
	}
	if (health == 0){
		Destroy(heart1);
		gameOver();
	}
}

function OnGUI(){
	Debug.Log(score);
	scoreboard.text = "" + score;
}

function gameOver () {
	fallspeed = 1.2f;
}