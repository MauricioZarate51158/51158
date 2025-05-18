import { Parser } from "antlr4";
import CalculatorVisitor from "./generated/CalculatorVisitor.js";
import CalculatorParser from "./generated/CalculatorParser.js";

export class CustomCalculatorVisitor extends CalculatorVisitor{

    constructor() {
        super();
        this.memory = new Map();   //Declaro una variable de instancia con una memoria temporal para hacer las reducciones
    } 
    
    visitPrograma(ctx) {
    console.log("Visito el programa");
    return this.visit(ctx.instrucciones());
  }

  visitDecision(ctx) {
    console.log("Visito estructura if");

    const cond = ctx.condicion().getText();
    console.log("Condicion:", cond);

    this.visit(ctx.sentencia(0));
    if (ctx.ELSE()) {
      console.log("Tiene else");
      this.visit(ctx.sentencia(1));
    }

    return null;
  }

  visitSalida(ctx) {
    const str = ctx.cadena().getText();
    console.log("Salida printf:", str);
    return null;
  }

  visitTerminar(ctx) {
    console.log("Instruccion Return;");
    return null;
  }

  visitCadena(ctx) {
    console.log("Cadena encontrada:", ctx.getText());
    return null;
  }
}

module.exports = MyVisitor;