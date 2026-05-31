type ActionType = "go" | "take" | "use" | "read" | "search"
type ActionMap = { [key: string]: string }

interface LocationType {
  description: string
  actions: { [key in ActionType]?: ActionMap }
}

class Game {
  private currentLocation: string
  private inventory: string[]
  private locations: { [key: string]: LocationType }

  constructor() {
    this.currentLocation = "village"
    this.inventory = []
    this.locations = {
      village: {
        description:
          "You are in a quaint village surrounded by tall, ancient trees. Paths lead north to the forest and east to the lake. There is a small hut here.",
        actions: {
          go: {
            north: "forest",
            east: "lake",
            enter: "hut",
          },
        },
      },

      hut: {
        description:
          "You are inside a small, cozy hut. There is a table with a candle. It looks mysterious and old.",
        actions: {
          read: {
            book:
              "The book contains ancient scripts about a hidden treasure in the forest. It mentions a key hidden under a rock near the lake.",
          },
          go: {
            exit: "village",
          },
        },
      },

      forest: {
        description:
          "You are in a dense forest. Tall trees block most of the sunlight. Paths lead deeper north and back south to the village.",
        actions: {
          go: {
            north: "deep_forest",
            south: "village",
            east: "clearing",
          },
        },
      },

      deep_forest: {
        description:
          "You are deep inside the forest. It is dark and eerily quiet. You feel like something is watching you.",
        actions: {
          search: {
            area: "You found strange carvings on a tree pointing towards a hidden clearing.",
          },
          go: {
            south: "forest",
            east: "clearing",
          },
        },
      },

      river: {
        description:
          "A flowing river blocks your path. The water is fast but you can see something shining beneath.",
        actions: {
          search: {
            water: "You found a rusty key hidden under a rock!",
          },
          go: {
            west: "clearing",
            east: "lake",
          },
        },
      },

      lake: {
        description:
          "You arrive at a calm lake. In the middle, you see a small island.",
        actions: {
          use: {
            boat: "You use a small boat to reach the island.",
          },
          go: {
            west: "river",
            island: "island",
          },
        },
      },

      clearing: {
        description:
          "You are in a small clearing surrounded by trees. Paths lead west to the river, east to the forest, and south to the lake.",
        actions: {
          go: {
            west: "river",
            east: "forest",
            south: "lake",
          },
        },
      },

      island: {
        description:
          "You step onto a small island. There is a pedestal with a locked chest.",
        actions: {
          read: {
            inscription: "The inscription says you need a key from the river.",
          },
          use: {
            key: "You unlocked the chest and found the treasure!",
          },
          go: {
            west: "lake",
          },
        },
      },

      carving: {
        description:
          "Ancient carvings are etched into the stone. They seem to tell a story of a lost treasure.",
        actions: {
          read: {
            symbols:
              "The symbols hint that the treasure lies where land meets water — the island.",
          },
          go: {
            back: "clearing",
          },
        },
      },
    }
  }

  public init(): void {
    const gameInput = document.querySelector("#game-input") as HTMLInputElement
    const submitBtn = document.querySelector("#submit-btn") as HTMLButtonElement

    if (!gameInput || !submitBtn) {
      return
    }

    gameInput.addEventListener("keypress", (e: KeyboardEvent): void => {
      if (e.key === "Enter") {
        submitBtn.click()
      }
    })

    const startLocation = this.locations[this.currentLocation]
    if (startLocation) {
      this.outputText(startLocation.description)
    }

    submitBtn.addEventListener("click", (): void => {
      const command: string = gameInput.value.trim()

      if (command) {
        this.handleCommand(command)
        gameInput.value = ""
      }
    })
  }

  private outputText(text: string): void {
    const p: HTMLParagraphElement = document.createElement("p")
    p.textContent = text
    const gameOutput = document.querySelector("#game-output") as HTMLDivElement
    gameOutput.append(p)
    gameOutput.scrollTop = gameOutput.scrollHeight
  }

  private handleCommand(command: string): void {
    const [action, ...args] = command.split(" ")
    const arg = args.join(" ")
    const location = this.locations[this.currentLocation]

    if (!location) {
      this.outputText("You are lost.")
      return
    }

    const actionMap = location.actions[action as ActionType]

    if (!actionMap) {
      this.outputText("Unknown command")
      return
    }

    const response = actionMap[arg]
    if (typeof response === "undefined") {
      this.outputText("You can not do that.")
      return
    }

    if (action === "go") {
      if (typeof response === "string" && this.locations[response]) {
        this.currentLocation = response
        const newLoc = this.locations[this.currentLocation]
        if (newLoc) this.outputText(newLoc.description)
      } else {
        this.outputText("You can't go there.")
      }
      return
    }

    if (action === "take") {
      this.inventory.push(arg)
      this.outputText(String(response))
      return
    }

    if (action === "use") {
      if (this.inventory.includes(arg)) {
        this.outputText(String(response))
      } else {
        this.outputText("You don't have that item.")
      }
      return
    }

    this.outputText(response)
  }
}

let game = new Game()
game.init()

