#pragma strict

public var speed = 2.0;
public var bulletSpeed = 6;
public var bulletPrefab : GameObject;
public var bulletSpawn1 : GameObject;
public var bulletSpawn2 : GameObject;
private var rb : Rigidbody2D;
private var toggle = 0;


function Start () {
	rb = GetComponent.<Rigidbody2D>();
}

function OnCollisionEnter (collision : Collision){
	Debug.Log("Collision: " + collision.gameObject.tag);
	/*if(collision.gameObject.tag == "powerUp"){
		toggle = 2;
		Destroy(collision.gameObject);
		Debug.Log("Collision" + collision.gameObject.tag);
	}*/
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
		var bullet : GameObject;
		if(toggle == 2){
			var bullet1 : GameObject = Instantiate(bulletPrefab, bulletSpawn1.transform.position, bulletSpawn1.transform.rotation) as GameObject;
			bullet1.GetComponent(Rigidbody2D).AddForce(bulletSpawn1.transform.up * bulletSpeed, ForceMode2D.Impulse);
			var bullet2 : GameObject = Instantiate(bulletPrefab, bulletSpawn2.transform.position, bulletSpawn2.transform.rotation) as GameObject;
			bullet2.GetComponent(Rigidbody2D).AddForce(bulletSpawn2.transform.up * bulletSpeed, ForceMode2D.Impulse);
			Destroy(bullet1, 2.0f);
			Destroy(bullet2, 2.0f);
		}
		else if(toggle == 1){
			bullet = Instantiate(bulletPrefab, bulletSpawn2.transform.position, bulletSpawn2.transform.rotation) as GameObject;
			bullet.GetComponent(Rigidbody2D).AddForce(bulletSpawn2.transform.up * bulletSpeed, ForceMode2D.Impulse);
			Destroy(bullet, 2.0f);
			toggle = 0;
		}else{
			bullet = Instantiate(bulletPrefab, bulletSpawn1.transform.position, bulletSpawn1.transform.rotation) as GameObject;
			bullet.GetComponent(Rigidbody2D).AddForce(bulletSpawn1.transform.up * bulletSpeed, ForceMode2D.Impulse);
			Destroy(bullet, 2.0f);
			toggle = 1;
		}

	}

}
