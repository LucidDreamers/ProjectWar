#pragma strict

public var bulletPrefab : GameObject;
public var bulletSpawn1 : GameObject;
public var bulletSpawn2 : GameObject;
private var rb : Rigidbody2D;
private var gos : GameObject[];
private var stats : playerStatController;
private var toggle = 0;
private var allowFire = true;


function Start () {
	rb = GetComponent(Rigidbody2D);
	stats = GetComponent(playerStatController);
	gos = gameObject.FindGameObjectsWithTag("Projectile");
}

function OnCollisionEnter2D (collision : Collision2D){
	//Check that the player is colliding with a powerup
	if(collision.gameObject.tag == "powerUp"){
		//Destroy the power up
		Destroy(collision.gameObject);
		//Check the type of power up -- Using the enum defined in the power up script
		switch (collision.gameObject.GetComponent(powerUpController).type){
			case powerType.DOUBLE: //Example Double shot
				toggle = 2;
				break;
			case powerType.FASTER:
				stats.bulletSpeed += 10;
				break;
			default:
				break;
		}
	}
}
function Update () {
	//TODO: add controller support
	/*if(Input.GetJoystickNames != null){

	}*/

	gos = gameObject.FindGameObjectsWithTag("Projectile");
	//This makes the player ship follow the mouse
	//Determine the position of the ship and subtract it from the mouse position
	//Then determine the rotation angle and rotate the player
	var pos = Camera.main.WorldToScreenPoint(transform.position);
	var dir = Input.mousePosition - pos;
	var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg - 90;
	transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward);

	//Get the direction of movement using the Horizontal and Vertical Axies defined in Unity
	//Apply force in that direction on the rigidbody
	var direction = Vector2(Input.GetAxisRaw("Horizontal"), Input.GetAxisRaw("Vertical"));
	rb.AddForce(direction * stats.speed, ForceMode2D.Force);

	if(Input.GetButton("Fire1") && gos.length < stats.bulletLimit && allowFire){
		Fire();

	}

}
function Fire (){
	var bullet : GameObject;
	allowFire = false;
	//Double shot mode
	if(toggle == 2){
		var bullet1 : GameObject = Instantiate(bulletPrefab, bulletSpawn1.transform.position, bulletSpawn1.transform.rotation) as GameObject;
		bullet1.GetComponent(Rigidbody2D).AddForce(bulletSpawn1.transform.up * stats.bulletSpeed, ForceMode2D.Impulse);
		var bullet2 : GameObject = Instantiate(bulletPrefab, bulletSpawn2.transform.position, bulletSpawn2.transform.rotation) as GameObject;
		bullet2.GetComponent(Rigidbody2D).AddForce(bulletSpawn2.transform.up * stats.bulletSpeed, ForceMode2D.Impulse);
		Destroy(bullet1, 2.0f);
		Destroy(bullet2, 2.0f);
	}
	//Single shot mode
	//uses a variable that toggles when one side has shot to shoot from the other point the next time
	else if(toggle == 1){
		bullet = Instantiate(bulletPrefab, bulletSpawn2.transform.position, bulletSpawn2.transform.rotation) as GameObject;
		bullet.GetComponent(Rigidbody2D).AddForce(bulletSpawn2.transform.up * stats.bulletSpeed, ForceMode2D.Impulse);
		Destroy(bullet, 2.0f);
		toggle = 0;
	}else{
		bullet = Instantiate(bulletPrefab, bulletSpawn1.transform.position, bulletSpawn1.transform.rotation) as GameObject;
		bullet.GetComponent(Rigidbody2D).AddForce(bulletSpawn1.transform.up * stats.bulletSpeed, ForceMode2D.Impulse);
		Destroy(bullet, 2.0f);
		toggle = 1;
	}
	yield WaitForSeconds(stats.fireRate);
	allowFire = true;
}
