# Theming Jupyter notebook with Webpack

This is a small experiment of using webpack to bundle external CSS and JS files and libraries into a unique `custom.js` to customize a Jupyter notebook frontend. For now it bundles [animate.css](https://daneden.github.io/animate.css/) and some custom js on the Jupyter JS API to add bounceIn animation to cell creation.

## Prerequisites :

- conda 3+
- nodejs 8+
- npm 4+

## Install

```
npm install
conda create -n webpack-jupyter-theming python=3
conda activate webpack-jupyter-theming
conda install jupyter
```

## Run

```
npm run build
cp dist/custom.js <your user>/.jupyter/custom/
conda activate webpack-jupyter-theming
jupyter notebook
```
