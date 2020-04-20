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
