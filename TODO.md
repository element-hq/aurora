* [x] Make HMR work
* [x] Hook up room list service
* [ ] Fix scrolling
  * Port from https://github.com/element-hq/hydrogen-web/blob/master/src/platform/web/ui/session/room/TimelineView.ts?
  * Which in turn is based on https://upbeat-khorana-b8c1bf.netlify.app/timeline-scrollby.html
* [ ] Unhardcode matrix.org
* [ ] Fill out the room header and roomlist header properly
* [ ] Support multiple accounts from the outset (using a spacepanel style UI for now, given matrix-sdk-ui's timeline API doesn't let you mix accounts together)
* [ ] Logout button
* [x] Figure out how timeline.subscribe() differs from room.subscribe() and which to use, and whether to cache timelines like multiverse does
* [ ] Hook up custom serialisation for ReactionGroups
* [ ] Make it survive network outages
* [x] Add composer
* [x] Add CSS from compound
* [x] Add login screen
* [x] Add rich msgs
* [ ] Emotes
* [ ] Add file xfer
* [ ] Replies
