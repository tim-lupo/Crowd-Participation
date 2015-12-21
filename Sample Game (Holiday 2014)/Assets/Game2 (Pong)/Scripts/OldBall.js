#pragma strict

//Variables
var speed: float=.5;
var constantSpeed: float=.5;
static var player1Score:int = 0;
static var player2Score:int = 0;
var player1Collider:BoxCollider2D;
var player2Collider:BoxCollider2D;
var launchReady: boolean;
var Player1:SpriteRenderer;
var Player2:SpriteRenderer;
static var x = .015;
static var y = .0075;
static var k = player1Score;
static var j = player2Score;
public var drbath: Sprite;
public var mrdavis: Sprite;
public var mrlang: Sprite;

function Start () {

	Reset();
	x = .015;
	y = .0075;
	
	//Starts Score
	player1Score = 0;
	player2Score = 0;

}

function Reset(){

	//Change the Sprite on Reset
	var choice: int = Random.Range(0, 3);
	switch (choice){
		case 0:
			GetComponent(SpriteRenderer).sprite = drbath;
			break;
		case 1:
			GetComponent(SpriteRenderer).sprite = mrdavis;
			break;
		case 2:
			GetComponent(SpriteRenderer).sprite = mrlang;
			break;
	}

	Debug.Log(x);
	Debug.Log(y);
	yield WaitForSeconds(2);
	launchReady = true;

	if (launchReady) {
		
		//Adds Random Force
		var random = Random.Range (0,1.000000000000001);
		
		if (random <= .25) {
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (x, y));
		//Debug.Log(random);
		}
		if (random >= .25 && random <= .5) {
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (-x, y));
		//Debug.Log(random);
		}
		if (random >= .5 && random <= .75) {
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (x, -y));
		//Debug.Log(random);
		}
		if (random >= .75 && random <= 1.000000000000001) {
		GetComponent.<Rigidbody2D>().AddForce (new Vector2 (-x, -y));
		//Debug.Log(random);
		}
	}
}	
						

function Update () {

	//Turns on/off Collider for Player2
	if (transform.position.x > 7.5)
	{
	player2Collider.enabled = false;
	}
	else {
		player2Collider.enabled = true;
	}
	
	//Score and Reset for Player1
	if (transform.position.x > 11) {
		player1Score +=1;
		transform.position.x = 0;
		transform.position.y = 0;
		GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
		Player1.transform.position.y = 0;
		Player2.transform.position.y = 0;
	}
	
	//Turns on/off Collider for Player1
	if (transform.position.x < -7.5) {
		player1Collider.enabled = false;
	}
	else {
		player1Collider.enabled = true;
	}
	
	//Score and Reset for Player2
	if (transform.position.x < -11){
		player2Score +=1;
		transform.position.x = 0;
		transform.position.y = 0;
		GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
		Player1.transform.position.y = 0;
		Player2.transform.position.y = 0;
	}
}