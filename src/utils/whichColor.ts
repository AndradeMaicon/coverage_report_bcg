export function whichColor (percentage: number) {
  let color = "#737373";

  switch (true) {
    case (percentage <= 10):
        color = "#c70404"
      break;
    case (percentage <= 20):
        color = "#c71b04"
      break;
    case (percentage <= 30):
        color = "#c73f04"
      break;
    case (percentage <= 40):
        color = "#c79004"
      break;
    case (percentage <= 50):
        color = "#c3c704"
      break;
    case (percentage <= 60):
        color = "#7dc704"
      break;
    case (percentage <= 70):
        color = "#04c745"
      break;
    case (percentage <= 80):
        color = "#04c798"
      break;
    case (percentage <= 90):
        color = "#04bbc7"
      break;
    case (percentage <= 100):
        color = "#0481c7"
      break;
  }

  return color;
}