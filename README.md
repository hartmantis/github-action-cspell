# CSpell GitHub Action

<p align="left">
  <a href="https://github.com/roboticcheese/github-action-cspell/actions"><img alt="CI Status" src="https://github.com/roboticcheese/github-action-cspell/workflows/ci/badge.svg"></a>
</p>

This action runs the `cspell` spell checker.

## Inputs

### `path`

***Required*** The path to the file(s) to lint. Default: `**/*.md`.

## Example usage

```
uses: roboticcheese/github-action-cspell@v1
with:
    path: README.md
```
