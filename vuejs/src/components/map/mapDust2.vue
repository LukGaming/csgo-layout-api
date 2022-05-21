<template>
  <div>
    <div>
      <img
        src="../../assets/map_dust2_novo.png"
        alt=""
        style="
          width: 290px;
          height: 290px;
          position: fixed;
          top: 48px;
          left: 30px;
          border: 2px solid green;
        "
      />
      <!-- style="position: fixed; top: 120px; width: 280px; height: 345px" -->
      <v-stage :config="configKonva" style="position: fixed; top: 0">
        <div>
          <v-layer>
            <div
              v-for="(player, index) in ctPlayers"
              :key="index"
              ref="ctLayer"
            >
              <v-shape
                :config="{
                  sceneFunc: function (context, shape) {
                    context.beginPath();
                    context.moveTo(0, 10);
                    context.lineTo(10, 0);
                    context.quadraticCurveTo(10, 10, 10, 10);
                    context.closePath();
                    context.fillStrokeShape(shape);
                  },
                  fill: '#00D2FF',
                  x: 100,
                  y: 100,
                  points: 0,
                }"
                ref="triangle"
              ></v-shape>
              <v-circle
                ref="circle"
                :config="{
                  x: 100,
                  y: 100,
                  radius: 10,
                  fill: 'blue',
                }"
              ></v-circle>
              <v-text
                :config="{
                  x: 100,
                  y: 100,
                  text: index,
                  fontSize: 10,
                  fill: 'white',
                }"
                ref="playerNumber"
              />
            </div>
          </v-layer>
        </div>
        <div>
          <v-layer>
            <div v-for="(tPlayer, test) in tPlayers" :key="test">
              <v-shape
                :config="{
                  sceneFunc: function (context, shape) {
                    context.beginPath();
                    context.moveTo(0, 10);
                    context.lineTo(10, 0);
                    context.quadraticCurveTo(10, 10, 10, 10);
                    context.closePath();
                    context.fillStrokeShape(shape);
                  },
                  fill: '#00D2FF',
                  x: 100,
                  y: 100,
                  points: 0,
                }"
                ref="triangleT"
              ></v-shape>
              <v-circle
                ref="circleT"
                :config="{
                  x: 100,
                  y: 100,
                  radius: 10,
                  fill: 'orange',
                }"
              ></v-circle>
              <v-text
                :config="{
                  x: 100,
                  y: 100,
                  text: test,
                  fontSize: 10,
                  x: 100,
                  y: 100,
                  fill: 'white',
                }"
                ref="playerNumberT"
              />
            </div>
          </v-layer>
        </div>
      </v-stage>
    </div>
  </div>
</template>
<script>
import Konva from "konva";
import { mapGetters } from "vuex";
export default {
  name: "Map",
  data() {
    return {
      playerPosition: 10,
      speedTimeOut: 5,
      speed: 0.2,
      animations: null,
      correcao_de_angulo: 225 + 90,
      triangleNode: [],
      circleNode: [],
      playerNumber: [],
      triangleNodeT: [],
      circleNodeT: [],
      playerNumberT: [],
      configKonva: {
        x: 190,
        y: 255,
        width: 1920,
        height: 1080,
      },
      configCircle: {
        x: 100,
        y: 100,
        radius: 1,
        fill: "red",
      },
      test: {
        sceneFunc: function (context, shape) {
          context.beginPath();
          context.moveTo(0, 5);
          context.lineTo(5, 0);
          context.quadraticCurveTo(5, 5, 5, 5);
          context.closePath();
          context.fillStrokeShape(shape);
        },
        rotationSnaps: [0, 90, 180, 270],
        fill: "#00D2FF",
        x: 100,
        y: 100,
        points: 0,
      },
      dados: null,
      players: [],
      interaction: 0,
      roundTime: 0,
      t_players: [],
      ct_players: [],
      active_player_stats: {
        active_weapon: null,
        actualAmmo: null,
        maximumAmmo: null,
        remainingAmmo: null,
      },
    };
  },
  mounted() {
    setTimeout(() => {
      const node = this.$refs.circleT[0].getNode();

      // example of Konva.Animation
      const anim = new Konva.Animation(function (frame) {
        node.setX(node.getX() + 1);
        return frame;
      }, node.getLayer());
      anim.start();
    }, 4000);
  },
  created() {
    setTimeout(() => {
      this.circleNode[0].setX(100);
      this.circleNode[0].setY(100);
    }, 1000);

    // setTimeout(() => {
    //   // Antiga posicao: -130.19125
    //   // mapDust2.vue?fd63:269 Nova posicao: -120.553125
    //   const position1 = -130.19125;
    //   const position2 = -120.553125;
    //   this.circleNode[0].setX(position1);
    //   setInterval(() => {
    //     if (position1 < position2) {
    //       if (this.circleNode[0].getX() <= position2) {
    //         this.circleNode[0].setX(this.circleNode[0].getX() + this.speed);
    //       }
    //     } else {
    //       if (this.circleNode[0].getX() >= position2) {
    //         this.circleNode[0].setX(this.circleNode[0].getX() - this.speed);
    //       }
    //     }
    //   }, this.speedTimeOut);
    // }, 3000);

    // setTimeout(() => {
    //   console.log("iniciando funcao");
    //   // this.animations = new Konva.Animation(function (frame) {
    //   //   console.log(frame);
    //   // }, this.circleNode[0]);
    //   // this.animations.start();
    //   const _this = this;
    //   const node = this.circleNode[0].getLayer();
    //   const anim1 = new Konva.Animation(function (frame) {
    //     var positionX = _this.ctPlayers[0].position.split(",")[0] / 16;
    //     var positionY = _this.ctPlayers[0].position.split(",")[1] / 16;
    //     console.log();
    //     node.setX(positionX);
    //     node.setY(positionY);
    //     return frame;
    //   }, node);
    //   anim1.start();
    // }, 3000);
    // setTimeout(() => {
    //   const node = this.$refs.ctLayer[0].getNode();
    //   const anim = new Konva.Animation(function (frame) {
    //     console.log(frame);
    //     node.setX(node.getX() + 0.5);
    //   }, node.getLayer());
    //   anim.start();
    // }, 1000);
    setTimeout(() => {
      for (let i = 0; i < this.ctPlayers.length; i++) {
        this.triangleNode.push(this.$refs.triangle[i].getNode());
        this.circleNode.push(this.$refs.circle[i].getNode());
        this.playerNumber.push(this.$refs.playerNumber[i].getNode());
        this.circleNode[i].isAnimatingX = false;
        this.circleNode[i].isAnimatingY = false;
        this.circleNode[i].firstAppereance = true;
      }
      for (let j = 0; j < this.tPlayers.length; j++) {
        this.triangleNodeT.push(this.$refs.triangleT[j].getNode());
        this.circleNodeT.push(this.$refs.circleT[j].getNode());
        this.playerNumberT.push(this.$refs.playerNumberT[j].getNode());
      }
    }, 2000);
    //
    //
  },

  computed: {
    ...mapGetters({
      ctPlayers: "game_data/ctPlayers",
      tPlayers: "game_data/tPlayers",
    }),
  },
  watch: {
    oldTanimation(value) {
      var division = 16;
      for (let i = 0; i < this.circleNodeT.length; i++) {
        var positionX = Number(value[i].position.split(",")[0]);
        var positionY = Number(value[i].position.split(",")[1]);
        if (positionX < 0) {
          positionX = -Math.abs(positionX / division);
        } else {
          positionX = positionX / division;
        }
        if (positionY < 0) {
          positionY = +Math.abs(positionY / division);
        } else {
          positionY = -Math.abs(positionY / division);
        }
        this.circleNodeT[i].x(positionX);
        this.circleNodeT[i].y(positionY);
        this.triangleNodeT[i].x(positionX);
        this.triangleNodeT[i].y(positionY);

        this.circleNodeT[i].zIndex();
        this.triangleNodeT[i].x(positionX);
        this.triangleNodeT[i].y(positionY);
        this.triangleNodeT[i].zIndex(1);
        this.playerNumberT[i].x(positionX - 3);
        this.playerNumberT[i].y(positionY - 3);
        this.playerNumberT[i].zIndex();
        this.triangleNodeT[i].rotation(
          this.correcao_de_angulo -
            this.setDegreesWithSenAndCos(
              value[i].forward.split(",")[0],
              value[i].forward.split(",")[1]
            )
        );
      }
      return value;
    },
    tPlayers(newValue, oldValue) {
      var division = 16;
      for (let i = 0; i < this.circleNodeT.length; i++) {
        var newValueX = Number(newValue[0].position.split(",")[0] / division);
        var oldValueX = Number(oldValue[0].position.split(",")[0] / division);
        // var newValueY = Number(value[0].position.split(",")[1] / 16);
        // var oldValueY = Number(oldValue[0].position.split(",")[1] / 16);

        const node = this.$refs.circleT[0].getNode();

        // example of Konva.Animation
        const anim = new Konva.Animation(function (frame) {
          if (node.getX() <= newValueX && node.getX() && newValueX <= oldValueX){
node.setX(node.getX() + 1);
          }
            

          return frame;
        }, node.getLayer());
        anim.start();
      }

      //     this.circleNodeT[i].x(positionX);
      //     this.circleNodeT[i].y(positionY);
      //     this.triangleNodeT[i].x(positionX);
      //     this.triangleNodeT[i].y(positionY);

      //     this.circleNodeT[i].zIndex();
      //     this.triangleNodeT[i].x(positionX);
      //     this.triangleNodeT[i].y(positionY);
      //     this.triangleNodeT[i].zIndex(1);
      //     this.playerNumberT[i].x(positionX - 3);
      //     this.playerNumberT[i].y(positionY - 3);
      //     this.playerNumberT[i].zIndex();
      //     this.triangleNodeT[i].rotation(
      //       this.correcao_de_angulo -
      //         this.setDegreesWithSenAndCos(
      //           value[i].forward.split(",")[0],
      //           value[i].forward.split(",")[1]
      //         )
      //     );
      //   }
      return oldValue, newValue;
    },
    //     ctPlayers(value, oldValue) {
    //       var positionX = Number(value[0].position.split(",")[0] / 16);
    //       this.playerPosition = positionX;
    //       //   this.circleNode[0].oldValueX = Number(
    //       //     oldValue[0].position.split(",")[0] / 16
    //       //   );
    //       //   this.circleNode[0].newValueY = Number(
    //       //     value[0].position.split(",")[1] / 16
    //       //   );
    //       //   this.circleNode[0].oldValueY = Number(
    //       //     oldValue[0].position.split(",")[1] / 16
    //       //   );
    //       for (let i = 0; i < this.circleNode.length; i++) {
    //         //Settando valores de posicoes nos objetos
    //         this.circleNode[i].newValueX = Number(
    //           value[i].position.split(",")[0] / 16
    //         );
    //         this.circleNode[i].oldValueX = Number(
    //           oldValue[i].position.split(",")[0] / 16
    //         );
    //         this.circleNode[i].newValueY = Number(
    //           value[i].position.split(",")[1] / 16
    //         );
    //         this.circleNode[i].oldValueY = Number(
    //           oldValue[i].position.split(",")[1] / 16
    //         );
    //         //Configurando valores reais para o canvas
    //         if (this.circleNode[i].newValueX < 0) {
    //           this.circleNode[i].newValueX = -Math.abs(
    //             this.circleNode[i].newValueX
    //           );
    //         }
    //         if (this.circleNode[i].oldValueX < 0) {
    //           this.circleNode[i].oldValueX = -Math.abs(
    //             this.circleNode[i].oldValueX
    //           );
    //         }
    //         if (this.circleNode[i].newValueY < 0) {
    //           this.circleNode[i].newValueY = +Math.abs(
    //             this.circleNode[i].newValueY
    //           );
    //         } else {
    //           this.circleNode[i].newValueY = -Math.abs(
    //             this.circleNode[i].newValueY
    //           );
    //         }
    //         if (this.circleNode[i].oldValueY < 0) {
    //           this.circleNode[i].oldValueY = +Math.abs(
    //             this.circleNode[i].oldValueY
    //           );
    //         } else {
    //           this.circleNode[i].oldValueY = -Math.abs(
    //             this.circleNode[i].oldValueY
    //           );
    //         }
    //         //Iniciando as animacoes
    //         if (this.circleNode[i].firstAppereance == true) {
    //           this.circleNode[i].setX(this.circleNode[i].newValueX);
    //           this.circleNode[i].setY(this.circleNode[i].newValueY);
    //           this.circleNode[i].zIndex();
    //           this.circleNode[i].setX(this.circleNode[i].newValueX);
    //           this.circleNode[i].setY(this.circleNode[i].newValueY);
    //           this.circleNode[i].zIndex(1);
    //           this.circleNode[i].setX(this.circleNode[i].newValueX - 3);
    //           this.circleNode[i].setY(this.circleNode[i].newValueY - 3);
    //           this.circleNode[i].firstAppereance = false;
    //         }
    //         if (this.circleNode[i].isAnimatingX == false) {
    //           clearInterval(this.circleNode[i].animationX);
    //           this.circleNode[i].animationX = null;
    //           if (this.circleNode[i].newValueX > this.circleNode[i].oldValueX) {
    //             this.increaseAnimationX(this.circleNode[i].newValueX, i);
    //           }
    //           if (this.circleNode[i].newValueX < this.circleNode[i].oldValueX) {
    //             this.decreaseAnimationX(this.circleNode[i].newValueX, i);
    //           }
    //         }
    //         if (this.circleNode[i].isAnimatingY == false) {
    //           clearInterval(this.circleNode[i].animationY);
    //           this.circleNode[i].animationY = null;
    //           if (this.circleNode[i].newValueY > this.circleNode[i].oldValueY) {
    //             this.increaseAnimationY(this.circleNode[i].newValueY, i);
    //           }
    //           if (this.circleNode[i].newValueY < this.circleNode[i].oldValueY) {
    //             this.decreaseAnimationY(this.circleNode[i].newValueY, i);
    //           }
    //         }
    //       }

    //       //   var newValueX = Number(value[0].position.split(",")[0] / 16);
    //       //   var oldValueX = Number(oldValue[0].position.split(",")[0] / 16);
    //       //   var newValueY = Number(value[0].position.split(",")[1] / 16);
    //       //   var oldValueY = Number(oldValue[0].position.split(",")[1] / 16);
    //       //   if (newValueX < 0) {
    //       //     newValueX = -Math.abs(newValueX);
    //       //   }
    //       //   if (oldValueX < 0) {
    //       //     oldValueX = -Math.abs(oldValueX);
    //       //   }
    //       //   if (newValueY < 0) {
    //       //     newValueY = +Math.abs(newValueY);
    //       //   } else {
    //       //     newValueY = -Math.abs(newValueY);
    //       //   }
    //       //   if (oldValueY < 0) {
    //       //     oldValueY = +Math.abs(oldValueY);
    //       //   } else {
    //       //     oldValueY = -Math.abs(oldValueY);
    //       //   }
    //       //   if (this.circleNode[0].firstAppereance == true) {
    //       //     this.circleNode[0].setX(newValueX);
    //       //     this.circleNode[0].setY(newValueY);
    //       //     this.circleNode[0].zIndex();
    //       //     this.triangleNode[0].x(newValueX);
    //       //     this.triangleNode[0].y(newValueY);
    //       //     this.triangleNode[0].zIndex(1);
    //       //     this.playerNumber[0].x(newValueX - 3);
    //       //     this.playerNumber[0].y(newValueY - 3);
    //       //     this.circleNode[0].firstAppereance = false;
    //       //   }
    //       //   if (this.circleNode[0].isAnimatingX == false) {
    //       //     clearInterval(this.circleNode[0].animationX);
    //       //     this.circleNode[0].animationX = null;
    //       //     if (newValueX > oldValueX) {
    //       //       this.increaseAnimationX(newValueX);
    //       //     }
    //       //     if (newValueX < oldValueX) {
    //       //       this.decreaseAnimationX(newValueX);
    //       //     }
    //       //   }
    //       //   if (this.circleNode[0].isAnimatingY == false) {
    //       //     clearInterval(this.circleNode[0].animationY);
    //       //     this.circleNode[0].animationY = null;
    //       //     if (newValueY > oldValueY) {
    //       //       this.increaseAnimationY(newValueY);
    //       //     }
    //       //     if (newValueY < oldValueY) {
    //       //       this.decreaseAnimationY(newValueY);
    //       //     }
    //       //   }

    //       //   var newPositionX = Number(value[0].position.split(",")[0] / 16);
    //       //   var oldPositionY = Number(oldValue[0].position.split(",")[0] / 16);
    //       //   this.circleNode[0].isAnimating = true;

    //       //   const anim = new Konva.Animation(function(frame) {
    //       //   hexagon.setX(
    //       //     amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
    //       //   );
    //       // }, hexagon.getLayer());
    //       //   var division = 16;

    //       //   for (let i = 0; i < this.circleNode.length; i++) {
    //       //     var positionX = Number(value[i].position.split(",")[0]);
    //       //     var positionY = Number(value[i].position.split(",")[1]);
    //       //     if (positionX < 0) {
    //       //       positionX = -Math.abs(positionX / division);
    //       //     } else {
    //       //       positionX = positionX / division;
    //       //     }
    //       //     if (positionY < 0) {
    //       //       positionY = +Math.abs(positionY / division);
    //       //     } else {
    //       //       positionY = -Math.abs(positionY / division);
    //       //     }

    //       //     this.circleNode[i].x(positionX);
    //       //     this.circleNode[i].y(positionY);
    //       //     this.triangleNode[i].x(positionX);
    //       //     this.triangleNode[i].y(positionY);

    //       //     this.circleNode[i].zIndex();
    //       //     this.triangleNode[i].x(positionX);
    //       //     this.triangleNode[i].y(positionY);
    //       //     this.triangleNode[i].zIndex(1);
    //       //     this.playerNumber[i].x(positionX - 3);
    //       //     this.playerNumber[i].y(positionY - 3);
    //       //     this.playerNumber[i].zIndex();
    //       //   this.triangleNode[0].rotation(
    //       //     this.correcao_de_angulo -
    //       //       this.setDegreesWithSenAndCos(
    //       //         value[0].forward.split(",")[0],
    //       //         value[0].forward.split(",")[1]
    //       //       )
    //       //   );
    //       //   }
    //       return value, oldValue;
    //     },
  },

  methods: {
    increaseAnimationX(newPosition, node) {
      this.circleNode[node].isAnimatingX = true;
      this.circleNode[node].animationX = setInterval(() => {
        if (this.circleNode[node].getX() < newPosition) {
          this.circleNode[node].setX(this.circleNode[node].getX() + this.speed);
          this.triangleNode[node].x(this.circleNode[node].getX() + this.speed);
          this.playerNumber[node].x(this.circleNode[node].getX() + this.speed);
        }
        if (this.circleNode[node].getX() >= newPosition) {
          this.circleNode[node].isAnimatingX = false;
        }
      }, this.speedTimeOut);
    },
    decreaseAnimationX(newPosition, node) {
      this.circleNode[node].isAnimatingX = true;
      this.circleNode[node].animationX = setInterval(() => {
        if (this.circleNode[node].getX() > newPosition) {
          this.circleNode[node].setX(this.circleNode[node].getX() - this.speed);
          this.triangleNode[node].setX(
            this.circleNode[node].getX() - this.speed
          );
          this.playerNumber[node].setX(
            this.circleNode[node].getX() - this.speed
          );
        }
        if (this.circleNode[node].getX() <= newPosition) {
          this.circleNode[node].isAnimatingX = false;
        }
      }, this.speedTimeOut);
    },
    increaseAnimationY(newPosition, node) {
      this.circleNode[node].isAnimatingY = true;
      this.circleNode[node].animationY = setInterval(() => {
        if (this.circleNode[node].getY() < newPosition) {
          this.circleNode[node].setY(this.circleNode[node].getY() + this.speed);
          this.triangleNode[node].setY(
            this.circleNode[node].getY() + this.speed
          );
          this.playerNumber[node].setY(
            this.circleNode[node].getY() + this.speed
          );
        }
        if (this.circleNode[node].getY() >= newPosition) {
          this.circleNode[node].isAnimatingY = false;
        }
      }, this.speedTimeOut);
    },
    decreaseAnimationY(newPosition, node) {
      this.circleNode[node].isAnimatingY = true;
      this.circleNode[node].animationY = setInterval(() => {
        if (this.circleNode[node].getY() > newPosition) {
          this.circleNode[node].setY(this.circleNode[node].getY() - this.speed);
          this.triangleNode[node].setY(
            this.circleNode[node].getY() - this.speed
          );
          this.playerNumber[node].setY(
            this.circleNode[node].getY() - this.speed
          );
        }
        if (this.circleNode[node].getY() <= newPosition) {
          this.circleNode[node].isAnimatingY = false;
        }
      }, this.speedTimeOut);
    },
    createAnimationPlayer(oldPosition, newPosition) {
      //   console.log(oldPosition, newPosition);
      //   setTimeout(() => {
      //     const node = this.circleNode[0];
      //     node.setX(oldPosition);
      //     var position1 = 89.65875;
      //     var position2 = 65.205625;
      //     setInterval(() => {
      //       var diferenca_posicao = (position2 - position1) / 16;
      //       if (position1 > position2) {
      //         node.setX(node.getX() - diferenca_posicao);
      //         position2 += diferenca_posicao;
      //       }
      //       node.setX(node.getX() - diferenca_posicao);
      //     }, this.speedTimeOut);
      //   }, 1000);

      //   var position1 = newPosition;
      //   var position2 = oldPosition;
      //   setTimeout(() => {
      //     if (position1 < position2) {
      //       this.circleNode[0].setX(this.circleNode[0].getX() + 0.5);
      //     }
      //     else{
      //         this.circleNode[0].setX(this.circleNode[0].getX() - 0.5);
      //     }
      //   }, 100);

      return oldPosition, newPosition, Konva;
      //   console.log("Posicao antiga: " + oldPosition);
      //   console.log("nova posicao" + newPosition);
      //   if (this.circleNode[0].isAnimating === true) {
      //     if (newPosition > this.circleNode[0].getX()) {
      //       console.log(" Aumentando");
      //        this.circleNode[0].animation  = setTimeout(() => {
      //         if (this.circleNode[0].isAnimating === true) {
      //           this.circleNode[0].setX(this.circleNode[0].getX() + 0.5);
      //         }
      //       }, this.speedTimeOut);
      //     } else {
      //       setTimeout(() => {
      //         if (this.circleNode[0].isAnimating === true) {
      //           this.circleNode[0].setX(this.circleNode[0].getX() - 0.5);
      //         }
      //       }, this.speedTimeOut);
      //     }
      //   }
      //   else{
      //       this.circleNode[0].animation.clearTimeout()
      //   }
    },
    rotateNode(x, y) {
      this.triangleNode.rotation(
        this.correcao_de_angulo - this.setDegreesWithSenAndCos(x, y)
      );
    },
    setDegreesWithSenAndCos(x, y) {
      return (Math.atan2(y, x) * 180) / Math.PI;
    },
  },
};
</script>
<style>
@import url("../../assets/css/index.css");
</style>
