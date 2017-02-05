import { connect } from 'react-redux'
import { mould } from '../reducers/initialVariables'

import Card from '../components/Card'
import CardsBoard from '../components/CardsBoard'
import { asynCardTransform } from '../actions/action'


const mapStateToProps = (state) => {

  const{ cardsAndBoradState } = state
  
  let isChange  = {}
  mould.forEach(function(value,index){
    mould[index] = {
        ['isChange'+index]:{
          backgroundColor:cardsAndBoradState.backgroundColor[index],
          isSelected:cardsAndBoradState.isSelected[index]
        }
      }
  })

  for(let value of mould){
    for(let key in value){
      isChange[key] = value[key]
    }
}
 
    return{

    ...isChange,
    progress:cardsAndBoradState.progress,
    backgroundColor:cardsAndBoradState.backgroundColor
  }


  /*return{ 
   

    isChange0:{
      backgroundColor:cardsAndBoradState.backgroundColor[0],
      isSelected:cardsAndBoradState.isSelected[0]
    },
    isChange1:{
      backgroundColor:cardsAndBoradState.backgroundColor[1],
      isSelected:cardsAndBoradState.isSelected[1]
    },
    isChange2:{
      backgroundColor:cardsAndBoradState.backgroundColor[2],
      isSelected:cardsAndBoradState.isSelected[2]
    },
    isChange3:{
      backgroundColor:cardsAndBoradState.backgroundColor[3],
      isSelected:cardsAndBoradState.isSelected[3]
    },
    isChange4:{
      backgroundColor:cardsAndBoradState.backgroundColor[4],
      isSelected:cardsAndBoradState.isSelected[4]
    },
    isChange5:{
      backgroundColor:cardsAndBoradState.backgroundColor[5],
      isSelected:cardsAndBoradState.isSelected[5]
    },
    isChange6:{
     backgroundColor:cardsAndBoradState.backgroundColor[6],
     isSelected:cardsAndBoradState.isSelected[6]
   },
   isChange7:{
     backgroundColor:cardsAndBoradState.backgroundColor[7],
     isSelected:cardsAndBoradState.isSelected[7]
   },
   progress:cardsAndBoradState.progress/2

   }*/
  
  
}




/*const mapDispatchToProps = (dispatch, ownProps) => ({
  turnOver:() => {
    dispatch(asynCardTransform(ownProps.front,ownProps.back))
  }
})*/


// const mapDispatchToProps = ({
//   turnOver: asynCardTransform
// })

export default connect( mapStateToProps )(CardsBoard)