export default class interpret{

    visit(target){
        return target.accept(this)
    }

    visitBinOp(target){
        let result = target.result.accept(this)
        let right = target.right.accept(this)
        switch(target.op){
            case "+":
                return result + right
            case "*":
                return result * right
            case "/":
                return result / right
            case "-":
                return result - right
            default:
                return "error"
        }
    }

    visitIntegerValue(target){
        return target.value
    }
    
}
