# 🚀 Movie Finder Test 

This is a [MovieFinder](https://moviefindertestjunior.netlify.app/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ⚙️ How to launch th project and test it
First, clone project:
```bash
git clone  url of project
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
#and
npm install

```
You can Test the code with jest :

```bash
npm run test
# or
yarn test

```
## 💻 Project Description

Movie Finder is app to find top movie and all movie. You can sort by alphabetic or filter by genre and year.

The top movie is carousel slide create from scratch.
The all movie section, you can only see 20 movies and when you scroll end you see the other 20 movies, i build this from scratch to.

Why i used :

- [Next.js](https://nextjs.org/docs) - Because Fast refresh, server-side renderinge, Built-in Image  Component and Automatic Image Optimization, Reusable components.
- [Jest](https://jestjs.io/fr/) - Because very fast to execute, relatively easy to setup, not requiring any elaborate configuration, 

Challenge :

- I build my carousel from scratch, first i use useRef to access to my div carousel and i use scrollLeft and offsetWidth.
- I create a scroll infinite to my all movie. When my user touch the end to my div, next page is load.
- Some picture doesnt load so i build a component 'FallBackImage' who replace a image doesnt load with image default.  