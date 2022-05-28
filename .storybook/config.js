import { configure } from "@storybook/react";

function loadStories(){
    require('../src/stories/InputStory');
}

configure(loadStories, module);