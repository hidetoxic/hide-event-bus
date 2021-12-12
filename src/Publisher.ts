/*
 * @Author: hidetodong
 * @Date: 2021-12-12 18:14:31
 * @LastEditTime: 2021-12-12 19:51:58
 * @LastEditors: hidetodong
 * @Description: 
 * @FilePath: /hide-event-bus/src/Publisher.ts
 * HIDETOXIC - 版权所有
 */


class Publisher {

    protected observers = []
    protected handleMap = {}
    constructor(){
        this.observers = []
        this.handleMap = {}
    }

    add(observer){
        this.observers
    }

}


export default new Publisher()