grammar Calculator;

//Gramatica
programa: instrucciones EOF;

    instrucciones
    : instruccion instrucciones?
    ;

    instruccion
    : decision
    ;

    decision
    : 'if' '(' condicion ')' '{' sentencia '}' ('else' '{' sentencia '}')?
    ;

    sentencia
    : salida sentencia?
    | terminar
    ;

    salida
    : 'printf' '(' cadena ')' ';'
    ;

    terminar
    : 'return' ';'
    ;

    condicion
    : '0'
    | '1'
    ;

    cadena
    : '"' caracteres? '"'
    ;

    caracteres
    : caracter+
    ;

    caracter
    : letra
    | digito
    | simbolo
    ;

    letra
    : LETRA_MINUS
    | LETRA_MAYUS
    ;

    digito
    : DIGITO
    ;

    simbolo
    : SIMBOLO
    ;

//Lexemas
LETRA_MINUS: [a-z];
LETRA_MAYUS: [A-Z];
DIGITO: [0-9];
SIMBOLO: [.,!?;:'"];

WS: [ \t]+ -> skip;
NEWLINE: [\r\n]+ -> skip;

IF       : 'if';
ELSE     : 'else';
RETURN   : 'return';
PRINTF   : 'printf';
LPAREN   : '(';
RPAREN   : ')';
LBRACE   : '{';
RBRACE   : '}';
SEMI     : ';';
QUOTE    : '"';