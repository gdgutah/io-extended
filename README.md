# gdgut.com/io-extended Website

Repo for the Google I/O Extended Utah website.

![Google I/O Extended Utah logo](resources/logo.png)

## Making Changes

If you want to change content here's what you need to do:

 1. Clone the repo `git clone git@github.com:gdgutah/io-extended.com.git`
 1. `cd builder`
 1. Run `npm install`
 1. Run `grunt dev` for live recompiling of the jade stuff.
 1. Make your changes
 1. Run `grunt`
 1. Check your browser on index.html and make sure it looks good.
 1. Commit the changes.

Look at what's returned in `builder/data.js` and edit the applicable fields. Otherwise,
look at the `builder/partials` folder to change other content there. Good luck!