import React, { Component } from "react";

class Modmain extends Component {
  render() {
    return (
      <div>
        <p>Ok. As I was saying..</p>
        <ul>
          <li>
            So now call render() then in render call return (). Insire return
            write you html. Code.
          </li>
          <li>
            Now go to Main.js or ins ome cases App.js als typically in src
            folder.. and add your path to import, nav bar and body of files. The
            body will be the dib with className content...
          </li>
          <li>I think that is all.</li>
          <li>
            Now the usual git steps. If on master 1. git add . | git commit -m
            "message" | git push master origin.. I always forget the later.
          </li>
          <li>
            At this point the app has the latest changes in the master repo. Now
            its time to compile and push complied app to gh-pages branch.{" "}
          </li>
          <li>So to do this rung yarn build.. when done run yarn deploy.</li>
        </ul>
      </div>
    );
  }
}

export default Modmain;
