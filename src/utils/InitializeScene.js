import { MyPointerLockControls } from "./MyPointerLockControls";

export function InitializePointerLockControls(camera, mount, sensitivity, scope) {
    let controls = new MyPointerLockControls( camera, mount, sensitivity );

    controls.addEventListener( 'lock', function () {

        // menu.style.display = 'none';
        scope.setState({mouseIsLocked: true});
        
        if(!scope.state.countDownHasStarted){
          scope.setState(prevState =>{
            return{
                 ...prevState,
                 countDownHasStarted : true
            }
         });
          var self = scope;
          var downloadTimer = setInterval(function(){

          if(self.state.countDownTimer > 0){
            self.setState(prevState =>{
              return{
                   ...prevState,
                   countDownTimer : prevState.countDownTimer - 1

              }
           })
          }
          else{
            self.setState({timerHasStarted: true});
          }

          if(self.state.totalTimeOnTaskRemaining > 0 && self.state.countDownTimer <= 0){
            self.setState(prevState =>{
              return{
                   ...prevState,
                   totalTimeOnTaskRemaining: prevState.totalTimeOnTaskRemaining - 1 
              }
           });
            
          }
          if(self.state.totalTimeOnTaskRemaining <= 0 ){
            self.setState({
              timerHasStarted: false,
              taskIsFinished: true
            });
            clearInterval(downloadTimer);
          }
          
        }, 1000);

        
        }

    }.bind(scope), false );

    controls.addEventListener( 'unlock', function () {

        // menu.style.display = 'block';
        console.log("controls are now unlocked");
        controls.unlock();

    } );

    return controls;
}