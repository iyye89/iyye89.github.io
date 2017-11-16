 function c2ctlArcadeSaveScore(score){
        if(parent.__ctlArcadeSaveScore){
            parent.__ctlArcadeSaveScore(score);
        }
    }


    function c2ctlArcadeSessionStart(){
        if(parent.__ctlArcadeSessionStart){
            parent.__ctlArcadeSessionStart();
        }
    }

    function c2ctlArcadeSessionEnd(){
        if(parent.__ctlArcadeSessionEnd){
            parent.__ctlArcadeSessionEnd();
        }
    }

    function c2ctlArcadeRestartLevel(){
        if(parent.__ctlArcadeRestartLevel){
            parent.__ctlArcadeRestartLevel();
        }
    }
	
    function c2ctlArcadeStartLevel(){
        if(parent.__ctlArcadeStartLevel){
            parent.__ctlArcadeStartLevel();
        }
    }
	
    function c2ctlArcadeEndLevel(){
        if(parent.__ctlArcadeEndLevel){
            parent.__ctlArcadeEndLevel();
        }
    }

	function ctlArcadeResume(){
		c2_callFunction("c2ctlArcadeResume");
	}

	function ctlArcadePause(){
		c2_callFunction("c2ctlArcadePause");
	}