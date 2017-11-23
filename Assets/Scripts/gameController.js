#pragma strict

public var player : GameObject;
public var enemy : GameObject;

private var enemySpawnTimer = 180;

function Start(){
  Instantiate(player);
}

function Update(){
  enemySpawnTimer -= 1;

  if(enemySpawnTimer == 0){
    Instantiate(enemy);
    enemySpawnTimer = 180;
  }

}

function destroyEnemy(enemy : GameObject){

}
