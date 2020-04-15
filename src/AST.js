
export class BinOp{

    constructor(result, op, right){
        this.result = result
        this.op = op
        this.right = right
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