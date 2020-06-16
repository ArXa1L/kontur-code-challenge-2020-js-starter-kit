#!/usr/bin/env node
const readline = require("readline");

function makeTurn(battleState) {
  const battleOutput = { };
  battleOutput.Message = "I have " + battleState.My.length + " ships and move to center of galaxy";
  battleOutput.UserCommands = [];

  for (const ship of battleState.My) {
    battleOutput.UserCommands.push({ Command: "MOVE", Parameters: { Id: ship.Id, Target: "15/15/15" }});
  }
  
  return battleOutput;
}

const rl = readline.createInterface({
  input: process.stdin,
  terminal: false
});

function makeDraft(draftOptions) {
  const draft = { };
  return draft;
}

function playGame() {
  rl.on('line', line => {
    const obj = JSON.parse(line);
    if (obj.hasOwnProperty('PlayerId')) {
      console.log(JSON.stringify(makeDraft(obj)));
    } else if (obj.hasOwnProperty("My"))
    {
      console.log(JSON.stringify(makeTurn(obj)));
    }
  })
}

playGame();

