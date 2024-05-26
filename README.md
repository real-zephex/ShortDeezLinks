# ShortDeezLinks
A simple link shortener built using the Next.js framework, Next UI components, TypeScript, and SQLite.

### Description
This is my first attempt at creating a link shortener, done entirely without any external help. I acknowledge that my approach might not be perfect and could potentially have flaws, but it works!

### How it works
1. The user inputs a `URL` they want to shorten. This `URL` is validated against a regular expression to ensure it is in a correct format.
2. The application checks the database to see if a short link for this `URL` already exists. If it does, the existing short link is returned to the user. If not, a new entry is created in the database with the original `URL` and the generated short code.
3. When someone visits the shortened link, the application queries the database for the original `URL`. If found, the user is redirected to that `URL`; if not, the user is notified that the code is invalid.

## Deployments
A public version is deployed on Render, which you can access here: [ShortDeezLinks - Render](https://shortdeezlinks-gk72.onrender.com/ "ShortDeezLinks - Render")

You can also self-host it on your local machines or any similar platform.

## Contributions
Feel free to contribute!
