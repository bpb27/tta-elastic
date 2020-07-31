const component = ({ camelCaseName, dashCase, titleCaseName }) => (`\
import React from 'react';
import { string } from 'prop-types';
import styles from './${dashCase}.style.scss';

export default class ${titleCaseName} extends React.Component {
  static propTypes = {
    name: string,
  }

  render () {
    return (
      <div className={styles.${camelCaseName}}>
        a component
      </div>
    );
  }
}
`);

const index = ({ dashCase, titleCaseName }) => (`\
import ${titleCaseName} from './${dashCase}.component';

export default ${titleCaseName};
`);

const style = ({ camelCaseName }) => (`\
.${camelCaseName} {

}
`);

const test = ({ camelCaseName, dashCase, titleCaseName }) => (`\
import React from 'react';
import { shallow } from 'enzyme';
import ${titleCaseName} from './${dashCase}.component';

const createProps = () => ({

});

describe('${titleCaseName}', () => {
  it('renders', () => {
    const props = createProps();
    const wrapper = shallow(<${titleCaseName} {...props}/>);
    const element = wrapper.find('.${camelCaseName}');
    expect(element.exists()).toEqual(true);
  });
});
`);

module.exports = {
  component,
  index,
  style,
  test,
};
