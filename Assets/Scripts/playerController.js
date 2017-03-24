#pragma strict

public var speed = 2.0;
public var bulletSpeed = 6;
public var bulletPrefab : GameObject;
public var bulletSpawn : GameObject;
private var rb : Rigidbody2D;


function Start () {
	rb = GetComponent.<Rigidbody2D>();
}

function Update () {
	/*if(Input.GetJoystickNames != null){

	}*/
	var pos = Camera.main.WorldToScreenPoint(transform.position);
	var dir = Input.mousePosition - pos;
	var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg - 90;
	transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);

	var direction = Vector2(Input.GetAxisRaw("Horizontal"), Input.GetAxisRaw("Vertical"));

	rb.AddForce(direction * speed, ForceMode2D.Force);

	if(Input.GetButtonDown("Fire1")){
		var bullet : GameObject = Instantiate(bulletPrefab, bulletSpawn.transform.position, bulletSpawn.transform.rotation) as GameObject;
		bullet.GetComponent(Rigidbody2D).AddForce(bulletSpawn.transform.up * bulletSpeed, ForceMode2D.Impulse);
		Destroy(bullet, 2.0f);
	}

}
