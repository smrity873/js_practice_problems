/* **************************************************

What will be the result of the following codes:
        1) const a = isNaN('11');
        2) const b = isNaN(2 - 10);
    explain your answer.

    ***************************************************/

    const a = isNaN('11');
    console.log(a);

    /* Output : false
    cause isNan('11')  mean is 11 is number?(isNaN() means checking if the parameter cannot be converted into a number), in this case '11' is string. so this output is false.
    note: const means constant, this variable value not changeable. */

    const b = isNaN(2 - 10);
    console.log(b);

    /* Output: false
    cause sNaN(2-10) means isNaN(-8), where -8 is a number(negative number) so that this output is false. */