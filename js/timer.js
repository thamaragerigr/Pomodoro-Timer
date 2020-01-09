const pomodoroTimer = {
  //tiempo contado
  minutos : 0,
  segundos : 0,
  
  //tiempo en el #timer 
  minutosDom : null,
  segundosDom : null,

  intervalo : null,
  estado : false,
  
  //inicio general
  iniciarPomodoro: function(){
    const pomodoro = this;
    this.minutosDom = document.querySelector('#minutosDom');
    this.segundosDom = document.querySelector('#segundosDom');
    this.intervalo = setInterval(function(){
      pomodoro.intervalCallback.apply(pomodoro);
    }, 1000);
    document.querySelector('#nuevoPomodoro').onclick = function(){
      pomodoro.nuevoPomodoro.apply(pomodoro);
    };
    document.querySelector('#descanso').onclick = function(){
      pomodoro.descanso.apply(pomodoro);
    };
    document.querySelector('#pausar').onclick = function(){
      pomodoro.pausar.apply(pomodoro);
    };
    
  },
  
  pausar: function(){
    clearInterval(this.intervalo);
    
  },

 
  resetearVarieables: function(mins, secs, estado){
    this.minutos = mins;
    this.segundos = secs;
    this.estado = estado;
  },

  toDoubleDigit: function(num){
    if(num < 10) {
      return "0" + parseInt(num, 10);
    }
    return num;
  },

  updateDom: function(){
    this.minutosDom.innerHTML = this.toDoubleDigit(this.minutos);
    this.segundosDom.innerHTML = this.toDoubleDigit(this.segundos);
  },

  intervalCallback: function(){
    if(!this.estado) {
      return false;
    }

    if(this.segundos == 0) {
      if(this.minutos == 0) {
        this.timerComplete();
        return;
      }
      this.segundos = 59;
      this.minutos--;
    } else {
      this.segundos--;
    }
    this.updateDom();
  },

  timerComplete: function(){
    console.log('Completado!')
  },

  //inicio de pomodoro
  nuevoPomodoro: function() {
    this.resetearVarieables(25, 0, true);
  },
  //inicio de descanso
  descanso: function() {
    this.resetearVarieables(5, 0, true);
  },
  
 
};

pomodoroTimer.iniciarPomodoro();