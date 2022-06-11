import React, {useState} from 'react'
import {Collapse, Checkbox} from 'antd';


const {Panel} = Collapse;

function CheckBox(props) {

    const [Checked, setChecked] = useState([])

    const handleToggle = (value) => {

        //클릭한 것의 index 구하고 
        const currenIndex = Checked.indexOf(value)
        //전체 checked된 state에서 현재 누른 checked가 이미 있다면

        const newChecked = [...Checked]

        if(currenIndex === -1){ //state 넣어준다.
            newChecked.push(value)
        }else {    // 빼주고 
            newChecked.splice(currenIndex, 1)
        }
        
        setChecked(newChecked)
        props.handleFilters(newChecked)
        

    }

    const renderCheckboxLists = () => props.list && props.list.map((value, index) => (
        <React.Fragment key={index}>
            <Checkbox onChange={() => handleToggle(value._id)} 
                        checked={Checked.indexOf(value._id) === -1 ? false : true} />
                <span>{value.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>

        </React.Fragment>
    ))

  return (

    <div>
    <Collapse defaultActiveKey={['0']}>
      <Panel header="모양" key="1">

      {renderCheckboxLists()}    
      
      </Panel>
      
    </Collapse>
    </div>
  )
}

export default CheckBox