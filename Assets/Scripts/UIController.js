#pragma strict
public var paused = false;
// Use this for initialization
function Start () {

}

// Update is called once per frame
function Update () {

}

public function StartGame(){
	EditorSceneManager.LoadScene("TestingPlayer");
	//Application.LoadLevel("TestingPlayer");
}

public function QuitGame(){
	EditorApplication.isPlaying = false;
	//Application.Quit();
}

public function MainMenu(){
	EditorSceneManager.LoadScene("MainMenu");
}

public function Continue(){
	togglePauseMenu();
}

function togglePauseMenu(){

  if(paused){
		Time.timeScale = 1f;
		paused = false;
		transform.Find("PauseMenu").gameObject.SetActive(false);
  }else{
		Time.timeScale = 0f;
		paused = true;
		transform.Find("PauseMenu").gameObject.SetActive(true);
  }
}
