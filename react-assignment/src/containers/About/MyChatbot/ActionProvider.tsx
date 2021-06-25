// ActionProvider starter code
class ActionProvider {
    createChatBotMessage
    setState
    createClientMessage
    constructor(createChatBotMessage: any, setStateFunc: any, createClientMessage: any) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
      this.createClientMessage = createClientMessage;
    }

    helloWorldHandler = () => {
        const message = this.createChatBotMessage("Hello Friend...")
        this.setChatbotMessage(message)
    }

    technologyHandler = () => {
      const message = this.createChatBotMessage(".net & React")
        this.setChatbotMessage(message)
    }

    todosHandler = () => {
      const message = this.createChatBotMessage("Sure, Here is your todos.", {
        widget: "todos"
      });
      this.setChatbotMessage(message)
    }

    javascriptQuizHandler = () => {
      console.log("javascript")
      const message = this.createChatBotMessage("Fantastic, Here is your quiz. Good luck!",{
        widget: "javascriptscriptQuiz",
      });
      this.setChatbotMessage(message);
    }

    pythonQuizHandler = () => {
      console.log("Python")
      const message = this.createChatBotMessage("Excellent, Here is your quiz. Good luck!", {
        widget: "pythonQuiz",
      });
      this.setChatbotMessage(message)
    }

    reactHandler = () => {
      console.log("React")
      const message = this.createChatBotMessage("Excellent, Here is your quiz. Good luck!", {
        widget: "reactQuiz",
      });
      this.setChatbotMessage(message)
    }

    setChatbotMessage = (message: any) => {
        this.setState((state : any) => ({...state, messages: [...state.messages, message]}))
    }

  }
  
  export default ActionProvider;