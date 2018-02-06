#pragma strict

import UnityEditor.SceneManagement;


public var player : GameObject;
public var enemy : GameObject;
public var ui : GameObject;

private var enemySpawnTimer = 180;

function Start(){
  Instantiate(player);
  ui.FindWithTag("Pause").SetActive(false);
  Time.timeScale = 1f;
}

function Update(){
  enemySpawnTimer -= 1;

  if(enemySpawnTimer == 0){
    Instantiate(enemy);
    enemySpawnTimer = 180;
  }
  //TODO: Listen for Gamepad Input as well
  if(Input.GetKeyUp(KeyCode.Escape)){
    ui.GetComponent(UIController).togglePauseMenu();
  }
}
