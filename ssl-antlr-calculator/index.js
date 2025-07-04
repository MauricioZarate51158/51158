import CalculatorLexer from "./generated/CalculatorLexer.js";
import CalculatorParser from "./generated/CalculatorParser.js";
import { CustomCalculatorListener } from "./CustomCalculatorListener.js";
import { CustomCalculatorVisitor } from "./CustomCalculatorVisitor.js";
import antlr4, { CharStreams, CommonTokenStream, ParseTreeWalker } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    // Intento leer la entrada desde el archivo input - en forma sincrona.
    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        // Si no es posible leer el archivo, solicitar la entrada del usuario por teclado
        input = await leerCadena(); // Simula lectura síncrona
        console.log(input);
    }

    // Proceso la entrada con el analizador e imprimo el arbol de analisis en formato texto
    let inputStream = CharStreams.fromString(input);
    let lexer = new CalculatorLexer(inputStream);
    // Crear tabla de lexemas y tokens
    console.log("\nTabla de lexemas - tokens:");
    let token = lexer.nextToken();
    while (token.type !== antlr4.Token.EOF) {
    const symbolicNames = lexer.constructor.symbolicNames;
    const tokenName = symbolicNames[token.type] || "UNKNOWN";
    const lexeme = token.text;
    console.log(`Lexema: "${lexeme}" => Token: ${tokenName}`);
    token = lexer.nextToken();
    }
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new CalculatorParser(tokenStream);
    parser.buildParseTrees = true;
    let tree = parser.programa();
    
    // Verifico si se produjeron errores
    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada.");
    } 
    else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`Árbol de derivación: ${cadena_tree}`);

        // Utilizo un listener y un walker para recorrer el arbol e indicar cada vez que reconoce una sentencia (stat)
        //const listener = new CustomCalculatorListener();
        // ParseTreeWalker.DEFAULT.walk(listener, tree);

        // Utilizo un visitor para visitar los nodos que me interesan de mi arbol
        const visitor = new CustomCalculatorVisitor();
        visitor.visit(tree);
                console.log("\nÁrbol de derivación indentado:");
        printParseTree(tree, parser);

           
        
    }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
    
}

// Ejecuta la función principal
main();

function printParseTree(node, parser, indent = "") {
    if (!node) return;

    // Si el nodo tiene una regla de parser
    if (node.ruleIndex !== undefined) {
        const ruleName = parser.ruleNames[node.ruleIndex];
        console.log(`${indent}${ruleName}`);
    }

    // Recorre los hijos del nodo
    if (node.children) {
        for (const child of node.children) {
            printParseTree(child, parser, indent + "  ");
        }
    } else {
        const text = node.getText().replace(/\r?\n/g, "\\n");
        console.log(`${indent}"${text}"`);
    }
}
