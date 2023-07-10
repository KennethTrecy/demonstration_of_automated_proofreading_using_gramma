[![Web Front-end Tests](https://img.shields.io/github/actions/workflow/status/KennethTrecy/demonstration_of_automated_proofreading_using_gramma/front-end.yml?style=for-the-badge)](https://github.com/KennethTrecy/demonstration_of_automated_proofreading_using_gramma/actions/workflows/:workflow-filename.yml)
![GitHub lines](https://img.shields.io/github/license/KennethTrecy/demonstration_of_automated_proofreading_using_gramma?style=for-the-badge)
![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/KennethTrecy/demonstration_of_automated_proofreading_using_gramma?style=for-the-badge&display_name=tag&sort=semver)
![GitHub closed issues count](https://img.shields.io/github/issues-closed/KennethTrecy/demonstration_of_automated_proofreading_using_gramma?style=for-the-badge)
![GitHub pull request count](https://img.shields.io/github/issues-pr-closed/KennethTrecy/demonstration_of_automated_proofreading_using_gramma?style=for-the-badge)
![GitHub code size in bytes](https://img.shields.io/github/repo-size/KennethTrecy/demonstration_of_automated_proofreading_using_gramma?style=for-the-badge)

# Demonstration of Automated Proofreading using Gramma
This repository demonstrates a basic automated proofreading as explained in [my article].

## Origin
Some parts of the repository was based from [`vite`] branch of [Web Template].

The template is specialized for front-end development.

## Usage

### Initialization
If you want to contribute, the repository should be initialized to adhere in [Conventional Commits
specification] for organize commits and automated generation of change log.

#### Prerequisites
- [Node.js environment]
- [pnpm] (optional)

#### Instructions
By running the command below, all your commits will be linted to follow the [Conventional Commits
specification].
```
$ npm install
```

Or if you have installed [pnpm], run the following command:
```
$ pnpm install
```

To generate the change log automatically, run the command below:
```
$ npx changelogen --from=[tag name or branch name or commit itself] --to=master
```

## Notes
It is optional to attribute this repository in other template/projects.

### License
The repository is licensed under [MIT].

### Want to contribute?
Read the [contributing guide] for different ways to contribute in the project.

### Author
Coded by Kenneth Trecy Tobias.

### Disclaimer
This personal project may contain references to trademarks, which are included in good faith. However, it is important to note that such references do not indicate any endorsement, affiliation, or sponsorship by the respective trademark holders unless explicitly stated.

[my article]: https://kennethtrecy.pages.dev/articles/key_steps_to_add_gramma_for_improved_ci
[`vite`]: https://github.com/KennethTrecy/web_template/tree/vite
[Web Template]: https://github.com/KennethTrecy/web_template/
[MIT]: https://github.com/KennethTrecy/demonstration_of_automated_proofreading_using_gramma/blob/master/LICENSE
[Node.js environment]: https://nodejs.org/en/
[pnpm]: https://pnpm.io/installation
[Conventional Commits specification]: https://www.conventionalcommits.org/en/v1.0.0/
[contributing guide]: ./CONTRIBUTING.md
