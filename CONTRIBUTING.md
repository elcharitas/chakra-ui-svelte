# Contribution Guidelines

Thanks for showing interest to contribute to this project 😩.

When it comes to open source, there are different ways you can contribute, all
of which are valuable.

## Setup the Project

The following steps will get you up and running to contribute to Chakra UI `svelte`:

1. Fork the repo (click the <kbd>Fork</kbd> button at the top right of
   [this page](https://github.com/elcharitas/chakra-ui-svelte))

2. Clone your fork locally

```sh
git clone https://github.com/<your_github_username>/chakra-ui-svelte.git
cd chakra-ui-svelte
```

3. Setup all the dependencies and packages by running `pnpm install`. This
   command will install dependencies.

> If you run into any issues during this step, kindly reach out to me via twitter

### Tooling

- [PNPM](https://pnpm.io/) to manage packages and dependencies
- [Histoire](https://histoire.dev/) for rapid UI component development and
  testing

### Commands

**`pnpm install`**: bootstraps the entire project, symlinks all dependencies for
cross-component development and builds all components.

**`pnpm test`**: run test for all component packages.

## Making a Pull Request?

Pull requests need only the :+1: of two or more collaborators to be merged; when
the PR author is a collaborator, that counts as one.

### Commit Convention

Before you create a Pull Request, please check whether your commits comply with
the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention
`category(scope or module): message` in your commit message while using one of
the following categories:

- `feat / feature`: all changes that introduce completely new code or new
  features
- `fix`: changes that fix a bug (ideally you will additionally reference an
  issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for
  usage of a lib or cli usage)
- `build`: all changes regarding the build of the software, changes to
  dependencies or the addition of new dependencies
- `test`: all changes regarding tests (adding new tests or changing existing
  ones)
- `ci`: all changes regarding the configuration of continuous integration (i.e.
  github actions, ci system)
- `chore`: all changes to the repository that do not fit into any of the above
  categories

If you are interested in the detailed specification you can visit
https://www.conventionalcommits.org/ or check out the
[Angular Commit Message Guidelines](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#-commit-message-guidelines).

### Steps to PR

1. Fork of the chakra-ui repository and clone your fork

2. Create a new branch out of the `main` branch. We follow the convention
   `[type/scope]`. For example `fix/accordion-hook` or `docs/menu-typo`. `type`
   can be either `docs`, `fix`, `feat`, `build`, or any other conventional
   commit type. `scope` is just a short id that describes the scope of work.

3. Make and commit your changes following the
   [commit convention](https://github.com/elcharitas/chakra-ui-svelte/blob/main/CONTRIBUTING.md#commit-convention).
   As you develop, you can run `pnpm pkg <module> build` and
   `pnpm pkg <module> test` to make sure everything works as expected. Please
   note that you might have to run `pnpm boot` first in order to build all
   dependencies.

## License

By contributing your code to the chakra-ui GitHub repository, you agree to
license your contribution under the MIT license.
