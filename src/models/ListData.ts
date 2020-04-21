export default {
  namespace:'list',
  state:{
    data:[1,2,3],
    maxNum:3
  },
  reducers : {
    addNewData:function (state) {//state为更新前的状态数据
      let maxNum=state.maxNum+1;
      let newArr=[...this.props.dataList,maxNum];
      return{
        data:newArr,
        maxNum:maxNum
      }
    }
  }
}
