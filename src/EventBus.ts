/*
 * @Author: hidetodong
 * @Date: 2021-12-12 19:52:31
 * @LastEditTime: 2021-12-12 22:58:08
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /hide-event-bus/src/EventBus.ts
 * HIDETOXIC - 版权所有
 */


class EventBus {
    private static instance:EventBus

    protected handlerMap:Record<string,any> = {}

    constructor(){
        if(!EventBus.instance){
            EventBus.instance = this
            this.handlerMap = {}
        }
        return EventBus.instance
    }

    emit(eventName:string,args?:any){
        if(this.handlerMap[eventName]){
            this.handlerMap[eventName].forEach((handler:any)=>{
                handler(args)
            })
        }
    }

    on(eventName:string,callback:(args?:any)=> void){
        this.handlerMap[eventName] = this.handlerMap[eventName] ?? []
        this.handlerMap[eventName].push(callback)
    }
}

export default new EventBus()