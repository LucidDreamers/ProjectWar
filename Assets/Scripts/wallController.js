#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter2D(collision : Collision2D){
	if(collision.gameObject.tag == "Projectile"){
		Destroy(collision.gameObject);
	}
}
