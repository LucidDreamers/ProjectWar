#pragma strict

public var speed = 2.0;
public var bullet : GameObject;
public var bulletSpawn : GameObject;
private var rb : Rigidbody2D;


function Start () {
	rb = GetComponent.<Rigidbody2D>();
}

function Update () {

	/*var pos = Camera.main.WorldToScreenPoint(transform.position);
	var dir = Input.mousePosition - pos;
	var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
	transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);*/

	var direction = Vector2(Input.GetAxisRaw("Horizontal"), Input.GetAxisRaw("Vertical"));

	rb.AddForce(direction * speed, ForceMode2D.Force);

	/*if(Input.GetKeyDown("Fire1")){
		var bulletClone = Instantiate(bullet, Vector2(bulletSpawn.position.X, bulletSpawn.position.Y));
	}*/

}
