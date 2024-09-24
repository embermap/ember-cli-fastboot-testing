This addon is setup to publish to npm when GitHub release gets created, see [publish](./.github/workflows/publish.yml)
GitHub workflow.

Hence, sequence of steps should be:

- `GITHUB_AUTH=abc npx lerna-changelog` to create changelog
- `npm version [major | minor | patch]` to tag the release
- `git push` to push code changes
- `git push origin tag <tag_name>` to push the git tag
- Create new GitHub release from newly published tag https://github.com/embermap/ember-cli-fastboot-testing/releases/new
