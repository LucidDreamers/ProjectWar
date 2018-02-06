#pragma strict

  public var health = 10f;
  public var damage = 5f;
  public var moveSpeed = 2.5f;

  /*private var stats : enemyStats;*/
  private var currentHealth = health;
  private var player : GameObject;
  private var rb : Rigidbody2D;

  function Start(){
    /*stats = new enemyStats(health, damage);*/
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
  }

  function Update(){
    if(Time.timeScale == 1f){
      /*transform.LookAt(player.transform);
      rb.AddForce(transform.forward * moveSpeed, ForceMode2D.Impulse);*/
      var diff = player.transform.position - transform.position;
      diff.Normalize();
      var dir = Vector2(diff.x, diff.y);
      var rot_z = Mathf.Atan2(diff.y, diff.x) * Mathf.Rad2Deg;
      transform.rotation = Quaternion.Euler(0f, 0f, rot_z - 90);

      rb.AddForce(dir * moveSpeed * Time.deltaTime, ForceMode2D.Impulse);
    }
  }
