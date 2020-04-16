# Week 1

| Part           | Comments    | Points |
|----------------|-------------|--------|
| 00-test_values | One failure |     14 |
| 00-test_extras | One failure |      0 |
| Coding         |             |     18 |
| **TOTAL**      |             |     32 |

When I first ran this, all the tests failed.

This was because you were calling `printFunction` at the end of
`compileAndRun`, and `printFunction` is not intended to be used in this
assignment. I replaced

    return printFunction(result)

with

    return result

and 7 tests passed.

The next problem was that the grammar.pegjs file was parsing numbers
with minus signs, but it was then ignoring that sign. I fixed that by
changing

    integer
      =   ("+"/"-") digits:[0-9]+
          {return new AST.IntegerValue(parseInt(digits.join(""), 10))}
        / digits:[0-9]+
          {return new AST.IntegerValue(parseInt(digits.join(""), 10))}

to

    integer
      =   "-" digits:[0-9]+
          {return new AST.IntegerValue(parseInt(-digits.join(""), 10))}
        / "+"? digits:[0-9]+
          {return new AST.IntegerValue(parseInt(digits.join(""), 10))}

Three more tests passed. At this point, I stopped.

I'm giving you credit for the 7 tests that passed after I fixed the
`printResult` call.

I am here for you to call when you get stuck. Please use me.