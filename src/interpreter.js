export default class interpret{
    visit(target){
        return target.accept(this)
    }

    visitBinOp(target){
        let head = target.head.accept(this)
        let rest = target.rest.reduce(
            (result, [op,_,right]) => new AST.BinOp(result,op,right),
            head
        ).accept(this)
    }

    visitIntegerValue(target){
        return target.value
    }
}
