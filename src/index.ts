// index.ts
// 05/02/23
import { app, BrowserWindow } from "electron";
import * as path from "path";

app.on("ready", () => {
  console.log("App started");

  const win = new BrowserWindow({
    width: 600,
    height: 400,
  });

  const indexHTML = path.join(__dirname + "/index.html");
  win
    .loadFile(indexHTML)
    .then(() => {
      // Starting place for your code
      // Implement your code starting from here
    })
    .catch((e) => console.error(e));
});
