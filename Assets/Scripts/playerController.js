#pragma strict

public var speed = 2.0;
private var rb : Rigidbody2D;

function Start () {
	rb = GetComponent.<Rigidbody2D>();
}

function Update () {
	var direction = Vector2(Input.GetAxisRaw("Horizontal"), Input.GetAxisRaw("Vertical"));

	rb.AddForce(direction * speed);
	//transform.Translate(direction * speed * Time.deltaTime);

}
