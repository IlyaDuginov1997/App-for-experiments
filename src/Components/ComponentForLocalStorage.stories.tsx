import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {ComponentForLocalStorage} from './ComponentForLocalStorage';
import {action} from '@storybook/addon-actions';

export default {
    title: 'LocalStorageExample',
    component: ComponentForLocalStorage,
} as ComponentMeta<typeof ComponentForLocalStorage>;

const Template: ComponentStory<typeof ComponentForLocalStorage> = (args) => <ComponentForLocalStorage {...args} />;

export const ComponentForLocalStoragePage = Template.bind({});
ComponentForLocalStoragePage.args = {
    // addSomeFunc: action('Hey')
    someFunc: action('hey, my little son')
};

