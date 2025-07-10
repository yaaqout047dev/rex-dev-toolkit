

export const addY = 'AddY';
export const delY = 'DelY'; 
export const add2Y = 'Add2Y'

export const addYAction = async (dispatch1)=>{
  return dispatch1({
    type : addY
  })
}


export const delYAction = async(dispatch1)=>{
  return dispatch1({
    type : delY
  })
}

export const add2YAction = async(dispatch1)=>{
  return dispatch1({
    type : add2Y
  })
}