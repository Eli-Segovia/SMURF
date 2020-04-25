
# Week 2

| Part           | Comments    | Points |
|----------------|-------------|--------|
| provided tests | All passed  |     63 |
| extras         | 3 failures  |      4 |
| Coding         |             |     22 |
| **TOTAL**      |             |     89 |


Code issues:

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

This code always evaluates the available blocks. Instead it should be
waiting to evaluate only the appropriate one depending on the predicate.


Test failures:

- test 3: 1 failure

      123
      if (0) {
      6
      7
      }
      else {
        8 9
      }


Failures in my torture tests:

- all expressions in SMURF must return a value, but the interpreter
  returns `undefined` for `if 0 { 99 }`. It should either raise an error
  or return 0.

- your binding code doesn't check for duplicate definitions of a
  variable (two `let`s for the same variable)

- your binding code doesn't check for attempts to access a
  variable that hasn't been defined.