#pragma strict

var speed: float = 1;
public var coal: GameObject;

function Start (){
	Destroy (coal, 12);
}

function Update() {
	transform.Translate(Vector2(-speed, 0) * Time.deltaTime);
}

function OnTriggerEnter2D (other: Collider2D){
	if (other.gameObject.tag == "Player"){
		Destroy(coal);
	}
}