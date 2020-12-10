import { getClue as getClueFromPromise} from './promise-version.js'
import { getClue as getClueFromAsyncFunction} from './async-await-version.js'
import { getClue as getClueFromCallback } from './callback-version.js'

const usePromise = document.getElementById('use-promise')
const useAsync = document.getElementById('use-async-await')
const useCallback = document.getElementById("use-callback")

const invalidCount = document.getElementById('invalid-count')

const textAssign = function (clue) {
  const question = document.getElementById('question')
  const answer = document.getElementById('answer')
  const value = document.getElementById('value')
  const categoryTitle = document.getElementById('category-title')

  question.innerHTML = clue.question
  answer.innerHTML = clue.answer
  value.innerHTML = clue.value
  categoryTitle.innerHTML = clue.category.title
}


usePromise.addEventListener('click', event => {
  getClueFromPromise()
    .then((clue) => {
      textAssign(clue)

      if (clue.invalidCount && clue.invalidCount > 0) invalidCount.innerHTML = 'invalid'
      else invalidCount.innerHTML = 'valid'
    })
    .catch((error) => {
      console.log(error)
    })
})

useAsync.addEventListener("click", async event => {
    try {
      const clue = await getClueFromAsyncFunction()
      textAssign(clue)

    } catch (error) {
        console.log(error)
    }
})

useCallback.addEventListener("click", () => {
    getClueFromCallback((err, clue) => {
    if (err !== null) return console.error(err);
    textAssign(clue);
    });
});
