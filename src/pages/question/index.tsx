import React, {Component} from 'react'
import { connect } from 'dva'
import {Card, Row, Col, Form, Button, Input, Checkbox} from 'antd'
const namespace = 'puzzlecards';

const mapStateToProps = (state) => {
  const cardList = state[namespace].data;
  return {
    cardList
  };
};
/*const mapDispatchToProps = (dispatch) => {
  return {
    onClickAdd: (newCard) => {
      const action = {
        type: `${namespace}/addNewCard`,
        payload: newCard,
      };
      dispatch(action);
    },
  };
};
@connect(mapStateToProps,mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
        { <div>
          <Button onClick={() => this.props.onClickAdd({
            setup: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
            punchline: 'here we use dva',
          })}> 添加卡片 </Button>
        </div> }
      </div>
    );
  }
}*/
const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: () => {
      dispatch({
        type: `${namespace}/queryInitCards`,
      });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class PuzzleCardsPage extends Component {
  componentDidMount() {
    this.props.onDidMount();
  }
  render() {
    return (
      <div>
        {
          this.props.cardList.map(card => {
            return (
              <Card key={card.id}>
                <div>Q: {card.setup}</div>
                <div>
                  <strong>A: {card.punchline}</strong>
                </div>
              </Card>
            );
          })
        }
      </div>
    );
  }
}
