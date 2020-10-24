// add image to store list
export const addImage=(payload:string)=>{
    return {
        type:"ADD_IMAGE",
        payload
    }
}
// remove image from store list
export const removeImage=(payload:Number)=>{
    return {
        type:"ADD_IMAGE",
        payload
    }
}