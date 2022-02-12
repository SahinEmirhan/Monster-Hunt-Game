const app = Vue.createApp({
data(){
    return{
        newGame : false,
        playerHealth : 100,
        monsterHealth : 100,
        logs : [],
    }
},
methods : {
    attack(){
        let point= Math.floor(Math.random()*10)
        this.monsterHealth -= point;
        this.monsterAttack();
        this.pushLog({turn : "P", text : "PLAYER ATTACK => " + point})

    },
    specialAttack(){
        let point = Math.floor(Math.random()*15)
        this.monsterHealth -= point;
        this.monsterAttack();
        this.pushLog({turn : "P", text : "PLAYER ATTACK => " + point})
    },
    firstAid(){
        let point = Math.floor(Math.random()*10)
        this.playerHealth += point;
        this.monsterAttack();
        this.pushLog({turn : "P", text : "HEAL => " + point})
    },
    giveUp(){
        alert("You Give Up, The Beast Won :(");
            this.newGame = false;
    },
    monsterAttack(){
        let point = Math.floor(Math.random()*10);
        this.playerHealth -= point;
        this.pushLog({turn : "M", text : "MONSTER ATTACK => " + point})
    },
    pushLog(log){
        this.logs.push(log);
    }
},
watch : {
    newGame(){
        this.playerHealth = 100;
        this.monsterHealth = 100;
        this.logs = [];
    },
    playerHealth(){
        if(this.playerHealth <= 0){
                alert("You Lost, The Beast Defeated You");
                this.newGame = false;
        }
        else if(this.playerHealth > 100){
            this.playerHealth = 100;
        }
    },
    monsterHealth(){
        if(this.monsterHealth <=0){
            alert("Congratulations You Won");
            this.newGame = false;
        }
    }
}
}).mount("#app")