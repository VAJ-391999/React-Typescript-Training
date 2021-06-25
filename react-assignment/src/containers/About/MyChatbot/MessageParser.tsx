

class MessageParser {
    actionProvider
    state
    constructor(actionProvider : any, state: any) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message: any) {

        const lowercase = message.toLowerCase()
      console.log(message)

      if(lowercase.includes('hello')) {
          this.actionProvider.helloWorldHandler()
      }

      if(lowercase.includes('technology')) {
        this.actionProvider.technologyHandler()
    }

      if(lowercase.includes("todos")) {
          this.actionProvider.todosHandler()
      }

      if(lowercase.includes("javascript")) {
        this.actionProvider.javascriptQuizHandler()
      }

      if(lowercase.includes("python")) {
        this.actionProvider.pythonQuizHandler()
      }

      if(lowercase.includes("react")) {
        this.actionProvider.reactHandler()
      }
    }
  }
  
  export default MessageParser;