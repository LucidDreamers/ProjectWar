#pragma strict
public class EnemyController extends MonoBehaviour{
  public var paused = false;

  function Start(){

  }

  function Update(){

  }

  public function Pause(){
    if(paused){
      paused = false;
    }else{
      paused = true;
    }
  }
}
