function Obstacle (x, y, parent, arr) {
    let self = this
    this.x = x 
    this.y = y
    this.speed = -10
    this.width = 290
    this.sprite = document.createElement('div')

    this.insertObstacle = function () {
        this.sprite.classList.add('obstacle')
        this.sprite.style.left = this.x + 'px'
        this.sprite.style.top = this.y + 'px'
        parent.appendChild(this.sprite)
    }

    this.move = function () {
        self.x += self.speed
        self.sprite.style.left = self.x + 'px'
        if (self.x===-10) {
            self.obstacleRemove () 
        }
    }

    this.obstacleRemove = function () {
        parent.removeChild(this.sprite)
        arr = arr.splice(0, 1)
        clearInterval(this.timerId)
    }

    this.timerId = setInterval(this.move,100)
}

export {Obstacle}