const {myEventEmitter,LOGIN_EVENT}=require("./eventFile");

module.exports.loginSuccessfull=(userName)=>{
    myEventEmitter.emit(LOGIN_EVENT,userName)
}
