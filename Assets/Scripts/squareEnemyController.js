#pragma strict

public var health = 10f;
public var damage = 5f;
public var moveSpeed = 5f;

/*private var stats : enemyStats;*/
private var player : GameObject;
private var rb : Rigidbody2D;

function start(){
  /*stats = new enemyStats(health, damage);*/
  player = GameObject.FindGameObjectWithTag("Player");

  rb = GetComponent(Rigidbody2D);
}

function Update(){
  Debug.Log(player);
  /*transform.LookAt(player.transform);*/
  /*rb.AddForce(transform.forward * moveSpeed, ForceMode2D.Impulse);*/
}
