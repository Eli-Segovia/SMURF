{
  const AST = options.AST

  function rollupBinOp(head, rest) {
    return rest.reduce(
      (result, [op, right]) => new AST.BinOp(result, op, right),
      head
    )
  }
}

start
  = code


// blocks
code
  =statements:statement+
  {return new AST.Statements(statements)}

statement
  =exp:expr


// if
if_expression
  = _ "if" _ exp:expr _ block:brace_block _ "else" _ elseBlk:brace_block
  {return new AST.ifThenElse(exp, block, elseBlk)}
  / _"if" exp:expr block:brace_block
  {return new AST.ifThen(exp,block)}


//expression
expr
  = if_expression
  / boolean_expression
  / arithmentic_expression


//////////////////////////////// boolean expression ////////////////////////////
boolean_expression
  = head:arithmentic_expression rest:(relop arithmentic_expression)*
  {return rollupBinOp(head,rest)}

//////////////////////////////// arithmetic expression /////////////////////////////

arithmentic_expression
  = head:mult_term rest:(addop mult_term)*
    { return rollupBinOp(head, rest) }

mult_term
  = head:primary rest:(mulop primary)*
    { return rollupBinOp(head, rest) }

primary
  = integer
  / _ "(" _ expr:arithmentic_expression _ ")" _
    { return expr }


integer
  = _ number: digits _
    { return new AST.IntegerValue(number) }

addop
  = _ op:[-+] _
    { return op }

mulop
  = _ op:[*/] _
    { return op }

relop
 = _ op:('=='/'!='/'>='/'\>'/'<='/'\<') _
    { return op }




//////////////////// function defn /////////
param_list
  ="(" ")"

brace_block
  = "{"_ someCode:code _"}"
  {return someCode }


/////////////////////// utility NTs //////////////////////////////

eol "end-of-line" = [\n\r\u2028\u2029]
ws "whitespace"   = [ \t] / eol
comment           = "#" (!eol .)*
_                 = ( ws / comment )*
__                = ( ws / comment )+

identifier        = id:([a-z][a-zA-Z_0-9]*)
                    { return text() }

digits            = [-+]? [0-9]+
                    { return parseInt(text(), 10) }