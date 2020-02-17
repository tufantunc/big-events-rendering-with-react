import express from "express";
import { join } from "path";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";
import { Events } from "./bulten_data.json";
import Index from "../app/src/pages/index";
import Provider from "../app/src/store/provider";
import React from 'react';

const app = express();
const port = process.env.PORT || 3000;

app.use("/dist", express.static(join(__dirname, "..", "app", "dist")));

app.get("/", (req,res) => {
    let layout = readFileSync(join(__dirname, "..", "app", "index.html"), "utf-8");
    global.window = {
        innerWidth: 1280,
        innerHeight: 1024
    }
    var ssr = renderToString((
        <Provider events={Events}>
            <Index />
        </Provider>
    ));
    layout = layout.replace("{{serverRenderedContent}}", ssr);
    layout = layout.replace("</head>", "<script>var ssrEnabled = true;</script></head>");
    res.send(layout);
});

app.get("/nossr", (req, res) => {
    res.sendFile(join(__dirname, "..", "app", "index.html"), "utf-8");
})

app.get("/api/bulten", (req,res) => {
    res.send(Events);
});

app.listen(port, () => console.log(`Server listening on ${port}`));
