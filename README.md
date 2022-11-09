# Remix Electro Swing Stack

![The Remix Electro Swing Stack](https://repository-images.githubusercontent.com/563725795/911ba338-2115-4063-ac72-0622ea656d12)

Learn more about [Remix Stacks](https://remix.run/stacks).

```
npx create-remix@latest --template amanolar94/electro-swing-stack
```

## What's in the stack


- Database ORM with [Prisma](https://prisma.io)
- Styling with [Tailwind](https://tailwindcss.com/)
- Code formatting with [Prettier](https://prettier.io)
- Linting with [ESLint](https://eslint.org)
- Static Types with [TypeScript](https://typescriptlang.org)
- Hot Module Replacement with [remix-vite](https://github.com/sudomf/remix-vite)

Not a fan of bits of the stack? Fork it, change it, and use `npx create-remix --template your/repo`! Make it your own.

## Development

- This step only applies if you've opted out of having the CLI install dependencies for you:

   ```sh
   npx remix init
   ```

- Run the first build:

  ```sh
  npm run build
  ```

- Start dev server:

  ```sh
  npm run dev
  ```

This starts your app in development mode, **BUT with hot module replacement!**
### Relevant code:

This is just a hello world app that serves as a starter project.

### Prisma ORM

To initialize prisma on an existing project you need to follow the steps bellow:  
1. run `npx prisma init` to initialize your prisma files.
2. set your database url in the env file: `DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"`
3. run `npx prisma db pull` to introspect your database.
4. run `npx prisma generate` to read your schema and generate the Prisma Client Library.
   
This mini guide assumes that you use mysql and postgres on an already existing database.
See the [Set Up Prisma guide](https://www.prisma.io/docs/getting-started/setup-prisma) for more details and instructions on different db types.

### Styling

The project uses Tailwind for styling. It is recommended to install an editor plugin (like the [VSCode Tailwind CSS Intellisense plugin](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)) to get auto complete and suggestion features.

### Type Checking

This project uses TypeScript. It's recommended to get TypeScript set up for your editor to get a really great in-editor experience with type checking and auto-complete.

### Linting

This project uses ESLint for linting. That is configured in `.eslintrc.js`.

### Formatting

The project uses [Prettier](https://prettier.io/) for auto-formatting along with the [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss) for formatting the classNames strings . It's recommended to install an editor plugin (like the [VSCode Prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)) to get auto-formatting on save. 