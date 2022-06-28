# 🚀 Movie Finder Test 

![alt text](/public/moviecapturegithub.png "Optional title")


This is a [MovieFinder](https://moviefindertestjunior.netlify.app/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## ⚙️ How to launch the project and test it
First, clone the project:
```bash
git clone  url of project
```

Secondly, run the development server:

```bash
npm run dev
# or
yarn dev
#and
npm install

```
You can test the code using jest :

```bash
npm run test
# or
yarn test

```
## 💻 Project Description

Movie Finder is an app designed to help users find movies based on different search criteria (alphabetic order or filter by genre or year).

The top movie carousel has been created from scratch.
In the "all movie" section, users can see up to 20 movies and scroll to the end to find more movies. I have also built this functionnality from scratch.

Tech Stack :

- [Next.js](https://nextjs.org/docs) - Used for the speed of the refresh feature, server-side renderinge, Built-in Image  Component and Automatic Image Optimization, Reusable components.
- [Jest](https://jestjs.io/fr/) - Used for the speed of execution, ease to setup, doesn't require any complex configuration 

Challenges I faced :

- Building the carousel from scratch: I used useRef to access my div carousel and then scrollLeft and offsetWidth.
- Create the infinite scroll for all movies: to create a better user experience, at the end to my div, the next page loads automatically.
- Issues with picture  loading: To solve the problem, I built a component 'FallBackImage' which replaced the image which didn't load with another default image.  