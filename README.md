# devfestfam.com Website

Repo for the Dev Fest Fam website.

![devfestfam.com logo](resources/devfest-logo.png)

## Making Changes

If you want to change content here's what you need to do:

 1. Clone the repo `git clone git@github.com:gdgutah/devfestfam.com.git`
 2. Run `npm install`
 3. Make your changes
 4. `cd builder`
 5. run `node generator.js`
 6. Check your browser on index.html and make sure it looks good.
 7. Commit the changes.

### Activities/Sessions

A session is an activity, but not all activities are sessions. Open `genierator.js` and find the `days` array of the
options variable. Each day has an array of activities. If it's not a session, simply leave out the speaker property.
Then fill in the necessary fields (look at the others for an example).

For the session speaker's content, look in `builder/activities/sessions`. Create a folder with the name of the speaker
replacing all spaces with a dash and lowercasing everything. For example, if a speaker were named: "Aaron Frost" then
the folder name would be `aaron-frost`. You will do the same thing for the name of the photo, except the location of
the photo should be in `resources/speaker-photos` and it should have a `jpg` file extension. For example `aaron-frost.jpg`

To change other content, look at the `options` variable in `generator.js` and edit the applicable fields. Otherwise,
look at the `builder/partials` folder to change other content there. Good luck!