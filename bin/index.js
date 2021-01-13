#!/usr/bin/env node

const mkdirp     = require("mkdirp");
const changeCase = require("change-case");
const path       = require("path");
const fs         = require("fs");

const componentName = process.argv[2];
const componentRoot = process.argv[3];

const fileName  = changeCase.paramCase(componentName);
const className = changeCase.pascalCase(fileName);
const absPath   = path.resolve(componentRoot);

const componentFolderPath = `${absPath}/${fileName}`;
const componentPath       = mkdirp.sync(componentFolderPath);

if (!componentPath) {
    console.error(`[X] "${componentFolderPath}" already exists!`);
} else {
    try {
        const componentFilePath = `${componentPath}/${fileName}.component.jsx`;
        const scssFilePath      = `${componentPath}/${fileName}.styles.scss`;

        const copiedFiles = [componentFilePath, scssFilePath];
        const replaceMap  = [
            {key: "$NAME_CLASS", value: className},
            {key: "$NAME", value: fileName},
        ];

        fs.copyFileSync("./model/component.jsx", componentFilePath);
        fs.copyFileSync("./model/styles.scss", scssFilePath);

        copiedFiles.forEach(filePath => {
            let fileStrValue = fs.readFileSync(filePath).toString();

            replaceMap.forEach(keyValue => {
                fileStrValue = fileStrValue.replaceAll(keyValue.key, keyValue.value);
            });

            fs.writeFileSync(filePath, fileStrValue);
        });

        console.log(`"${className}" component created at:\n\t${copiedFiles.join("\n\t")}`);
    } catch (error) {
        console.error(`[X] unable to create "${className}" component!\nError: ${error.message}`);
    }
}