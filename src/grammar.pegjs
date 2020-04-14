calculator
  = expr

expr
  = left:factor rest:(addop factor)*

factor
  = left:term rest:(mulop term)*

term
  = digits:[0-9]

addop
  = "+" / "-"

mulop
  = "*" / "/"

