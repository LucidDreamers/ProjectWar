#pragma strict
public var health = 10f;
public var damage = 5f;
public var moveSpeed = 2.5f;

/*private var stats : enemyStats;*/
private var currentHealth = health;
private var player : GameObject;
private var rb : Rigidbody2D;

function Start () {
	if(player == null){
		player = GameObject.FindWithTag("Player");
	}

	rb = GetComponent(Rigidbody2D);
}

function OnCollisionEnter2D (collision : Collision2D){
	//Check that the player is colliding with a powerup
	if(collision.gameObject.tag == "Projectile"){
		Destroy(collision.gameObject);
		currentHealth -= player.gameObject.GetComponent(playerStatController).bulletDamage;
		if(currentHealth <= 0){
			Destroy(gameObject);
		}
	}
	if(collision.gameObject.tag == "Wall"){

		var reflect = -(transform.eulerAngles.z);
		transform.rotation = Quaternion.Euler(0.0,0.0,reflect);
	}
}

function Update () {
	rb.AddForce(transform.up * moveSpeed * Time.deltaTime, ForceMode2D.Impulse);
}
