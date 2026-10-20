# c4dm-studios

Live and loud on the internet.

Public facing, with additional support for internal users.

## Install

Dependencies: [bun](https://bun.sh/)

```bash
bun install
```

Additionally, if you use VSCode, you will be prompted to install helpful plugins when first opening the project.

## Contribute

- Markdown content is located in `/src/config`.
- Images are stored in `/public/images`.
- Studio resources are located in `/public/resources`.

## Develop

```bash
bun run dev 	# run the website locally with hot refresh
bun run format	# format the codebase (please run before committing)
bun run test	# lint the codebase (please run before publishing)
bun run build 	# build the website to /dist
bun run preview	# run a website from /dist
bun run deploy	# build to /dist and then make public (gh-pages)
```
