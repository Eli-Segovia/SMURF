{
  const AST = options.AST
}

calculator
  = expr

expr
  = head:factor rest:(addop expr)*
      {return rest.reduce(
        (result, [op,right]) => new AST.BinOp(result, op, right),
        head
      )}
    / factor

factor
  = head:term rest:(mulop term)*
      {return rest.reduce(
        (result, [op,right]) => new AST.BinOp(result, op, right),
        head
      )}
    / term

term
  = digits:[0-9]+
  {return new AST.IntegerValue(parseInt(digits.join(""), 10))}

addop
  = "+" / "-"

mulop
  = "*" / "/"

space
  = [ \t\n\r]

_
  = space*

