#pragma strict

public var gift1: Sprite;
public var gift2: Sprite;
public var gift3: Sprite;
public var gift4: Sprite;
public var gift5: Sprite;
public var gift6: Sprite;
public var gift7: Sprite;
public var gift8: Sprite;
public var gift9: Sprite;
public var gift10: Sprite;
public var gift: GameObject;
var speed: float = 1;

function Start () {
	Destroy (gift, 12);

	var choice: int = Random.Range(0, 10);
	switch (choice){
		case 0:
			GetComponent(SpriteRenderer).sprite = gift1;
			break;
		case 1:
			GetComponent(SpriteRenderer).sprite = gift2;
			break;
		case 2:
			GetComponent(SpriteRenderer).sprite = gift3;
			break;
		case 3:
			GetComponent(SpriteRenderer).sprite = gift4;
			break;
		case 4:
			GetComponent(SpriteRenderer).sprite = gift5;
			break;
		case 5:
			GetComponent(SpriteRenderer).sprite = gift6;
			break;
		case 6:
			GetComponent(SpriteRenderer).sprite = gift7;
			break;
		case 7:
			GetComponent(SpriteRenderer).sprite = gift8;
			break;
		case 8:
			GetComponent(SpriteRenderer).sprite = gift9;
			break;
		case 9:
			GetComponent(SpriteRenderer).sprite = gift10;
			break;
	}
}

function Update () {
	transform.Translate(Vector2(-speed, 0) * Time.deltaTime);
}

function OnTriggerEnter2D (other: Collider2D){
	if (other.gameObject.tag == "Player"){
		Destroy(gift);
	}
}