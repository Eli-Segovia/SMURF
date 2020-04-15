{
  const AST = options.AST
}

arithmetic_expression
  = expr

expr
  = head:factor rest:(addop expr)*
      {return rest.reduce(
        (result, [op,right]) => new AST.BinOp(result, op, right),
        head
      )}
    / factor

factor
  = head:integer rest:(mulop integer)*
      {return rest.reduce(
        (result, [op,right]) => new AST.BinOp(result, op, right),
        head
      )}
    / integer 


integer
  =   ("+"/"-") digits:[0-9]+ 
      {return new AST.IntegerValue(parseInt(digits.join(""), 10))}
    / digits:[0-9]+
      {return new AST.IntegerValue(parseInt(digits.join(""), 10))}
  


addop
  = "+" / "-"

mulop
  = "*" / "/"

space
  = [ \t\n\r]

_
  = space*

