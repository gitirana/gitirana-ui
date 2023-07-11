# 🎨 My ESLint config

## The Rules:

<ul>
  <li>[x] printWidth: 100</li>
  <li>[x] tabWidth: 2</li>
  <li>[x] singleQuote: false</li>
  <li>[x] trailingComma: 'all'</li>
  <li>[x] arrowParens: 'always'</li>
  <li>[x] semi: true</li>
</ul>


## Setup

1. If you use VSCode: Install eslint extension

[ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

2. Install the dependencies
```
npm i -D eslint @gitirana/eslint-config
```

3. Add this code to your settings.json
> If you use WSL, add the code on te Remote Settings

```
"editor.codeActionsOnSave": {
  "source.fixAll.eslint": true,
},
```

4. Create a `.eslintrc.json` file extending the config:

#### For React:
```
{
  "extends": "@gitirana/eslint-config/react"
}
```
#### For Node:
```
{
  "extends": "@gitirana/eslint-config/node"
}
```

> You can also use a `.eslintrc.js` instead of JSON if you prefer.
