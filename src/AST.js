export class BinOp {
  constructor(l, op, r) {
    this.left  = l
    this.op    = op
    this.right = r
  }
  accept(visitor) {
    return visitor.BinOp(this)
  }
}

export class IntegerValue {
  constructor(value) {
    this.value = value
  }

  accept(visitor) {
    return visitor.IntegerValue(this)
  }
}

export class ifThen{
  constructor(expr, block){
    this.expression = expr
    this.block = block
  }

  accept(visitor){
    return visitor.ifThen(this)
  }
}

export class ifThenElse{
  constructor(expr, block, elseBlock){
    this.expression = expr
    this.block = block
    this.elseBlock = elseBlock
  }

  accept(visitor){
    return visitor.ifThenElse(this)
  }
}

export class Statements{
  constructor(newStatements){
    this.expression = newStatements
  }

  accept(visitor){
    return visitor.statements(this)
  }
}

export class VariableName{
  constructor(name){
    this.name = name
  }

  accept(visitor){
    return visitor.VariableName(this)
  }
}

export class VariableValue{
  constructor(name){
    this.name = name
  }

  accept(visitor){
    return visitor.VariableValue(this)
  }
}


export class Declaration{
  constructor(l){
    this.variable = l;
  }
  accept(visitor){
    return visitor.Declaration(this)
  }

}

export class Assignment{

  constructor(l,r){
    this.variable = l
    this.expr     = r
  }

  accept(visitor){
    return visitor.Assignment(this)
  }
}

