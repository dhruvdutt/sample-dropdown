import styled from 'styled-components';

// ////////////////////////////////////////////////////////

export const HeaderText = styled.p`
  color: #5768e9;
  font-size: 1.5rem;
  font-weight: 700;
`;

export const AppContainer = styled.div`
  padding: 5% 15%;

  @media (min-width: 481px) and (max-width: 767px) {
    padding: 3% 10%;
  }

  @media (min-width: 320px) and (max-width: 480px) {
    padding: 3% 5%;
  }

  .form-control.input-sm {
    height: 30px;
  }
`;

export const Layout = styled.div`
  padding: ${props => (props.padding ? props.padding : '')};
  padding-top: ${props => (props.paddingTop ? props.paddingTop : '')};
  padding-bottom: ${props => (props.paddingBottom ? props.paddingBottom : '')};
  padding-right: ${props => (props.paddingRight ? props.padding : '')};
  padding-left: ${props => (props.paddingLeft ? props.paddingLeft : '')};
  margin: ${props => (props.margin ? props.margin : '')};
  margin-top: ${props => (props.marginTop ? props.marginTop : '')};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : '')};
  margin-right: ${props => (props.marginRight ? props.margin : '')};
  margin-left: ${props => (props.marginLeft ? props.marginLeft : '')};
  width: ${props => (props.width ? props.width : '')};
  height: ${props => (props.height ? props.height : '')};
  min-width: ${props => (props.minWidth ? props.minWidth : '')};
  min-height: ${props => (props.minHeight ? props.minHeight : '')};
`;

export const Flex = Layout.extend`
  display: flex;
  align-content: ${props => (props.alignContent ? props.alignContent : '')};
  align-items: ${props => (props.alignItems ? props.alignItems : '')};
  align-self: ${props => (props.alignSelf ? props.alignSelf : '')};
  flex-basis: ${props => (props.flexBasis ? props.flexBasis : '')};
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
  flex-grow: ${props => (props.flexGrow ? props.flexGrow : '')};
  flex-shrink: ${props => (props.flexShrink ? props.flexShrink : '')};
  flex-wrap: ${props => (props.flexWrap ? props.flexWrap : '')};
  flex: ${props => (props.flex ? props.flex : '')};
  justify-content: ${props => (props.justifyContent ? props.justifyContent : '')};
  order: ${props => (props.order ? props.order : '')};
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  text-indent: 1rem;
  background-color: #fafafa;
  font-size: 0.9rem;
  outline: none;
  &:focus {
    background-color: #fff;
  }
`;

export const SuggestionsList = styled.ul`
  display: block;
  width: 100%;
  border: 1px solid lightgray;
  border-top: none;
  background-color: #fff;
  font-size: 0.9rem;
  z-index: 3;
  margin: 0;
  padding: 0;
  list-style: none;
  max-height: 400px;
  overflow-y: auto;
  li {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    padding: 10px;
    user-select: none;
    :not(:last-child) {
      border-bottom: 1px solid lightgray;
    }
  }
`;

export const Text = styled.p`
  color: ${props => (props.color ? props.color : 'gray')};
  font-size: ${props => (props.size ? props.size : '1rem')};
  font-weight: ${props => (props.weight ? props.weight : 400)};
  font-style: ${props => (props.italic ? 'italic' : 'normal')};
  text-align: ${props => props.align || ''};
  word-break: ${props => (props.wrap ? 'break-all' : '')};
  padding: 0.25rem 0;
  margin: 0;
`;
