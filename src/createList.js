export function createList(name) {
  return { id: Date.now().toString(), name: name, tasks: [
    
  ]};
}

export function createTask(name){
  return {id: Date.now().toString(), name: name, complete: false }
}


export default {createList, createTask}; 


