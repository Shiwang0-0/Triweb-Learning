export default class projectError extends Error {
    private _status:number=0;
    private _data:Object | [] = {} ; //data can be object or an array


    get statusCode():number{
        return this._status;
    }
    set statusCode(code:number){
        this._status=code;
    }

    get data():Object{
       return this._data;
    }
    set data(errorData:Object){
        this._data=errorData;
    }
}