RequireJS
=========

RequireJS for Dummies

Getting Started with RequireJS and AMD

Modules
AMD is a format that provides a way to write modular code, despite the lack of native modules in JavaScript. Writing modular code helps improve the quality of code by providing:

- encapsulation
- code reuse
- reduced reliance on globals
- separation of concerns
- testability

RequireJS is a loader that understands the AMD format, so let’s look at how to write AMD modules and use RequireJS to load them.

Using RequireJS
Getting started with RequireJS is as simple as including a single script tag in your HTML page and then writing your modules using define to declare dependencies and export functionality.

The RequireJS documentation shows a number of ways to use define, but probably the two most common forms are described in that documentation as:
