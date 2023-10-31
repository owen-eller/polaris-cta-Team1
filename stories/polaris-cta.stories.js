import { html } from 'lit';
import '../src/polaris-cta.js';

export default {
  title: 'PolarisCta',
  component: 'polaris-cta',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <polaris-cta
      style="--polaris-cta-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </polaris-cta>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
