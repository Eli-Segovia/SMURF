const Operations = {
  "+": (l, r) => l + r,
  "-": (l, r) => l - r,
  "*": (l, r) => l * r,
  "/": (l, r) => Math.round(l / r),
  "==":(l, r) => l == r? 1 : 0,
  "!=":(l, r) => l != r? 1 : 0,
  ">=":(l, r) => l >= r? 1 : 0,
  ">" :(l, r) => l > r ? 1 : 0,
  "<" :(l, r) => l < r ? 1 : 0,
  "<=":(l, r) => l <= r? 1 : 0
  
}


export default class Interpreter {

  constructor(target, printFunction) {
    this.target = target
    this.printFunction = printFunction
  }

  visit() {
    return this.target.accept(this)
  }

  BinOp(node) {
    let l = node.left.accept(this)
    let r = node.right.accept(this)
    return Operations[node.op](l, r)
  }

  IntegerValue(node) {
    return node.value
  }

  ifThen(node){
    let exprIsTrue = node.expression.accept(this)
    let block = node.block.accept(this)
    if(exprIsTrue == 1){return block}
  }

  ifThenElse(node){
    let exprIstrue = node.expression.accept(this)
    let block = node.block.accept(this)
    let elseBlock = node.elseBlock.accept(this)
    if(exprIstrue == 1){return block}
    else{return elseBlock}
  }

  statements(node){
    let expression;
    node.expression.forEach(element => {
      expression = element.accept(this)
    });
    return expression
  }
  
}