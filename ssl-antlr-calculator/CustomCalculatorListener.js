import CalculatorListener from "./generated/CalculatorListener.js";

export class CustomCalculatorListener extends CalculatorListener {

    enterStat(ctx) {
        console.log(`Se detecto una: ${ctx.constructor.name}`);
    }
    
  }



