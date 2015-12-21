#pragma strict

var speed: float=0;
var player1Collider:BoxCollider2D;
var player2Collider:BoxCollider2D;
var launchReady: boolean;
var Player1:SpriteRenderer;
var Player2:SpriteRenderer;
static var player1Score:int = 0;
static var player2Score:int = 0;
static var x: float = .015;
static var y: float = .0075;
public var drbath: Sprite;
public var mrdavis: Sprite;
public var mrlang: Sprite;
public var player1win: GameObject;
public var player2win: GameObject;
public var tie: GameObject;
public var black: GameObject;
public var player1Scoreboard: GameObject;
public var player2Scoreboard: GameObject;
var win1: boolean = false;
var win2: boolean = false;
var wintie: boolean = false;
var fade1: float = 0;
var fade2: float = 0;
var fadetie: float = 0;
var blackfade: float = 0;
var blackFade: boolean = false;

function Start () {
	player1win.GetComponent.<Renderer>().material.color.a = 0;
	player2win.GetComponent.<Renderer>().material.color.a = 0;
	tie.GetComponent.<Renderer>().material.color.a = 0;
	black.GetComponent.<Renderer>().material.color.a = 0;

	yield WaitForSeconds(1.5);
	Reset();
}

function Reset(){
	transform.position.x = 0;
	transform.position.y = 0;
	GetComponent.<Rigidbody2D>().velocity = Vector2.zero;
	Player1.transform.position.y = 0;
	Player2.transform.position.y = 0;
	
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
	yield WaitForSeconds(2);
	launch();
}	

function launch(){
	var random: int = Random.Range (0,4);
	switch (random){
		case 0:
			GetComponent.<Rigidbody2D>().AddForce (new Vector2 (x, y));
			break;
		case 1:
			GetComponent.<Rigidbody2D>().AddForce (new Vector2 (-x, y));
			break;
		case 2:
			GetComponent.<Rigidbody2D>().AddForce (new Vector2 (x, -y));
			break;
		case 3:
			GetComponent.<Rigidbody2D>().AddForce (new Vector2 (-x, -y));
			break;
	}
}
						

function Update () {
	//Turns on/off Collider for Player2
	if (transform.position.x > 8.1) {
		player2Collider.enabled = false;
	}
	else {
		player2Collider.enabled = true;
	}
	
	//Turns on/off Collider for Player1
	if (transform.position.x < -8.1) {
		player1Collider.enabled = false;
	}
	else {
		player1Collider.enabled = true;
	}

	if ((player1Score + player2Score) < 2) {
		if (transform.position.x > 12) {
			player1Score += 1;
			if ((player1Score + player2Score) < 2) {
				Reset();
			}
		}
		if (transform.position.x < -12) {
			player2Score += 1;
			if ((player1Score + player2Score) < 2) {
				Reset();
			}
		}
	}
	else {
		Debug.Log("end game");
		LoadGame();
		if (player1Score > player2Score){
			Debug.Log("player 1 has won");
			win1 = true;
		}
		if (player1Score < player2Score){
			Debug.Log("player 2 has won");
			win2 = true;
		}
		else {
			Debug.Log("it is a tie");
			wintie = true;
		}
	}

	if (win1 == true && fade1 < 1){
		fade1 += .01f;
		player1win.GetComponent.<Renderer>().material.color.a = fade1;
	}
	else if (win2 == true && fade2 < 1){
		fade2 += .01f;
		player2win.GetComponent.<Renderer>().material.color.a = fade2;
	}
	else if (wintie == true && fadetie < 1){
		fadetie += .01f;
		tie.GetComponent.<Renderer>().material.color.a = fadetie;
	}
	if (blackFade == true && blackfade < 1f){
		player1Scoreboard.SetActive(false);
		player2Scoreboard.SetActive(false);
		blackfade += .05f;
		black.GetComponent.<Renderer>().material.color.a = blackfade;
	}
}

function LoadGame(){
	yield WaitForSeconds(5);
	Debug.Log("fade to black");
	blackFade = true;
	yield WaitForSeconds(1);
	Debug.Log("Loading Santa Preview");
	Application.LoadLevel("Trans2");
}