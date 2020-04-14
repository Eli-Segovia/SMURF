
export class BinOp{
    constructor(head, rest){
        this.head = head
        this.rest = rest
    }
    accept(visitor){
        return visitor.visitBinOp(this)
    }
}

export class IntegerValue{
    constructor(intVal){
        this.value = intVal
    }
    accept(visitor){
        return visitor.visitIntegerValue(this)
    }
}