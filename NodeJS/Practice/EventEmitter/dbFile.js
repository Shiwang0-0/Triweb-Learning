const {myEventEmitter,LOGIN_EVENT}=require("./eventFile");

myEventEmitter.on(LOGIN_EVENT,(userName)=>{
    console.log(`user ${userName} added`)
})  
