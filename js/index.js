const { createApp } = Vue

  createApp({
    data() {
      return {
        equation : '0000',
        result: '0000'
      }
    },
    methods:{
        addCaractorToEquation(character){
            if(this.equation<=0){
                this.equation = ''
            }
            this.equation += character
        },
        showResult(){
            try{
                this.result = eval(this.equation)
            this.equation = '0000'
            }catch (e) {
                this.result = 'Erro'
                this.equation = '0000'
             }
            
        },
        clear(){
            this.equation ='0000',
            this.result= '0000'
        },
        deleteLastCharacter(){
            this.equation = this.equation.slice(0, -1);
            if(this.equation.length <=0){
                this.equation = '0000'
            }
        }
      },
  }).mount('#app')