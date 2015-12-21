#pragma strict

var player1Score: GUIText;
var player2Score: GUIText;

function OnGUI() {
	player1Score.text = "Player1 Score: " + Ball.player1Score;
	player2Score.text = "Player2 Score: " + Ball.player2Score;
}