import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Downshift from 'downshift';
import matchSorter from 'match-sorter';

import InputBox from '../components/InputBox';
import { SuggestionsList, Text } from '../styles';
import NoResults from '../components/NoResults';

// ////////////////////////////////////////////////////////

const propTypes = {
  dataItems: PropTypes.array
};

const defaultProps = {
  dataItems: []
};

const itemToString = item => (item ? item.name : '');

export default class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getItems = value =>
    value
      ? matchSorter(this.props.dataItems, value, { keys: ['id', 'name', 'address', 'items'] })
      : this.props.dataItems;

  render() {
    return (
      <React.Fragment>
        <Downshift itemToString={itemToString} defaultIsOpen>
          {({
            getInputProps,
            getMenuProps,
            getItemProps,

            // clearSelection,

            highlightedIndex,
            // selectedItem,
            isOpen,
            inputValue
          }) => (
            <div>
              <InputBox {...getInputProps()} />
              {/* {selectedItem ? <button onClick={clearSelection}>x</button> : null} */}
              <SuggestionsList {...getMenuProps({ refKey: 'innerRef' })}>
                {isOpen ? (
                  this.getItems(inputValue).length === 0 ? (
                    <NoResults />
                  ) : (
                    this.getItems(inputValue).map((item, index) => (
                      <li
                        {...getItemProps({
                          item,
                          key: item.id,
                          style: {
                            backgroundColor: index === highlightedIndex ? 'lightyellow' : ''
                          }
                        })}
                      >
                        <Text weight="600" color="black" size="1.2rem">
                          {item.id}
                        </Text>
                        <Text weight="400" color="gray" size="1.1rem" italic>
                          {item.name}
                        </Text>
                        <Text weight="300" color="lightgray" truncate>
                          {item.address}
                        </Text>
                      </li>
                    ))
                  )
                ) : null}
              </SuggestionsList>
            </div>
          )}
        </Downshift>
      </React.Fragment>
    );
  }
}

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
