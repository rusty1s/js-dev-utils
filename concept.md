# Concept

* CLI for various commands:
  * babel
  * eslint
  * prettier
  * stylelint
  * markdownlint
  * webpack
  * webpack-dev-server
* Config needs to be minimal and extendable
* This whole project needs to be testable!
  * **Problem:** It's not testable if we call the various CLIs, isn't it?
* `link:..` vs. `file:..` mechanic: It's better to just avoid two projects and test a demo in one project.
* The configs should be added to the root project by default. But it should be mocked, wenn using `fs` in tests
