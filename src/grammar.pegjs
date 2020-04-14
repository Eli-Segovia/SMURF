{
  const AST = options.AST
}

calculator
  = expr

expr
  = head:factor rest:(addop expr)*
      {return new AST.BinOp(head,rest)}
    / factor

factor
  = head:term rest:(mulop term)*
      {return new AST.BinOp(head,rest)}
    / term

term
  = digits:[0-9]+
  {return new AST.IntegerValue(parseInt(digits.join(""), 10))}

addop
  = "+" / "-"

mulop
  = "*" / "/"

