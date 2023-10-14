# Reproduction for TypeScript issue https://github.com/microsoft/TypeScript/issues/55863

## Setup

Two folders: `noIndex` and `withIndex`. The former exports a function directly, while the latter uses a barrel file to export their contents.  
In `tsconfig.json`, path aliases have been configured to match the above folder exports, with the prefix `~/`. **The slash seems to be the issue here. Without it, imports work as expected.**

## Steps to reproduce

The `reproduction` folder contains two files to demonstrate the issue. Comments in these files explain the result and desired behavior.

## Expected result

The `/` in the path alias should make no difference: both `'~/somePath'` and `~somePath` should work.
