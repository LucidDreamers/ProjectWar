#pragma strict

import UnityEditor.SceneManagement;


public var player : GameObject;
public var enemy : GameObject;
public var ui : GameObject;
public var Wall : GameObject;
public var MinX : float;
public var MaxX : float;
public var MinY : float;
public var MaxY : float;


private var enemySpawnTimer = 180;

function Start(){
  Instantiate(player);
  ui.FindWithTag("Pause").SetActive(false);
  Time.timeScale = 1f;
  enemySpawnTimer = 180;
}

function Update(){
  enemySpawnTimer -= 1;

  if(enemySpawnTimer == 0){
    /* Instantiate(enemy, Vector3(0.0,0.0,0.0), Quaternion.Euler(0.0, 0.0, Random.Range(0.0, 360.0))); */
    /* enemySpawnTimer = 180; */
  }
  //TODO: Listen for Gamepad Input as well
  if(Input.GetKeyUp(KeyCode.Escape)){
    ui.GetComponent(UIController).togglePauseMenu();
  }
}
